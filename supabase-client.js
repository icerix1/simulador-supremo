/* Supabase opcional para LIFE.AI.
 * Completa SUPABASE_URL y SUPABASE_ANON_KEY con los valores públicos del proyecto.
 * Nunca pongas aquí la service_role key.
 */
const SUPABASE_URL = 'https://wtdpxkegkifzngmvtakz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0ZHB4a2Vna2lmem5nbXZ0YWt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4OTMwOTksImV4cCI6MjEwNDQ2OTA5OX0.718CeAms3boam-Yhga4jXhU2IizePjFjSq_SAFdX-Ys';

(() => {
  const sdk = window.supabase;
	const configured = Boolean(sdk?.createClient && /^https:\/\/[^\s]+$/.test(SUPABASE_URL) && SUPABASE_ANON_KEY.length > 40 && !SUPABASE_URL.includes('PEGA_AQUI') && !SUPABASE_ANON_KEY.includes('PEGA_AQUI'));
  const client = configured ? sdk.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
  let userPromise = null;
  let gameId = null;

  const api = {
	enabled: configured,
	client,
	userId: null,
	gameId: null,
	displayName: null,
	lastError: configured ? null : 'Faltan SUPABASE_URL y SUPABASE_ANON_KEY reales en supabase-client.js.',
	globalLearningConsent: true,
	lastWorldSnapshotAt: 0,
	presenceInFlight: null,
	countInFlight: null,

	async initialize() {
	  if (!client) {
		console.warn(`LIFE.AI: Supabase desactivado. ${this.lastError}`);
		return null;
	  }
	  try {
		const sessionResult = await client.auth.getSession();
		if (sessionResult.error) throw sessionResult.error;
		if (!sessionResult.data.session) {
		  const signInResult = await client.auth.signInAnonymously();
		  if (signInResult.error) throw signInResult.error;
		  userPromise = Promise.resolve(signInResult.data.user);
		} else {
		  userPromise = Promise.resolve(sessionResult.data.session.user);
		}
		const user = await userPromise;
		this.userId = user?.id || null;
		if (this.userId) await this.loadConsent();
		return user;
	  } catch (error) {
		console.error('LIFE.AI: Supabase no disponible; se usará almacenamiento local.', error);
		this.enabled = false;
		this.lastError = error?.message || String(error);
		return null;
	  }
	},

	async saveWorldSnapshot(save) {
	  if (!this.enabled || !this.globalLearningConsent || !save?.player?.name) return;
	  if (Date.now() - this.lastWorldSnapshotAt < 60000) return;
	  const user = await this.user();
	  if (!user) return;
	  const currentGameId = await this.ensureGame(save, window.currentLanguage || 'es');
	  if (!currentGameId) return;
	  const compact = (value, limit) => Array.isArray(value) ? value.slice(-limit) : [];
	  const { error } = await client.from('learning_signals').insert({
		player_id: user.id,
		game_id: currentGameId,
		signal_type: 'world_snapshot',
		language: window.currentLanguage || 'es',
		signal_data: {
		  life_status: save.lifeStatus,
		  age_range: ageRange(save.player.age),
		  location_count: compact(save.world?.locations, 100).length,
		  character_count: compact(save.world?.characters, 100).length,
		  quest_count: compact(save.world?.quests, 100).length,
		  event_count: compact(save.world?.events, 100).length,
		  item_count: compact(save.player?.inventory, 100).length,
		  disease_count: compact(save.player?.diseases, 100).length,
		  chapter_count: compact(save.chapters, 100).length,
		  skill_names: Object.keys(save.player?.skills || {}).slice(0, 40),
		  relationship_count: Object.keys(save.player?.relationships || {}).length,
		  goal_count: compact(save.memory?.goals, 100).length
		}
	  });
	  if (error) throw error;
	  this.lastWorldSnapshotAt = Date.now();
	},

	async diagnostics() {
	  if (!this.enabled) return { enabled: false, userId: null, gameId: null, error: this.lastError };
	  try {
		const user = await this.user();
		return { enabled: this.enabled, userId: user?.id || null, gameId: this.gameId, error: this.lastError || null };
	  } catch (error) {
		this.lastError = error?.message || String(error);
		return { enabled: false, userId: null, gameId: this.gameId, error: this.lastError };
	  }
	},

	async user() {
	  if (!this.enabled) return null;
	  if (!userPromise) await this.initialize();
	  return userPromise ? userPromise : null;
	},

	async signOut() {
	  if (client) {
		const { error } = await client.auth.signOut();
		if (error) throw error;
	  }
	  userPromise = null;
	  gameId = null;
	  this.userId = null;
	  this.gameId = null;
	  this.displayName = null;
	},

	async loadConsent() {
	  if (!this.userId) return false;
	  const { data, error } = await client.from('player_profiles').select('consent_global_learning,display_name').eq('id', this.userId).maybeSingle();
	  if (error) throw error;
	  this.displayName = data?.display_name || null;
	  this.globalLearningConsent = data?.consent_global_learning !== false;
	  return this.globalLearningConsent;
	},

	async saveProfile(save, language) {
	  if (!this.enabled) return;
	  const user = await this.user();
	  if (!user) return;
	  const { error } = await client.from('player_profiles').upsert({
		id: user.id,
		display_name: this.displayName || save?.username || null,
		language: language || 'es',
		consent_global_learning: this.globalLearningConsent,
		updated_at: new Date().toISOString()
	  });
	  if (error) throw error;
	},

	async saveUsername(username, language) {
	  const normalized = String(username || '').trim();
	  if (!normalized) return;
	  this.displayName = normalized;
	  await this.saveProfile({ username: normalized }, language);
	},

	async setGlobalLearningConsent(value, save, language) {
	  this.globalLearningConsent = value === true;
	  await this.saveProfile(save, language);
	},

	async saveGame(save, language) {
	  if (!this.enabled || !save?.player?.name) return null;
	  const user = await this.user();
	  if (!user) return null;
		await this.saveProfile(save, language);
	  const payload = {
		player_id: user.id,
		status: save.lifeStatus || 'active',
		player_data: save.player || {},
		world_data: save.world || {},
		memory_data: save.memory || {},
		settings_data: { language: language || 'es', weather: save.weather || null },
		updated_at: new Date().toISOString(),
		ended_at: save.lifeStatus === 'ended' ? new Date().toISOString() : null
	  };
	  if (gameId) {
		const { error } = await client.from('games').update(payload).eq('id', gameId).eq('player_id', user.id);
		if (!error) {
		  this.gameId = gameId;
		  return gameId;
		}
	  }
	  const { data: existing, error: findError } = await client.from('games').select('id').eq('player_id', user.id).eq('status', 'active').order('updated_at', { ascending: false }).limit(1).maybeSingle();
	  if (findError) throw findError;
	  if (existing?.id && save.lifeStatus === 'active') {
		gameId = existing.id;
		const { error } = await client.from('games').update(payload).eq('id', gameId);
		if (error) throw error;
		this.gameId = gameId;
		return gameId;
	  }
	  const { data, error } = await client.from('games').insert(payload).select('id').single();
	  if (error) throw error;
	  gameId = data.id;
	  this.gameId = gameId;
	  return gameId;
	},

	async ensureGame(save, language) {
	  if (!this.enabled || !save?.player?.name) return null;
	  if (gameId) return gameId;
	  return this.saveGame(save, language);
	},

	async loadLatestGame() {
	  if (!this.enabled) return null;
	  const user = await this.user();
	  if (!user) return null;
	  const { data, error } = await client.from('games').select('id,status,player_data,world_data,memory_data,settings_data,updated_at,ended_at').eq('player_id', user.id).in('status', ['active', 'ended']).order('updated_at', { ascending: false }).limit(1).maybeSingle();
	  if (error) throw error;
	  if (!data) return null;
	  gameId = data.id;
	  this.gameId = data.id;
	  return {
		player: data.player_data || {},
		world: data.world_data || {},
		memory: data.memory_data || {},
		weather: data.settings_data?.weather || null,
		lifeStatus: data.status === 'ended' ? 'ended' : 'active',
		updatedAt: data.updated_at,
		endedReason: ''
	  };
	},

	resetGameReference() {
	  gameId = null;
	  this.gameId = null;
	},

	async deleteCurrentGame() {
	  if (!this.enabled) {
		await this.clearPresence();
		this.resetGameReference();
		return true;
	  }
	  const currentGameId = gameId;
	  if (!currentGameId) {
		await this.clearPresence();
		return true;
	  }
	  const user = await this.user();
	  if (!user) return false;
	  const { error } = await client.from('games').delete().eq('id', currentGameId).eq('player_id', user.id);
	  if (error) throw error;
	  await this.clearPresence();
	  this.resetGameReference();
	  return true;
	},

	async archiveCurrentGame(save) {
	  if (!this.enabled) {
		await this.clearPresence();
		this.resetGameReference();
		return true;
	  }
	  const currentGameId = gameId;
	  if (!currentGameId) {
		await this.clearPresence();
		return true;
	  }
	  const user = await this.user();
	  if (!user) return false;
	  const { error } = await client.from('games').update({
		status: 'archived',
		player_data: save?.player || {},
		world_data: save?.world || {},
		memory_data: save?.memory || {},
		updated_at: new Date().toISOString(),
		ended_at: new Date().toISOString()
	  }).eq('id', currentGameId).eq('player_id', user.id);
	  if (error) throw error;
	  await this.clearPresence();
	  this.resetGameReference();
	  return true;
	},

	async saveEvent(save, decision, result) {
	  if (!this.enabled || !decision) return;
	  const user = await this.user();
	  if (!user) return;
	  const currentGameId = await this.ensureGame(save, window.currentLanguage || 'es');
	  if (!currentGameId) return;
	  const { error } = await client.from('game_events').insert({
		game_id: currentGameId,
		player_id: user.id,
		event_type: 'decision',
		event_text: String(decision).slice(0, 2000),
		intent: result?.analysis?.intent || null,
		effects: result?.effects || [],
		analysis: { confidence: result?.analysis?.confidence || null, entities: result?.analysis?.entities || {}, actions: result?.interpretation?.actions || [] }
	  });
	  if (error) throw error;
	},

	async saveDiseases(save) {
	  if (!this.enabled || !save?.player?.diseases?.length) return;
	  const user = await this.user();
	  if (!user) return;
	  const currentGameId = await this.ensureGame(save, window.currentLanguage || 'es');
	  if (!currentGameId) return;
	  const rows = save.player.diseases.map((disease) => ({
		player_id: user.id,
		game_id: currentGameId,
		disease_id: disease.id,
		active: disease.active !== false,
		controlled: disease.controlled === true,
		congenital: disease.congenital === true,
		diagnosed_age: Number(disease.diagnosedAt) || null,
		resolved_at: disease.active === false ? new Date().toISOString() : null
	  }));
	  const { error } = await client.from('player_diseases').upsert(rows, { onConflict: 'game_id,disease_id' });
	  if (error) throw error;
	},

	async saveMemory(save) {
	  if (!this.enabled || !save?.memory) return;
	  const user = await this.user();
	  if (!user) return;
	  const currentGameId = await this.ensureGame(save, window.currentLanguage || 'es');
	  if (!currentGameId) return;
	  const { error } = await client.from('player_memories').upsert({ player_id: user.id, game_id: currentGameId, memory_type: 'game_memory', memory_data: save.memory, updated_at: new Date().toISOString() }, { onConflict: 'game_id,memory_type' });
	  if (error) throw error;
	},

	async loadGlobalLearning() {
	  if (!this.enabled) return [];
	  const user = await this.user();
	  if (!user) return [];
	  const { data, error } = await client.rpc('get_global_learning_patterns');
	  if (error) throw error;
	  return Array.isArray(data) ? data : [];
	},

	async saveLearningSignal(save, result, signalType = 'decision') {
	  if (!this.enabled || !this.globalLearningConsent || !save?.player?.name || !result) return;
	  const user = await this.user();
	  if (!user) return;
	  const currentGameId = await this.ensureGame(save, window.currentLanguage || 'es');
	  if (!currentGameId) return;
	  const { error } = await client.from('learning_signals').insert({
		player_id: user.id,
		game_id: currentGameId,
		signal_type: signalType,
		language: window.currentLanguage || 'es',
		intent: result.analysis?.intent || null,
		signal_data: {
		  age_range: ageRange(save.player.age),
		  life_day: Number(save.world?.time?.day) || 1,
		  life_month: Number(save.world?.time?.month) || 1,
		  chapter_count: Array.isArray(save.chapters) ? save.chapters.length : 0,
		  skills_count: Object.keys(save.player.skills || {}).length,
		  relation_count: Array.isArray(save.player.relations) ? save.player.relations.length : 0,
		  location_count: Array.isArray(save.world?.locations) ? save.world.locations.length : 0,
		  quest_count: Array.isArray(save.world?.quests) ? save.world.quests.length : 0,
		  confidence: Number(result.analysis?.confidence) || 0,
		  sentiment: result.analysis?.sentiment || 'neutral',
		  effects: Array.isArray(result.effects) ? result.effects.slice(0, 12) : []
		}
	  });
	  if (error) throw error;
	},

	async updatePresence(save = null) {
	  if (!this.enabled) return;
	  if (this.presenceInFlight) return this.presenceInFlight;
	  this.presenceInFlight = this._updatePresence(save);
	  try {
		return await this.presenceInFlight;
	  } finally {
		this.presenceInFlight = null;
	  }
	},

	async _updatePresence(save) {
	  const user = await this.user();
	  if (!user) return;
	  const currentGameId = save?.player?.name ? await this.ensureGame(save, window.currentLanguage || 'es') : gameId;
	  const payload = { player_id: user.id, game_id: currentGameId || null, last_seen: new Date().toISOString() };
	  const { data: existing, error: readError } = await client.from('active_players').select('player_id').eq('player_id', user.id).maybeSingle();
	  if (readError) {
		this.lastPresenceError = readError.message || String(readError);
		throw readError;
	  }
	  const result = existing
		? await client.from('active_players').update({ game_id: currentGameId || null, last_seen: payload.last_seen }).eq('player_id', user.id)
		: await client.from('active_players').insert(payload);
	  if (result.error) {
		this.lastPresenceError = result.error.message || String(result.error);
		throw result.error;
	  }
	  this.lastPresenceAt = Date.now();
	  this.lastPresenceError = null;
	},

	async clearPresence() {
	  if (!this.enabled) return;
	  const user = await this.user();
	  if (!user) return;
	  const { error } = await client.from('active_players').delete().eq('player_id', user.id);
	  if (error) throw error;
	},

	async getActivePlayerCount() {
	  if (!this.enabled) return null;
	  if (this.countInFlight) return this.countInFlight;
	  this.countInFlight = (async () => {
		const { data, error } = await client.rpc('get_active_player_count');
		if (error) {
		  this.lastPresenceError = error.message || String(error);
		  throw error;
		}
		return Number(data) || 0;
	  })();
	  try {
		return await this.countInFlight;
	  } finally {
		this.countInFlight = null;
	  }
	},

	async submitLearningEvent(save, result) {
	  if (!this.enabled || !this.globalLearningConsent || !result) return;
	  const user = await this.user();
	  if (!user) return;
	  const { error } = await client.from('global_learning_events').insert({
		event_type: 'decision_pattern',
		language: window.currentLanguage || 'es',
		intent: result.analysis?.intent || null,
		anonymized_text: null,
		effects: result.effects || [],
		aggregate_data: {
		  age_range: ageRange(save?.player?.age),
		  disease_count: (save?.player?.diseases || []).filter((disease) => disease.active !== false).length,
		  confidence: Number(result.analysis?.confidence) || 0,
		  sentiment: result.analysis?.sentiment || 'neutral',
		  context: result.analysis?.context?.topic || null
		}
	  });
	  if (error) throw error;
	  await this.saveLearningSignal(save, result);
	}
  };

  function ageRange(age) {
	const value = Number(age) || 0;
	if (value < 13) return 'child';
	if (value < 18) return 'teen';
	if (value < 30) return 'young_adult';
	if (value < 50) return 'adult';
	if (value < 65) return 'mature';
	return 'senior';
  }

  window.lifeSupabase = api;
})();
