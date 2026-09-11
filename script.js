const startButton = document.querySelector('#startButton');
const welcomeScreen = document.querySelector('#welcomeScreen');
const questionScreen = document.querySelector('#questionScreen');
const statsScreen = document.querySelector('#statsScreen');
const statsButton = document.querySelector('#statsButton');
const playTimeRewardsButton = document.querySelector('#playTimeRewardsButton');
const playTimeRewardsScreen = document.querySelector('#playTimeRewardsScreen');
const closePlayTimeRewardsButton = document.querySelector('#closePlayTimeRewardsButton');
const playTimeRewardsContent = document.querySelector('#playTimeRewardsContent');
const closeStatsButton = document.querySelector('#closeStatsButton');
const statsExtra = document.querySelector('#statsExtra');
const careersButton = document.querySelector('#careersButton');
const careersScreen = document.querySelector('#careersScreen');
const closeCareersButton = document.querySelector('#closeCareersButton');
const careersDashboard = document.querySelector('#careersDashboard');
const familyButton = document.querySelector('#familyButton');
const familyScreen = document.querySelector('#familyScreen');
const closeFamilyButton = document.querySelector('#closeFamilyButton');
const familyDashboard = document.querySelector('#familyDashboard');
const inventoryButton = document.querySelector('#inventoryButton');
const inventoryScreen = document.querySelector('#inventoryScreen');
const closeInventoryButton = document.querySelector('#closeInventoryButton');
const inventoryDashboard = document.querySelector('#inventoryDashboard');
const governmentButton = document.querySelector('#governmentButton');
const governmentScreen = document.querySelector('#governmentScreen');
const closeGovernmentButton = document.querySelector('#closeGovernmentButton');
const governmentDashboard = document.querySelector('#governmentDashboard');
const currentOccupation = document.querySelector('#currentOccupation');
const worldButton = document.querySelector('#worldButton');
const worldScreen = document.querySelector('#worldScreen');
const closeWorldButton = document.querySelector('#closeWorldButton');
const worldDashboard = document.querySelector('#worldDashboard');
const skillsButton = document.querySelector('#skillsButton');
const skillsScreen = document.querySelector('#skillsScreen');
const closeSkillsButton = document.querySelector('#closeSkillsButton');
const skillsDashboard = document.querySelector('#skillsDashboard');
const relationsButton = document.querySelector('#relationsButton');
const relationsScreen = document.querySelector('#relationsScreen');
const closeRelationsButton = document.querySelector('#closeRelationsButton');
const relationsDashboard = document.querySelector('#relationsDashboard');
const storyScreen = document.querySelector('#storyScreen');
const lifeForm = document.querySelector('#lifeForm');
const questionLabel = document.querySelector('#questionLabel');
const questionNumber = document.querySelector('#questionNumber');
const progressBar = document.querySelector('.progress-bar');
const answerInput = document.querySelector('#answerInput');
const questionHint = document.querySelector('#questionHint');
const storyInput = document.querySelector('#storyInput');
const saveStoryButton = document.querySelector('#saveStoryButton');
const menuButton = document.querySelector('#menuButton');
const menuScreen = document.querySelector('#menuScreen');
const closeMenuButton = document.querySelector('#closeMenuButton');
const menuGrid = document.querySelector('#menuGrid');
const savedMessage = document.querySelector('#savedMessage');
const aiOutput = document.querySelector('#aiOutput');
const aiText = document.querySelector('#aiText');
const effectsText = document.querySelector('#effectsText');
const historyButton = document.querySelector('#historyButton');
const historyScreen = document.querySelector('#historyScreen');
const closeHistoryButton = document.querySelector('#closeHistoryButton');
const historyList = document.querySelector('#historyList');
const exportButton = document.querySelector('#exportButton');
const importButton = document.querySelector('#importButton');
const importInput = document.querySelector('#importInput');
const learnFileButton = document.querySelector('#learnFileButton');
const learnFileInput = document.querySelector('#learnFileInput');
const resetButton = document.querySelector('#resetButton');
const testGameOverButton = document.querySelector('#testGameOverButton');
const nameStat = document.querySelector('#nameStat');
const surnameStat = document.querySelector('#surnameStat');
const ageStat = document.querySelector('#ageStat');
const characterStat = document.querySelector('#characterStat');
const locationStat = document.querySelector('#locationStat');
const hobbyStat = document.querySelector('#hobbyStat');
const occupationStat = document.querySelector('#occupationStat');
const energyStat = document.querySelector('#energyStat');
const moodStat = document.querySelector('#moodStat');
const reputationStat = document.querySelector('#reputationStat');
const analysisDetails = document.querySelector('#analysisDetails');
const predictionDetails = document.querySelector('#predictionDetails');
const languageSelect = document.querySelector('#languageSelect');
const themeSelect = document.querySelector('#themeSelect');
const welcomeNavigation = document.querySelector('#welcomeNavigation');
const blogButton = document.querySelector('#blogButton');
const blogScreen = document.querySelector('#blogScreen');
const closeBlogButton = document.querySelector('#closeBlogButton');
const petsButton = document.querySelector('#petsButton');
const petsScreen = document.querySelector('#petsScreen');
const closePetsButton = document.querySelector('#closePetsButton');
const petsDashboard = document.querySelector('#petsDashboard');
const adoptPetForm = document.querySelector('#adoptPetForm');
const adoptTypeSelect = document.querySelector('#adoptTypeSelect');
const adoptNameInput = document.querySelector('#adoptNameInput');
const adoptSubmitBtn = document.querySelector('#adoptSubmitBtn');
const discordLink = document.querySelector('#discordLink');
const weatherIndicator = document.querySelector('#weatherIndicator');
const weatherOverlay = document.querySelector('#weatherOverlay');
const seasonIndicator = document.querySelector('#seasonIndicator');
const seasonEffects = document.querySelector('#seasonEffects');
const moneyRainIndicator = document.querySelector('#moneyRainIndicator');
const moneyRainOverlay = document.querySelector('#moneyRainOverlay');
const gameOverScreen = document.querySelector('#gameOverScreen');
const gameOverTitle = document.querySelector('#gameOverTitle');
const gameOverText = document.querySelector('#gameOverText');
const gameOverStats = document.querySelector('#gameOverStats');
const gameOverNewLifeButton = document.querySelector('#gameOverNewLifeButton');
const closeGameOverButton = document.querySelector('#closeGameOverButton');
const usernameStatus = document.querySelector('#usernameStatus');
const statusLogoutBtn = document.querySelector('#statusLogoutBtn');
const activePlayersIndicator = document.querySelector('#activePlayersIndicator');
const usernameScreen = document.querySelector('#usernameScreen');
const usernameTitle = document.querySelector('#usernameTitle');
const usernameIntro = document.querySelector('#usernameIntro');
const usernameHint = document.querySelector('#usernameHint');
const tabLoginBtn = document.querySelector('#tabLoginBtn');
const tabRegisterBtn = document.querySelector('#tabRegisterBtn');
const loginForm = document.querySelector('#loginForm');
const loginUserInput = document.querySelector('#loginUserInput');
const loginPassInput = document.querySelector('#loginPassInput');
const loginSubmit = document.querySelector('#loginSubmit');
const registerForm = document.querySelector('#registerForm');
const regUserInput = document.querySelector('#regUserInput');
const regPassInput = document.querySelector('#regPassInput');
const regPassConfirmInput = document.querySelector('#regPassConfirmInput');
const registerSubmit = document.querySelector('#registerSubmit');
const welcomeUserGreeting = document.querySelector('#welcomeUserGreeting');
const previousLivesPanel = document.querySelector('#previousLivesPanel');
const previousLivesGrid = document.querySelector('#previousLivesGrid');
const previousLivesEmpty = document.querySelector('#previousLivesEmpty');
const livesCounter = document.querySelector('#livesCounter');
const exitLifeButton = document.querySelector('#exitLifeButton');

const defaultBrowserLang = (typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage || '').toLowerCase().startsWith('es')) ? 'es' : 'en';
let currentLanguage = defaultBrowserLang;
try { currentLanguage = localStorage.getItem('lifeLanguage') || defaultBrowserLang; } catch { /* default language */ }
if (currentLanguage !== 'es' && currentLanguage !== 'en') currentLanguage = defaultBrowserLang;
window.currentLanguage = currentLanguage;
let currentUsername = '';
try { currentUsername = localStorage.getItem('lifeUsername')?.trim() || ''; } catch { /* optional storage */ }
window.currentUsername = currentUsername;

let currentTheme = 'green';
try { currentTheme = localStorage.getItem('lifeRetroTheme') || 'green'; } catch { /* theme storage fallback */ }
function applyRetroTheme(theme) {
  const allowed = ['green', 'orange', 'red', 'blue'];
  currentTheme = allowed.includes(theme) ? theme : 'green';
  allowed.forEach((t) => document.body.classList.remove(`theme-${t}`));
  document.body.classList.add(`theme-${currentTheme}`);
  if (themeSelect && themeSelect.value !== currentTheme) {
    themeSelect.value = currentTheme;
  }
  try { localStorage.setItem('lifeRetroTheme', currentTheme); } catch { /* storage fallback */ }
}
applyRetroTheme(currentTheme);
listen(themeSelect, 'change', () => applyRetroTheme(themeSelect?.value));

const careerCatalog = [
  { id: 'software_engineer', family: 'Tecnología', names: { es: 'Ingeniero de software', en: 'Software engineer' }, aliases: ['programador', 'programadora', 'desarrollador', 'desarrolladora', 'ingeniero de software', 'ingeniera de software', 'software engineer', 'software developer', 'coder'], income: 620, energy: 12 },
  { id: 'frontend_developer', family: 'Tecnología', names: { es: 'Desarrollador frontend', en: 'Frontend developer' }, aliases: ['frontend', 'front end', 'desarrollador web', 'desarrolladora web', 'web developer', 'frontend developer', 'ui developer'], income: 560, energy: 11 },
  { id: 'backend_developer', family: 'Tecnología', names: { es: 'Desarrollador backend', en: 'Backend developer' }, aliases: ['backend', 'back end', 'desarrollador backend', 'backend developer', 'api developer', 'servidor'], income: 610, energy: 12 },
  { id: 'full_stack_developer', family: 'Tecnología', names: { es: 'Desarrollador full stack', en: 'Full-stack developer' }, aliases: ['full stack', 'fullstack', 'desarrollador full stack', 'full stack developer'], income: 720, energy: 14 },
  { id: 'mobile_developer', family: 'Tecnología', names: { es: 'Desarrollador móvil', en: 'Mobile developer' }, aliases: ['programador movil', 'programador móvil', 'desarrollador movil', 'desarrollador móvil', 'android developer', 'ios developer', 'mobile developer'], income: 640, energy: 12 },
  { id: 'game_developer', family: 'Tecnología', names: { es: 'Desarrollador de videojuegos', en: 'Game developer' }, aliases: ['programador de videojuegos', 'desarrollador de videojuegos', 'game developer', 'video game developer', 'unity developer', 'unreal developer'], income: 570, energy: 13 },
  { id: 'data_scientist', family: 'Tecnología', names: { es: 'Científico de datos', en: 'Data scientist' }, aliases: ['cientifico de datos', 'científico de datos', 'data scientist', 'machine learning scientist'], income: 760, energy: 13 },
  { id: 'data_analyst', family: 'Tecnología', names: { es: 'Analista de datos', en: 'Data analyst' }, aliases: ['analista de datos', 'data analyst', 'business analyst', 'analista business'], income: 520, energy: 10 },
  { id: 'devops_engineer', family: 'Tecnología', names: { es: 'Ingeniero DevOps', en: 'DevOps engineer' }, aliases: ['devops', 'ingeniero devops', 'devops engineer', 'cloud engineer', 'ingeniero cloud'], income: 750, energy: 14 },
  { id: 'cybersecurity_analyst', family: 'Tecnología', names: { es: 'Analista de ciberseguridad', en: 'Cybersecurity analyst' }, aliases: ['ciberseguridad', 'seguridad informatica', 'seguridad informática', 'analista de seguridad', 'cybersecurity analyst', 'security analyst', 'ethical hacker', 'hacker etico'], income: 700, energy: 13 },
  { id: 'database_administrator', family: 'Tecnología', names: { es: 'Administrador de bases de datos', en: 'Database administrator' }, aliases: ['administrador de base de datos', 'administrador de bases de datos', 'dba', 'database administrator'], income: 650, energy: 12 },
  { id: 'qa_engineer', family: 'Tecnología', names: { es: 'Ingeniero de calidad de software', en: 'QA engineer' }, aliases: ['tester', 'qa', 'qa tester', 'ingeniero qa', 'quality assurance', 'software tester'], income: 500, energy: 10 },
  { id: 'ux_ui_designer', family: 'Tecnología', names: { es: 'Diseñador UX/UI', en: 'UX/UI designer' }, aliases: ['diseñador ux', 'diseñadora ux', 'diseñador ui', 'ux designer', 'ui designer', 'product designer'], income: 570, energy: 10 },
  { id: 'it_support', family: 'Tecnología', names: { es: 'Técnico de soporte informático', en: 'IT support technician' }, aliases: ['soporte tecnico', 'soporte técnico', 'tecnico informatico', 'técnico informático', 'help desk', 'it support', 'computer technician'], income: 360, energy: 10 },
  { id: 'network_engineer', family: 'Tecnología', names: { es: 'Ingeniero de redes', en: 'Network engineer' }, aliases: ['ingeniero de redes', 'network engineer', 'administrador de redes', 'network administrator'], income: 590, energy: 12 },
  { id: 'doctor', family: 'Salud', names: { es: 'Médico', en: 'Doctor' }, aliases: ['medico', 'médico', 'doctora', 'doctor', 'physician', 'general practitioner', 'medico general'], income: 850, energy: 16 },
  { id: 'surgeon', family: 'Salud', names: { es: 'Cirujano', en: 'Surgeon' }, aliases: ['cirujano', 'cirujana', 'cirujano general', 'surgeon', 'general surgeon'], income: 1250, energy: 20 },
  { id: 'nurse', family: 'Salud', names: { es: 'Enfermero', en: 'Nurse' }, aliases: ['enfermero', 'enfermera', 'enfermeria', 'enfermería', 'nurse', 'registered nurse'], income: 480, energy: 15 },
  { id: 'paramedic', family: 'Salud', names: { es: 'Paramédico', en: 'Paramedic' }, aliases: ['paramedico', 'paramédico', 'paramédica', 'paramedic', 'emergency medical technician', 'emt'], income: 460, energy: 16 },
  { id: 'dentist', family: 'Salud', names: { es: 'Dentista', en: 'Dentist' }, aliases: ['dentista', 'odontologo', 'odontólogo', 'dentist'], income: 780, energy: 12 },
  { id: 'psychologist', family: 'Salud', names: { es: 'Psicólogo', en: 'Psychologist' }, aliases: ['psicologo', 'psicóloga', 'psicólogo', 'psychologist', 'therapist'], income: 610, energy: 11 },
  { id: 'pharmacist', family: 'Salud', names: { es: 'Farmacéutico', en: 'Pharmacist' }, aliases: ['farmaceutico', 'farmacéutico', 'farmacéutica', 'farmacia', 'pharmacist'], income: 560, energy: 10 },
  { id: 'veterinarian', family: 'Salud', names: { es: 'Veterinario', en: 'Veterinarian' }, aliases: ['veterinario', 'veterinaria', 'veterinarian', 'vet'], income: 570, energy: 12 },
  { id: 'police_officer', family: 'Seguridad pública', names: { es: 'Agente de policía', en: 'Police officer' }, aliases: ['policia', 'policía', 'agente de policía', 'agente policial', 'police officer', 'cop'], income: 430, energy: 15 },
  { id: 'detective', family: 'Seguridad pública', names: { es: 'Detective', en: 'Detective' }, aliases: ['detective', 'investigador policial', 'investigadora policial', 'police detective'], income: 560, energy: 14 },
  { id: 'police_sergeant', family: 'Seguridad pública', names: { es: 'Sargento de policía', en: 'Police sergeant' }, aliases: ['sargento de policia', 'sargento de policía', 'police sergeant'], income: 610, energy: 15 },
  { id: 'police_inspector', family: 'Seguridad pública', names: { es: 'Inspector de policía', en: 'Police inspector' }, aliases: ['inspector de policia', 'inspector de policía', 'police inspector'], income: 690, energy: 14 },
  { id: 'police_commissioner', family: 'Seguridad pública', names: { es: 'Comisario', en: 'Police commissioner' }, aliases: ['comisario', 'comisaria', 'comisaría', 'comisaria de policia', 'police commissioner', 'chief of police'], income: 900, energy: 13 },
  { id: 'firefighter', family: 'Seguridad pública', names: { es: 'Bombero', en: 'Firefighter' }, aliases: ['bombero', 'bombera', 'firefighter', 'fireman', 'firewoman'], income: 470, energy: 17 },
  { id: 'soldier', family: 'Seguridad pública', names: { es: 'Soldado', en: 'Soldier' }, aliases: ['soldado', 'soldada', 'militar', 'soldier', 'military'], income: 450, energy: 17 },
  { id: 'military_officer', family: 'Seguridad pública', names: { es: 'Oficial militar', en: 'Military officer' }, aliases: ['oficial militar', 'military officer', 'army officer'], income: 720, energy: 15 },
  { id: 'lawyer', family: 'Derecho y gobierno', names: { es: 'Abogado', en: 'Lawyer' }, aliases: ['abogado', 'abogada', 'lawyer', 'attorney', 'legal counsel'], income: 720, energy: 13 },
  { id: 'judge', family: 'Derecho y gobierno', names: { es: 'Juez', en: 'Judge' }, aliases: ['juez', 'jueza', 'judge', 'magistrate'], income: 1050, energy: 12 },
  { id: 'prosecutor', family: 'Derecho y gobierno', names: { es: 'Fiscal', en: 'Prosecutor' }, aliases: ['fiscal', 'prosecutor', 'district attorney'], income: 820, energy: 14 },
  { id: 'civil_servant', family: 'Derecho y gobierno', names: { es: 'Funcionario público', en: 'Civil servant' }, aliases: ['funcionario publico', 'funcionario público', 'empleado publico', 'empleado público', 'civil servant', 'government employee'], income: 430, energy: 9 },
  { id: 'teacher', family: 'Educación', names: { es: 'Profesor', en: 'Teacher' }, aliases: ['profesor', 'profesora', 'maestro', 'maestra', 'teacher', 'school teacher'], income: 420, energy: 13 },
  { id: 'university_professor', family: 'Educación', names: { es: 'Profesor universitario', en: 'University professor' }, aliases: ['profesor universitario', 'profesora universitaria', 'university professor', 'college professor', 'docente universitario'], income: 680, energy: 12 },
  { id: 'researcher', family: 'Educación', names: { es: 'Investigador', en: 'Researcher' }, aliases: ['investigador', 'investigadora', 'investigador cientifico', 'investigador científico', 'researcher', 'scientist'], income: 610, energy: 12 },
  { id: 'accountant', family: 'Negocios y finanzas', names: { es: 'Contador', en: 'Accountant' }, aliases: ['contador', 'contadora', 'contable', 'accountant', 'bookkeeper'], income: 500, energy: 10 },
  { id: 'financial_analyst', family: 'Negocios y finanzas', names: { es: 'Analista financiero', en: 'Financial analyst' }, aliases: ['analista financiero', 'financial analyst', 'investment analyst'], income: 650, energy: 12 },
  { id: 'banker', family: 'Negocios y finanzas', names: { es: 'Banquero', en: 'Banker' }, aliases: ['banquero', 'banquera', 'banco', 'banker', 'bank employee'], income: 560, energy: 10 },
  { id: 'entrepreneur', family: 'Negocios y finanzas', names: { es: 'Emprendedor', en: 'Entrepreneur' }, aliases: ['emprendedor', 'emprendedora', 'empresario', 'empresaria', 'entrepreneur', 'business owner', 'founder'], income: 700, energy: 16 },
  { id: 'ceo', family: 'Negocios y finanzas', names: { es: 'Director ejecutivo', en: 'Chief executive officer' }, aliases: ['ceo', 'director ejecutivo', 'directora ejecutiva', 'gerente general', 'chief executive officer'], income: 1500, energy: 15 },
  { id: 'manager', family: 'Negocios y finanzas', names: { es: 'Gerente', en: 'Manager' }, aliases: ['gerente', 'manager', 'jefe', 'jefa', 'team lead', 'supervisor'], income: 650, energy: 13 },
  { id: 'salesperson', family: 'Comercio y servicios', names: { es: 'Vendedor', en: 'Salesperson' }, aliases: ['vendedor', 'vendedora', 'ventas', 'comercial', 'salesperson', 'sales representative', 'sales rep'], income: 360, energy: 12 },
  { id: 'cashier', family: 'Comercio y servicios', names: { es: 'Cajero', en: 'Cashier' }, aliases: ['cajero', 'cajera', 'cashier'], income: 280, energy: 10 },
  { id: 'chef', family: 'Comercio y servicios', names: { es: 'Chef', en: 'Chef' }, aliases: ['chef', 'cocinero', 'cocinera', 'cook', 'head chef'], income: 430, energy: 15 },
  { id: 'waiter', family: 'Comercio y servicios', names: { es: 'Camarero', en: 'Waiter' }, aliases: ['camarero', 'camarera', 'mesero', 'mesera', 'waiter', 'server'], income: 300, energy: 14 },
  { id: 'driver', family: 'Transporte', names: { es: 'Conductor profesional', en: 'Professional driver' }, aliases: ['conductor', 'chofer', 'camionero', 'taxista', 'driver', 'truck driver', 'taxi driver'], income: 390, energy: 13 },
  { id: 'pilot', family: 'Transporte', names: { es: 'Piloto de avión', en: 'Airline pilot' }, aliases: ['piloto de avion', 'piloto de avión', 'piloto', 'airline pilot', 'pilot'], income: 1100, energy: 15 },
  { id: 'flight_attendant', family: 'Transporte', names: { es: 'Tripulante de cabina', en: 'Flight attendant' }, aliases: ['azafata', 'azafato', 'tripulante de cabina', 'flight attendant', 'cabin crew'], income: 520, energy: 14 },
  { id: 'architect', family: 'Ingeniería y diseño', names: { es: 'Arquitecto', en: 'Architect' }, aliases: ['arquitecto', 'arquitecta', 'architect'], income: 650, energy: 12 },
  { id: 'civil_engineer', family: 'Ingeniería y diseño', names: { es: 'Ingeniero civil', en: 'Civil engineer' }, aliases: ['ingeniero civil', 'ingeniera civil', 'civil engineer'], income: 680, energy: 13 },
  { id: 'mechanical_engineer', family: 'Ingeniería y diseño', names: { es: 'Ingeniero mecánico', en: 'Mechanical engineer' }, aliases: ['ingeniero mecanico', 'ingeniero mecánico', 'mechanical engineer'], income: 700, energy: 13 },
  { id: 'electrician', family: 'Oficios', names: { es: 'Electricista', en: 'Electrician' }, aliases: ['electricista', 'electrician'], income: 470, energy: 14 },
  { id: 'plumber', family: 'Oficios', names: { es: 'Plomero', en: 'Plumber' }, aliases: ['plomero', 'plomera', 'fontanero', 'fontanera', 'plumber'], income: 450, energy: 15 },
  { id: 'carpenter', family: 'Oficios', names: { es: 'Carpintero', en: 'Carpenter' }, aliases: ['carpintero', 'carpintera', 'carpenter'], income: 420, energy: 15 },
  { id: 'welder', family: 'Oficios', names: { es: 'Soldador', en: 'Welder' }, aliases: ['soldador', 'soldadora', 'welder'], income: 460, energy: 16 },
  { id: 'farmer', family: 'Agricultura', names: { es: 'Agricultor', en: 'Farmer' }, aliases: ['agricultor', 'agricultora', 'granjero', 'granjera', 'farmer', 'farm worker'], income: 330, energy: 17 },
  { id: 'journalist', family: 'Comunicación y arte', names: { es: 'Periodista', en: 'Journalist' }, aliases: ['periodista', 'journalist', 'reporter', 'reportero', 'reportera'], income: 420, energy: 12 },
  { id: 'writer', family: 'Comunicación y arte', names: { es: 'Escritor', en: 'Writer' }, aliases: ['escritor', 'escritora', 'writer', 'author', 'autor', 'autora'], income: 350, energy: 10 },
  { id: 'photographer', family: 'Comunicación y arte', names: { es: 'Fotógrafo', en: 'Photographer' }, aliases: ['fotografo', 'fotógrafo', 'fotógrafa', 'photographer'], income: 390, energy: 12 },
  { id: 'musician', family: 'Comunicación y arte', names: { es: 'Músico', en: 'Musician' }, aliases: ['musico', 'músico', 'música', 'musica', 'cantante', 'musician', 'singer'], income: 360, energy: 12 },
  { id: 'actor', family: 'Comunicación y arte', names: { es: 'Actor', en: 'Actor' }, aliases: ['actor', 'actriz', 'actor', 'actress', 'performer'], income: 430, energy: 13 },
  { id: 'athlete', family: 'Deporte', names: { es: 'Atleta profesional', en: 'Professional athlete' }, aliases: ['atleta', 'deportista', 'futbolista', 'jugador profesional', 'professional athlete', 'athlete', 'footballer', 'soccer player'], income: 800, energy: 18 },
  { id: 'fitness_trainer', family: 'Deporte', names: { es: 'Entrenador personal', en: 'Personal trainer' }, aliases: ['entrenador personal', 'personal trainer', 'fitness coach'], income: 420, energy: 14 },
  { id: 'real_estate_agent', family: 'Inmobiliario', names: { es: 'Agente inmobiliario', en: 'Real estate agent' }, aliases: ['agente inmobiliario', 'corredor inmobiliario', 'real estate agent', 'realtor'], income: 520, energy: 12 },
  { id: 'security_guard', family: 'Seguridad', names: { es: 'Guardia de seguridad', en: 'Security guard' }, aliases: ['guardia de seguridad', 'vigilante', 'seguridad privada', 'security guard', 'security officer'], income: 320, energy: 13 },
  { id: 'hairdresser', family: 'Servicios personales', names: { es: 'Peluquero', en: 'Hairdresser' }, aliases: ['peluquero', 'peluquera', 'estilista', 'barbero', 'hairdresser', 'barber', 'stylist'], income: 350, energy: 12 },
  { id: 'social_worker', family: 'Servicios sociales', names: { es: 'Trabajador social', en: 'Social worker' }, aliases: ['trabajador social', 'trabajadora social', 'social worker'], income: 390, energy: 14 },
  { id: 'librarian', family: 'Cultura', names: { es: 'Bibliotecario', en: 'Librarian' }, aliases: ['bibliotecario', 'bibliotecaria', 'librarian'], income: 330, energy: 9 },
  { id: 'translator', family: 'Idiomas', names: { es: 'Traductor', en: 'Translator' }, aliases: ['traductor', 'traductora', 'interprete', 'intérprete', 'translator', 'interpreter'], income: 480, energy: 10 },
  { id: 'real_world_freelancer', family: 'Independiente', names: { es: 'Trabajador freelance', en: 'Freelancer' }, aliases: ['freelance', 'freelancer', 'autonomo', 'autónomo', 'independiente', 'self employed', 'self-employed'], income: 450, energy: 12 }
];

const knownHobbies = new Set([
  'musica', 'music', 'futbol', 'football', 'videojuegos', 'videojuego', 'games', 'gaming', 'juegos',
  'dibujar', 'dibujo', 'drawing', 'pintar', 'painting', 'cocinar', 'cocina', 'cooking', 'leer', 'lectura', 'reading',
  'deporte', 'deportes', 'sport', 'sports', 'fotografia', 'fotografía', 'photography', 'programar', 'programacion',
  'programación', 'coding', 'code', 'escribir', 'writing', 'bailar', 'baile', 'dance', 'jardineria', 'jardinería',
  'gardening', 'viajar', 'viajes', 'travel', 'pescar', 'pesca', 'fishing', 'correr', 'running', 'gimnasio', 'gym',
	'ajedrez', 'chess', 'cantar', 'singing', 'manualidades', 'crafts', 'coleccionar', 'coleccionismo', 'collecting',
  'astronomia', 'astronomía', 'astronomy', 'observacion', 'observación', 'birdwatching', 'ornitologia', 'ornitología',
  'ceramica', 'cerámica', 'ceramics', 'tejido', 'tejer', 'knitting', 'crochet', 'origami', 'poesia', 'poesía', 'poetry',
  'teatro', 'theater', 'teatro musical', 'podcasts', 'podcast', 'bloguear', 'blogging', 'electronica', 'electrónica', 'electronics',
  'robotica', 'robótica', 'robotics', 'modelismo', 'model building', 'surf', 'surfing', 'natacion', 'natación', 'swimming',
  'ciclismo', 'cycling', 'senderismo', 'hiking', 'escalada', 'climbing', 'yoga', 'meditacion', 'meditación', 'meditation',
  'patinaje', 'skating', 'voluntariado', 'volunteering', 'idiomas', 'languages', 'astronautica', 'astronautics', 'geologia', 'geology'
]);

const diseaseCatalog = [
  { id: 'asthma', names: { es: 'Asma', en: 'Asthma' }, curable: false, congenitalChance: .012, onsetChance: .006, severity: 1, risks: ['humo', 'smoke', 'respirar', 'respiración', 'breath'] },
  { id: 'migraine', names: { es: 'Migraña crónica', en: 'Chronic migraine' }, curable: false, congenitalChance: .008, onsetChance: .008, severity: 1, risks: ['dolor', 'estres', 'estrés', 'stress', 'headache'] },
  { id: 'diabetes', names: { es: 'Diabetes', en: 'Diabetes' }, curable: false, congenitalChance: .006, onsetChance: .004, severity: 2, risks: ['dulce', 'azucar', 'azúcar', 'sed', 'sugar'] },
  { id: 'heart_condition', names: { es: 'Enfermedad cardíaca', en: 'Heart condition' }, curable: false, congenitalChance: .004, onsetChance: .002, severity: 4, risks: ['corazon', 'corazón', 'pecho', 'heart', 'chest'] },
  { id: 'allergy', names: { es: 'Alergia', en: 'Allergy' }, curable: false, congenitalChance: .02, onsetChance: .012, severity: 1, risks: ['polen', 'polvo', 'pollen', 'dust'] },
  { id: 'flu', names: { es: 'Gripe', en: 'Flu' }, curable: true, congenitalChance: 0, onsetChance: .025, severity: 1, risks: ['frio', 'frío', 'lluvia', 'cold', 'rain'] },
  { id: 'infection', names: { es: 'Infección', en: 'Infection' }, curable: true, congenitalChance: 0, onsetChance: .018, severity: 2, risks: ['herida', 'hospital', 'wound', 'hospital'] },
  { id: 'pneumonia', names: { es: 'Neumonía', en: 'Pneumonia' }, curable: true, congenitalChance: 0, onsetChance: .006, severity: 3, risks: ['frio', 'frío', 'tos', 'cold', 'cough'] },
  { id: 'food_poisoning', names: { es: 'Intoxicación alimentaria', en: 'Food poisoning' }, curable: true, congenitalChance: 0, onsetChance: .012, severity: 1, risks: ['comida', 'comer', 'food', 'eat'] },
  { id: 'fracture', names: { es: 'Fractura', en: 'Fracture' }, curable: true, congenitalChance: 0, onsetChance: .004, severity: 2, risks: ['caida', 'caída', 'accidente', 'fall', 'accident'] },
  { id: 'chronic_pain', names: { es: 'Dolor crónico', en: 'Chronic pain' }, curable: false, congenitalChance: .003, onsetChance: .006, severity: 2, risks: ['lesion', 'lesión', 'accidente', 'injury', 'accident'] },
  { id: 'anemia', names: { es: 'Anemia', en: 'Anemia' }, curable: true, congenitalChance: .006, onsetChance: .007, severity: 1, risks: ['cansancio', 'fatiga', 'tired', 'fatigue'] },
  { id: 'kidney_disease', names: { es: 'Enfermedad renal', en: 'Kidney disease' }, curable: false, congenitalChance: .002, onsetChance: .0015, severity: 3, risks: ['riñon', 'riñón', 'kidney'] },
  { id: 'hypertension', names: { es: 'Hipertensión', en: 'Hypertension' }, curable: false, congenitalChance: .002, onsetChance: .008, severity: 2, risks: ['presion', 'presión', 'stress', 'estres', 'estrés'] },
	{ id: 'sleep_disorder', names: { es: 'Trastorno del sueño', en: 'Sleep disorder' }, curable: false, congenitalChance: .004, onsetChance: .009, severity: 1, risks: ['dormir', 'noche', 'sleep', 'night'] },
  { id: 'eczema', names: { es: 'Eccema', en: 'Eczema' }, curable: true, congenitalChance: .006, onsetChance: .01, severity: 1, risks: ['piel', 'alergia', 'skin', 'allergy'] },
  { id: 'gastritis', names: { es: 'Gastritis', en: 'Gastritis' }, curable: true, congenitalChance: .001, onsetChance: .012, severity: 1, risks: ['comida', 'alcohol', 'food', 'alcohol'] },
  { id: 'ulcer', names: { es: 'Úlcera', en: 'Ulcer' }, curable: true, congenitalChance: 0, onsetChance: .004, severity: 2, risks: ['dolor', 'estres', 'estrés', 'pain', 'stress'] },
  { id: 'arthritis', names: { es: 'Artritis', en: 'Arthritis' }, curable: false, congenitalChance: .002, onsetChance: .008, severity: 2, risks: ['hueso', 'articulacion', 'articulación', 'bone', 'joint'] },
  { id: 'osteoporosis', names: { es: 'Osteoporosis', en: 'Osteoporosis' }, curable: false, congenitalChance: .001, onsetChance: .003, severity: 3, risks: ['hueso', 'caida', 'caída', 'bone', 'fall'] },
  { id: 'thyroid_disorder', names: { es: 'Trastorno tiroideo', en: 'Thyroid disorder' }, curable: false, congenitalChance: .002, onsetChance: .004, severity: 2, risks: ['tiroides', 'cansancio', 'thyroid', 'fatigue'] },
  { id: 'depression', names: { es: 'Depresión', en: 'Depression' }, curable: false, congenitalChance: .004, onsetChance: .01, severity: 2, risks: ['triste', 'soledad', 'depresion', 'depresión', 'sad', 'lonely', 'depression'] },
  { id: 'anxiety_disorder', names: { es: 'Trastorno de ansiedad', en: 'Anxiety disorder' }, curable: false, congenitalChance: .005, onsetChance: .012, severity: 1, risks: ['ansiedad', 'miedo', 'panic', 'fear', 'anxiety'] },
  { id: 'hepatitis', names: { es: 'Hepatitis', en: 'Hepatitis' }, curable: false, congenitalChance: .001, onsetChance: .002, severity: 3, risks: ['higado', 'hígado', 'sangre', 'liver', 'blood'] },
  { id: 'appendicitis', names: { es: 'Apendicitis', en: 'Appendicitis' }, curable: true, congenitalChance: 0, onsetChance: .003, severity: 3, risks: ['abdomen', 'dolor', 'hospital', 'abdominal', 'pain', 'hospital'] },
  { id: 'bronchitis', names: { es: 'Bronquitis', en: 'Bronchitis' }, curable: true, congenitalChance: 0, onsetChance: .01, severity: 2, risks: ['tos', 'humo', 'frio', 'frío', 'cough', 'smoke', 'cold'] },
  { id: 'mononucleosis', names: { es: 'Mononucleosis', en: 'Mononucleosis' }, curable: true, congenitalChance: 0, onsetChance: .003, severity: 1, risks: ['beso', 'cansancio', 'kiss', 'fatigue'] },
  { id: 'vision_impairment', names: { es: 'Discapacidad visual', en: 'Vision impairment' }, curable: false, congenitalChance: .003, onsetChance: .004, severity: 1, risks: ['vista', 'ojo', 'vision', 'eye'] },
	{ id: 'hearing_loss', names: { es: 'Pérdida auditiva', en: 'Hearing loss' }, curable: false, congenitalChance: .002, onsetChance: .003, severity: 1, risks: ['oido', 'oído', 'ruido', 'hearing', 'noise'] },
  { id: 'celiac_disease', names: { es: 'Enfermedad celíaca', en: 'Celiac disease' }, curable: false, congenitalChance: .003, onsetChance: .002, severity: 2, risks: ['gluten', 'pan', 'gluten', 'bread'] },
  { id: 'asthma_allergic', names: { es: 'Asma alérgica', en: 'Allergic asthma' }, curable: false, congenitalChance: .006, onsetChance: .004, severity: 2, risks: ['polen', 'alergia', 'pollen', 'allergy'] },
  { id: 'dermatitis', names: { es: 'Dermatitis', en: 'Dermatitis' }, curable: true, congenitalChance: .004, onsetChance: .009, severity: 1, risks: ['piel', 'jabón', 'skin', 'soap'] },
  { id: 'back_pain', names: { es: 'Dolor de espalda', en: 'Back pain' }, curable: false, congenitalChance: 0, onsetChance: .012, severity: 1, risks: ['espalda', 'trabajo', 'back', 'work'] },
  { id: 'insomnia', names: { es: 'Insomnio', en: 'Insomnia' }, curable: false, congenitalChance: .002, onsetChance: .012, severity: 1, risks: ['dormir', 'noche', 'sleep', 'night'] },
  { id: 'obesity', names: { es: 'Obesidad', en: 'Obesity' }, curable: false, congenitalChance: .002, onsetChance: .006, severity: 2, risks: ['peso', 'comida', 'weight', 'food'] },
  { id: 'burn', names: { es: 'Quemadura', en: 'Burn' }, curable: true, congenitalChance: 0, onsetChance: .004, severity: 2, risks: ['fuego', 'cocina', 'fire', 'kitchen'] },
  { id: 'concussion', names: { es: 'Conmoción cerebral', en: 'Concussion' }, curable: true, congenitalChance: 0, onsetChance: .002, severity: 3, risks: ['golpe', 'cabeza', 'hit', 'head'] },
  { id: 'panic_disorder', names: { es: 'Trastorno de pánico', en: 'Panic disorder' }, curable: false, congenitalChance: .002, onsetChance: .006, severity: 2, risks: ['pánico', 'miedo', 'panic', 'fear'] }
];

function diseaseById(id) {
  return diseaseCatalog.find((disease) => disease.id === id) || null;
}

function openPlayTimeRewards() {
  renderPlayTimeRewards();
  playTimeRewardsScreen?.classList.remove('hidden');
  playTimeRewardsScreen?.focus?.();
}

const governmentCatalog = [
  { es: { name: 'Gobierno de la Unión', party: 'Partido de la Unión', ideology: 'reformista', policy: 'inversión pública y educación' }, en: { name: 'Union Government', party: 'Union Party', ideology: 'reformist', policy: 'public investment and education' } },
  { es: { name: 'Administración Federal', party: 'Frente Federal', ideology: 'social', policy: 'salud y protección social' }, en: { name: 'Federal Administration', party: 'Federal Front', ideology: 'social', policy: 'healthcare and social protection' } },
  { es: { name: 'Gobierno de Renovación', party: 'Movimiento Renovador', ideology: 'liberal', policy: 'innovación y emprendimiento' }, en: { name: 'Renewal Government', party: 'Renewal Movement', ideology: 'liberal', policy: 'innovation and entrepreneurship' } },
  { es: { name: 'Administración Popular', party: 'Alianza Popular', ideology: 'comunitaria', policy: 'trabajo y desarrollo local' }, en: { name: 'Popular Administration', party: 'Popular Alliance', ideology: 'community-focused', policy: 'work and local development' } }
];

function currentGovernment(world = readSave().world) {
  const year = Math.max(1, Number(world?.time?.year) || 1);
  const term = Math.floor((year - 1) / 4);
  return { ...governmentCatalog[term % governmentCatalog.length], term, startYear: term * 4 + 1, endYear: term * 4 + 4, year };
}

function renderGovernmentPanel() {
  if (!governmentDashboard) return;
  const world = readSave().world;
  const government = currentGovernment(world);
  const data = government[currentLanguage] || government.en;
  const en = currentLanguage === 'en';
  governmentDashboard.replaceChildren();

  // Hero Card
  const heroCard = document.createElement('article');
  heroCard.className = 'panel-hero-card';

  const heroTop = document.createElement('div');
  heroTop.className = 'hero-header-row';

  const govName = document.createElement('h3');
  govName.className = 'hero-title';
  govName.textContent = data.name;

  const ideologyBadge = document.createElement('span');
  ideologyBadge.className = 'badge-pill active';
  ideologyBadge.textContent = String(data.ideology || '').toUpperCase();

  heroTop.append(govName, ideologyBadge);

  const partySub = document.createElement('p');
  partySub.className = 'hero-sub';
  partySub.textContent = `${en ? 'Ruling party' : 'Partido gobernante'}: ${data.party}`;

  // Term progress calculation (4-year term)
  const yearInTerm = Math.max(1, Math.min(4, ((government.year - 1) % 4) + 1));
  const termPct = Math.round((yearInTerm / 4) * 100);
  const blocks = Math.round(termPct / 10);
  const visualBar = '█'.repeat(blocks) + '░'.repeat(10 - blocks);

  const termProgress = document.createElement('div');
  termProgress.className = 'progress-bar-retro';
  termProgress.innerHTML = `<span>[${visualBar}] ${en ? 'Year' : 'Año'} ${yearInTerm}/4 (${termPct}%)</span><span class="stat-chip">${en ? 'Term' : 'Mandato'}: ${government.startYear}–${government.endYear}</span>`;

  heroCard.append(heroTop, partySub, termProgress);
  governmentDashboard.append(heroCard);

  // Metrics Grid
  const grid = document.createElement('div');
  grid.className = 'gov-metrics-grid';

  const metrics = [
    { label: en ? 'Ruling Party' : 'Partido Gobernante', value: data.party },
    { label: en ? 'State Ideology' : 'Ideología Estatal', value: data.ideology },
    { label: en ? 'Core Policy' : 'Política Principal', value: data.policy },
    { label: en ? 'World Timeline' : 'Línea Temporal', value: `${en ? 'Year' : 'Año'} ${government.year}` },
    { label: en ? 'Mandate Period' : 'Período Constitucional', value: `${government.startYear} — ${government.endYear}` },
    { label: en ? 'Regime Status' : 'Estado del Régimen', value: en ? 'CONSTITUTIONAL' : 'CONSTITUCIONAL' }
  ];

  metrics.forEach((m) => {
    const card = document.createElement('div');
    card.className = 'metric-card';
    const lbl = document.createElement('span');
    lbl.className = 'metric-label';
    lbl.textContent = m.label;
    const val = document.createElement('strong');
    val.className = 'metric-val';
    val.textContent = m.value;
    card.append(lbl, val);
    grid.append(card);
  });

  governmentDashboard.append(grid);
}

listen(playTimeRewardsButton, 'click', () => {
	openPlayTimeRewards();
});

listen(closePlayTimeRewardsButton, 'click', () => playTimeRewardsScreen?.classList.add('hidden'));
playTimeRewardsScreen?.addEventListener('click', (event) => {
  if (event.target === playTimeRewardsScreen) playTimeRewardsScreen.classList.add('hidden');
});

function renderActivePlayers(count, detail = '') {
  if (!activePlayersIndicator) return;
	window.__activePlayerCount = Number.isFinite(count) ? count : null;
  const label = currentLanguage === 'en' ? 'PLAYERS ONLINE' : 'JUGADORES ONLINE';
  activePlayersIndicator.textContent = `${label}: ${Number.isFinite(count) ? count : '—'}`;
  activePlayersIndicator.title = detail || (Number.isFinite(count) ? 'active game sessions' : 'Supabase presence unavailable');
}

async function refreshActivePlayers() {
  const localPlayerIsActive = Boolean(currentUsername);
  if (!window.lifeSupabase?.enabled) return renderActivePlayers(localPlayerIsActive ? 1 : 0);
  try {
	const count = await window.lifeSupabase.getActivePlayerCount();
	renderActivePlayers(localPlayerIsActive ? Math.max(1, count) : count);
  } catch (error) {
	renderActivePlayers(localPlayerIsActive ? 1 : 0, error?.message || window.lifeSupabase?.lastPresenceError || 'Supabase presence unavailable');
	console.warn('LIFE.AI active player count:', error);
  }
}

function normalizeDiseases(playerState) {
  playerState.diseases = Array.isArray(playerState.diseases) ? playerState.diseases.filter((disease) => diseaseById(disease.id)) : [];
  return playerState.diseases;
}

function diseaseLabel(disease) {
  const definition = diseaseById(disease.id);
  return definition?.names[currentLanguage] || disease.id;
}

function addDisease(playerState, disease, congenital = false) {
  normalizeDiseases(playerState);
  if (!disease || playerState.diseases.some((entry) => entry.id === disease.id && entry.active !== false)) return false;
  playerState.diseases.push({ id: disease.id, active: true, controlled: false, congenital, diagnosedAt: Number(playerState.age) || 0 });
  return true;
}

function assignBirthDiseases(playerState) {
  normalizeDiseases(playerState);
  diseaseCatalog.forEach((disease) => {
	if (Math.random() < disease.congenitalChance) addDisease(playerState, disease, true);
  });
}

function updateDiseases(decision, playerState, effects) {
  const text = normalizeWords(decision).join(' ');
  const diseases = normalizeDiseases(playerState);
  const treatment = /medico|médico|doctor|hospital|clinica|clínica|sanatorio|farmacia|remedio|pastilla|inyeccion|inyección|tratamiento|curar|curarme|sanar|operacion|operación|cirugia|cirugía|recuperar|terapia|medicine|medication|treatment|heal|cure|doctor|hospital|clinic|pharmacy|pill|surgery|therapy|rest/.test(text);
  if (treatment) {
    const currentHealth = Number(playerState.health) || 100;
    playerState.health = Math.min(100, currentHealth + 20);
    effects.push(currentLanguage === 'en' ? 'health: +20' : 'salud: +20');
  }
  diseases.forEach((entry) => {
	const definition = diseaseById(entry.id);
	if (!entry.active || !definition) return;
	if (treatment && definition.curable) {
	  entry.active = false;
	  effects.push(currentLanguage === 'en' ? `${definition.names.en}: treated` : `${definition.names.es}: tratada`);
	  return;
	}
	if (treatment && !definition.curable) {
	  entry.controlled = true;
	  effects.push(currentLanguage === 'en' ? `${definition.names.en}: controlled` : `${definition.names.es}: controlada`);
	}
	const energyLoss = entry.controlled ? Math.max(1, definition.severity - 1) : definition.severity;
	playerState.energy = Math.max(0, (Number(playerState.energy) || 0) - energyLoss);
	if (definition.severity >= 3 && !entry.controlled && Math.random() < .003) entry.fatalRisk = true;
  });
  const fatal = diseases.find((entry) => entry.fatalRisk && entry.active);
  return fatal ? (currentLanguage === 'en' ? `A sudden complication of ${diseaseLabel(fatal)} ended your life.` : `Una complicación súbita de ${diseaseLabel(fatal)} terminó con tu vida.`) : '';
}

function checkTemporalDiseases(save) {
  const playerState = save?.player;
  if (!playerState || save.lifeStatus !== 'active') return false;
  normalizeDiseases(playerState);
  const age = Number(playerState.age) || 0;
  const weatherRisk = ['cold', 'rainy'].includes(save.weather) ? .0008 : 0;
  let added = false;
  diseaseCatalog.forEach((definition) => {
	const ageRisk = age > 60 ? .0004 : 0;
	const chance = (definition.onsetChance * .01) + ageRisk + weatherRisk;
	if (Math.random() < chance && addDisease(playerState, definition, false)) {
	  const entry = playerState.diseases[playerState.diseases.length - 1];
	  entry.discoveredBy = 'world_time';
	  entry.discoveredAt = new Date().toISOString();
	  added = true;
	}
  });
  return added;
}

function hasEnoughNaturalText(value) {
  const normalized = normalizeWords(value).join(' ').trim();
  return normalized.length >= 2 && /[a-záéíóúüñ]/i.test(normalized) && !/^(.)\1+$/.test(normalized) && !/^[^aeiouáéíóúüñ]*$/i.test(normalized);
}

function renderWorldEnvironment(save) {
  const season = save?.world?.time?.season || seasonForMonth(save?.world?.time?.month);
	if (save?.lifeStatus === 'active' && !storyScreen?.classList.contains('hidden')) {
	renderWeather(normalizeWeather(save.weather));
	renderSeason(season);
	startMoneyRainCycle();
  } else {
	resetWeatherVisuals();
	resetMoneyRainVisuals();
  }
}

const seasonOrder = ['primavera', 'verano', 'otoño', 'invierno'];
const seasonLabels = {
  primavera: { es: 'PRIMAVERA', en: 'SPRING' },
  verano: { es: 'VERANO', en: 'SUMMER' },
  otoño: { es: 'OTOÑO', en: 'AUTUMN' },
  invierno: { es: 'INVIERNO', en: 'WINTER' }
};

function chooseInitialSeason() {
  return seasonOrder[Math.floor(Math.random() * seasonOrder.length)];
}

function seasonForMonth(month, offset = 0) {
  return seasonOrder[(Math.floor((Math.max(1, Number(month) || 1) - 1) / 3) + Number(offset || 0)) % seasonOrder.length];
}

function renderSeason(season) {
  const validSeason = seasonOrder.includes(season) ? season : 'primavera';
  document.body.classList.remove('season-spring', 'season-summer', 'season-autumn', 'season-winter');
  document.body.classList.add(`season-${({ primavera: 'spring', verano: 'summer', otoño: 'autumn', invierno: 'winter' })[validSeason]}`);
  if (seasonIndicator) {
	seasonIndicator.textContent = currentLanguage === 'en' ? `SEASON: ${seasonLabels[validSeason].en}` : `ESTACIÓN: ${seasonLabels[validSeason].es}`;
	seasonIndicator.classList.remove('hidden');
	seasonIndicator.style.display = 'block';
  }
  if (seasonEffects) {
	seasonEffects.replaceChildren();
	const symbols = { primavera: '✿', otoño: '❧', invierno: '❄', verano: '' };
	if (symbols[validSeason]) {
	  for (let index = 0; index < 10; index += 1) {
		const particle = document.createElement('span');
		particle.className = 'season-particle';
		particle.textContent = symbols[validSeason];
		particle.style.left = `${Math.random() * 100}%`;
		particle.style.animationDelay = `${Math.random() * 8}s`;
		particle.style.animationDuration = `${6 + Math.random() * 7}s`;
		seasonEffects.append(particle);
	  }
	}
  }
}

function resetSeasonVisuals() {
  document.body.classList.remove('season-spring', 'season-summer', 'season-autumn', 'season-winter');
  seasonIndicator?.classList.add('hidden');
	if (seasonIndicator) seasonIndicator.style.display = '';
  seasonEffects?.replaceChildren();
}

function annualDeathProbability(age) {
  const years = Math.max(0, Number(age) || 0);
  if (years < 18) return 0.0002;
  if (years < 35) return 0.0005 + ((years - 18) * 0.00005);
  if (years < 50) return 0.0015 + ((years - 35) * 0.0002);
  if (years < 65) return 0.0045 + ((years - 50) * 0.0008);
  if (years < 80) return 0.0165 + ((years - 65) * 0.0035);
  return Math.min(0.35, 0.069 + ((years - 80) * 0.012));
}

function diedWhileAging(previousAge, currentAge) {
  const from = Math.max(0, Number(previousAge) || 0);
  const to = Math.max(from, Number(currentAge) || 0);
  for (let age = from + 1; age <= to; age += 1) {
	if (Math.random() < annualDeathProbability(age)) return age;
  }
  return 0;
}

function isValidLocation(value) {
  const normalized = normalizeWords(value).join(' ').trim();
  if (!hasEnoughNaturalText(value) || normalized.length < 3 || normalized.split(' ').length > 8) return false;
  if (/^(a|aa|asdf|qwerty|test|xxx|none|null|nada|random|lugar|place|x+)$/i.test(normalized)) return false;
  return /^[a-záéíóúüñ0-9][a-záéíóúüñ0-9 .,'-]*$/i.test(normalized);
}

function isValidHobby(value) {
  const normalized = normalizeWords(value).join(' ').trim();
  if (!hasEnoughNaturalText(value) || normalized.length < 3 || normalized.split(' ').length > 5) return false;
  if (knownHobbies.has(normalized)) return true;
	const words = normalized.split(' ').filter((word) => word.length >= 3);
  return words.some((word) => knownHobbies.has(word) || [...knownHobbies].some((hobby) => word.includes(hobby) || hobby.includes(word) || closeSemanticWord(word, hobby)));
}

const careerAliasCache = new Map();
function normalizeCareerAlias(value) {
  const key = String(value || '');
  if (careerAliasCache.has(key)) return careerAliasCache.get(key);
  const res = key
	.toLowerCase()
	.normalize('NFD')
	.replace(/[\u0300-\u036f]/g, '')
	.replace(/[^a-z0-9]+/g, ' ')
	.trim();
  if (careerAliasCache.size > 800) {
    const firstKey = careerAliasCache.keys().next().value;
    careerAliasCache.delete(firstKey);
  }
  careerAliasCache.set(key, res);
  return res;
}

function extractContextualLocation(text) {
  const source = String(text || '').trim();
  const patterns = [
	/\b(?:estoy|estaba|me encuentro|me encontré|me encontre|permanezco|quedo)\s+(?:en|por)\s+(.+?)(?=[,.!?;]|$)/i,
	/\b(?:voy|vamos|fui|llego|llegue|llegué|viajo|viaje|me mudo|me mudé|me mude)\s+(?:a|al|en|hacia|por)\s+(.+?)(?=[,.!?;]|$)/i,
	/\b(?:go|went|arrive|arrived|travel|traveled|move|moved|i am|i'm|i was|i find myself|i found myself|stay|staying)\s+(?:to|at|in|near)\s+(.+?)(?=[,.!?;]|$)/i,
	/\b(?:mi ubicaci[oó]n es|ahora estoy en|ahora me encuentro en|my location is|i am currently in)\s+(.+?)(?=[,.!?;]|$)/i
  ];
  for (const pattern of patterns) {
	const match = source.match(pattern);
	if (!match) continue;
	  const value = match[1]
		.replace(/^(?:el|la|los|las|un|una|a|the|an)\s+/i, '')
	  .replace(/\s+(?:y|and)\s+(?:encuentro|veo|conozco|find|see|meet)\b.*$/i, '')
		.replace(/\s+(?:y|and)\s+(?:agarro|agarr[oé]|recojo|levanto|tomo|veo|encuentro|pick|grab|take)\b.*$/i, '')
	  .trim();
	if (/^(?:dormir|comer|descansar|trabajar|estudiar|entrenar|aprender|comprar|vender|jugar|caminar|correr|sleep|eat|rest|work|study|train|learn|buy|sell|play|walk|run)$/i.test(value)) continue;
	if (value) return value;
  }
  return '';
}

function detectFoundItem(text) {
  const normalized = normalizeCareerAlias(text);
	if (!/(encontre|encontrar|hall[eé]|recogi|recoger|agarre|agarro|agarrar|tome|tomo|tomar|levante|levanto|levantar|junte|junto|juntar|encontre|found|find|pick up|picked up|pick|grab|grabbed|take|took|collect|collected|discover)/.test(normalized)) return null;
	return extractItemAlias(normalized)?.item || null;
}

function extractItemAlias(text) {
  const normalized = normalizeCareerAlias(text);
  return itemAliases.find(({ alias }) => normalized.includes(alias)) || null;
}

function extractAcquiredItemName(text) {
  const source = normalizeCareerAlias(text);
  const match = source.match(/\b(?:agarro|agarre|agarrar|recojo|recogi|recoger|levanto|levante|levantar|tomo|tome|tomar|junto|junte|juntar|obtengo|obtuve|obtener|consigo|consegui|conseguir|recibo|recibi|recibir|encuentro|encontre|encontrar|hallo|halle|hallar|me dan|me dieron|pick up|picked up|pick|grab|grabbed|take|took|collect|collected|obtain|obtained|get|got|receive|received|find|found)\s+(?:a|al|el|la|los|las|un|una|unos|unas|some|the|an)?\s*([^,.!?;]+)/i);
  if (!match) return '';
  return match[1]
	.replace(/\s+(?:y|and)\s+(?:lo|la|los|las|algo|then|after)\b.*$/i, '')
	.replace(/\s+(?:porque|por que|because|so that)\b.*$/i, '')
	.trim();
}

function randomItemSaleValue() {
  return Math.floor(Math.random() * 96) + 5;
}

function addInventoryItem(playerState, name, location, definition = null) {
  playerState.inventory = Array.isArray(playerState.inventory) ? playerState.inventory : [];
	const normalizedName = normalizeCareerAlias(name).replace(/\b(?:que|y|and)\b.*$/i, '').trim();
  const existing = playerState.inventory.find((entry) => normalizeCareerAlias(entry.name) === normalizedName || (definition && entry.id === definition.id));
  if (existing) {
	existing.quantity = (existing.quantity || 0) + 1;
	if (!Number(existing.saleValue)) existing.saleValue = randomItemSaleValue();
	return existing;
  }
  const entry = {
	id: definition?.id || `custom-${normalizedName.replace(/\s+/g, '-')}-${Date.now()}`,
	name: definition?.names?.es || name,
	quantity: 1,
	saleValue: randomItemSaleValue(),
	location,
	discoveredAt: new Date().toISOString()
  };
  playerState.inventory.push(entry);
  return entry;
}

function addFoundItem(playerState, item, location) {
	return addInventoryItem(playerState, item.names.es, location, item);
}

function itemSaleValue(entry) {
  const definition = itemCatalog.find((item) => item.id === entry?.id);
  if (Number(entry?.saleValue) > 0) return Math.max(1, Math.round(Number(entry.saleValue)));
  return Math.max(5, Math.round(15 + (Number(definition?.base) || .25) * 85));
}

function findInventoryItem(text, inventory) {
  const normalized = normalizeCareerAlias(text);
  return (inventory || []).find((entry) => {
	const definition = itemCatalog.find((item) => item.id === entry.id);
	return normalized.includes(normalizeCareerAlias(entry.name || '')) || definition?.aliases.some((alias) => normalized.includes(normalizeCareerAlias(alias)));
  });
}

const careerAliases = careerCatalog
  .flatMap((career) => career.aliases.map((alias) => ({ career, alias: normalizeCareerAlias(alias) })))
  .sort((a, b) => b.alias.length - a.alias.length);

const careerFamilyLabels = {
  'Tecnología': { es: 'Tecnología', en: 'Technology' },
  'Salud': { es: 'Salud', en: 'Healthcare' },
  'Seguridad pública': { es: 'Seguridad pública', en: 'Public safety' },
  'Derecho': { es: 'Derecho', en: 'Law' },
  'Educación': { es: 'Educación', en: 'Education' },
  'Finanzas': { es: 'Finanzas', en: 'Finance' },
  'Comercio': { es: 'Comercio', en: 'Commerce' },
  'Transporte': { es: 'Transporte', en: 'Transportation' },
  'Ingeniería': { es: 'Ingeniería', en: 'Engineering' },
  'Oficios': { es: 'Oficios', en: 'Skilled trades' },
  'Agricultura': { es: 'Agricultura', en: 'Agriculture' },
  'Arte': { es: 'Arte', en: 'Arts' },
  'Deporte': { es: 'Deporte', en: 'Sports' },
  'Otros': { es: 'Otros', en: 'Other' }
};

function careerFamilyLabel(career) {
  return careerFamilyLabels[career?.family]?.[currentLanguage] || career?.family || (currentLanguage === 'en' ? 'Other' : 'Otros');
}

const itemCatalog = [
	{ id: 'stick', names: { es: 'palo', en: 'stick' }, aliases: ['palo', 'madera', 'trozo de madera', 'leña', 'tronco', 'rama', 'ramita', 'tablita', 'stick', 'wood', 'piece of wood', 'firewood', 'log', 'branch', 'plank'], places: { outdoors: 0.85, forest: 0.98, park: 0.8, hospital: 0.04, city: 0.25 }, base: 0.55 },
  { id: 'truck', names: { es: 'camión', en: 'truck' }, aliases: ['camion', 'camión', 'truck', 'lorry'], places: { road: 0.45, city: 0.3, industrial: 0.55, hospital: 0.02, forest: 0.04 }, base: 0.18 },
  { id: 'coin', names: { es: 'moneda', en: 'coin' }, aliases: ['moneda', 'monedas', 'coin', 'coins'], places: { city: 0.45, hospital: 0.3, school: 0.25, outdoors: 0.2, home: 0.3 }, base: 0.35 },
  { id: 'phone', names: { es: 'teléfono', en: 'phone' }, aliases: ['telefono', 'teléfono', 'celular', 'movil', 'móvil', 'phone', 'cellphone'], places: { city: 0.3, hospital: 0.25, school: 0.3, home: 0.5, office: 0.35 }, base: 0.3 },
  { id: 'book', names: { es: 'libro', en: 'book' }, aliases: ['libro', 'cuaderno', 'book', 'notebook'], places: { school: 0.8, library: 0.95, home: 0.45, hospital: 0.15, outdoors: 0.06 }, base: 0.35 },
  { id: 'medical_mask', names: { es: 'barbijo', en: 'medical mask' }, aliases: ['barbijo', 'mascarilla', 'cubrebocas', 'medical mask', 'mask'], places: { hospital: 0.9, school: 0.2, city: 0.15, outdoors: 0.08 }, base: 0.55 },
  { id: 'syringe', names: { es: 'jeringa', en: 'syringe' }, aliases: ['jeringa', 'syringe', 'needle'], places: { hospital: 0.55, outdoors: 0.01, home: 0.05, city: 0.03 }, base: 0.2 },
  { id: 'key', names: { es: 'llave', en: 'key' }, aliases: ['llave', 'llaves', 'key', 'keys'], places: { home: 0.6, office: 0.35, city: 0.2, hospital: 0.15, outdoors: 0.12 }, base: 0.3 },
  { id: 'wallet', names: { es: 'billetera', en: 'wallet' }, aliases: ['billetera', 'cartera', 'wallet', 'purse'], places: { city: 0.25, hospital: 0.15, office: 0.25, outdoors: 0.12 }, base: 0.18 },
  { id: 'tool', names: { es: 'herramienta', en: 'tool' }, aliases: ['herramienta', 'martillo', 'destornillador', 'tool', 'hammer', 'screwdriver'], places: { industrial: 0.75, workshop: 0.9, home: 0.3, hospital: 0.03, park: 0.05 }, base: 0.4 },
  { id: 'flower', names: { es: 'flor', en: 'flower' }, aliases: ['flor', 'flores', 'flower', 'flowers'], places: { park: 0.8, forest: 0.7, outdoors: 0.5, hospital: 0.1, city: 0.08 }, base: 0.4 },
  { id: 'food', names: { es: 'comida', en: 'food' }, aliases: ['comida', 'alimento', 'food', 'meal'], places: { home: 0.7, restaurant: 0.8, school: 0.3, hospital: 0.25, outdoors: 0.08 }, base: 0.4 },
  { id: 'document', names: { es: 'documento', en: 'document' }, aliases: ['documento', 'papel', 'document', 'paper'], places: { office: 0.8, school: 0.5, hospital: 0.35, city: 0.15, forest: 0.02 }, base: 0.25 },
  { id: 'backpack', names: { es: 'mochila', en: 'backpack' }, aliases: ['mochila', 'bolso', 'backpack', 'bag'], places: { school: 0.7, city: 0.3, outdoors: 0.25, home: 0.45 }, base: 0.3 }
];

const itemAliases = itemCatalog.flatMap((item) => item.aliases.map((alias) => ({ item, alias: normalizeCareerAlias(alias) }))).sort((a, b) => b.alias.length - a.alias.length);

const placeProfiles = [
  { id: 'hospital', aliases: ['hospital', 'clinica', 'clínica', 'sanatorio', 'hospital'], label: { es: 'hospital', en: 'hospital' } },
  { id: 'forest', aliases: ['bosque', 'selva', 'forest', 'woods'], label: { es: 'bosque', en: 'forest' } },
  { id: 'park', aliases: ['parque', 'plaza', 'park', 'garden', 'jardin', 'jardín'], label: { es: 'parque', en: 'park' } },
  { id: 'school', aliases: ['escuela', 'colegio', 'universidad', 'school', 'college', 'university'], label: { es: 'escuela', en: 'school' } },
  { id: 'office', aliases: ['oficina', 'empresa', 'office', 'workplace'], label: { es: 'oficina', en: 'office' } },
  { id: 'industrial', aliases: ['fabrica', 'fábrica', 'industria', 'industrial', 'warehouse', 'deposito', 'depósito'], label: { es: 'zona industrial', en: 'industrial area' } },
  { id: 'workshop', aliases: ['taller', 'workshop', 'garage', 'garaje'], label: { es: 'taller', en: 'workshop' } },
  { id: 'restaurant', aliases: ['restaurante', 'bar', 'cafeteria', 'cafetería', 'restaurant', 'cafe', 'café'], label: { es: 'restaurante', en: 'restaurant' } },
  { id: 'home', aliases: ['casa', 'hogar', 'departamento', 'home', 'house', 'apartment'], label: { es: 'casa', en: 'home' } },
  { id: 'road', aliases: ['calle', 'ruta', 'carretera', 'avenida', 'road', 'street', 'highway'], label: { es: 'calle', en: 'road' } },
  { id: 'city', aliases: ['ciudad', 'centro', 'city', 'downtown'], label: { es: 'ciudad', en: 'city' } },
  { id: 'outdoors', aliases: ['afuera', 'exterior', 'campo', 'outdoors', 'outside', 'field'], label: { es: 'exterior', en: 'outdoors' } }
  ,{ id: 'beach', aliases: ['playa', 'costa', 'mar', 'beach', 'coast', 'seaside'], label: { es: 'playa', en: 'beach' } }
  ,{ id: 'museum', aliases: ['museo', 'galeria', 'galería', 'museum', 'gallery'], label: { es: 'museo', en: 'museum' } }
  ,{ id: 'station', aliases: ['estacion', 'estación', 'terminal', 'station', 'terminal'], label: { es: 'estación', en: 'station' } }
  ,{ id: 'airport', aliases: ['aeropuerto', 'airport'], label: { es: 'aeropuerto', en: 'airport' } }
  ,{ id: 'library', aliases: ['biblioteca', 'library'], label: { es: 'biblioteca', en: 'library' } }
  ,{ id: 'university', aliases: ['facultad', 'campus', 'universidad', 'university', 'campus'], label: { es: 'universidad', en: 'university' } }
  ,{ id: 'market', aliases: ['mercado', 'feria', 'market', 'marketplace'], label: { es: 'mercado', en: 'market' } }
];

function detectPlaceProfile(location) {
  const normalized = normalizeCareerAlias(location);
  return placeProfiles.find((profile) => profile.aliases.some((alias) => normalized.includes(normalizeCareerAlias(alias)))) || { id: 'city', label: { es: 'lugar público', en: 'public place' } };
}

const randomNames = {
  es: ['Alejandro', 'Sofía', 'Mateo', 'Valentina', 'Lucas', 'Martina', 'Daniel', 'Camila', 'Nicolás', 'Emma', 'Julián', 'Lucía', 'Tomás', 'Renata', 'Gabriel', 'Elena', 'Santiago', 'Victoria', 'Bruno', 'Paula', 'Martín', 'Clara', 'Benjamín', 'Julia', 'Leonardo', 'Mía', 'Thiago', 'Abril', 'Franco', 'Malena', 'Agustín', 'Carolina', 'Facundo', 'Catalina', 'Diego', 'Florencia', 'Hugo', 'Isabella', 'Ramiro', 'Josefina', 'Emiliano', 'Pilar', 'Lautaro', 'Milagros', 'Gonzalo', 'Bianca', 'Federico', 'Aitana', 'Simón', 'Alma'],
  en: ['Alexander', 'Sophia', 'Matthew', 'Valentina', 'Lucas', 'Mia', 'Daniel', 'Camila', 'Nicholas', 'Emma', 'Julian', 'Lucy', 'Thomas', 'Ruby', 'Gabriel', 'Eleanor', 'Samuel', 'Victoria', 'Bruno', 'Paula', 'Martin', 'Clara', 'Benjamin', 'Julia', 'Leonard', 'Amelia', 'Theo', 'April', 'Frank', 'Maya', 'August', 'Caroline', 'Miles', 'Catherine', 'James', 'Florence', 'Hugo', 'Isabelle', 'Raymond', 'Josephine', 'Emil', 'Piper', 'Leo', 'Millie', 'Graham', 'Bianca', 'Frederick', 'Ava', 'Simon', 'Alice']
};

const randomSurnames = {
  es: ['García', 'Fernández', 'González', 'Rodríguez', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Díaz', 'Romero', 'Torres', 'Álvarez', 'Ruiz', 'Navarro', 'Vargas', 'Castro', 'Ortega', 'Molina', 'Delgado', 'Ramos', 'Vega', 'Cabrera', 'Méndez', 'Silva', 'Morales', 'Ibarra', 'Herrera', 'Medina', 'Suárez', 'Acosta', 'Rojas', 'Campos', 'Ponce', 'Serrano', 'Domínguez', 'Vázquez', 'Soto', 'Giménez', 'Márquez', 'Núñez', 'Villar', 'Rey', 'Cortés', 'Moya', 'Bravo', 'Pastor', 'Crespo', 'Román', 'Durán', 'Ferrer', 'Carmona', 'Benítez', 'Sáez', 'Arias', 'Mendoza', 'Fuentes', 'Luna', 'Prieto', 'Parra', 'Estévez', 'Velasco', 'Miranda', 'Escobar', 'Maldonado', 'Correa', 'Cáceres', 'Vera', 'León'],
  en: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Wilson', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Moore', 'Young', 'King', 'Wright', 'Hill', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Carter', 'Mitchell', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Peterson', 'Gray', 'Watson', 'Brooks', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons']
};

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function createFamilyMember(role, name, surname, relation) {
  return { id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, role, name, surname, relation };
}

function normalizeFamilyTree(familyTree, player = {}) {
  const family = familyTree && typeof familyTree === 'object' ? familyTree : generateFamilyTree(player.surname || '');
  family.members = Array.isArray(family.members) ? family.members : [];
  family.children = Array.isArray(family.children) ? family.children : [];
  family.pets = Array.isArray(family.pets) ? family.pets : [];
  family.partner = family.partner && typeof family.partner === 'object' ? family.partner : null;
  family.maritalStatus = family.maritalStatus || (family.partner ? 'dating' : 'single');
  family.children = family.children.map((child) => ({
	id: child.id || `child-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
	name: child.name || (currentLanguage === 'en' ? 'Unnamed child' : 'Hijo sin nombre'),
	surname: child.surname || player.surname || '',
	age: Math.max(0, Number(child.age) || 0),
	relation: child.relation || 'child',
	bornAt: child.bornAt || new Date().toISOString(),
	otherParent: child.otherParent || family.partner?.name || ''
  }));
  family.pets = family.pets.map((pet) => ({
	id: pet.id || `pet-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
	name: pet.name || (currentLanguage === 'en' ? 'Unnamed pet' : 'Mascota sin nombre'),
	type: pet.type || 'pet',
	adoptedAt: pet.adoptedAt || new Date().toISOString()
  }));
  return family;
}

function generateFamilyTree(playerSurname = '') {
  const names = randomNames[currentLanguage] || randomNames.es;
  const surnames = randomSurnames[currentLanguage] || randomSurnames.es;
  const usedNames = new Set();
  const nextName = () => {
	let name = randomFrom(names);
	while (usedNames.has(name)) name = randomFrom(names);
	usedNames.add(name);
	return name;
  };
	const paternalSurname = playerSurname.trim() || randomFrom(surnames);
  let maternalSurname = randomFrom(surnames);
  while (maternalSurname === paternalSurname) maternalSurname = randomFrom(surnames);
  const parentSurname = `${paternalSurname} ${maternalSurname}`;
	const members = [
	createFamilyMember('father', nextName(), paternalSurname, 'father'),
	createFamilyMember('mother', nextName(), parentSurname, 'mother'),
	createFamilyMember('paternal-grandfather', nextName(), paternalSurname, 'paternalGrandfather'),
	createFamilyMember('paternal-grandmother', nextName(), paternalSurname, 'paternalGrandmother'),
	createFamilyMember('maternal-grandfather', nextName(), maternalSurname, 'maternalGrandfather'),
	createFamilyMember('maternal-grandmother', nextName(), maternalSurname, 'maternalGrandmother')
	];
	const addDiminishingRelatives = (role, relation, surname, baseChance) => {
	  for (let index = 0; index < 1000; index += 1) {
		const chance = baseChance / (index + 1);
		if (Math.random() >= chance) break;
		members.push(createFamilyMember(`${role}-${index + 1}`, nextName(), surname, relation));
	  }
	};
	addDiminishingRelatives('sibling', 'sibling', parentSurname, 0.8);
	addDiminishingRelatives('cousin', 'cousin', paternalSurname, 0.8);
	addDiminishingRelatives('maternal-cousin', 'maternalCousin', maternalSurname, 0.8);
	return {
	paternalSurname,
	maternalSurname,
	  surnameSource: playerSurname,
	  maritalStatus: 'single',
	  partner: null,
	  children: [],
	  pets: [],
	members
  };
}

// Replace this URL with your Discord invite link.
const DISCORD_URL = 'https://discord.gg/Tsw2htGAb';
if (discordLink) {
  discordLink.href = DISCORD_URL;
  discordLink.target = '_blank';
  discordLink.rel = 'noopener noreferrer';
}

const questions = [
	{ label: '¿Cuál es tu nombre?', hint: 'Escribe tu nombre.', key: 'name' },
  { label: '¿Cuál es tu apellido?', hint: 'Escribe tu apellido.', key: 'surname' },
  { label: '¿Cuántos años tienes?', hint: 'Introduce tu edad.', key: 'age' },
  { label: '¿Cuánto dinero tienes?', hint: 'Introduce una cantidad inicial.', key: 'money' },
	{ label: '¿Dónde comienza tu historia?', hint: 'Escribe una ubicación.', key: 'location' },
  { label: '¿Cuál es tu hobby?', hint: 'Ejemplo: música, fútbol, videojuegos, dibujo...', key: 'hobby' }
];

const creatorPosts = [
  {
	date: '2026-09-06',
	category: { es: 'LANZAMIENTO', en: 'RELEASE' },
	title: { es: 'Primera versión 0.0.1', en: 'First version 0.0.1' },
	text: { es: 'Primera versión de Unnamed life simulation. El comienzo de una vida, una historia y un mundo que todavía están por descubrir.', en: 'First version of Unnamed life simulation. The beginning of a life, a story, and a world that are still waiting to be discovered.' }
	},
	{
	date: '2026-09-07',
	category: { es: 'ACTUALIZACIÓN', en: 'UPDATE' },
	title: { es: 'NUEVA VERSION 0.0.1a', en: 'NEW VERSION 0.0.1a' },
	text: { es: 'Esta actualización mejora el árbol genealógico con familiares generados de forma más completa y organizada. También incorpora un sistema de trabajos y profesiones con ingresos y consumo de energía, además de nuevos ítems que pueden encontrarse durante la historia y añadirse al inventario.', en: 'This update improves the family tree with more complete and organized generated relatives. It also introduces a jobs and professions system with income and energy costs, plus new items that can be discovered during the story and added to the inventory.' }
	},
	{
	date: '2026-09-08',
	category: { es: 'ACTUALIZACIÓN', en: 'UPDATE' },
	title: { es: 'Mundo vivo y sincronización ampliada', en: 'Living world and expanded sync' },
	text: { es: 'Se amplían los lugares, hobbies, enfermedades y señales que LIFE.AI puede aprender. También se mejora la presencia online y la sincronización segura con Supabase.', en: 'Locations, hobbies, diseases and learning signals have been expanded. Online presence and secure Supabase synchronization have also been improved.' }
	},
	{
	date: '2026-09-09',
	category: { es: 'ACTUALIZACIÓN', en: 'UPDATE' },
	title: { es: 'NUEVA VERSION 0.0.1c — Gobiernos y recompensas', en: 'NEW VERSION 0.0.1c — Governments and rewards' },
	text: { es: 'Llegan los gobiernos de turno, que cambian cada cuatro años, el Palo Presidencial como recompensa por 30 minutos de juego y la venta directa de objetos del inventario. También mejoraron la IA, la posibilidad de tener hijos y la interfaz.', en: 'Current governments now change every four years. The Presidential Stick arrives as a 30-minute play-time reward, along with direct inventory sales. LIFE.AI, having children and the interface also received improvements.' }
	},
	{
	date: '2026-09-11',
	category: { es: 'ACTUALIZACIÓN', en: 'UPDATE' },
	title: { es: 'NUEVA VERSION 0.0.1d — Mascotas, Lluvia de Dinero y Rediseño de Paneles', en: 'NEW VERSION 0.0.1d — Pets, Money Rain & Panels Redesign' },
	text: { es: 'En esta versión 0.0.1d se solucionó el problema de vidas triplicadas en vidas anteriores. Se añade el sistema de mascotas con cuidados y opción de dar en adopción (con protección anti-doble click), evento especial de Lluvia de Dinero (+1000% de ganancias cada 5 min), rediseño estético y ordenado para todos los paneles del menú (Gobierno con mandato y métricas, Carreras con catálogo, Familia e Inventario), pie de página fijo de derechos de autor de icerix, envío de formularios con tecla Enter, grandes optimizaciones y un barrido de idioma completo (ES/EN).', en: 'In version 0.0.1d, duplicate previous lives on creation are fixed. Adds the pet care & adoption system with give-up option (and anti-double click protection), Money Rain event (+1000% earnings every 5 min), clean aesthetic redesign for all menu panels (Government with mandate progress & metrics, Careers catalog, Family and Inventory), global fixed copyright footer by icerix, Enter key form submission, major speed optimizations, and a full bilingual language sweep (ES/EN).' }
	}
];

function detectCareer(text) {
	const normalized = normalizeCareerAlias(text);
  const match = careerAliases.find(({ alias }) => normalized.includes(alias));
  return match?.career || null;
}

function careerLabel(career) {
	return career ? career.names[currentLanguage] : t('none');
}

function careerById(id) {
  return careerCatalog.find((career) => career.id === id) || null;
}

function renderCurrentOccupation() {
  if (!currentOccupation) return;
  const save = readSave();
  const activePlayer = player?.name ? player : (save.player || {});
  const isStoryActive = !storyScreen?.classList.contains('hidden') && Boolean(activePlayer.name) && save.lifeStatus === 'active';
  if (!isStoryActive) {
    currentOccupation.textContent = '';
    currentOccupation.classList.add('hidden');
    return;
  }
  const career = careerById(activePlayer.occupation);
  currentOccupation.classList.remove('hidden');
	const age = Number(activePlayer.age) || 0;
	const characterName = activePlayer.name || t('none');
	const money = Number(activePlayer.money) || 0;
	const location = activePlayer.location || (currentLanguage === 'en' ? 'unknown' : 'desconocida');
  currentOccupation.textContent = currentLanguage === 'en'
	? `CHARACTER: ${characterName} · AGE: ${age} · JOB: ${careerLabel(career)} · MONEY: $${money} · LOCATION: ${location}`
	: `PERSONAJE: ${characterName} · EDAD: ${age} · TRABAJO: ${careerLabel(career)} · DINERO: $${money} · UBICACIÓN: ${location}`;
}

function renderCareersPanel() {
  if (!careersDashboard) return;
  careersDashboard.replaceChildren();
  const en = currentLanguage === 'en';
  const save = readSave();
  const current = careerById(save.player?.occupation);

  // Active Career Hero Card
  const heroCard = document.createElement('article');
  heroCard.className = 'panel-hero-card';

  const heroTop = document.createElement('div');
  heroTop.className = 'hero-header-row';

  const activeTitle = document.createElement('h3');
  activeTitle.className = 'hero-title';
  activeTitle.textContent = current ? current.names[currentLanguage] : (en ? 'No Active Career' : 'Sin Profesión Activa');

  const statusBadge = document.createElement('span');
  statusBadge.className = `badge-pill ${current ? 'active' : ''}`;
  statusBadge.textContent = current ? (en ? 'ACTIVE JOB' : 'EMPLEO ACTUAL') : (en ? 'UNEMPLOYED' : 'DESEMPLEADO');

  heroTop.append(activeTitle, statusBadge);

  const detailsRow = document.createElement('div');
  detailsRow.style.display = 'flex';
  detailsRow.style.gap = '8px';
  detailsRow.style.flexWrap = 'wrap';
  detailsRow.style.margin = '8px 0 0 0';

  if (current) {
    const familyChip = document.createElement('span');
    familyChip.className = 'stat-chip';
    familyChip.textContent = `📁 ${careerFamilyLabel(current)}`;

    const incomeChip = document.createElement('span');
    incomeChip.className = 'stat-chip';
    incomeChip.style.borderColor = 'var(--accent)';
    incomeChip.textContent = `💰 +$${current.income} / ${en ? 'mo' : 'mes'}`;

    const energyChip = document.createElement('span');
    energyChip.className = 'stat-chip';
    energyChip.textContent = `⚡ -${current.energy} ${en ? 'energy' : 'energía'}`;

    detailsRow.append(familyChip, incomeChip, energyChip);
  } else {
    const noJobP = document.createElement('p');
    noJobP.className = 'hero-sub';
    noJobP.textContent = en
      ? 'Your character does not have an active profession. Make decisions related to education, applications, or work in the story!'
      : 'Tu personaje todavía no tiene un empleo. ¡Toma decisiones relacionadas a estudio, postulaciones o trabajo en tu historia!';
    detailsRow.append(noJobP);
  }

  heroCard.append(heroTop, detailsRow);
  careersDashboard.append(heroCard);

  // Catalog Section
  const catalogTitle = document.createElement('h3');
  catalogTitle.className = 'panel-section-title';
  catalogTitle.textContent = `[ ${en ? 'AVAILABLE CAREER DIRECTORY' : 'DIRECTORIO DE PROFESIONES'} ]`;
  careersDashboard.append(catalogTitle);

  const grid = document.createElement('div');
  grid.className = 'panel-grid-2';

  careerCatalog.forEach((career) => {
    const card = document.createElement('article');
    const isCurrentCareer = current?.id === career.id;
    card.className = `career-card ${isCurrentCareer ? 'active-career' : ''}`;

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.gap = '6px';

    const name = document.createElement('strong');
    name.textContent = career.names[currentLanguage] || career.names.es;

    const familyTag = document.createElement('span');
    familyTag.className = 'stat-chip';
    familyTag.style.fontSize = '9px';
    familyTag.textContent = career.family;

    header.append(name, familyTag);

    const stats = document.createElement('p');
    stats.style.margin = '4px 0 0 0';
    stats.style.fontSize = '10.5px';
    stats.style.color = 'var(--text-muted)';
    stats.textContent = `${en ? 'Income' : 'Ingreso'}: +$${career.income} · ${en ? 'Energy' : 'Energía'}: -${career.energy}`;

    card.append(header, stats);
    grid.append(card);
  });

  careersDashboard.append(grid);
}

function renderFamilyPanel() {
  if (!familyDashboard) return;
  const save = readSave();
  const family = normalizeFamilyTree(save.player?.familyTree, save.player || {});
  familyDashboard.replaceChildren();
  const en = currentLanguage === 'en';
  const statusLabels = en
    ? { single: 'Single', dating: 'In a relationship', married: 'Married', divorced: 'Divorced' }
    : { single: 'Soltero/a', dating: 'En pareja', married: 'Casado/a', divorced: 'Divorciado/a' };

  // Marital Status Hero Card
  const heroCard = document.createElement('article');
  heroCard.className = 'panel-hero-card';

  const heroTop = document.createElement('div');
  heroTop.className = 'hero-header-row';

  const maritalTitle = document.createElement('h3');
  maritalTitle.className = 'hero-title';
  maritalTitle.textContent = en ? 'Current Marital Status' : 'Estado Civil Actual';

  const statusBadge = document.createElement('span');
  statusBadge.className = 'badge-pill active';
  statusBadge.textContent = String(statusLabels[family.maritalStatus] || family.maritalStatus).toUpperCase();

  heroTop.append(maritalTitle, statusBadge);

  const heroBody = document.createElement('div');
  heroBody.style.marginTop = '6px';

  if (family.partner) {
    const partnerP = document.createElement('p');
    partnerP.className = 'hero-sub';
    partnerP.textContent = `👤 ${en ? 'Partner' : 'Pareja'}: ${family.partner.name} ${family.partner.surname || ''} ${family.maritalStatus === 'married' ? (en ? '(Spouse)' : '(Cónyuge)') : ''}`;
    heroBody.append(partnerP);
  } else {
    const singleP = document.createElement('p');
    singleP.className = 'hero-sub';
    singleP.textContent = en ? '// No current romantic partner' : '// Sin pareja sentimental actualmente';
    heroBody.append(singleP);
  }

  heroCard.append(heroTop, heroBody);
  familyDashboard.append(heroCard);

  // Children Section
  const childrenSection = document.createElement('section');
  childrenSection.className = 'family-group';
  const childrenTitle = document.createElement('h3');
  childrenTitle.className = 'panel-section-title';
  childrenTitle.textContent = `[ ${en ? 'CHILDREN' : 'HIJOS'} ] (${family.children.length})`;
  childrenSection.append(childrenTitle);

  if (family.children.length) {
    const chGrid = document.createElement('div');
    chGrid.className = 'panel-grid-2';
    family.children.forEach((child) => {
      const card = document.createElement('article');
      card.className = 'panel-card';
      const name = document.createElement('strong');
      name.textContent = `👶 ${child.name} ${child.surname || ''}`;
      const ageP = document.createElement('p');
      ageP.textContent = `${en ? 'Age' : 'Edad'}: ${child.age} ${en ? 'years old' : 'años'}`;
      card.append(name, ageP);
      chGrid.append(card);
    });
    childrenSection.append(chGrid);
  } else {
    const emptyP = document.createElement('p');
    emptyP.className = 'panel-empty';
    emptyP.textContent = en ? '// No children recorded in this life' : '// No hay hijos registrados en esta vida';
    childrenSection.append(emptyP);
  }
  familyDashboard.append(childrenSection);

  // Pets Section
  const petsSection = document.createElement('section');
  petsSection.className = 'family-group';
  const petsTitle = document.createElement('h3');
  petsTitle.className = 'panel-section-title';
  petsTitle.textContent = `[ ${en ? 'COMPANION PETS' : 'MASCOTAS DEL HOGAR'} ] (${family.pets?.length || 0})`;
  petsSection.append(petsTitle);

  if (family.pets?.length) {
    const petGrid = document.createElement('div');
    petGrid.className = 'panel-grid-2';
    const petLabels = { dog: en ? 'Dog' : 'Perro', cat: en ? 'Cat' : 'Gato', bird: en ? 'Bird' : 'Ave', hamster: 'Hámster', rabbit: en ? 'Rabbit' : 'Conejo' };
    family.pets.forEach((pet) => {
      const card = document.createElement('article');
      card.className = 'panel-card';
      const nameRow = document.createElement('div');
      nameRow.style.display = 'flex';
      nameRow.style.justifyContent = 'space-between';
      nameRow.style.alignItems = 'center';
      const name = document.createElement('strong');
      name.textContent = `🐾 ${pet.name}`;
      const typeTag = document.createElement('span');
      typeTag.className = 'stat-chip';
      typeTag.textContent = petLabels[pet.type] || pet.type;
      nameRow.append(name, typeTag);

      const stats = document.createElement('p');
      stats.textContent = `${en ? 'Health' : 'Salud'}: ${pet.health ?? 100}% · ${en ? 'Happiness' : 'Ánimo'}: ${pet.happiness ?? 80}%`;
      card.append(nameRow, stats);
      petGrid.append(card);
    });
    petsSection.append(petGrid);
  } else {
    const emptyP = document.createElement('p');
    emptyP.className = 'panel-empty';
    emptyP.textContent = en ? '// No pets adopted yet' : '// Todavía no has adoptado ninguna mascota';
    petsSection.append(emptyP);
  }

  const managePetsBtn = document.createElement('button');
  managePetsBtn.type = 'button';
  managePetsBtn.className = 'history-button';
  managePetsBtn.style.marginTop = '10px';
  managePetsBtn.textContent = en ? '[ MANAGE & CARE FOR PETS ]' : '[ CUIDAR Y GESTIONAR MASCOTAS ]';
  managePetsBtn.addEventListener('click', () => {
    familyScreen.classList.add('hidden');
    renderPetsPanel();
    petsScreen?.classList.remove('hidden');
  });
  petsSection.append(managePetsBtn);
  familyDashboard.append(petsSection);

  // Relatives Section
  if (!family.members?.length) return;
  const grouped = new Map();
  family.members.forEach((member) => {
    const group = member.relation.startsWith('paternal') || member.relation === 'cousin'
      ? (en ? 'Paternal Family' : 'Familia Paterna')
      : member.relation.startsWith('maternal') || member.relation === 'maternalCousin'
      ? (en ? 'Maternal Family' : 'Familia Materna')
      : (en ? 'Close Family' : 'Familia Cercana');
    if (!grouped.has(group)) grouped.set(group, []);
    grouped.get(group).push(member);
  });

  const relationLabels = en
    ? { father: 'father', mother: 'mother', paternalGrandfather: 'paternal grandfather', paternalGrandmother: 'paternal grandmother', maternalGrandfather: 'maternal grandfather', maternalGrandmother: 'maternal grandmother', sibling: 'sibling', cousin: 'cousin', maternalCousin: 'maternal cousin' }
    : { father: 'padre', mother: 'madre', paternalGrandfather: 'abuelo paterno', paternalGrandmother: 'abuela paterna', maternalGrandfather: 'abuelo materno', maternalGrandmother: 'abuela materna', sibling: 'hermano/a', cousin: 'primo/a', maternalCousin: 'primo/a materno/a' };

  grouped.forEach((members, group) => {
    const section = document.createElement('section');
    section.className = 'family-group';
    const heading = document.createElement('h3');
    heading.className = 'panel-section-title';
    heading.textContent = `[ ${group} ]`;
    section.append(heading);

    const relGrid = document.createElement('div');
    relGrid.className = 'panel-grid-2';

    members.forEach((member) => {
      const card = document.createElement('article');
      card.className = 'panel-card';
      const name = document.createElement('strong');
      name.textContent = `${member.name} ${member.surname}`;
      const relP = document.createElement('p');
      relP.textContent = `${en ? 'Relation' : 'Parentesco'}: ${relationLabels[member.relation] || member.relation}`;
      card.append(name, relP);
      relGrid.append(card);
    });

    section.append(relGrid);
    familyDashboard.append(section);
  });
}

function renderInventoryPanel() {
  if (!inventoryDashboard) return;
  inventoryDashboard.replaceChildren();
  const en = currentLanguage === 'en';
  const save = readSave();
  const inventory = save.player?.inventory || [];

  if (!inventory.length) {
    const empty = document.createElement('p');
    empty.className = 'panel-empty';
    empty.textContent = en ? '// inventory is empty' : '// el inventario está vacío';
    inventoryDashboard.append(empty);
    return;
  }

  // Calculate total worth
  let totalNetWorth = 0;
  inventory.forEach((entry) => {
    let val = itemSaleValue(entry);
    if (isMoneyRainActive()) val *= 10;
    totalNetWorth += val * (entry.quantity || 1);
  });

  // Hero Summary
  const heroCard = document.createElement('article');
  heroCard.className = 'panel-hero-card';

  const heroTop = document.createElement('div');
  heroTop.className = 'hero-header-row';

  const summaryTitle = document.createElement('h3');
  summaryTitle.className = 'hero-title';
  summaryTitle.textContent = `${en ? 'Possessed Items' : 'Objetos en Posesión'}: ${inventory.reduce((acc, i) => acc + (i.quantity || 1), 0)}`;

  const worthBadge = document.createElement('span');
  worthBadge.className = 'badge-pill active';
  worthBadge.textContent = `${en ? 'TOTAL VALUE' : 'VALOR TOTAL'}: $${totalNetWorth}`;

  heroTop.append(summaryTitle, worthBadge);

  if (isMoneyRainActive()) {
    const rainNotice = document.createElement('p');
    rainNotice.className = 'hero-sub';
    rainNotice.style.color = '#ffdd44';
    rainNotice.textContent = en ? '🌧️ MONEY RAIN ACTIVE: 10x (+1000%) SELL VALUE!' : '🌧️ ¡LLUVIA DE DINERO ACTIVA: VENTA POR 10x (+1000%)!';
    heroCard.append(heroTop, rainNotice);
  } else {
    heroCard.append(heroTop);
  }

  inventoryDashboard.append(heroCard);

  // Grid of items
  const grid = document.createElement('div');
  grid.className = 'panel-grid-2';

  inventory.forEach((entry) => {
    const item = itemCatalog.find((candidate) => candidate.id === entry.id);
    const card = document.createElement('article');
    card.className = 'inventory-card';

    const head = document.createElement('div');
    head.style.display = 'flex';
    head.style.justifyContent = 'space-between';
    head.style.alignItems = 'center';

    const title = document.createElement('strong');
    title.textContent = `${item?.names[currentLanguage] || entry.name} x${entry.quantity}`;

    let saleValue = itemSaleValue(entry);
    if (isMoneyRainActive()) saleValue *= 10;

    const valueChip = document.createElement('span');
    valueChip.className = 'stat-chip';
    valueChip.textContent = `$${saleValue} c/u`;

    head.append(title, valueChip);

    const details = document.createElement('p');
    details.style.margin = '4px 0 8px 0';
    details.style.fontSize = '10.5px';
    details.textContent = en
      ? `Location: ${entry.location || 'unknown place'}${isMoneyRainActive() ? ' (RAIN x10!)' : ''}`
      : `Ubicación: ${entry.location || 'desconocida'}${isMoneyRainActive() ? ' (¡LLUVIA x10!)' : ''}`;

    const sellButton = document.createElement('button');
    sellButton.type = 'button';
    sellButton.className = 'history-button inventory-sell-button';
    sellButton.textContent = en ? `[ SELL FOR $${saleValue} ]` : `[ VENDER POR $${saleValue} ]`;
    sellButton.addEventListener('click', () => sellInventoryItem(entry.id));

    card.append(head, details, sellButton);
    grid.append(card);
  });

  inventoryDashboard.append(grid);
}

function sellInventoryItem(itemId) {
  const save = readSave();
  const inventory = save.player?.inventory || [];
  const entry = inventory.find((item) => item.id === itemId);
  if (!entry) return;
  let value = itemSaleValue(entry);
  if (isMoneyRainActive()) value *= 10;
  save.player.money = (Number(save.player.money) || 0) + value;
  entry.quantity = Math.max(0, (Number(entry.quantity) || 0) - 1);
  save.player.inventory = inventory.filter((item) => item.quantity > 0);
  saveCurrentGame(save);
  renderInventoryPanel();
  renderStats();
  renderCurrentOccupation();
}
function localizedSeason(season) {
  const labels = {
	primavera: { es: 'primavera', en: 'spring' },
	verano: { es: 'verano', en: 'summer' },
	otoño: { es: 'otoño', en: 'autumn' },
	invierno: { es: 'invierno', en: 'winter' }
  };
  return labels[season]?.[currentLanguage] || season;
}

function localizedStatus(status) {
  const labels = {
	active: { es: 'activa', en: 'active' },
	completed: { es: 'completada', en: 'completed' },
	pending: { es: 'pendiente', en: 'pending' },
	resolved: { es: 'resuelto', en: 'resolved' }
  };
  return labels[status]?.[currentLanguage] || status;
}

function createFreshPlayer() {
  return {
    energy: 100,
    health: 100,
    reputation: 0,
    mood: (typeof currentLanguage !== 'undefined' && currentLanguage === 'en') ? 'stable' : 'estable',
    occupation: '',
    inventory: [],
    skills: {},
    relationships: {},
    events: [],
    diseases: [],
    rewards: {},
    familyTree: typeof generateFamilyTree === 'function' ? generateFamilyTree('') : {}
  };
}

const player = createFreshPlayer();
let currentQuestion = 0;
let lastAnalysis = null;
window.__lifeGlobalPatterns = [];
let applicationReady = false;
let weatherTimer = null;
let worldClockTimer = null;
const sessionStartedAt = Date.now();

const weatherTypes = ['cold', 'hot', 'fog', 'rainy'];
const weatherLabels = {
  cold: { es: 'frío', en: 'cold' },
  hot: { es: 'caluroso', en: 'hot' },
  fog: { es: 'niebla', en: 'fog' },
  rainy: { es: 'lluvioso', en: 'rainy' }
};

const uiText = {
  es: {
	appTitle: 'Simulador de vida sin nombre', languageLabel: 'IDIOMA:', languageAria: 'Idioma',
	footerCredits: 'Juego hecho por icerix. Todos los derechos reservados 2026',
	usernameTitle: 'ACCESO DE USUARIO', usernameIntro: 'Inicia sesión o regístrate para acceder a tus vidas y guardarlas en la nube.', usernameLabel: 'Nombre de usuario', usernameSubmit: '[ ENTRAR ]', usernameHint: 'Usa de 2 a 24 caracteres para tu usuario y mínimo 6 para tu contraseña.', usernameError: 'ERROR: introduce un nombre de usuario válido.', userStatus: 'USUARIO:',
	loginTab: '[ INICIAR SESIÓN ]', registerTab: '[ REGISTRARSE ]', loginSubmit: '[ ENTRAR ]', registerSubmit: '[ CREAR CUENTA ]',
	loginUserLabel: 'Usuario o Email', loginPassLabel: 'Contraseña', loginUserPlaceholder: 'Tu usuario o correo', loginPassPlaceholder: 'Tu contraseña',
	regUserLabel: 'Nombre de Usuario', regPassLabel: 'Contraseña', regPassConfirmLabel: 'Confirmar Contraseña', regUserPlaceholder: 'Ej: Viajero2026', regPassPlaceholder: 'Mínimo 6 caracteres', regPassConfirmPlaceholder: 'Repite tu contraseña',
	authUsernameError: 'ERROR: introduce un nombre de usuario válido de 2 a 24 caracteres.',
	authPassMismatch: 'ERROR: Las contraseñas no coinciden.', authPassShort: 'ERROR: La contraseña debe tener al menos 6 caracteres.',
	authSuccessRegister: 'Cuenta creada con éxito. Entrando...', authSuccessLogin: 'Sesión iniciada. Cargando...',
	welcomeGreeting: 'CENTRAL DE VIDAS', welcomeIntro: 'Comienza una nueva simulación o reanuda tus vidas anteriores guardadas.', welcomeNewLife: '+ COMENZAR NUEVA VIDA', previousLivesTitle: 'VIDAS ANTERIORES', previousLivesSubtitle: '// Reanuda solo aquellas que sigan vivas. Las vidas fallecidas permanecerán como historial.',
	statusAlive: 'EN VIDA', statusEnded: 'FALLECIDO', resumeLife: '[ REANUDAR VIDA ]', deceasedLife: '[ FALLECIDO ]',
	exitLife: '[ GUARDAR Y SALIR ]', exitLifeConfirm: '¿Deseas pausar y salir al menú de vidas? Tu progreso quedará guardado sin morir.',
	noPreviousLives: '// No tienes vidas guardadas todavía. ¡Comienza una nueva simulación!_',
	start: '+ COMENZAR NUEVA VIDA', next: '[ ENTER ]', name: '¿Cuál es tu nombre?', surname: '¿Cuál es tu apellido?', age: '¿Cuántos años tienes?', money: '¿Cuánto dinero tienes?', location: '¿Dónde comienza tu historia?', hobby: '¿Cuál es tu hobby?',
	nameHint: 'Escribe tu nombre.', surnameHint: 'Escribe tu apellido.', ageHint: 'Introduce tu edad.', moneyHint: 'Introduce una cantidad inicial.', locationHint: 'Escribe una ubicación.', hobbyHint: 'Ejemplo: música, fútbol, videojuegos, dibujo...',
		storyLabel: '¿Cómo quieres continuar tu vida?', storyPlaceholder: 'Escribe lo que sucede a continuación...', save: '[ GUARDAR ]', menu: '[ MENU ]', play: '[ JUGAR ]', blog: '[ BLOG ]', logout: '[ CERRAR SESIÓN ]', logoutConfirm: '¿Quieres cerrar la sesión? Tus partidas guardadas se conservarán en la nube y localmente.', history: '[ VER TODAS LAS DECISIONES ]', stats: '[ VER ESTADÍSTICAS ]', careers: '[ VER CARRERA ]', family: '[ VER FAMILIA ]', pets: '[ VER MASCOTAS ]', inventory: '[ VER INVENTARIO ]', government: '[ GOBIERNOS ]', world: '[ VER MUNDO ]', skills: '[ VER HABILIDADES ]', relations: '[ VER RELACIONES ]', learnFile: '[ CARGAR CONOCIMIENTO ]', export: '[ EXPORTAR PARTIDA ]', import: '[ IMPORTAR PARTIDA ]', reset: '[ NUEVA PARTIDA ]', menuTitle: 'menu.json // panel de control', menuSubtitle: '// todos los módulos de LIFE.AI',
		 nameKey: '"nombre"', surnameKey: '"apellido"', ageKey: '"edad"', characterKey: '"personaje"', moneyKey: '"dinero"', locationKey: '"ubicación"', hobbyKey: '"hobby"', occupationKey: '"ocupación"', energyKey: '"energía"', moodKey: '"ánimo"', reputationKey: '"reputación"', none: 'ninguno', stable: 'estable', testGameOver: '[ PROBAR GAME OVER ]', governmentTitle: 'government.json // gobierno actual', governmentSubtitle: '// administración vigente y mandato de cuatro años',
	  careersTitle: 'careers.json // catálogo de profesiones', careersSubtitle: '// profesiones disponibles, variantes e ingresos aproximados', familyTitle: 'family.json // árbol familiar', familySubtitle: '// pareja, matrimonio, hijos y familiares', petsTitle: 'pets.json // compañeros', petsSubtitle: '// tus mascotas, cuidados y adopción', adoptPetTitle: '[ ADOPTAR NUEVA MASCOTA ]', adoptSubmit: '[ ADOPTAR ]', adoptTypeLabel: 'Tipo:', adoptNameLabel: 'Nombre:', adoptNamePlaceholder: 'Nombre de la mascota...', petTypeDog: 'Perro (Canino)', petTypeCat: 'Gato (Felino)', petTypeBird: 'Ave / Loro', petTypeHamster: 'Hámster', petTypeRabbit: 'Conejo', petPlay: '[ JUGAR ]', petFeed: '[ ALIMENTAR ]', petVet: '[ VETERINARIO ]', petWalk: '[ PASEAR ]', petGiveUp: '[ DAR EN ADOPCIÓN ]', petGiveUpConfirm: '¿Estás seguro de que deseas dar en adopción a {name}?', petGiveUpSuccess: '// Diste en adopción a {name}. Ha encontrado un nuevo y cariñoso hogar._', moneyRainEvent: '¡LLUVIA DE DINERO!', moneyRainIn: 'LLUVIA DE DINERO EN', moneyRainBonus: 'x10 (+1000%)', petNoPets: '// No tienes mascotas aún. ¡Adopta una para alegrar tu vida!_', themeLabel: 'TEMA:', themeGreen: 'VERDE MATRIX', themeOrange: 'ÁMBAR RETRO', themeRed: 'ROJO ALERTA', themeBlue: 'AZUL CYBER', inventoryTitle: 'inventory.json // inventario', inventorySubtitle: '// objetos encontrados durante la historia', worldTitle: 'world.json // mundo viviente', worldSubtitle: '// lugares, personajes, objetivos, eventos y reglas descubiertas', skillsTitle: 'skills.json // habilidades', skillsSubtitle: '// capacidades aprendidas, experiencia y crecimiento', relationsTitle: 'relations.json // relaciones', relationsSubtitle: '// vínculos, confianza y evolución social', statsTitle: 'stats.json // estadísticas', statsSubtitle: '// estado actual de tu vida', historyTitle: 'history.log // historial', historySubtitle: '// decisiones y capítulos guardados', blogTitle: 'blog.txt // notas de LIFE.AI', blogSubtitle: '// ideas, cambios y registros del simulador', blogReleaseTitle: '[ ACTUALIZACIÓN ] NUEVA VERSION 0.0.1d', blogReleaseText: 'Esta versión 0.0.1d corrige las vidas triplicadas al crearlas, agrega sistema de adopción y cuidado de mascotas (con opción de dar en adopción y anti-doble click), evento de Lluvia de Dinero (+1000%), rediseño estético de paneles (Gobierno, Carreras, Familia, Inventario), envío con Enter, créditos de icerix y barrido de idioma completo (ES/EN).', playTimeRewardsTitle: 'rewards.json // tiempo jugado', playTimeRewardsSubtitle: '// recompensas por permanecer en tu sesión', playTimeRewardsButton: '[ RECOMPENSAS POR TIEMPO JUGADO ]', saved: '// capítulo guardado correctamente_', gameOverTitle: 'GAME OVER', gameOverText: 'Tu vida ha terminado.', gameOverNewLife: '[ COMENZAR OTRA VIDA ]', gameOverClose: '[ VOLVER AL INICIO ]',
	emptyHistory: '// No hay decisiones registradas todavía en esta vida._', you: 'TÚ', ai: 'IA'
  },
  en: {
	appTitle: 'Unnamed life simulation', languageLabel: 'LANG:', languageAria: 'Language',
	footerCredits: 'Game made by icerix. All rights reserved 2026',
	usernameTitle: 'USER ACCESS', usernameIntro: 'Log in or register to access and save your lives in the cloud.', usernameLabel: 'Username', usernameSubmit: '[ ENTER ]', usernameHint: 'Use 2 to 24 characters for username and at least 6 for password.', usernameError: 'ERROR: enter a valid username.', userStatus: 'USER:',
	loginTab: '[ LOG IN ]', registerTab: '[ REGISTER ]', loginSubmit: '[ LOG IN ]', registerSubmit: '[ CREATE ACCOUNT ]',
	loginUserLabel: 'Username or Email', loginPassLabel: 'Password', loginUserPlaceholder: 'Your username or email', loginPassPlaceholder: 'Your password',
	regUserLabel: 'Username', regPassLabel: 'Password', regPassConfirmLabel: 'Confirm Password', regUserPlaceholder: 'Ex: Traveler2026', regPassPlaceholder: 'At least 6 characters', regPassConfirmPlaceholder: 'Repeat your password',
	authUsernameError: 'ERROR: enter a valid username between 2 and 24 characters.',
	authPassMismatch: 'ERROR: Passwords do not match.', authPassShort: 'ERROR: Password must be at least 6 characters.',
	authSuccessRegister: 'Account created successfully. Entering...', authSuccessLogin: 'Session started. Loading...',
	welcomeGreeting: 'LIVES HEADQUARTERS', welcomeIntro: 'Start a new simulation or resume your saved previous lives.', welcomeNewLife: '+ START NEW LIFE', previousLivesTitle: 'PREVIOUS LIVES', previousLivesSubtitle: '// Resume only those still alive. Deceased lives remain as history.',
	statusAlive: 'ALIVE', statusEnded: 'DECEASED', resumeLife: '[ RESUME LIFE ]', deceasedLife: '[ DECEASED ]',
	exitLife: '[ SAVE & EXIT ]', exitLifeConfirm: 'Do you want to pause and return to the lives menu? Your progress will be saved without dying.',
	noPreviousLives: '// No saved lives yet. Start a new simulation!_',
	start: '+ START NEW LIFE', next: '[ ENTER ]', name: 'What is your name?', surname: 'What is your surname?', age: 'How old are you?', money: 'How much money do you have?', location: 'Where does your story begin?', hobby: 'What is your hobby?',
	nameHint: 'Write your name.', surnameHint: 'Write your surname.', ageHint: 'Enter your age.', moneyHint: 'Enter an initial amount.', locationHint: 'Write a location.', hobbyHint: 'Example: music, football, games, drawing...',
		storyLabel: 'How do you want to continue your life?', storyPlaceholder: 'Write what happens next...', save: '[ SAVE ]', menu: '[ MENU ]', play: '[ PLAY ]', blog: '[ BLOG ]', logout: '[ LOG OUT ]', logoutConfirm: 'Do you want to log out? Your saved games will be preserved in cloud and locally.', history: '[ VIEW ALL DECISIONS ]', stats: '[ VIEW STATS ]', careers: '[ VIEW CAREERS ]', family: '[ VIEW FAMILY ]', pets: '[ VIEW PETS ]', inventory: '[ VIEW INVENTORY ]', government: '[ GOVERNMENTS ]', world: '[ VIEW WORLD ]', skills: '[ VIEW SKILLS ]', relations: '[ VIEW RELATIONSHIPS ]', learnFile: '[ LOAD KNOWLEDGE ]', export: '[ EXPORT GAME ]', import: '[ IMPORT GAME ]', reset: '[ NEW GAME ]', menuTitle: 'menu.json // control panel', menuSubtitle: '// all LIFE.AI modules',
		nameKey: '"name"', surnameKey: '"surname"', ageKey: '"age"', characterKey: '"character"', moneyKey: '"money"', locationKey: '"location"', hobbyKey: '"hobby"', occupationKey: '"occupation"', energyKey: '"energy"', moodKey: '"mood"', reputationKey: '"reputation"', none: 'none', stable: 'stable', testGameOver: '[ TEST GAME OVER ]',
		blogReleaseTitle: '[ UPDATE ] NEW VERSION 0.0.1d', blogReleaseText: 'This version 0.0.1d fixes duplicate lives on creation, adds the pet adoption and care system (with give-up option and anti-double click), Money Rain event (+1000%), aesthetic panel redesign (Government, Careers, Family, Inventory), Enter key submission, icerix copyright footer, and a full bilingual sweep (ES/EN).', careersTitle: 'careers.json // career catalog', careersSubtitle: '// available professions, variants and approximate income', familyTitle: 'family.json // family tree', familySubtitle: '// partner, marriage, children and relatives', petsTitle: 'pets.json // companions', petsSubtitle: '// your pets, care and adoption', adoptPetTitle: '[ ADOPT A NEW PET ]', adoptSubmit: '[ ADOPT ]', adoptTypeLabel: 'Type:', adoptNameLabel: 'Name:', adoptNamePlaceholder: 'Pet name...', petTypeDog: 'Dog (Canine)', petTypeCat: 'Cat (Feline)', petTypeBird: 'Bird / Parrot', petTypeHamster: 'Hamster', petTypeRabbit: 'Rabbit', petPlay: '[ PLAY ]', petFeed: '[ FEED ]', petVet: '[ VET ]', petWalk: '[ WALK ]', petGiveUp: '[ GIVE UP FOR ADOPTION ]', petGiveUpConfirm: 'Are you sure you want to put {name} up for adoption?', petGiveUpSuccess: '// You put {name} up for adoption. It found a new loving home._', moneyRainEvent: 'MONEY RAIN!', moneyRainIn: 'MONEY RAIN IN', moneyRainBonus: 'x10 (+1000%)', petNoPets: '// You do not have any pets yet. Adopt one to brighten your life!_', themeLabel: 'THEME:', themeGreen: 'MATRIX GREEN', themeOrange: 'RETRO AMBER', themeRed: 'ALERT RED', themeBlue: 'CYBER BLUE', inventoryTitle: 'inventory.json // inventory', inventorySubtitle: '// objects found during the story', government: '[ GOVERNMENTS ]', governmentTitle: 'government.json // current government', governmentSubtitle: '// current administration and four-year term', worldTitle: 'world.json // living world', worldSubtitle: '// places, characters, goals, events and discovered rules', skillsTitle: 'skills.json // skills', skillsSubtitle: '// learned abilities, experience and character growth', relationsTitle: 'relations.json // relationships', relationsSubtitle: '// bonds, trust and social evolution', statsTitle: 'stats.json // statistics', statsSubtitle: '// current life status', historyTitle: 'history.log // history', historySubtitle: '// saved decisions and chapters', blogTitle: 'blog.txt // LIFE.AI notes', blogSubtitle: '// ideas, changes and simulator records', playTimeRewardsTitle: 'rewards.json // play time', playTimeRewardsSubtitle: '// rewards for staying in your session', playTimeRewardsButton: '[ PLAY TIME REWARDS ]', saved: '// chapter saved successfully_', gameOverTitle: 'GAME OVER', gameOverText: 'Your life has ended.', gameOverNewLife: '[ START ANOTHER LIFE ]', gameOverClose: '[ RETURN TO START ]',
	emptyHistory: '// No decisions recorded yet in this life._', you: 'YOU', ai: 'AI'
  }
};

document.querySelectorAll('[data-close]').forEach((button) => {
  button.addEventListener('click', (event) => {
	event.preventDefault();
	const screen = document.getElementById(button.dataset.close);
	if (screen) screen.classList.add('hidden');
	});

});

async function startNewLife() {
	window.lifeSupabase?.resetGameReference?.();
	window.__lifeSave = null;
	try { localStorage.removeItem('lifeSaveFallback'); } catch { /* ignore */ }
	if (typeof storage !== 'undefined') {
		await storage.remove('game', 'current').catch(() => undefined);
	}
	Object.keys(player).forEach((key) => delete player[key]);
	Object.assign(player, createFreshPlayer());

	currentQuestion = 0;
	if (typeof updateQuestion === 'function') updateQuestion();
	if (typeof answerInput !== 'undefined' && answerInput) answerInput.value = '';
	if (typeof storyInput !== 'undefined' && storyInput) storyInput.value = '';
	if (typeof aiText !== 'undefined' && aiText) aiText.textContent = '';
	if (typeof effectsText !== 'undefined' && effectsText) effectsText.textContent = '';
	if (typeof aiOutput !== 'undefined' && aiOutput) aiOutput.classList.add('hidden');
	if (typeof savedMessage !== 'undefined' && savedMessage) savedMessage.classList.add('hidden');
	if (typeof currentOccupation !== 'undefined' && currentOccupation) {
		currentOccupation.textContent = '';
		currentOccupation.classList.add('hidden');
	}
	stopWeatherCycle();
	stopWorldClock();
	resetWeatherVisuals();

	if (typeof historyList !== 'undefined' && historyList) historyList.replaceChildren();
	if (typeof careersDashboard !== 'undefined' && careersDashboard) careersDashboard.replaceChildren();
	if (typeof familyDashboard !== 'undefined' && familyDashboard) familyDashboard.replaceChildren();
	if (typeof inventoryDashboard !== 'undefined' && inventoryDashboard) inventoryDashboard.replaceChildren();
	if (typeof worldDashboard !== 'undefined' && worldDashboard) worldDashboard.replaceChildren();
	if (typeof skillsDashboard !== 'undefined' && skillsDashboard) skillsDashboard.replaceChildren();
	if (typeof relationsDashboard !== 'undefined' && relationsDashboard) relationsDashboard.replaceChildren();

	if (typeof renderStats === 'function') renderStats();
	if (typeof renderFullStats === 'function') renderFullStats();

	menuScreen?.classList.add('hidden');
	gameOverScreen?.classList.add('hidden');
	storyScreen?.classList.add('hidden');
	questionScreen?.classList.add('hidden');
	statsScreen?.classList.add('hidden');
	playTimeRewardsScreen?.classList.add('hidden');
	welcomeScreen?.classList.remove('hidden');
	setWelcomeNavigationVisible(true);
}

function renderGameOver(reason, savedGame, globalMemory) {
  const en = currentLanguage === 'en';
  if (!gameOverScreen) return;
  gameOverTitle.textContent = t('gameOverTitle');
	const cause = reason || t('gameOverText');
  gameOverText.textContent = `${t('gameOverText')} ${en ? 'Cause of death: ' : 'Causa de muerte: '}${cause}`;
  gameOverStats.textContent = en
	? `Age: ${savedGame.player?.age || 0} · Chapters: ${savedGame.chapters?.length || 0} · Lives completed: ${globalMemory.lifeCount || 0}`
	: `Edad: ${savedGame.player?.age || 0} · Capítulos: ${savedGame.chapters?.length || 0} · Vidas completadas: ${globalMemory.lifeCount || 0}`;
  setText(gameOverNewLifeButton, t('gameOverNewLife'));
  setText(closeGameOverButton, t('gameOverClose'));
  welcomeScreen?.classList.add('hidden');
  questionScreen?.classList.add('hidden');
  storyScreen?.classList.add('hidden');
  menuScreen?.classList.add('hidden');
  setWelcomeNavigationVisible(false);
  gameOverScreen.classList.remove('hidden');
}

const suddenDeathCauses = {
  es: ['Fue atropellado por un auto mientras cruzaba la calle.', 'Murió en un accidente inesperado.', 'Una complicación de salud apareció de forma súbita.', 'Tuvo una caída fatal durante una situación cotidiana.'],
  en: ['They were hit by a car while crossing the street.', 'They died in an unexpected accident.', 'A sudden health complication appeared.', 'They suffered a fatal fall during an ordinary moment.']
};

function randomDeathCause() {
  const causes = suddenDeathCauses[currentLanguage] || suddenDeathCauses.es;
  return causes[Math.floor(Math.random() * causes.length)];
}

listen(gameOverNewLifeButton, 'click', startNewLife);
listen(closeGameOverButton, 'click', startNewLife);

listen(testGameOverButton, 'click', async () => {
  const savedGame = readSave();
  if (!savedGame.player?.name) return;
  const globalMemory = readGlobalMemory();
  await finishLife(`${currentLanguage === 'en' ? 'TEST DEATH: ' : 'MUERTE DE PRUEBA: '}${randomDeathCause()}`, savedGame, globalMemory);
});

document.querySelectorAll('[aria-modal="true"]').forEach((screen) => {
  screen.addEventListener('click', (event) => {
	if (event.target === screen) screen.classList.add('hidden');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('[aria-modal="true"]:not(.hidden)').forEach((screen) => screen.classList.add('hidden'));
});

const panelLabels = {
  es: { time: 'TIEMPO', places: 'LUGARES', people: 'PERSONAJES', factions: 'FACCIONES Y ORGANIZACIONES', quests: 'MISIONES Y OBJETIVOS', events: 'EVENTOS PENDIENTES', news: 'NOTICIAS', rules: 'REGLAS DEL MUNDO', learned: 'HABILIDADES APRENDIDAS', relationships: 'RELACIONES', upgrades: 'PRÓXIMAS MEJORAS' },
  en: { time: 'TIME', places: 'PLACES', people: 'CHARACTERS', factions: 'FACTIONS AND ORGANIZATIONS', quests: 'MISSIONS AND GOALS', events: 'PENDING EVENTS', news: 'NEWS', rules: 'WORLD RULES', learned: 'LEARNED SKILLS', relationships: 'RELATIONSHIPS', upgrades: 'NEXT UPGRADES' }
};
function panelLabel(key) { return panelLabels[currentLanguage][key]; }

function t(key) {
  return uiText[currentLanguage][key] || uiText.es[key] || key;
}

function listen(element, eventName, handler) {
  if (!element) {
	console.warn(`LIFE.AI: elemento no encontrado para ${eventName}`);
	return;
  }
  element.addEventListener(eventName, handler);
}

function setText(element, value) {
  if (element) element.textContent = value;
}

function setPlaceholder(element, value) {
  if (element) element.placeholder = value;
}

function switchAuthTab(tab) {
  if (tab === 'register') {
    tabLoginBtn?.classList.remove('active');
    tabLoginBtn?.setAttribute('aria-selected', 'false');
    tabRegisterBtn?.classList.add('active');
    tabRegisterBtn?.setAttribute('aria-selected', 'true');
    loginForm?.classList.add('hidden');
    registerForm?.classList.remove('hidden');
    regUserInput?.focus();
  } else {
    tabRegisterBtn?.classList.remove('active');
    tabRegisterBtn?.setAttribute('aria-selected', 'false');
    tabLoginBtn?.classList.add('active');
    tabLoginBtn?.setAttribute('aria-selected', 'true');
    registerForm?.classList.add('hidden');
    loginForm?.classList.remove('hidden');
    loginUserInput?.focus();
  }
  if (usernameHint) {
    usernameHint.classList.remove('error');
    usernameHint.textContent = t('usernameHint');
  }
}

listen(tabLoginBtn, 'click', () => switchAuthTab('login'));
listen(tabRegisterBtn, 'click', () => switchAuthTab('register'));

function renderUsernameStatus() {
  if (!usernameStatus) return;
  usernameStatus.textContent = `${t('userStatus')} ${currentUsername || '—'}`;
  if (currentUsername) {
    statusLogoutBtn?.classList.remove('hidden');
  } else {
    statusLogoutBtn?.classList.add('hidden');
  }
}

function isValidUsername(value) {
  return /^[\p{L}\p{N} _-]{2,24}$/u.test(String(value || '').trim());
}

function showUsernameGate() {
  usernameScreen?.classList.remove('hidden');
  welcomeScreen?.classList.add('hidden');
  storyScreen?.classList.add('hidden');
  menuScreen?.classList.add('hidden');
  questionScreen?.classList.add('hidden');
  statsScreen?.classList.add('hidden');
  gameOverScreen?.classList.add('hidden');
  statusLogoutBtn?.classList.add('hidden');
  setWelcomeNavigationVisible(false);
  switchAuthTab('login');
}

function showApplicationEntry() {
  usernameScreen?.classList.add('hidden');
  statusLogoutBtn?.classList.remove('hidden');
  welcomeScreen?.classList.remove('hidden');
  setWelcomeNavigationVisible(true);
  if (welcomeUserGreeting) {
    welcomeUserGreeting.textContent = `${t('welcomeGreeting')} // ${currentUsername || 'USER'}`;
  }
  renderUsernameStatus();
  renderPreviousLivesList();
}

async function handleLogin(identifier, password) {
  const cleanId = String(identifier || '').trim();
  const cleanPass = String(password || '');
  if (!cleanId || !cleanPass) {
    if (usernameHint) {
      usernameHint.textContent = currentLanguage === 'en' ? 'ERROR: Enter both username and password.' : 'ERROR: Introduce usuario y contraseña.';
      usernameHint.classList.add('error');
    }
    return false;
  }
  if (loginSubmit) loginSubmit.disabled = true;
  if (usernameHint) {
    usernameHint.classList.remove('error');
    usernameHint.textContent = currentLanguage === 'en' ? '// Verifying credentials...' : '// Verificando credenciales...';
  }
  try {
    if (window.lifeSupabase?.enabled) {
      try {
        const result = await window.lifeSupabase.signIn(cleanId, cleanPass);
        if (result?.error) throw result.error;
        currentUsername = window.lifeSupabase.displayName || cleanId;
      } catch (authError) {
        const msg = authError?.message || String(authError);
        console.warn('Supabase signIn error:', authError);
        if (msg.includes('Email not confirmed')) {
          if (usernameHint) {
            usernameHint.textContent = currentLanguage === 'en'
              ? 'ERROR: Email not confirmed. Check Supabase Dashboard or disable "Confirm email".'
              : 'ERROR: Correo no confirmado en Supabase. Revisa el dashboard o desmarca "Confirm email".';
            usernameHint.classList.add('error');
          }
          return false;
        }
        if (usernameHint) {
          usernameHint.textContent = currentLanguage === 'en'
            ? `ERROR: ${msg.includes('Invalid login credentials') ? 'Invalid username or password.' : msg}`
            : `ERROR: ${msg.includes('Invalid login credentials') ? 'Usuario o contraseña incorrectos.' : msg}`;
          usernameHint.classList.add('error');
        }
        return false;
      }
    } else {
      currentUsername = cleanId;
    }
    window.currentUsername = currentUsername;
    try { localStorage.setItem('lifeUsername', currentUsername); } catch { /* ignore */ }
    renderUsernameStatus();
    showApplicationEntry();
    if (window.lifeSupabase?.enabled) {
      window.lifeSupabase.updatePresence(null).catch(() => undefined);
    }
    return true;
  } finally {
    if (loginSubmit) loginSubmit.disabled = false;
  }
}

async function handleRegister(username, password, passwordConfirm) {
  const cleanUser = String(username || '').trim();
  const cleanPass = String(password || '');
  const cleanPassConfirm = String(passwordConfirm || '');

  if (!isValidUsername(cleanUser)) {
    if (usernameHint) {
      usernameHint.textContent = t('authUsernameError');
      usernameHint.classList.add('error');
    }
    return false;
  }
  if (cleanPass.length < 6) {
    if (usernameHint) {
      usernameHint.textContent = t('authPassShort');
      usernameHint.classList.add('error');
    }
    return false;
  }
  if (cleanPass !== cleanPassConfirm) {
    if (usernameHint) {
      usernameHint.textContent = t('authPassMismatch');
      usernameHint.classList.add('error');
    }
    return false;
  }

  if (registerSubmit) registerSubmit.disabled = true;
  if (usernameHint) {
    usernameHint.classList.remove('error');
    usernameHint.textContent = currentLanguage === 'en' ? '// Registering account...' : '// Registrando cuenta...';
  }
  try {
    if (window.lifeSupabase?.enabled) {
      try {
        const result = await window.lifeSupabase.signUp(cleanUser, cleanPass);
        if (result?.error) throw result.error;
        currentUsername = cleanUser;
      } catch (authError) {
        const msg = authError?.message || String(authError);
        console.warn('Supabase signUp error:', authError);
        if (usernameHint) {
          usernameHint.textContent = currentLanguage === 'en'
            ? `ERROR: ${msg.includes('User already registered') ? 'This username is already taken.' : msg}`
            : `ERROR: ${msg.includes('User already registered') ? 'Este nombre de usuario ya está registrado.' : msg}`;
          usernameHint.classList.add('error');
        }
        return false;
      }
    } else {
      currentUsername = cleanUser;
    }
    window.currentUsername = currentUsername;
    try { localStorage.setItem('lifeUsername', currentUsername); } catch { /* ignore */ }
    renderUsernameStatus();
    showApplicationEntry();
    return true;
  } finally {
    if (registerSubmit) registerSubmit.disabled = false;
  }
}

listen(loginForm, 'submit', async (e) => {
  e.preventDefault();
  if (!applicationReady) return;
  await handleLogin(loginUserInput?.value, loginPassInput?.value);
});

listen(registerForm, 'submit', async (e) => {
  e.preventDefault();
  if (!applicationReady) return;
  await handleRegister(regUserInput?.value, regPassInput?.value, regPassConfirmInput?.value);
});

listen(statusLogoutBtn, 'click', logoutSession);

function getLocalSavedLives() {
  try {
    const raw = localStorage.getItem('life_saved_lives_v1');
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setLocalSavedLives(lives) {
  try {
    localStorage.setItem('life_saved_lives_v1', JSON.stringify(lives));
  } catch { /* storage fallback */ }
}

function getLifeDedupeKey(save) {
  if (!save || !save.player?.name) return null;
  const name = String(save.player?.name || '').trim().toLowerCase();
  const surname = String(save.player?.surname || '').trim().toLowerCase();
  const birth = String(save.player?.birthPlace || save.player?.location || '').trim().toLowerCase();
  const dateStr = save.startedAt ? new Date(save.startedAt).toISOString().slice(0, 10) : '';
  return `${name}__${surname}__${birth}__${dateStr}`;
}

function deduplicateLivesList(lives) {
  if (!Array.isArray(lives)) return [];
  const map = new Map();

  for (const life of lives) {
    if (!life || !life.player?.name) continue;
    const lifeId = life.id;
    const semanticKey = getLifeDedupeKey(life);

    let matchKey = null;
    for (const [k, existing] of map.entries()) {
      if (lifeId && existing.id && existing.id === lifeId) {
        matchKey = k;
        break;
      }
      if (semanticKey && getLifeDedupeKey(existing) === semanticKey) {
        matchKey = k;
        break;
      }
    }

    if (!matchKey) {
      const key = lifeId || semanticKey || String(Math.random());
      map.set(key, life);
    } else {
      const existing = map.get(matchKey);
      const existingTime = new Date(existing.updatedAt || existing.startedAt || 0).getTime();
      const newTime = new Date(life.updatedAt || life.startedAt || 0).getTime();
      const existingChapters = Array.isArray(existing.chapters) ? existing.chapters.length : 0;
      const newChapters = Array.isArray(life.chapters) ? life.chapters.length : 0;

      const isNewer = newChapters > existingChapters || (newChapters === existingChapters && newTime >= existingTime);
      if (isNewer) {
        if (existing.id && !existing.id.startsWith('life-') && life.id && life.id.startsWith('life-')) {
          life.id = existing.id;
        }
        map.set(matchKey, life);
      } else {
        if (life.id && !life.id.startsWith('life-') && existing.id && existing.id.startsWith('life-')) {
          existing.id = life.id;
        }
      }
    }
  }

  return Array.from(map.values());
}

async function fetchAllLives() {
  const candidateLives = [];
  const localLives = getLocalSavedLives();
  if (Array.isArray(localLives)) {
    localLives.forEach((l) => { if (l && l.player?.name) candidateLives.push(l); });
  }

  if (window.__lifeSave?.player?.name) {
    if (!window.__lifeSave.id) window.__lifeSave.id = 'life-' + Date.now();
    candidateLives.push(window.__lifeSave);
  }

  if (candidateLives.length === 0) {
    const fallback = readFallbackSave();
    if (fallback?.player?.name) {
      if (!fallback.id) fallback.id = 'life-fallback';
      candidateLives.push(fallback);
    }
  }

  if (window.lifeSupabase?.enabled) {
    try {
      const remoteLives = await window.lifeSupabase.listGames();
      if (Array.isArray(remoteLives)) {
        remoteLives.forEach((remote) => {
          if (remote?.player?.name) {
            candidateLives.push(normalizeSave(remote));
          }
        });
      }
    } catch (err) {
      console.warn('LIFE.AI fetchAllLives Supabase error:', err);
    }
  }

  const list = deduplicateLivesList(candidateLives);
  list.sort((a, b) => new Date(b.updatedAt || b.startedAt || 0) - new Date(a.updatedAt || a.startedAt || 0));
  setLocalSavedLives(list);
  return list;
}

async function renderPreviousLivesList() {
  if (!previousLivesGrid) return;
  previousLivesGrid.innerHTML = `<p class="panel-empty">${currentLanguage === 'en' ? '// Loading previous lives...' : '// Cargando vidas anteriores...'}</p>`;

  const lives = await fetchAllLives();
  if (livesCounter) {
    livesCounter.textContent = `[ ${lives.length} ${currentLanguage === 'en' ? (lives.length === 1 ? 'LIFE' : 'LIVES') : (lives.length === 1 ? 'VIDA' : 'VIDAS')} ]`;
  }
  if (!lives.length) {
    previousLivesGrid.innerHTML = `<p class="panel-empty" id="previousLivesEmpty">${t('noPreviousLives')}</p>`;
    return;
  }

  previousLivesGrid.replaceChildren();
  lives.forEach((save) => {
    const isAlive = save.lifeStatus !== 'ended' && Number(save.player?.health ?? 100) > 0;
    const card = document.createElement('article');
    card.className = `life-card ${isAlive ? 'card-alive' : 'card-ended'}`;

    const topRow = document.createElement('div');
    topRow.className = 'life-card-top';

    const nameHeading = document.createElement('h3');
    nameHeading.className = 'life-card-name';
    nameHeading.textContent = `${save.player?.name || 'Sin nombre'} ${save.player?.surname || ''}`.trim();

    const badge = document.createElement('span');
    badge.className = `life-status-badge ${isAlive ? 'badge-alive' : 'badge-ended'}`;
    badge.textContent = isAlive ? t('statusAlive') : t('statusEnded');

    topRow.append(nameHeading, badge);

    const infoP = document.createElement('div');
    infoP.className = 'life-card-info';
    const ageLabel = currentLanguage === 'en' ? 'Age' : 'Edad';
    const moneyLabel = currentLanguage === 'en' ? 'Money' : 'Dinero';
    const chaptersLabel = currentLanguage === 'en' ? 'Chapters' : 'Capítulos';
    const occ = careerById(save.player?.occupation);
    const occName = careerLabel(occ);
    const chaptersCount = Array.isArray(save.chapters) ? save.chapters.length : 0;
    infoP.innerHTML = `<strong>${ageLabel}:</strong> ${save.player?.age || 0} · <strong>${moneyLabel}:</strong> $${save.player?.money ?? 0}<br><strong>${occName}</strong> · ${chaptersLabel}: ${chaptersCount}`;

    if (!isAlive && save.endedReason) {
      const deathP = document.createElement('div');
      deathP.className = 'life-card-death-reason';
      deathP.textContent = `${currentLanguage === 'en' ? 'Cause: ' : 'Causa: '}${save.endedReason}`;
      infoP.append(deathP);
    }

    const actions = document.createElement('div');
    actions.className = 'life-card-actions';

    if (isAlive) {
      const resumeBtn = document.createElement('button');
      resumeBtn.type = 'button';
      resumeBtn.className = 'life-btn-resume';
      resumeBtn.textContent = t('resumeLife');
      resumeBtn.addEventListener('click', () => resumeSelectedLife(save));
      actions.append(resumeBtn);
    } else {
      const deadBtn = document.createElement('button');
      deadBtn.type = 'button';
      deadBtn.className = 'life-btn-dead';
      deadBtn.disabled = true;
      deadBtn.textContent = t('deceasedLife');
      actions.append(deadBtn);
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'life-btn-delete';
    deleteBtn.textContent = '[ X ]';
    deleteBtn.title = currentLanguage === 'en' ? 'Delete this record' : 'Eliminar este registro';
    deleteBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const msg = currentLanguage === 'en' ? `Delete record of ${save.player?.name}?` : `¿Eliminar el registro de ${save.player?.name}?`;
      if (!window.confirm(msg)) return;
      await deleteSelectedLife(save.id);
      renderPreviousLivesList();
    });
    actions.append(deleteBtn);

    card.append(topRow, infoP, actions);
    previousLivesGrid.append(card);
  });
}

async function resumeSelectedLife(save) {
  if (!save?.player?.name) return;
  if (save.lifeStatus === 'ended') return;
  const normalized = normalizeSave(save);
  window.__lifeSave = normalized;
  if (window.lifeSupabase?.enabled && save.id) {
    window.lifeSupabase.setGameId(save.id);
  }
  await saveCurrentGame(normalized);
  restoreSavedGame();
}

async function deleteSelectedLife(lifeId) {
  if (!lifeId) return;
  const currentLives = getLocalSavedLives().filter((l) => l.id !== lifeId);
  setLocalSavedLives(currentLives);
  if (window.__lifeSave?.id === lifeId) {
    window.__lifeSave = null;
  }
  if (window.lifeSupabase?.enabled) {
    try {
      await window.lifeSupabase.deleteGame(lifeId);
    } catch (err) {
      console.warn('Error al borrar vida en Supabase:', err);
    }
  }
}

async function exitCurrentLifeWithoutDying() {
  const save = readSave();
  if (!save?.player?.name) {
    showApplicationEntry();
    return;
  }
  const confirmed = window.confirm(t('exitLifeConfirm'));
  if (!confirmed) return;

  save.lifeStatus = 'active';
  await saveCurrentGame(save);

  stopWeatherCycle();
  stopWorldClock();
  resetWeatherVisuals();

  storyScreen?.classList.add('hidden');
  menuScreen?.classList.add('hidden');
  gameOverScreen?.classList.add('hidden');
  questionScreen?.classList.add('hidden');
  statsScreen?.classList.add('hidden');

  showApplicationEntry();
}

listen(exitLifeButton, 'click', exitCurrentLifeWithoutDying);

function setWelcomeNavigationVisible(visible) {
  if (welcomeNavigation) welcomeNavigation.classList.toggle('hidden', !visible);
}

function chooseInitialWeather() {
  return weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
}

function chooseNextWeather(current) {
  if (Math.random() >= 0.8) return current;
  const alternatives = weatherTypes.filter((weather) => weather !== current);
  return alternatives[Math.floor(Math.random() * alternatives.length)];
}

function resetWeatherVisuals() {
  document.body.classList.remove('weather-cold', 'weather-hot', 'weather-fog', 'weather-rainy');
  weatherIndicator?.classList.add('hidden');
	if (weatherIndicator) weatherIndicator.style.display = '';
  if (weatherOverlay) weatherOverlay.classList.remove('active');
  resetSeasonVisuals();
  resetMoneyRainVisuals();
}

function renderWeather(weather) {
  if (!weatherTypes.includes(weather)) {
	resetWeatherVisuals();
	return;
  }
  document.body.classList.remove('weather-cold', 'weather-hot', 'weather-fog', 'weather-rainy');
  document.body.classList.add(`weather-${weather}`);
  if (weatherIndicator) {
	weatherIndicator.textContent = currentLanguage === 'en' ? `WEATHER: ${weatherLabels[weather].en}` : `CLIMA: ${weatherLabels[weather].es}`;
	weatherIndicator.classList.remove('hidden');
	weatherIndicator.style.display = 'block';
  }
  weatherOverlay?.classList.toggle('active', weather === 'rainy');
}

function normalizeWeather(weather) {
  return weatherTypes.includes(weather) ? weather : chooseInitialWeather();
}

function startWeatherCycle(save) {
  stopWeatherCycle();
  if (!save || save.lifeStatus !== 'active' || !save.player?.name) {
	resetWeatherVisuals();
	return;
  }
  save.weather = normalizeWeather(save.weather);
	  if (!storyScreen?.classList.contains('hidden')) {
		 renderWorldEnvironment(save);
	  } else {
		 resetWeatherVisuals();
	  }
  saveCurrentGame(save);
  weatherTimer = window.setInterval(() => {
	if (window.__lifeSave?.lifeStatus !== 'active') return;
	const activeSave = normalizeSave(window.__lifeSave);
	activeSave.weather = chooseNextWeather(activeSave.weather);
	window.__lifeSave = activeSave;
	if (Math.floor(Date.now() / 1000) % 15 === 0) window.lifeSupabase?.updatePresence?.(activeSave).catch(() => undefined);
	 if (!storyScreen?.classList.contains('hidden')) {
		 renderWorldEnvironment(activeSave);
	 }
	saveCurrentGame(activeSave);
  }, 300000);
}

function stopWeatherCycle() {
  if (weatherTimer !== null) {
	window.clearInterval(weatherTimer);
	weatherTimer = null;
  }
  stopMoneyRainCycle();
}

const MONEY_RAIN_INTERVAL_MS = 5 * 60 * 1000;
const MONEY_RAIN_DURATION_MS = 45 * 1000;
let nextMoneyRainTime = Date.now() + MONEY_RAIN_INTERVAL_MS;
let moneyRainEndTime = 0;
let moneyRainActive = false;
let moneyRainTimer = null;
let moneyRainParticleTimer = null;

function isMoneyRainActive() {
  return Boolean(moneyRainActive);
}

function updateMoneyRainDisplay() {
  if (!moneyRainIndicator) return;
  const inStory = !storyScreen?.classList.contains('hidden') && window.__lifeSave?.lifeStatus === 'active';
  if (!inStory) {
    resetMoneyRainVisuals();
    return;
  }
  const now = Date.now();
  const en = currentLanguage === 'en';

  if (moneyRainActive) {
    if (now >= moneyRainEndTime) {
      moneyRainActive = false;
      nextMoneyRainTime = now + MONEY_RAIN_INTERVAL_MS;
      stopMoneyRainParticles();
      moneyRainIndicator.classList.remove('active');
    } else {
      const remainingSecs = Math.max(0, Math.ceil((moneyRainEndTime - now) / 1000));
      const text = en
        ? `¡MONEY RAIN! (x10) - 00:${String(remainingSecs).padStart(2, '0')}`
        : `¡LLUVIA DE DINERO! (x10) - 00:${String(remainingSecs).padStart(2, '0')}`;
      moneyRainIndicator.textContent = text;
      moneyRainIndicator.classList.add('active');
      moneyRainIndicator.classList.remove('hidden');
      moneyRainIndicator.style.display = 'block';
      if (!moneyRainParticleTimer) startMoneyRainParticles();
      return;
    }
  }

  if (now >= nextMoneyRainTime) {
    moneyRainActive = true;
    moneyRainEndTime = now + MONEY_RAIN_DURATION_MS;
    moneyRainIndicator.classList.add('active');
    moneyRainIndicator.classList.remove('hidden');
    moneyRainIndicator.style.display = 'block';
    startMoneyRainParticles();
    const remainingSecs = Math.max(0, Math.ceil((moneyRainEndTime - now) / 1000));
    moneyRainIndicator.textContent = en
      ? `¡MONEY RAIN! (x10) - 00:${String(remainingSecs).padStart(2, '0')}`
      : `¡LLUVIA DE DINERO! (x10) - 00:${String(remainingSecs).padStart(2, '0')}`;
  } else {
    const diffMs = nextMoneyRainTime - now;
    const totalSecs = Math.max(0, Math.ceil(diffMs / 1000));
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    moneyRainIndicator.textContent = en
      ? `MONEY RAIN IN: ${timeStr}`
      : `LLUVIA DE DINERO EN: ${timeStr}`;
    moneyRainIndicator.classList.remove('active');
    moneyRainIndicator.classList.remove('hidden');
    moneyRainIndicator.style.display = 'block';
    stopMoneyRainParticles();
  }
}

function startMoneyRainParticles() {
  if (!moneyRainOverlay) return;
  moneyRainOverlay.classList.remove('hidden');
  if (moneyRainParticleTimer) return;
  const symbols = ['$', '$', '🪙', '💵', '💰', '$'];
  moneyRainParticleTimer = window.setInterval(() => {
    if (!moneyRainActive || !moneyRainOverlay) return;
    if (moneyRainOverlay.childElementCount > 20) return;
    const particle = document.createElement('span');
    particle.className = 'money-particle';
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = `${Math.random() * 95}%`;
    particle.style.fontSize = `${14 + Math.random() * 12}px`;
    particle.style.animationDuration = `${2 + Math.random() * 2.5}s`;
    particle.addEventListener('animationend', () => particle.remove(), { once: true });
    moneyRainOverlay.append(particle);
  }, 240);
}

function stopMoneyRainParticles() {
  if (moneyRainParticleTimer !== null) {
    window.clearInterval(moneyRainParticleTimer);
    moneyRainParticleTimer = null;
  }
  if (moneyRainOverlay) {
    moneyRainOverlay.replaceChildren();
    moneyRainOverlay.classList.add('hidden');
  }
}

function startMoneyRainCycle() {
  if (moneyRainTimer === null) {
    updateMoneyRainDisplay();
    moneyRainTimer = window.setInterval(updateMoneyRainDisplay, 1000);
  } else {
    updateMoneyRainDisplay();
  }
}

function stopMoneyRainCycle() {
  if (moneyRainTimer !== null) {
    window.clearInterval(moneyRainTimer);
    moneyRainTimer = null;
  }
  stopMoneyRainParticles();
}

function resetMoneyRainVisuals() {
  moneyRainIndicator?.classList.add('hidden');
  if (moneyRainIndicator) {
    moneyRainIndicator.style.display = '';
    moneyRainIndicator.classList.remove('active');
  }
  stopMoneyRainParticles();
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
	renderActivePlayers(Number.isFinite(window.__activePlayerCount) ? window.__activePlayerCount : null);
	if (languageSelect && languageSelect.value !== currentLanguage) languageSelect.value = currentLanguage;
	document.title = t('appTitle');
	setText(document.querySelector('#appTitle'), t('appTitle'));
	setText(usernameTitle, t('usernameTitle'));
	setText(usernameIntro, t('usernameIntro'));
	setText(usernameHint, t('usernameHint'));
	setText(tabLoginBtn, t('loginTab'));
	setText(tabRegisterBtn, t('registerTab'));
	setText(loginSubmit, t('loginSubmit'));
	setText(registerSubmit, t('registerSubmit'));
	setText(document.querySelector('#loginUserLabel'), t('loginUserLabel'));
	setText(document.querySelector('#loginPassLabel'), t('loginPassLabel'));
	setPlaceholder(document.querySelector('#loginUserInput'), t('loginUserPlaceholder'));
	setPlaceholder(document.querySelector('#loginPassInput'), t('loginPassPlaceholder'));
	setText(document.querySelector('#regUserLabel'), t('regUserLabel'));
	setText(document.querySelector('#regPassLabel'), t('regPassLabel'));
	setText(document.querySelector('#regPassConfirmLabel'), t('regPassConfirmLabel'));
	setPlaceholder(document.querySelector('#regUserInput'), t('regUserPlaceholder'));
	setPlaceholder(document.querySelector('#regPassInput'), t('regPassPlaceholder'));
	setPlaceholder(document.querySelector('#regPassConfirmInput'), t('regPassConfirmPlaceholder'));
	setText(exitLifeButton, t('exitLife'));
	setText(statusLogoutBtn, t('logout'));
	setText(document.querySelector('#welcomeIntro'), t('welcomeIntro'));
	setText(document.querySelector('#previousLivesTitle'), t('previousLivesTitle'));
	setText(document.querySelector('#previousLivesSubtitle'), t('previousLivesSubtitle'));
	if (welcomeUserGreeting) {
		welcomeUserGreeting.textContent = `${t('welcomeGreeting')} // ${currentUsername || 'USER'}`;
	}
	renderUsernameStatus();
	if (languageSelect) languageSelect.setAttribute('aria-label', t('languageAria'));
	setText(startButton, t('start'));
	setText(blogButton, t('blog'));
	setText(lifeForm?.querySelector('button'), t('next'));
	setText(gameOverTitle, t('gameOverTitle')); setText(gameOverNewLifeButton, t('gameOverNewLife')); setText(closeGameOverButton, t('gameOverClose'));
	setText(menuButton, t('menu'));
  setText(document.querySelector('#menuTitle'), t('menuTitle'));
  setText(document.querySelector('#menuSubtitle'), t('menuSubtitle'));
  setText(questionLabel, t(questions[currentQuestion].key));
  setText(questionHint, t(`${questions[currentQuestion].key}Hint`));
  setText(document.querySelector('.story-editor label'), t('storyLabel'));
  setPlaceholder(storyInput, t('storyPlaceholder'));
	setText(saveStoryButton, t('save')); setText(historyButton, t('history')); setText(statsButton, t('stats')); setText(careersButton, t('careers')); setText(familyButton, t('family')); setText(petsButton, t('pets')); setText(worldButton, t('world')); setText(skillsButton, t('skills'));
	setText(exportButton, t('export')); setText(importButton, t('import')); setText(resetButton, t('reset')); setText(testGameOverButton, t('testGameOver')); setText(savedMessage, t('saved'));
	setText(relationsButton, t('relations'));
	setText(learnFileButton, t('learnFile'));
	setText(careersButton, t('careers')); setText(familyButton, t('family')); setText(petsButton, t('pets')); setText(inventoryButton, t('inventory'));
	setText(governmentButton, t('government'));
	setText(document.querySelector('#worldTitle'), t('worldTitle')); setText(document.querySelector('#skillsTitle'), t('skillsTitle')); setText(document.querySelector('#relationsTitle'), t('relationsTitle')); setText(document.querySelector('#statsTitle'), t('statsTitle')); setText(document.querySelector('#historyTitle'), t('historyTitle'));
  setText(document.querySelector('#worldSubtitle'), t('worldSubtitle')); setText(document.querySelector('#skillsSubtitle'), t('skillsSubtitle')); setText(document.querySelector('#relationsSubtitle'), t('relationsSubtitle')); setText(document.querySelector('#statsSubtitle'), t('statsSubtitle')); setText(document.querySelector('#historySubtitle'), t('historySubtitle'));
	setText(document.querySelector('#careersTitle'), t('careersTitle')); setText(document.querySelector('#careersSubtitle'), t('careersSubtitle')); setText(document.querySelector('#familyTitle'), t('familyTitle')); setText(document.querySelector('#familySubtitle'), t('familySubtitle'));
	setText(document.querySelector('#petsTitle'), t('petsTitle')); setText(document.querySelector('#petsSubtitle'), t('petsSubtitle'));
	setText(document.querySelector('#adoptPetTitle'), t('adoptPetTitle')); setText(adoptSubmitBtn, t('adoptSubmit'));
	setText(document.querySelector('#adoptTypeLabel'), t('adoptTypeLabel'));
	setText(document.querySelector('#adoptNameLabel'), t('adoptNameLabel'));
	setPlaceholder(document.querySelector('#adoptNameInput'), t('adoptNamePlaceholder'));
	const adoptSelect = document.querySelector('#adoptTypeSelect');
	if (adoptSelect) {
		const optMap = { dog: 'petTypeDog', cat: 'petTypeCat', bird: 'petTypeBird', hamster: 'petTypeHamster', rabbit: 'petTypeRabbit' };
		Array.from(adoptSelect.options).forEach((opt) => {
			if (optMap[opt.value]) opt.textContent = t(optMap[opt.value]);
		});
	}
	setText(document.querySelector('#themeLabel'), t('themeLabel'));
	const themeSel = document.querySelector('#themeSelect');
	if (themeSel) {
		const themeMap = { green: 'themeGreen', orange: 'themeOrange', red: 'themeRed', blue: 'themeBlue' };
		Array.from(themeSel.options).forEach((opt) => {
			if (themeMap[opt.value]) opt.textContent = t(themeMap[opt.value]);
		});
	}
	setText(document.querySelector('#governmentTitle'), t('governmentTitle')); setText(document.querySelector('#governmentSubtitle'), t('governmentSubtitle'));
	setText(document.querySelector('#inventoryTitle'), t('inventoryTitle')); setText(document.querySelector('#inventorySubtitle'), t('inventorySubtitle')); setText(inventoryButton, t('inventory'));
	setText(playTimeRewardsButton, t('playTimeRewardsButton'));
	setText(document.querySelector('#playTimeRewardsTitle'), t('playTimeRewardsTitle'));
	setText(document.querySelector('#playTimeRewardsSubtitle'), t('playTimeRewardsSubtitle'));
	setText(document.querySelector('#playTimeRewardsScreen .close-history'), currentLanguage === 'en' ? '[ X ]' : '[ X ]');
	['nameKey', 'surnameKey', 'ageKey', 'characterKey', 'moneyKey', 'locationKey', 'hobbyKey', 'occupationKey', 'energyKey', 'moodKey', 'reputationKey'].forEach((key) => setText(document.querySelector(`#${key}`), t(key)));
	setText(document.querySelector('#blogTitle'), t('blogTitle')); setText(document.querySelector('#blogSubtitle'), t('blogSubtitle'));
  setText(document.querySelector('#blogReleaseTitle'), t('blogReleaseTitle')); setText(document.querySelector('#blogReleaseText'), t('blogReleaseText'));
  const footerElem = document.querySelector('#gameFooter');
  if (footerElem) footerElem.textContent = t('footerCredits');
	renderCreatorBlog();
}

function changeLanguage(value) {
  const nextLanguage = value === 'en' ? 'en' : 'es';
  currentLanguage = nextLanguage;
	window.currentLanguage = currentLanguage;
  try { localStorage.setItem('lifeLanguage', currentLanguage); } catch { /* almacenamiento opcional */ }
  applyTranslations();
  if (!historyScreen.classList.contains('hidden')) renderHistory(readSave().chapters);
  if (!worldScreen.classList.contains('hidden')) renderWorldPanel();
  if (!skillsScreen.classList.contains('hidden')) renderSkillsPanel();
  if (typeof relationsScreen !== 'undefined' && !relationsScreen.classList.contains('hidden')) renderRelationsPanel();
  if (!menuScreen.classList.contains('hidden')) renderMenu();
	if (!careersScreen.classList.contains('hidden')) renderCareersPanel();
  if (!familyScreen.classList.contains('hidden')) renderFamilyPanel();
  if (typeof petsScreen !== 'undefined' && !petsScreen.classList.contains('hidden')) renderPetsPanel();
	if (!inventoryScreen.classList.contains('hidden')) renderInventoryPanel();
	if (typeof governmentScreen !== 'undefined' && !governmentScreen.classList.contains('hidden')) renderGovernmentPanel();
	if (typeof playTimeRewardsScreen !== 'undefined' && !playTimeRewardsScreen.classList.contains('hidden')) renderPlayTimeRewards();
	if (typeof statsScreen !== 'undefined' && !statsScreen.classList.contains('hidden')) { renderStats(); renderFullStats(); }
	if (typeof welcomeScreen !== 'undefined' && !welcomeScreen.classList.contains('hidden')) renderPreviousLivesList();
	const storyIsVisible = !storyScreen?.classList.contains('hidden');
	if (window.__lifeSave?.lifeStatus === 'active' && storyIsVisible) {
	  renderWeather(window.__lifeSave.weather);
	  renderWorldEnvironment(window.__lifeSave);
	}
	else if (!storyIsVisible) resetWeatherVisuals();
  renderCurrentOccupation();
}

listen(languageSelect, 'change', (event) => changeLanguage(event.target.value));
listen(languageSelect, 'input', (event) => changeLanguage(event.target.value));

listen(menuButton, 'click', () => {
  renderMenu();
  menuScreen.classList.remove('hidden');
});

function returnToMenuFromPanel(screen) {
  screen?.classList.add('hidden');
  if (storyScreen && !storyScreen.classList.contains('hidden')) {
	renderMenu();
	menuScreen.classList.remove('hidden');
  }
}

listen(closeMenuButton, 'click', () => menuScreen.classList.add('hidden'));
listen(careersButton, 'click', () => { renderCareersPanel(); careersScreen.classList.remove('hidden'); });
listen(closeCareersButton, 'click', () => returnToMenuFromPanel(careersScreen));
listen(familyButton, 'click', () => { renderFamilyPanel(); familyScreen.classList.remove('hidden'); });
listen(closeFamilyButton, 'click', () => returnToMenuFromPanel(familyScreen));
listen(petsButton, 'click', () => { renderPetsPanel(); petsScreen.classList.remove('hidden'); });
listen(closePetsButton, 'click', () => returnToMenuFromPanel(petsScreen));
listen(inventoryButton, 'click', () => { renderInventoryPanel(); inventoryScreen.classList.remove('hidden'); });
listen(closeInventoryButton, 'click', () => returnToMenuFromPanel(inventoryScreen));
listen(governmentButton, 'click', () => { renderGovernmentPanel(); governmentScreen.classList.remove('hidden'); });
listen(closeGovernmentButton, 'click', () => returnToMenuFromPanel(governmentScreen));

listen(blogButton, 'click', () => {
	renderCreatorBlog();
  blogScreen?.classList.remove('hidden');
});
function closeCreatorBlog() {
  blogScreen?.classList.add('hidden');
}
listen(closeBlogButton, 'click', closeCreatorBlog);
blogScreen?.addEventListener('click', (event) => {
  if (event.target === blogScreen) closeCreatorBlog();
});

function renderCreatorBlog() {
  const blogWindow = blogScreen?.querySelector('.blog-window');
  if (!blogWindow) return;
  blogWindow.querySelectorAll('.creator-post').forEach((post) => post.remove());
	[...creatorPosts].sort((a, b) => b.date.localeCompare(a.date)).forEach((post) => {
	const article = document.createElement('article');
	article.className = 'blog-entry creator-post';
	const heading = document.createElement('h3');
	heading.textContent = `[ ${post.category[currentLanguage] || post.category.en || post.category.es} ] ${post.title[currentLanguage] || post.title.en || post.title.es}`;
	const date = document.createElement('small');
	date.textContent = post.date;
	const text = document.createElement('p');
	text.textContent = post.text[currentLanguage] || post.text.en || post.text.es;
	article.append(heading, date, text);
	blogWindow.append(article);
  });
}

function getPlayerPets(save = readSave()) {
  const family = normalizeFamilyTree(save.player?.familyTree, save.player || {});
  if (!Array.isArray(family.pets)) family.pets = [];
  return family.pets.map(normalizePet);
}

function normalizePet(pet) {
  if (!pet || typeof pet !== 'object') {
    return {
      id: `pet-${Date.now()}`,
      name: currentLanguage === 'en' ? 'Pet' : 'Mascota',
      type: 'dog',
      health: 100,
      happiness: 80,
      hunger: 20,
      affection: 50,
      age: 1,
      adoptedAt: new Date().toISOString()
    };
  }
  return {
    id: pet.id || `pet-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    name: pet.name || (currentLanguage === 'en' ? 'Pet' : 'Mascota'),
    type: pet.type || 'dog',
    health: Math.max(0, Math.min(100, Number(pet.health ?? 100))),
    happiness: Math.max(0, Math.min(100, Number(pet.happiness ?? 80))),
    hunger: Math.max(0, Math.min(100, Number(pet.hunger ?? 20))),
    affection: Math.max(0, Math.min(100, Number(pet.affection ?? 50))),
    age: Math.max(0, Number(pet.age || 1)),
    adoptedAt: pet.adoptedAt || new Date().toISOString()
  };
}

function renderPetsPanel() {
  if (!petsDashboard) return;
  petsDashboard.replaceChildren();
  const save = readSave();
  const pets = getPlayerPets(save);
  const en = currentLanguage === 'en';

  if (!pets.length) {
    const emptyP = document.createElement('p');
    emptyP.className = 'pets-empty';
    emptyP.textContent = t('petNoPets');
    petsDashboard.append(emptyP);
    return;
  }

  const typeNames = {
    dog: en ? 'Dog' : 'Perro',
    cat: en ? 'Cat' : 'Gato',
    bird: en ? 'Bird' : 'Ave',
    hamster: 'Hámster',
    rabbit: en ? 'Rabbit' : 'Conejo'
  };

  pets.forEach((pet) => {
    const card = document.createElement('article');
    card.className = 'pet-card';

    const header = document.createElement('div');
    header.className = 'pet-card-header';
    const nameH = document.createElement('h3');
    nameH.className = 'pet-name';
    nameH.textContent = `${pet.name} (${pet.age} ${en ? 'yr' : 'año'}${pet.age === 1 ? '' : (en ? 's' : 's')})`;
    const badge = document.createElement('span');
    badge.className = 'pet-type-badge';
    badge.textContent = typeNames[pet.type] || pet.type;
    header.append(nameH, badge);

    const healthRow = document.createElement('div');
    healthRow.className = 'pet-stat-row';
    healthRow.innerHTML = `<span>${en ? 'Health' : 'Salud'}: ${pet.health}%</span><div class="pet-bar-outer"><div class="pet-bar-inner health" style="width: ${pet.health}%"></div></div>`;

    const happyRow = document.createElement('div');
    happyRow.className = 'pet-stat-row';
    happyRow.innerHTML = `<span>${en ? 'Happiness' : 'Felicidad'}: ${pet.happiness}%</span><div class="pet-bar-outer"><div class="pet-bar-inner happiness" style="width: ${pet.happiness}%"></div></div>`;

    const affRow = document.createElement('div');
    affRow.className = 'pet-stat-row';
    affRow.innerHTML = `<span>${en ? 'Affection' : 'Cariño'}: ${pet.affection}%</span><div class="pet-bar-outer"><div class="pet-bar-inner affection" style="width: ${pet.affection}%"></div></div>`;

    const actions = document.createElement('div');
    actions.className = 'pet-actions';

    const playBtn = document.createElement('button');
    playBtn.type = 'button';
    playBtn.className = 'pet-action-btn';
    playBtn.textContent = t('petPlay');
    playBtn.addEventListener('click', () => interactWithPet(pet.id, 'play'));

    const feedBtn = document.createElement('button');
    feedBtn.type = 'button';
    feedBtn.className = 'pet-action-btn';
    feedBtn.textContent = t('petFeed');
    feedBtn.addEventListener('click', () => interactWithPet(pet.id, 'feed'));

    const vetBtn = document.createElement('button');
    vetBtn.type = 'button';
    vetBtn.className = 'pet-action-btn';
    vetBtn.textContent = t('petVet');
    vetBtn.addEventListener('click', () => interactWithPet(pet.id, 'vet'));

    const walkBtn = document.createElement('button');
    walkBtn.type = 'button';
    walkBtn.className = 'pet-action-btn';
    walkBtn.textContent = t('petWalk');
    walkBtn.addEventListener('click', () => interactWithPet(pet.id, 'walk'));

    const giveUpBtn = document.createElement('button');
    giveUpBtn.type = 'button';
    giveUpBtn.className = 'pet-action-btn give-up';
    giveUpBtn.textContent = t('petGiveUp');
    giveUpBtn.addEventListener('click', () => giveUpPetForAdoption(pet.id));

    actions.append(playBtn, feedBtn, vetBtn, walkBtn, giveUpBtn);
    card.append(header, healthRow, happyRow, affRow, actions);
    petsDashboard.append(card);
  });
}

async function giveUpPetForAdoption(petId) {
  const save = readSave();
  const family = normalizeFamilyTree(save.player?.familyTree, save.player || {});
  const pet = family.pets?.find((p) => p.id === petId);
  if (!pet) return;
  const en = currentLanguage === 'en';
  const confirmMsg = (t('petGiveUpConfirm') || (en ? 'Are you sure you want to put {name} up for adoption?' : '¿Estás seguro de que deseas dar en adopción a {name}?')).replace('{name}', pet.name);
  if (!window.confirm(confirmMsg)) return;

  family.pets = (family.pets || []).filter((p) => p.id !== petId);
  save.player.familyTree = family;
  save.player.happiness = Math.max(0, (Number(save.player.happiness) || 50) - 10);
  Object.assign(player, save.player);
  window.__lifeSave = save;
  await saveCurrentGame(save);
  renderPetsPanel();
  renderStats();
  const notice = (t('petGiveUpSuccess') || (en ? '// You put {name} up for adoption. It found a new loving home._' : '// Diste en adopción a {name}. Ha encontrado un nuevo y cariñoso hogar._')).replace('{name}', pet.name);
  if (savedMessage) {
    savedMessage.textContent = notice;
    savedMessage.classList.remove('hidden', 'error');
  }
}

async function interactWithPet(petId, action) {
  const save = readSave();
  const family = normalizeFamilyTree(save.player?.familyTree, save.player || {});
  const pet = family.pets?.find((p) => p.id === petId);
  if (!pet) return;
  const en = currentLanguage === 'en';
  let message = '';

  if (action === 'play') {
    pet.happiness = Math.min(100, (Number(pet.happiness) || 80) + 15);
    pet.affection = Math.min(100, (Number(pet.affection) || 50) + 10);
    save.player.energy = Math.max(0, (Number(save.player.energy) || 100) - 5);
    save.player.mood = en ? 'happy' : 'feliz';
    message = en ? `You played happily with ${pet.name}! (+happiness, -5 energy)` : `¡Pasaste un gran momento jugando con ${pet.name}! (+felicidad, -5 energía)`;
  } else if (action === 'feed') {
    pet.hunger = Math.max(0, (Number(pet.hunger) || 20) - 25);
    pet.health = Math.min(100, (Number(pet.health) || 100) + 8);
    pet.affection = Math.min(100, (Number(pet.affection) || 50) + 5);
    const cost = Math.min(Number(save.player.money) || 0, 10);
    save.player.money = Math.max(0, (Number(save.player.money) || 0) - cost);
    message = en ? `You fed ${pet.name}. It feels loved and energetic! (-$${cost})` : `Alimentaste a ${pet.name}. ¡Come feliz y con energía! (-$${cost})`;
  } else if (action === 'vet') {
    const cost = Math.min(Number(save.player.money) || 0, 50);
    save.player.money = Math.max(0, (Number(save.player.money) || 0) - cost);
    pet.health = 100;
    message = en ? `You took ${pet.name} to the veterinary clinic. Health restored to 100%! (-$${cost})` : `Llevaste a ${pet.name} a la veterinaria. ¡Salud restaurada al 100%! (-$${cost})`;
  } else if (action === 'walk') {
    pet.happiness = Math.min(100, (Number(pet.happiness) || 80) + 15);
    pet.health = Math.min(100, (Number(pet.health) || 100) + 5);
    save.player.energy = Math.max(0, (Number(save.player.energy) || 100) - 8);
    message = en ? `You took ${pet.name} for a refreshing stroll! (+health, -8 energy)` : `Saliste a pasear con ${pet.name}. ¡El aire libre les renovó el ánimo! (-8 energía)`;
  }

  save.player.familyTree = family;
  Object.assign(player, save.player);
  window.__lifeSave = save;
  await saveCurrentGame(save);
  renderPetsPanel();
  renderStats();
  if (savedMessage) {
    savedMessage.textContent = `// ${message}_`;
    savedMessage.classList.remove('hidden', 'error');
  }
}

let isAdoptingPet = false;
async function adoptNewPet(name, type) {
  if (isAdoptingPet) return;
  const cleanName = String(name || '').trim();
  if (!cleanName) return;
  isAdoptingPet = true;
  if (adoptSubmitBtn) adoptSubmitBtn.disabled = true;
  try {
    const save = readSave();
    const family = normalizeFamilyTree(save.player?.familyTree, save.player || {});
    family.pets = Array.isArray(family.pets) ? family.pets : [];

    const newPet = {
      id: `pet-${Date.now()}-${family.pets.length}`,
      name: cleanName,
      type: type || 'dog',
      health: 100,
      happiness: 90,
      hunger: 10,
      affection: 60,
      age: 1,
      adoptedAt: new Date().toISOString()
    };

    family.pets.push(newPet);
    save.player.familyTree = family;
    save.player.mood = currentLanguage === 'en' ? 'happy' : 'feliz';
    Object.assign(player, save.player);
    window.__lifeSave = save;
    await saveCurrentGame(save);
    renderPetsPanel();
    renderStats();
    if (adoptNameInput) adoptNameInput.value = '';
    if (savedMessage) {
      savedMessage.textContent = currentLanguage === 'en'
        ? `// You adopted ${cleanName}! Welcome to the family._`
        : `// ¡Adoptaste a ${cleanName}! Bienvenido/a a la familia._`;
      savedMessage.classList.remove('hidden', 'error');
    }
  } finally {
    isAdoptingPet = false;
    if (adoptSubmitBtn) adoptSubmitBtn.disabled = false;
  }
}

listen(adoptPetForm, 'submit', async (e) => {
  e.preventDefault();
  if (isAdoptingPet) return;
  await adoptNewPet(adoptNameInput?.value, adoptTypeSelect?.value);
});

function renderMenu() {
	const controls = [
	['exitLife', () => exitCurrentLifeWithoutDying()],
	['history', () => { renderHistory(readSave().chapters); historyScreen.classList.remove('hidden'); }],
	['stats', () => { statsScreen.classList.remove('hidden'); renderStats(); renderFullStats(); }],
	['careers', () => { renderCareersPanel(); careersScreen.classList.remove('hidden'); }],
	['family', () => { renderFamilyPanel(); familyScreen.classList.remove('hidden'); }],
	['pets', () => { renderPetsPanel(); petsScreen.classList.remove('hidden'); }],
	['inventory', () => { renderInventoryPanel(); inventoryScreen.classList.remove('hidden'); }],
	['government', () => { renderGovernmentPanel(); governmentScreen.classList.remove('hidden'); }],
	['world', () => { renderWorldPanel(); worldScreen.classList.remove('hidden'); }],
	['skills', () => { renderSkillsPanel(); skillsScreen.classList.remove('hidden'); }],
	['relations', () => { renderRelationsPanel(); relationsScreen.classList.remove('hidden'); }],
	['learnFile', () => learnFileInput.click()],
	['export', () => exportButton.click()],
	['import', () => importInput.click()],
	['reset', () => resetButton.click()],
	['testGameOver', () => testGameOverButton.click()],
	['logout', logoutSession]
  ];
  menuGrid.replaceChildren();
	controls.forEach(([key, action]) => {
	const button = document.createElement('button');
	button.type = 'button';
	button.className = 'history-button';
	button.textContent = t(key);
	button.addEventListener('click', () => {
	  menuScreen.classList.add('hidden');
	  action();
	});
	menuGrid.append(button);
  });
}

async function logoutSession() {
  const confirmed = window.confirm(t('logoutConfirm'));
  if (!confirmed) return;
  try {
	await window.lifeSupabase?.archiveCurrentGame?.(readSave());
	await window.lifeSupabase?.clearPresence?.();
  } catch (error) {
	console.warn('LIFE.AI session archive:', error);
  }
  stopWeatherCycle();
  stopWorldClock();
  resetWeatherVisuals();
  await storage.remove('game', 'current').catch(() => undefined);
  await storage.remove('memory', 'global').catch(() => undefined);
  try {
	localStorage.removeItem('lifeUsername');
	localStorage.removeItem('lifeSaveFallback');
	localStorage.removeItem('lifeAIMemoryFallback');
	localStorage.removeItem('life_saved_lives_v1');
  } catch { /* almacenamiento opcional */ }
  try {
	await window.lifeSupabase?.signOut?.();
  } catch (error) {
	console.warn('LIFE.AI sign out:', error);
  }
  window.__lifeSave = null;
  window.__lifeMemory = null;
  currentUsername = '';
  window.currentUsername = '';
  window.location.reload();
}

class StorageManager {
  constructor() {
	this.dbName = 'lifeAI';
	this.version = 1;
	this.dbPromise = null;
  }

  open() {
	if (this.dbPromise) return this.dbPromise;
	this.dbPromise = new Promise((resolve, reject) => {
	  if (!window.indexedDB) return reject(new Error('IndexedDB no disponible'));
	  const request = indexedDB.open(this.dbName, this.version);
	  request.onupgradeneeded = () => {
		const db = request.result;
		['game', 'memory', 'meta'].forEach((store) => {
		  if (!db.objectStoreNames.contains(store)) db.createObjectStore(store);
		});
	  };
	  request.onsuccess = () => resolve(request.result);
	  request.onerror = () => reject(request.error);
	});
	return this.dbPromise;
  }

  async get(store, key) {
	const db = await this.open();
	return new Promise((resolve, reject) => {
	  const request = db.transaction(store, 'readonly').objectStore(store).get(key);
	  request.onsuccess = () => resolve(request.result);
	  request.onerror = () => reject(request.error);
	});
  }

  async set(store, key, value) {
	const db = await this.open();
	return new Promise((resolve, reject) => {
	  const request = db.transaction(store, 'readwrite').objectStore(store).put(value, key);
	  request.onsuccess = () => resolve(value);
	  request.onerror = () => reject(request.error);
	});
  }

  async remove(store, key) {
	const db = await this.open();
	return new Promise((resolve, reject) => {
	  const request = db.transaction(store, 'readwrite').objectStore(store).delete(key);
	  request.onsuccess = resolve;
	  request.onerror = () => reject(request.error);
	});
  }

  async migrateLegacy() {
	const migrated = await this.get('meta', 'migrated').catch(() => false);
	if (migrated) return;
	const legacySave = JSON.parse(localStorage.getItem('lifeSave') || 'null');
	const legacyMemory = JSON.parse(localStorage.getItem('lifeAIMemory') || 'null');
	if (legacySave) await this.set('game', 'current', legacySave);
	if (legacyMemory) await this.set('memory', 'global', legacyMemory);
	await this.set('meta', 'migrated', true);
	localStorage.removeItem('lifeSave');
	localStorage.removeItem('lifeAIMemory');
  }
}

const storage = new StorageManager();

function predictIntent(text, memory) {
  const normalized = normalizeWords(text);
  if (!normalized.length) return [];
  return Object.entries(intentPatterns)
	.map(([intent, patterns]) => {
	  const localScore = patterns.filter((pattern) => normalized.some((word) => normalizeWords(pattern).includes(word))).length;
	  const globalCount = Number(window.__lifeGlobalPatterns?.find((item) => item.intent === intent)?.event_count) || 0;
	  return { intent, score: localScore + (globalCount > 0 ? Math.min(2, Math.log10(globalCount + 1) / 2) : 0) };
	})
	.filter((item) => item.score > 0)
	.sort((a, b) => b.score - a.score)
	.slice(0, 3)
	.map((item) => item.intent);
}

function learnCorrection(memory, phrase, intendedIntent, preferredResponse = '') {
  memory.corrections.push({ phrase: normalizeWords(phrase).join(' '), intent: intendedIntent, preferredResponse, date: new Date().toISOString() });
  memory.learnedIntents.push({ phrase: normalizeWords(phrase).join(' '), intent: intendedIntent, date: new Date().toISOString() });
}

function detectNaturalCorrection(message, analysis) {
	const match = message.match(/(?:no,?|quería decir|queria decir|en realidad|me refería a|me referia a|no,? i meant|actually|i meant)\s+(.+)/i);
  if (!match) return null;
  const corrected = analyzeText(match[1]);
  return { phrase: match[1].trim(), intent: corrected.intent === 'unknown' ? analysis.intent : corrected.intent };
}

class PlanningEngine {
  constructor(memory) {
	this.memory = normalizeMemory(memory);
  }

  detectGoal(text, analysis) {
	const match = text.match(/(?:quiero|me gustaría|me gustaria|mi objetivo es|planeo|plan de)\s+(.+)/i);
	if (!match && analysis.intent !== 'planning') return null;
	const goalText = (match ? match[1] : text).replace(/[.!?]+$/, '').trim();
	if (!goalText) return null;
	let goal = this.memory.goals.find((item) => item.text.toLowerCase() === goalText.toLowerCase() && item.status === 'active');
	if (!goal) {
	  goal = { id: `goal-${Date.now()}`, text: goalText, status: 'active', progress: 0, steps: this.createSteps(goalText), date: new Date().toISOString(), lastUpdate: new Date().toISOString() };
	  this.memory.goals.push(goal);
	}
	return goal;
  }

  createSteps(goalText) {
	return currentLanguage === 'en' ? [
	  { text: `Define what achieving means: ${goalText}`, done: false },
	  { text: `Choose a small first action for ${goalText}`, done: false },
	  { text: `Practice and review the progress of ${goalText}`, done: false }
	] : [
	  { text: `Definir qué significa lograr: ${goalText}`, done: false },
	  { text: `Elegir una primera acción pequeña para ${goalText}`, done: false },
	  { text: `Practicar y revisar el progreso de ${goalText}`, done: false }
	];
  }

  update(text) {
	this.memory.goals.filter((goal) => goal.status === 'active').forEach((goal) => {
	  const goalWords = new Set(normalizeWords(goal.text));
	  if (normalizeWords(text).some((word) => goalWords.has(word))) {
		goal.progress = Math.min(100, goal.progress + 10);
		const next = goal.steps.find((step) => !step.done);
		if (next) next.done = true;
		goal.lastUpdate = new Date().toISOString();
		if (goal.progress >= 100) goal.status = 'completed';
	  }
	});
  }
}

class WorldEngine {
  apply(text, interpretation, world, playerState) {
	normalizeWorld(world);
	const changes = [];
	const now = new Date().toISOString();
	const addUnique = (collection, item) => {
	  if (!item.name) return item;
	  const existing = collection.find((entry) => entry.name.toLowerCase() === item.name.toLowerCase());
	  if (existing) return existing;
	  collection.push(item);
	  return item;
	};
	interpretation.creates.forEach((created) => {
	  if (created.type === 'character') {
		const wasKnown = world.characters.some((item) => item.name.toLowerCase() === created.name.toLowerCase());
		const relationType = created.relationshipType || interpretation.relationshipType || 'acquaintance';
		const relationLabel = relationType === 'friend' ? (currentLanguage === 'en' ? 'friend' : 'amigo') : (currentLanguage === 'en' ? 'acquaintance' : 'conocido');
		const character = addUnique(world.characters, { id: `character-${Date.now()}-${world.characters.length}`, name: created.name, role: relationLabel, trust: relationType === 'friend' ? 20 : 5, goals: [], memories: [], relationships: [], description: `${currentLanguage === 'en' ? 'Met during' : 'Conocido durante'}: ${text}`, createdAt: now });
		character.memories = Array.isArray(character.memories) ? character.memories : [];
		character.memories.push({ text: text.slice(0, 180), date: now });
		character.memories = character.memories.slice(-30);
		if (!wasKnown) changes.push(currentLanguage === 'en' ? `new ${relationLabel}: ${created.name}` : `nuevo ${relationLabel}: ${created.name}`);
	  } else if (created.type === 'location') {
		const wasKnown = world.locations.some((item) => item.name.toLowerCase() === created.name.toLowerCase());
		const location = addUnique(world.locations, { id: `location-${Date.now()}-${world.locations.length}`, name: created.name, discovered: true, description: currentLanguage === 'en' ? `A place related to the decision: ${text}` : `Un lugar relacionado con la decisión: ${text}`, visits: 1, connectedTo: playerState.location || '', createdAt: now });
		location.visits = (location.visits || 0) + (wasKnown ? 1 : 0);
		if (!wasKnown) changes.push(currentLanguage === 'en' ? `new location: ${created.name}` : `nuevo lugar: ${created.name}`);
	  } else if (created.type === 'place_or_object') {
		addUnique(world.items, { id: `item-${Date.now()}-${world.items.length}`, name: created.name, owner: playerState.name || (currentLanguage === 'en' ? 'player' : 'jugador'), condition: currentLanguage === 'en' ? 'new' : 'nuevo', createdAt: now });
		changes.push(currentLanguage === 'en' ? `new item: ${created.name}` : `nuevo elemento: ${created.name}`);
	  }
	});
	  if (interpretation.rule) {
		const existingRule = world.rules.find((rule) => rule.text.toLowerCase() === interpretation.rule.toLowerCase());
		if (!existingRule) {
		  world.rules.push({ id: `rule-${Date.now()}`, title: currentLanguage === 'en' ? 'Discovered rule' : 'Regla descubierta', text: interpretation.rule, source: text, active: true, createdAt: now });
		  changes.push(currentLanguage === 'en' ? `world rule: ${interpretation.rule}` : `regla del mundo: ${interpretation.rule}`);
		}
	  }
	  if (interpretation.faction && !world.factions.some((faction) => faction.name.toLowerCase() === interpretation.faction.toLowerCase())) {
		world.factions.push({ id: `faction-${Date.now()}`, name: interpretation.faction, reputation: 0, members: [playerState.name || (currentLanguage === 'en' ? 'player' : 'jugador')], goals: [], description: currentLanguage === 'en' ? `Organization created from: ${text}` : `Organización creada a partir de: ${text}`, createdAt: now });
		changes.push(currentLanguage === 'en' ? `new faction: ${interpretation.faction}` : `nueva facción: ${interpretation.faction}`);
	  }
	if (interpretation.actions.some((action) => action.type === 'social') && interpretation.entities.people.length) {
		interpretation.entities.people.forEach((person) => {
			const character = world.characters.find((item) => item.name.toLowerCase() === person.toLowerCase());
			if (!character) return;
			character.trust = Math.min(100, (character.trust || 0) + 5);
			character.relationships = Array.isArray(character.relationships) ? character.relationships : [];
			const relationType = interpretation.relationshipType || 'acquaintance';
			character.relationships.push({ type: relationType, date: now, context: text.slice(0, 140) });
			changes.push(currentLanguage === 'en' ? `relationship with ${character.name}: trust +5` : `relación con ${character.name}: confianza +5`);
		});
	}
	const manualMinutes = parseTimeAdvance(text);
	const travel = interpretation.actions.some((action) => action.type === 'travel');
	const elapsedMinutes = manualMinutes || (travel ? 8 * 60 : interpretation.actions.some((action) => action.type === 'rest') ? 8 * 60 : 2 * 60);
	advanceWorldTime(world, elapsedMinutes);
	if (manualMinutes) changes.push(currentLanguage === 'en' ? `time advanced: ${manualMinutes} minutes` : `tiempo avanzado: ${manualMinutes} minutos`);
	if (interpretation.goal && !world.quests.some((quest) => quest.kind === 'goal' && quest.title.toLowerCase() === interpretation.goal.toLowerCase() && quest.status === 'active')) {
	  world.quests.push({ id: `quest-${Date.now()}`, kind: 'goal', title: interpretation.goal, status: 'active', progress: 0, steps: currentLanguage === 'en' ? ['Define the first step', 'Overcome the first obstacle', 'Review the progress'] : ['Definir el primer paso', 'Superar el primer obstáculo', 'Revisar el progreso'], createdAt: now, lastUpdate: now });
	  changes.push(currentLanguage === 'en' ? `goal started: ${interpretation.goal}` : `objetivo iniciado: ${interpretation.goal}`);
	}
	world.quests.filter((quest) => quest.status === 'active').forEach((quest) => {
	  const related = normalizeWords(`${quest.title} ${text}`).filter((word) => word.length > 4);
	  if (related.length > 1 && related.some((word) => normalizeWords(quest.title).includes(word))) {
		quest.progress = Math.min(100, quest.progress + 10);
		quest.lastUpdate = now;
		if (quest.progress >= 100) { quest.status = 'completed'; changes.push(currentLanguage === 'en' ? `goal completed: ${quest.title}` : `objetivo completado: ${quest.title}`); }
	  }
	});
	if (interpretation.risks.length) {
	  world.events.push({ id: `event-${Date.now()}`, text: interpretation.risks[0], source: text, dueDay: world.time.day + 3, status: 'pending', createdAt: now });
	  changes.push(currentLanguage === 'en' ? 'a pending consequence was created' : 'se ha creado una consecuencia pendiente');
	}
	world.lastDecision = { text, date: now, actions: interpretation.actions.map((action) => action.type) };
	world.events.push({ id: `event-${Date.now()}-decision`, text: currentLanguage === 'en' ? `The world reacts to: ${text}` : `El mundo reacciona a: ${text}`, source: 'decision', day: world.time.day, status: 'resolved', createdAt: now });
	world.news.unshift({ text: currentLanguage === 'en' ? `${playerState.name || 'The player'} made a decision that may change the course of the story.` : `${playerState.name || 'El jugador'} tomó una decisión que puede cambiar el rumbo de la historia.`, day: world.time.day, date: now });
	world.news = world.news.slice(0, 30);
	return changes;
  }
}

const worldEngine = new WorldEngine();

listen(startButton, 'click', () => {
	if (!applicationReady) return;
	resetWeatherVisuals();
	setWelcomeNavigationVisible(false);
	blogScreen?.classList.add('hidden');
  welcomeScreen.classList.add('hidden');
  Object.keys(player).forEach((key) => delete player[key]);
  Object.assign(player, createFreshPlayer());
  currentQuestion = 0;
  updateQuestion();
  if (typeof answerInput !== 'undefined' && answerInput) {
    answerInput.value = '';
    answerInput.focus();
  }
  if (typeof renderStats === 'function') renderStats();
  if (typeof renderFullStats === 'function') renderFullStats();
  questionScreen.classList.remove('hidden');
});

listen(answerInput, 'keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    if (lifeForm?.requestSubmit) {
      lifeForm.requestSubmit();
    } else {
      lifeForm?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  }
});

listen(lifeForm, 'submit', (event) => {
  event.preventDefault();
  const answer = answerInput.value.trim();

  if (!answer) {
	questionHint.textContent = currentLanguage === 'en' ? 'ERROR: you need to write an answer.' : 'ERROR: necesitas escribir una respuesta.';
	questionHint.classList.add('error');
	return;
  }

  const question = questions[currentQuestion];
	const numericQuestion = question.key === 'age' || question.key === 'money';
  const numericAnswer = Number(answer);
  const textOnlyAnswer = /[A-Za-zÁÉÍÓÚáéíóúÑñ]/.test(answer);
  const validNumber = /^\d+$/.test(answer) && Number.isSafeInteger(numericAnswer) && numericAnswer >= 0;
  if ((numericQuestion && !validNumber) || (!numericQuestion && !textOnlyAnswer)) {
	questionHint.textContent = numericQuestion
	  ? (currentLanguage === 'en' ? 'ERROR: enter a whole number equal to or greater than zero.' : 'ERROR: introduce un número entero igual o mayor que cero.')
	  : (currentLanguage === 'en' ? 'ERROR: enter text, not only numbers.' : 'ERROR: introduce texto, no solo números.');
	questionHint.classList.add('error');
	return;
  }
	if (question.key === 'location' && !isValidLocation(answer)) {
	questionHint.textContent = currentLanguage === 'en'
	  ? 'ERROR: write a real place, city, country or location (for example: Madrid, London or my hometown).'
	  : 'ERROR: escribe un lugar real, ciudad, país o ubicación (por ejemplo: Madrid, Londres o mi pueblo).';
	questionHint.classList.add('error');
	return;
  }
  if (question.key === 'hobby' && !isValidHobby(answer)) {
	questionHint.textContent = currentLanguage === 'en'
	  ? 'ERROR: write a recognizable hobby, such as music, football, reading, games or drawing.'
	  : 'ERROR: escribe un hobby reconocible, como música, fútbol, lectura, videojuegos o dibujo.';
	questionHint.classList.add('error');
	return;
  }
  player[question.key] = numericQuestion ? numericAnswer : answer;
	if (question.key === 'surname') {
	player.familyTree = generateFamilyTree(answer);
  }
  currentQuestion += 1;

  if (currentQuestion === questions.length) {
	showStats();
	return;
  }

  updateQuestion();
});

function readGlobalMemory() {
	const empty = createEmptyMemory();
  try {
	const memory = window.__lifeMemory || empty;
	normalizeMemory(memory);
	return memory;
  } catch {
	return empty;
  }
}

function createEmptyMemory() {
  return {
	version: 3, lifeCount: 0, wordCounts: {}, topics: {}, choices: [], notes: [], customRules: [],
	learnedIntents: [], recentInputs: [], sentiment: {}, codeIndex: [],
	conversationSummaries: [], sessions: [], facts: [], goals: [], preferences: {},
	searches: [], lastContext: [], updatedAt: null, episodes: [], semanticConcepts: {},
	corrections: [],
	knowledgeGraph: { nodes: [], edges: [] }, plans: [], decay: { halfLifeDays: 30 }
  };
}

function createEmptyWorld() {
  return {
	version: 1,
	 time: { day: 1, month: 1, year: 1, hour: 0, minute: 0, season: chooseInitialSeason(), seasonOffset: Math.floor(Math.random() * seasonOrder.length) },
	locations: [],
	characters: [],
	factions: [],
	items: [],
	quests: [],
	events: [],
	rules: [],
	news: [],
	lastDecision: null
  };
}

function updateWorldSeason(time) {
	time.season = seasonForMonth(time.month, time.seasonOffset);
  return time;
}

function advanceWorldTime(world, minutes) {
  normalizeWorld(world);
  const time = world.time;
  const totalMinutes = Math.max(0, Math.floor(Number(minutes) || 0));
	const absoluteMinutes = (time.hour * 60) + time.minute + totalMinutes;
  const elapsedDays = Math.floor(absoluteMinutes / (24 * 60));
  const remainingMinutes = absoluteMinutes % (24 * 60);
  const absoluteDay = (time.day - 1) + elapsedDays;
  const elapsedMonths = Math.floor(absoluteDay / 30);
  const absoluteMonth = (time.month - 1) + elapsedMonths;
  time.day = (absoluteDay % 30) + 1;
  time.month = (absoluteMonth % 12) + 1;
  time.year += Math.floor(absoluteMonth / 12);
  time.hour = Math.floor(remainingMinutes / 60);
  time.minute = remainingMinutes % 60;
  time.season = seasonForMonth(time.month, time.seasonOffset);
  return time;
}

function parseTimeAdvance(text) {
  const normalized = normalizeWords(text).join(' ');
  if (!/(?:paso|pasan|pasaron|avanza|avanzan|transcurre|transcurren|adelanto|esper(?:o|ar)|despues de|despues|later|advance|skip|after)/.test(normalized)) return 0;
  const units = { hora: 60, horas: 60, h: 60, dia: 1440, dias: 1440, semana: 10080, semanas: 10080, mes: 43200, meses: 43200, ano: 518400, anos: 518400, year: 518400, years: 518400, month: 43200, months: 43200, day: 1440, days: 1440, hour: 60, hours: 60, week: 10080, weeks: 10080 };
  const numbers = { un: 1, uno: 1, una: 1, one: 1, dos: 2, two: 2, tres: 3, three: 3, cuatro: 4, four: 4, cinco: 5, five: 5, seis: 6, six: 6, siete: 7, seven: 7, ocho: 8, eight: 8, nueve: 9, nine: 9, diez: 10, ten: 10, once: 11, eleven: 11, doce: 12, twelve: 12, veinte: 20, twenty: 20, treinta: 30, thirty: 30, cien: 100, hundred: 100 };
  const matches = [...normalized.matchAll(/(?:^|\s)(\d+(?:[.,]\d+)?|un[oa]?|one|dos|two|tres|three|cuatro|four|cinco|five|seis|six|siete|seven|ocho|eight|nueve|nine|diez|ten|once|eleven|doce|twelve|veinte|twenty|treinta|thirty|cien|hundred)\s*(horas?|h|dias?|días?|semanas?|meses?|anos?|años?|hours?|days?|weeks?|months?|years?)(?=\s|$)/g)];
  return matches.reduce((total, match) => {
	const amount = numbers[match[1]] ?? Number(match[1].replace(',', '.'));
	const unit = normalizeWords(match[2])[0];
	return total + (Number.isFinite(amount) ? amount * (units[unit] || 0) : 0);
  }, 0);
}

function stopWorldClock() {
  if (worldClockTimer !== null) {
	window.clearInterval(worldClockTimer);
	worldClockTimer = null;
  }
}

function startWorldClock(save) {
  stopWorldClock();
  if (!save || save.lifeStatus !== 'active' || !save.player?.name) return;
  normalizeWorld(save.world);
	let diseaseClockTicks = 0;
  worldClockTimer = window.setInterval(() => {
	if (window.__lifeSave?.lifeStatus !== 'active') return;
	const activeSave = normalizeSave(window.__lifeSave);
	advanceWorldTime(activeSave.world, 1);
	diseaseClockTicks += 1;
	if (diseaseClockTicks >= 3) {
	  diseaseClockTicks = 0;
	  checkTemporalDiseases(activeSave);
	}
	window.__lifeSave = activeSave;
	if (!worldScreen?.classList.contains('hidden')) renderWorldPanel();
	if (!governmentScreen?.classList.contains('hidden')) renderGovernmentPanel();
  }, 1000);
}

function normalizeWorld(world) {
  const defaults = createEmptyWorld();
	if (!world || typeof world !== 'object') world = createEmptyWorld();
	Object.entries(defaults).forEach(([key, value]) => {
	  if (world[key] === undefined || world[key] === null) world[key] = Array.isArray(value) ? [] : (typeof value === 'object' ? { ...value } : value);
	});
	world.time = { ...defaults.time, ...(world.time || {}) };
	world.time.day = Math.min(30, Math.max(1, Number(world.time.day) || 1));
	world.time.month = Math.min(12, Math.max(1, Number(world.time.month) || 1));
	world.time.year = Math.max(1, Number(world.time.year) || 1);
	world.time.hour = Math.min(23, Math.max(0, Number(world.time.hour) || 0));
	world.time.minute = Math.min(59, Math.max(0, Number(world.time.minute) || 0));
	world.time.seasonOffset = Number.isInteger(world.time.seasonOffset) ? ((world.time.seasonOffset % seasonOrder.length) + seasonOrder.length) % seasonOrder.length : 0;
	updateWorldSeason(world.time);
	['locations', 'characters', 'factions', 'items', 'quests', 'events', 'rules', 'news'].forEach((key) => {
	  world[key] = Array.isArray(world[key]) ? world[key].slice(-300) : [];
	});
	return world;
}

function normalizeSave(save) {
	const normalized = save && typeof save === 'object' ? save : {};
	normalized.player = normalized.player || {};
	normalized.player.inventory = Array.isArray(normalized.player.inventory) ? normalized.player.inventory : [];
	normalized.player.rewards = normalized.player.rewards && typeof normalized.player.rewards === 'object' ? normalized.player.rewards : {};
	if (!normalized.player.familyTree || (normalized.player.surname && normalized.player.familyTree.surnameSource !== normalized.player.surname)) normalized.player.familyTree = generateFamilyTree(normalized.player.surname || '');
	normalized.player.familyTree = normalizeFamilyTree(normalized.player.familyTree, normalized.player);
	normalized.chapters = Array.isArray(normalized.chapters) ? normalized.chapters : [];
	normalized.memory = normalizeMemory(normalized.memory || createEmptyMemory());
	normalized.world = normalizeWorld(normalized.world);
  normalized.weather = normalizeWeather(normalized.weather);
	normalized.lifeStatus = normalized.lifeStatus === 'ended' ? 'ended' : 'active';
	return normalized;
}

function getSessionPlaySeconds() {
  return Math.max(0, Math.floor((Date.now() - sessionStartedAt) / 1000));
}

function getRewardPlaySeconds() {
  return Math.max(getSessionPlaySeconds(), Number(window.__lifePlaySeconds) || 0);
}

function isConversationMessage(text, analysis = {}) {
  const clean = String(text || '').trim();
  if (!clean) return false;
  const normalized = normalizeWords(clean).join(' ');

  // 1. Direct question marks
  if (/[?¿]/.test(clean)) return true;

  // 2. Question opening keywords
  if (/^(?:que|qué|como|cómo|cuando|cuándo|donde|dónde|por que|por qué|porque|quien|quién|cual|cuál|cuanto|cuánto|podrias|podrías|puedo|podes|podés|seria|sería|how|what|when|where|why|who|which|can i|could you|is it|are you|do you)\b/i.test(normalized)) {
    return true;
  }

  // 3. Greetings and check-ins
  const words = normalized.split(/\s+/).filter(Boolean);
  const casualGreeting = words.some((word) => ['hola', 'buenas', 'hey', 'hello', 'hi', 'holi', 'buenasass'].some((term) => closeSemanticWord(word, term) || word.startsWith(`${term}a`) || word.startsWith(`${term}e`)));
  const greetings = /^(hola|buenas|buenos dias|buenas tardes|buenas noches|hey|hello|hi|holi|chau|adios|adiós|bye|see you|gracias|thank you|thanks|good morning|good afternoon|good evening|good night|cómo estás|como estas|how are you|qué onda|que onda|todo bien|qué tal|que tal|whats up|what's up)\b/i.test(normalized) || casualGreeting;
  if (greetings) return true;

  // 4. Conversational / Chat / Advice intents
  const chatIntents = /\b(quiero charlar|quiero hablar|podemos hablar|podemos charlar|charlar|hablar|conversar|platicar|decime|contame|cuéntame|ayudame|ayúdame|aconsejame|aconsejame|que opinas|qué opinas|que pensas|qué pensás|que me recomiendas|qué me recomiendas|dame un consejo|no se que hacer|no sé qué hacer|estoy aburrido|estoy cansado|me siento solo|me siento mal|hoy fue un dia|hoy fue un día|quien eres|quién eres|que eres|qué eres|sos inteligente|sos un bot|me gusta este juego|tell me|help me|advise me|what do you think|give me advice|i am bored|i feel lonely|i feel tired|can we talk|let's talk|who are you|what are you)\b/i.test(normalized);
  if (chatIntents) return true;

  // 5. Hypothetical thoughts without committed actions
  if (/^(?:tal vez|quizas|quizás|a lo mejor|estoy pensando en|estaba pensando|me pregunto si|no se si|no sé si|maybe|perhaps|i wonder if|thinking about)\b/i.test(normalized)) {
    return true;
  }

  return false;
}

function getConversationReply(text, playerState = {}, world = {}) {
  const clean = String(text || '').trim();
  const normalized = normalizeWords(clean).join(' ');
  const en = currentLanguage === 'en';
  const name = playerState.name || (en ? 'friend' : 'amigo');
  const age = playerState.age || 20;
  const occupation = careerById(playerState.occupation);
  const occLabel = occupation ? (en ? occupation.names.en : occupation.names.es) : (en ? 'seeking your path' : 'buscando tu rumbo');
  const money = playerState.money || 0;
  const mood = playerState.mood || 'estable';
  const pets = playerState.familyTree?.pets || [];
  const petMention = pets.length > 0 ? (en ? ` Along with ${pets.map(p => p.name).join(', ')}, you have faithful companions.` : ` Junto a ${pets.map(p => p.name).join(', ')}, tienes una compañía hermosa.`) : '';
  const noteSuffix = en
    ? '\n\n// [LIFE.AI]: Talking with me does not alter your life statistics or advance time. Take your time to reflect.'
    : '\n\n// [LIFE.AI]: Charlar conmigo no modifica tus estadísticas de vida ni avanza tu edad. Tómate tu tiempo para reflexionar.';

  // Greetings
  if (/\b(hola|holi|hey|hello|hi|buenas|buenos dias|buenas tardes|buenas noches)\b/i.test(normalized)) {
    return (en
      ? `Hello, ${name}! I'm listening. At age ${age} as a ${occLabel}, you've built quite a story.${petMention} What are you thinking about today?`
      : `¡Hola, ${name}! Te escucho. A tus ${age} años como ${occLabel}, estás forjando tu propia historia.${petMention} ¿En qué estás pensando hoy?`) + noteSuffix;
  }

  // How are you / Status
  if (/\b(como estas|cómo estás|how are you|que haces|qué haces|qué onda|que onda|todo bien|whats up|what's up)\b/i.test(normalized)) {
    return (en
      ? `All terminal cores are humming smoothly. I'm here observing your simulation. Currently your mood is "${mood}" and you have $${money}. Is there anything on your mind?`
      : `Todos los núcleos de la terminal operan al 100%. Estoy aquí acompañando tu simulación. Tu ánimo actual es "${mood}" y cuentas con $${money}. ¿Hay algo específico sobre lo que quieras reflexionar?`) + noteSuffix;
  }

  // Advice / What should I do
  if (/\b(que me recomiendas|qué me recomiendas|que hago|qué hago|que opinas|qué opinas|que pensas|qué pensás|consejo|aconsejame|aconséjame|help|advice|what should i do)\b/i.test(normalized)) {
    return (en
      ? `Life has countless paths, ${name}. You could focus on advancing your career as a ${occLabel}, exploring a new hobby, caring for your pets and loved ones, or simply taking a peaceful day off. Whenever you want to take an action, describe it clearly in the box!`
      : `La vida tiene muchísimos caminos posibles, ${name}. Podrías enfocarte en crecer en tu profesión de ${occLabel}, explorar un nuevo hobby, cuidar de tus mascotas y afectos, o simplemente descansar y disfrutar el día. ¡Cuando quieras dar un paso real, solo describe tu acción concreta aquí!`) + noteSuffix;
  }

  // Emotional states / Sad / Tired / Reflection
  if (/\b(triste|cansado|cansada|solo|sola|aburrido|aburrida|mal|deprimido|ansiedad|miedo|sad|tired|lonely|bored|anxious)\b/i.test(normalized)) {
    return (en
      ? `Take a deep breath, ${name}. It's completely natural to feel that way. In simulation or reality, life is not a race. Rest, do something comforting, or spend time with loved ones. You are doing just fine.`
      : `Respira hondo, ${name}. Es totalmente normal sentirse así a veces. Sea simulación o realidad, esto no es una carrera. Descansa, haz algo que te reconforte o pasa tiempo con quienes te aprecian. Vas por buen camino.`) + noteSuffix;
  }

  // Who are you / Identity
  if (/\b(quien eres|quién eres|que eres|qué eres|who are you|what are you)\b/i.test(normalized)) {
    return (en
      ? `I am LIFE.AI: the narrator, guide, and chronicler of your simulation. I interpret your decisions, generate the world's responses, and preserve each chapter of your journey.`
      : `Soy LIFE.AI: el narrador, guía y cronista de tu simulación. Interpreto tus decisiones, genero las respuestas del mundo y conservo cada capítulo de tu viaje.`) + noteSuffix;
  }

  // General philosophical thoughts or inquiries
  return (en
    ? `That is an insightful thought, ${name}. At age ${age}, every question you explore expands your perspective.${petMention} Whenever you feel like turning thoughts into deeds, simply tell me what happens next.`
    : `Es una reflexión interesante, ${name}. A tus ${age} años, cada pregunta que te haces enriquece tu perspectiva.${petMention} Cuando sientas ganas de transformar estas ideas en hechos, simplemente cuéntame qué decides hacer.`) + noteSuffix;
}

function extractFamilyPersonName(text, analysis) {
  const match = String(text || '').match(/(?:con|with|to)\s+([a-záéíóúüñ][a-záéíóúüñ'-]*(?:\s+[a-záéíóúüñ][a-záéíóúüñ'-]*){0,2})/i);
  let candidate = match?.[1]?.replace(/\s+(?:y|and)\s+.*$/i, '').trim();
  if (candidate) {
    candidate = candidate.replace(/^(?:mi\s+(?:novia|novio|pareja|esposa|esposo|prometida|prometido)|my\s+(?:girlfriend|boyfriend|partner|wife|husband|fiancee?))\s+/i, '').trim();
  }
  if (candidate && !/^(un|una|uno|el|la|a|the|someone|alguien|hijo|hija|child|baby|children|perro|gato|dog|cat)$/i.test(candidate)) return candidate;
  return analysis?.entities?.people?.[0] || '';
}

function extractChildName(text) {
  const match = String(text || '').match(/(?:hijo|hija|bebe|bebé|niño|niña|child|baby|son|daughter)\s+(?:llamado|llamada|named|called)?\s*([a-záéíóúüñ][a-záéíóúüñ'-]*)/i);
  const candidate = match?.[1]?.trim();
  if (candidate && !/^(un|una|uno|el|la|mi|mis|a|an|the|my|hermoso|lindo|hermosa|linda|pequeño|pequeña|little|cute|good)$/i.test(candidate)) return candidate;
  return '';
}

function extractPetInfo(text) {
  const normalized = normalizeWords(text).join(' ');
  const isDog = /\b(perro|perra|cachorro|cachorra|dog|puppy)\b/i.test(normalized);
  const isCat = /\b(gato|gata|gatito|gatita|cat|kitten)\b/i.test(normalized);
  if (!isDog && !isCat && !/\b(mascota|pet)\b/i.test(normalized)) return null;
  const type = isDog ? 'dog' : isCat ? 'cat' : 'pet';
  const match = String(text || '').match(/(?:perro|perra|gato|gata|mascota|cachorro|cachorra|dog|cat|puppy|kitten|pet)\s+(?:llamado|llamada|named|called)\s+([a-záéíóúüñ][a-záéíóúüñ'-]*)/i)
    || String(text || '').match(/(?:nombre\s+es|name\s+is)\s+([a-záéíóúüñ][a-záéíóúüñ'-]*)/i);
  let name = match?.[1]?.trim() || '';
  if (/^(un|una|uno|el|la|mi|mis|a|an|the|my)$/i.test(name)) name = '';
  if (!name) {
    const dogNames = currentLanguage === 'en' ? ['Buddy', 'Max', 'Luna', 'Charlie', 'Bella', 'Rocky'] : ['Firulais', 'Bobby', 'Luna', 'Toby', 'Rocky', 'Milo'];
    const catNames = currentLanguage === 'en' ? ['Whiskers', 'Milo', 'Oliver', 'Cleo', 'Shadow'] : ['Michi', 'Felix', 'Pelusa', 'Simba', 'Mimi'];
    name = randomFrom(type === 'cat' ? catNames : dogNames);
  }
  return { type, name };
}

function applyFamilyConsequences(text, playerState, analysis, effects) {
  if (!analysis.mutationAllowed || analysis.mutationConfidence < .42) return;
  const normalized = normalizeWords(text).join(' ');
  if (hasNegation(text)) return;
  const family = normalizeFamilyTree(playerState.familyTree, playerState);
  const en = currentLanguage === 'en';
  const personName = extractFamilyPersonName(text, analysis);
  const hasRelationship = /\b(pareja|novio|novia|relacion|relación|enamor|salir con|estoy con|dating|girlfriend|boyfriend|partner|relationship|fall in love)\b/.test(normalized);
  const hasMarriage = /\b(casar|casarme|casamos|casado|casada|boda|matrimonio|marry|married|wedding|spouse|husband|wife)\b/.test(normalized);
  const hasBreakup = /\b(divorcio|divorciar|divorciamos|separar|terminar la relacion|terminamos|break up|breakup|divorce|separate|end the relationship)\b/.test(normalized);
  const hasPet = /\b(perro|perra|gato|gata|mascota|cachorro|cachorra|dog|puppy|cat|kitten|pet)\b/.test(normalized);
  const hasChild = !hasPet && (/\b(hijo|hija|hijos|hijas|bebe|bebé|niño|niña|tener hijos|child|children|baby|son|daughter)\b/.test(normalized) || /\b(adoptar un nino|adoptar un niño|adoptar una nina|adoptar una niña|adoptar un hijo|adoptar una hija|adopt a child|adopt a baby)\b/.test(normalized));
  const hasAdoptOrBuyPet = hasPet && /\b(adoptar|adopto|adopté|adopte|compre|compré|comprar|tengo|adopt|adopted|bought|buy|have|got)\b/.test(normalized);

  const createPartner = () => {
	const names = randomNames[currentLanguage] || randomNames.es;
	return { id: `partner-${Date.now()}`, name: personName || randomFrom(names), surname: playerState.surname || randomFrom(randomSurnames[currentLanguage] || randomSurnames.es), relation: 'partner', trust: 25, startedAt: new Date().toISOString() };
  };

  if (hasBreakup && family.partner) {
	family.partner.former = true;
	family.partner.endedAt = new Date().toISOString();
	family.maritalStatus = 'divorced';
	effects.push(en ? `relationship ended with ${family.partner.name}` : `terminó la relación con ${family.partner.name}`);
  } else if (hasMarriage) {
	family.partner = family.partner || createPartner();
	if (personName) family.partner.name = personName;
	family.partner.marriedAt = family.partner.marriedAt || new Date().toISOString();
	family.maritalStatus = 'married';
	effects.push(en ? `married to ${family.partner.name}` : `casado/a con ${family.partner.name}`);
  } else if (hasRelationship) {
	family.partner = family.partner || createPartner();
	if (personName) family.partner.name = personName;
	family.partner.relation = 'partner';
	family.maritalStatus = 'dating';
	effects.push(en ? `partner: ${family.partner.name}` : `pareja: ${family.partner.name}`);
  }

  if (hasChild && !hasBreakup) {
	family.partner = family.partner || createPartner();
	const quantityMatch = normalized.match(/\b(\d{1,2})\s+(?:hijos?|children)\b/);
	const quantity = Math.min(4, Math.max(1, Number(quantityMatch?.[1]) || 1));
	const specifiedChildName = quantity === 1 ? extractChildName(text) : '';
	for (let index = 0; index < quantity; index += 1) {
	  const names = randomNames[currentLanguage] || randomNames.es;
	  const childName = (index === 0 && specifiedChildName) ? specifiedChildName : randomFrom(names);
	  family.children.push({ id: `child-${Date.now()}-${index}`, name: childName, surname: family.partner.surname || playerState.surname || '', age: 0, relation: 'child', bornAt: new Date().toISOString(), otherParent: family.partner.name });
	}
	effects.push(en ? `${quantity} child${quantity > 1 ? 'ren' : ''} added to the family` : `${quantity} hijo${quantity > 1 ? 's' : ''} añadido${quantity > 1 ? 's' : ''} a la familia`);
  }

  if (hasAdoptOrBuyPet && !hasBreakup) {
	const petInfo = extractPetInfo(text);
	if (petInfo) {
	  family.pets = Array.isArray(family.pets) ? family.pets : [];
	  family.pets.push({
		id: `pet-${Date.now()}-${family.pets.length}`,
		name: petInfo.name,
		type: petInfo.type,
		adoptedAt: new Date().toISOString()
	  });
	  const petTypeLabel = en ? (petInfo.type === 'dog' ? 'dog' : petInfo.type === 'cat' ? 'cat' : 'pet') : (petInfo.type === 'dog' ? 'perro' : petInfo.type === 'cat' ? 'gato' : 'mascota');
	  effects.push(en ? `new pet: ${petInfo.name} (${petTypeLabel})` : `nueva mascota: ${petInfo.name} (${petTypeLabel})`);
	  playerState.mood = en ? 'happy' : 'feliz';
	}
  }

  playerState.familyTree = family;
}

function hasInfiniteLifeCollar(save = readSave()) {
  return save?.player?.rewards?.infinite_life_collar === true || save?.player?.inventory?.some((item) => item.id === 'infinite_life_collar');
}

function renderPlayTimeRewards() {
  if (!playTimeRewardsContent) return;
  const save = readSave();
  const seconds = getRewardPlaySeconds();
	const collarRequired = 600;
  const presidentialRequired = 1800;
  const unlocked = hasInfiniteLifeCollar(save);
  const presidentialUnlocked = save?.player?.rewards?.presidential_stick === true || save?.player?.inventory?.some((item) => item.id === 'presidential_stick');
  const remaining = Math.max(0, collarRequired - seconds);
  const presidentialRemaining = Math.max(0, presidentialRequired - seconds);
  const time = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  const remainingTime = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, '0')}`;
  playTimeRewardsContent.innerHTML = '';
  const status = document.createElement('p');
  status.className = 'reward-status';
	status.textContent = currentLanguage === 'en' ? `Play time: ${time}` : `Tiempo jugado: ${time}`;
  playTimeRewardsContent.append(status);
  const reward = document.createElement('p');
  reward.className = 'reward-card';
	reward.textContent = unlocked
	? (currentLanguage === 'en' ? 'UNLOCKED: COLLAR OF INFINITE LIFE — This reward protects the life from ending due to death.' : 'DESBLOQUEADO: COLLAR DE VIDA INFINITA — Esta recompensa evita que la vida termine por muerte.')
	: (currentLanguage === 'en' ? `COLLAR OF INFINITE LIFE — Unlocks after 10 minutes. Remaining: ${remainingTime}.` : `COLLAR DE VIDA INFINITA — Se desbloquea después de 10 minutos. Falta: ${remainingTime}.`);
  playTimeRewardsContent.append(reward);
	const presidentialReward = document.createElement('p');
  presidentialReward.className = 'reward-card';
  presidentialReward.textContent = presidentialUnlocked
	? (currentLanguage === 'en' ? `UNLOCKED: PRESIDENTIAL STICK — President: ${save?.player?.name || ''} ${save?.player?.surname || ''}` : `DESBLOQUEADO: PALO PRESIDENCIAL — Presidente: ${save?.player?.name || ''} ${save?.player?.surname || ''}`)
	: (currentLanguage === 'en' ? `PRESIDENTIAL STICK — Unlocks after 30 minutes. Remaining: ${Math.floor(presidentialRemaining / 60)}:${String(presidentialRemaining % 60).padStart(2, '0')}.` : `PALO PRESIDENCIAL — Se desbloquea después de 30 minutos. Falta: ${Math.floor(presidentialRemaining / 60)}:${String(presidentialRemaining % 60).padStart(2, '0')}.`);
  playTimeRewardsContent.append(presidentialReward);
  if (!unlocked && seconds >= collarRequired && save?.player) {
	save.player.rewards = save.player.rewards && typeof save.player.rewards === 'object' ? save.player.rewards : {};
	save.player.rewards.infinite_life_collar = true;
	save.player.inventory = Array.isArray(save.player.inventory) ? save.player.inventory : [];
	if (!save.player.inventory.some((item) => item.id === 'infinite_life_collar')) save.player.inventory.push({ id: 'infinite_life_collar', name: 'Collar de vida infinita', quantity: 1, permanent: true });
	window.__lifeSave = save;
	saveCurrentGame(save);
	renderPlayTimeRewards();
  }
  if (!presidentialUnlocked && seconds >= presidentialRequired && save?.player) {
	save.player.rewards = save.player.rewards && typeof save.player.rewards === 'object' ? save.player.rewards : {};
	save.player.rewards.presidential_stick = true;
	save.player.inventory = Array.isArray(save.player.inventory) ? save.player.inventory : [];
	if (!save.player.inventory.some((item) => item.id === 'presidential_stick')) save.player.inventory.push({ id: 'presidential_stick', name: currentLanguage === 'en' ? 'Presidential Stick' : 'Palo presidencial', quantity: 1, permanent: true, saleValue: 500, presidentName: save.player.name || '', presidentSurname: save.player.surname || '' });
	window.__lifeSave = save;
	saveCurrentGame(save);
	renderPlayTimeRewards();
  }
}

function getTextLanguage(text) {
  const words = normalizeWords(typeof text === 'string' ? text : '');
  const english = ['the', 'and', 'that', 'with', 'from', 'want', 'have', 'my', 'is', 'you', 'your', 'i'];
  const spanish = ['el', 'la', 'los', 'las', 'que', 'con', 'desde', 'quiero', 'tengo', 'mi', 'es', 'tu'];
  const enScore = words.filter((word) => english.includes(word)).length;
  const esScore = words.filter((word) => spanish.includes(word)).length;
  return enScore > esScore ? 'en' : esScore > enScore ? 'es' : currentLanguage;
}

function memoryLanguage(text, language) {
  return language === 'en' || language === 'es' ? language : getTextLanguage(text);
}

function normalizeMemoryEntry(entry, fallbackLanguage = 'es') {
  if (typeof entry === 'string') return { text: entry, lang: memoryLanguage(entry, fallbackLanguage) };
  if (!entry || typeof entry !== 'object') return entry;
  if (entry.text !== undefined) entry.lang = memoryLanguage(entry.text, entry.lang || fallbackLanguage);
  return entry;
}

function normalizeMemory(memory) {
  const defaults = createEmptyMemory();
  Object.entries(defaults).forEach(([key, value]) => {
	if (memory[key] === undefined || memory[key] === null) memory[key] = Array.isArray(value) ? [] : (typeof value === 'object' ? {} : value);
  });
	memory.version = 3;
	memory.updatedAt = new Date().toISOString();
	memory.codeIndex = memory.codeIndex.slice(-200);
	delete memory.chat;
	memory.notes = memory.notes.slice(-200);
	memory.choices = memory.choices.slice(-500);
	memory.recentInputs = memory.recentInputs.slice(-200);
	memory.conversationSummaries = memory.conversationSummaries.slice(-100);
	memory.sessions = memory.sessions.slice(-100);
	memory.facts = memory.facts.slice(-300);
	memory.goals = memory.goals.slice(-100);
	memory.searches = memory.searches.slice(-100);
	memory.lastContext = memory.lastContext.slice(-20);
	memory.episodes = memory.episodes.slice(-300);
	memory.corrections = memory.corrections.slice(-200);
	memory.plans = memory.plans.slice(-100);
  memory.notes = memory.notes.map((entry) => normalizeMemoryEntry(entry));
  memory.customRules = memory.customRules.map((entry) => normalizeMemoryEntry(entry));
  memory.recentInputs = memory.recentInputs.map((entry) => normalizeMemoryEntry(entry));
  memory.conversationSummaries = memory.conversationSummaries.map((entry) => normalizeMemoryEntry(entry));
  memory.facts = memory.facts.map((entry) => normalizeMemoryEntry(entry));
  memory.episodes = memory.episodes.map((entry) => normalizeMemoryEntry(entry));
	memory.semanticConcepts = memory.semanticConcepts || {};
	memory.knowledgeGraph = memory.knowledgeGraph || { nodes: [], edges: [] };
	memory.knowledgeGraph.nodes = Array.isArray(memory.knowledgeGraph.nodes) ? memory.knowledgeGraph.nodes.slice(-500) : [];
	memory.knowledgeGraph.edges = Array.isArray(memory.knowledgeGraph.edges) ? memory.knowledgeGraph.edges.slice(-1000) : [];
	memory.decay = memory.decay || { halfLifeDays: 30 };
	return memory;
}

function saveGlobalMemory(memory) {
	normalizeMemory(memory);
	window.__lifeMemory = memory;
	try { localStorage.setItem('lifeAIMemoryFallback', JSON.stringify(memory)); } catch { /* fallback opcional */ }
	return storage.set('memory', 'global', memory).catch(() => undefined).then(async () => {
	  try {
		if (window.lifeSupabase?.enabled && window.__lifeSave) await window.lifeSupabase.saveMemory(window.__lifeSave);
	  } catch (error) {
		console.warn('LIFE.AI Supabase memory sync:', error);
	  }
	});
}

function saveCurrentGame(save) {
  const normalized = normalizeSave(save);
  normalized.updatedAt = new Date().toISOString();
  if (!normalized.id) {
    normalized.id = 'life-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);
  }
  const originalLocalId = normalized.id;
  window.__lifeSave = normalized;
  try { localStorage.setItem('lifeSaveFallback', JSON.stringify(normalized)); } catch { /* fallback opcional */ }

  const all = getLocalSavedLives();
  const idx = all.findIndex((l) => l.id === normalized.id);
  if (idx >= 0) all[idx] = normalized;
  else all.unshift(normalized);
  setLocalSavedLives(deduplicateLivesList(all));

  return storage.set('game', 'current', normalized).catch(() => undefined).then(async () => {
	try {
	  if (window.lifeSupabase?.enabled) {
		const cloudId = await window.lifeSupabase.saveGame(normalized, currentLanguage);
		if (cloudId && originalLocalId !== cloudId) {
		  normalized.id = cloudId;
		  window.__lifeSave.id = cloudId;
		  const updated = getLocalSavedLives();
		  const targetIdx = updated.findIndex((l) => l.id === originalLocalId || l.id === cloudId);
		  if (targetIdx >= 0) updated[targetIdx] = normalized;
		  else updated.unshift(normalized);
		  setLocalSavedLives(deduplicateLivesList(updated));
		  try { localStorage.setItem('lifeSaveFallback', JSON.stringify(normalized)); } catch {}
		}
		await window.lifeSupabase.saveDiseases(normalized);
		await window.lifeSupabase.saveMemory(normalized);
		await window.lifeSupabase.updatePresence(normalized);
		await window.lifeSupabase.saveWorldSnapshot(normalized);
	  }
	} catch (error) {
	  console.warn('LIFE.AI Supabase game sync:', error);
	}
	return normalized;
  });
}

function readFallbackSave() {
  try { return normalizeSave(JSON.parse(localStorage.getItem('lifeSaveFallback') || 'null')); } catch { return null; }
}

function selectMostRecentSave(...saves) {
  return saves
	.filter((save) => save && save.lifeStatus !== 'ended' && save.player?.name)
	.sort((a, b) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime())[0] || null;
}

function readFallbackMemory() {
  try { return normalizeMemory(JSON.parse(localStorage.getItem('lifeAIMemoryFallback') || 'null')); } catch { return null; }
}

function indexSourceFile(file, memory) {
  return file.text().then((source) => {
	if (file.size > 500000) return;
	const words = normalizeWords(source);
	const counts = {};
	words.forEach((word) => {
	  if (word.length > 2) counts[word] = (counts[word] || 0) + 1;
	});
	memory.codeIndex = memory.codeIndex || [];
	memory.codeIndex.push({
	  name: file.name,
	  type: file.type || 'source',
	  size: file.size,
	  lines: source.split(/\r?\n/).length,
	  words: Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 40),
	  excerpt: source.slice(0, 500),
	  date: new Date().toISOString()
	});
  });
}

async function autoLearnFromProject() {
  const memory = readGlobalMemory();
	const knownFiles = ['index.html', 'styles.css', 'script.js'];
	try {
	  const responses = await Promise.all(knownFiles.map((name) => fetch(name, { cache: 'no-store' })));
	  const files = await Promise.all(responses.map(async (response, index) => {
		if (!response.ok) return null;
		const source = await response.text();
		return new File([source], knownFiles[index], { type: 'text/plain' });
	  }));
	  await Promise.all(files.filter(Boolean).map((file) => indexSourceFile(file, memory)));
	} catch {
	  // file:// y servidores sin fetch local no permiten esta sincronización.
	}
	if (!window.showDirectoryPicker || !window.isSecureContext) {
	  normalizeCodeMemory(memory);
	  saveGlobalMemory(memory);
	  return;
	}
  if (!memory.projectDirectoryHandle) return;
  try {
	const permission = await memory.projectDirectoryHandle.queryPermission({ mode: 'read' });
	if (permission !== 'granted') return;
	const files = [];
	for await (const entry of memory.projectDirectoryHandle.values()) {
	  if (entry.kind === 'file' && /\.(html?|css|js|json|md|txt|ts|tsx|jsx|vue|py|java|cs|php)$/i.test(entry.name)) files.push(await entry.getFile());
	}
	await Promise.all(files.slice(0, 200).map((file) => indexSourceFile(file, memory)));
	normalizeCodeMemory(memory);
	saveGlobalMemory(memory);
  } catch {
	// El acceso automático es opcional; la aplicación continúa sin él.
  }
}

function normalizeCodeMemory(memory) {
	memory.codeIndex = Array.isArray(memory.codeIndex) ? memory.codeIndex.slice(-200) : [];
  return memory;
}

function mergeMemories(first, second) {
	const merged = createEmptyMemory();
  [first, second].forEach((memory) => {
	normalizeMemory(memory);
	Object.entries(memory.wordCounts || {}).forEach(([word, count]) => {
	  merged.wordCounts[word] = (merged.wordCounts[word] || 0) + count;
	});
	Object.entries(memory.topics || {}).forEach(([topic, count]) => {
	  merged.topics[topic] = (merged.topics[topic] || 0) + count;
	});
	merged.choices.push(...(memory.choices || []));
	merged.notes.push(...(memory.notes || []));
	merged.customRules.push(...(memory.customRules || []));
	merged.recentInputs.push(...(memory.recentInputs || []));
	merged.conversationSummaries.push(...(memory.conversationSummaries || []));
	merged.sessions.push(...(memory.sessions || []));
	merged.facts.push(...(memory.facts || []));
	merged.goals.push(...(memory.goals || []));
	merged.searches.push(...(memory.searches || []));
	merged.episodes.push(...(memory.episodes || []));
	merged.corrections.push(...(memory.corrections || []));
	merged.plans.push(...(memory.plans || []));
	merged.knowledgeGraph.nodes.push(...(memory.knowledgeGraph?.nodes || []));
	merged.knowledgeGraph.edges.push(...(memory.knowledgeGraph?.edges || []));
	Object.entries(memory.semanticConcepts || {}).forEach(([concept, values]) => {
	  merged.semanticConcepts[concept] = [...new Set([...(merged.semanticConcepts[concept] || []), ...values])];
	});
	Object.assign(merged.preferences, memory.preferences || {});
	Object.entries(memory.sentiment || {}).forEach(([tone, count]) => {
	  merged.sentiment[tone] = (merged.sentiment[tone] || 0) + count;
	});
  });
	merged.choices = merged.choices.slice(-500);
	merged.notes = merged.notes.slice(-200);
	merged.customRules = merged.customRules.slice(-100);
	merged.recentInputs = merged.recentInputs.slice(-200);
	merged.conversationSummaries = merged.conversationSummaries.slice(-100);
	merged.sessions = merged.sessions.slice(-100);
	merged.facts = merged.facts.slice(-300);
	merged.goals = merged.goals.slice(-100);
	merged.searches = merged.searches.slice(-100);
	merged.episodes = merged.episodes.slice(-300);
	merged.corrections = merged.corrections.slice(-200);
	merged.plans = merged.plans.slice(-100);
	merged.knowledgeGraph.nodes = merged.knowledgeGraph.nodes.slice(-500);
	merged.knowledgeGraph.edges = merged.knowledgeGraph.edges.slice(-1000);
	merged.learnedIntents = [...(first.learnedIntents || []), ...(second.learnedIntents || [])].slice(-100);
  return merged;
}

class ContextManager {
  constructor(memory, limit = 8) {
	this.memory = normalizeMemory(memory);
	this.limit = limit;
  }

  retrieve(query) {
	const cognitive = new CognitiveMemory(this.memory);
	const rawWords = normalizeWords(query).filter((word) => word.length > 2);
	const expandedWords = rawWords.flatMap((word) => [word, ...Object.entries(cognitive.synonyms).filter(([concept, aliases]) => concept === word || aliases.includes(word)).flatMap(([, aliases]) => aliases)]);
	const queryWords = new Set(expandedWords);
	const queryAnalysis = analyzeText(query, this.memory);
	const candidates = [];
	const add = (text, type, date, metadata = {}) => {
	  if (text && typeof text === 'object') {
		metadata = text;
		date = text.date;
		text = text.text;
	  }
	  if (!text) return;
	  const words = normalizeWords(text);
	  const overlap = words.filter((word) => queryWords.has(word)).length;
	  const semanticOverlap = Object.entries(this.memory.semanticConcepts).reduce((total, [concept, aliases]) => {
		return total + (queryWords.has(concept) && words.some((word) => aliases.includes(word)) ? 1 : 0);
	  }, 0);
	  const recency = date ? Math.max(0, 1 - ((Date.now() - new Date(date).getTime()) / 8.64e7 / 30)) : 0;
	  const intentBoost = metadata.intent === queryAnalysis.intent ? 2 : 0;
	  const topicBoost = metadata.topic && metadata.topic === strongestTopic(this.memory.topics) ? 1 : 0;
	  const importance = metadata.importance || 1;
	  const score = (overlap * 3 + semanticOverlap * 2 + intentBoost + topicBoost) * importance + recency;
	  if (score > 0) candidates.push({ text, type, score, date, metadata });
	};

	this.memory.notes.forEach((note) => add(note, 'note'));
	this.memory.recentInputs.forEach((input) => add(input, 'recent-input'));
	this.memory.conversationSummaries.forEach((summary) => add(summary.text, 'summary', summary.date, summary));
	this.memory.episodes.forEach((episode) => add(episode.text, 'episode', episode.date, episode));
	this.memory.facts.forEach((fact) => add(fact.text, 'fact', fact.date, fact));
	return candidates.sort((a, b) => b.score - a.score).slice(0, this.limit);
  }

}

class CognitiveMemory {
  constructor(memory) {
	this.memory = normalizeMemory(memory);
	this.synonyms = {
	  programar: ['codificar', 'desarrollar', 'programacion', 'software'],
	  estudiar: ['aprender', 'practicar', 'curso', 'formarse'],
	  viajar: ['viaje', 'explorar', 'aventura', 'recorrer'],
	  trabajo: ['empleo', 'trabajar', 'profesion', 'oficio'],
	  amigo: ['amistad', 'compañero', 'compañera', 'social']
	};
	Object.entries(semanticDictionary).forEach(([category, terms]) => {
	  this.synonyms[category] = [...new Set(terms.map((term) => normalizeWords(term)).flat())];
	});
  }

  emotion(text) {
	const words = normalizeWords(text);
	const positive = words.filter((word) => ['feliz', 'amor', 'éxito', 'exito', 'logro', 'alegre', 'genial'].includes(word)).length;
	const negative = words.filter((word) => ['triste', 'miedo', 'dolor', 'ansiedad', 'fracaso', 'enojo'].includes(word)).length;
	return positive > negative ? 'positive' : negative > positive ? 'negative' : 'neutral';
  }

  importance(text, analysis) {
	const emotion = this.emotion(text);
	const emotionalWeight = emotion === 'neutral' ? 1 : 2;
	const intentWeight = ['planning', 'change_name', 'change_location', 'social', 'health'].includes(analysis.intent) ? 1.5 : 1;
	return emotionalWeight * intentWeight;
  }

  learnSemantics(text) {
	const words = normalizeWords(text);
	Object.entries(this.synonyms).forEach(([concept, aliases]) => {
	  if (words.some((word) => [concept, ...aliases].includes(word))) {
		this.memory.semanticConcepts[concept] = [...new Set([...(this.memory.semanticConcepts[concept] || []), ...aliases])];
	  }
	});
  }

  node(label, type) {
	if (!label) return null;
	const normalized = normalizeWords(label).join(' ');
	let node = this.memory.knowledgeGraph.nodes.find((item) => item.key === normalized && item.type === type);
	if (!node) {
	  node = { key: normalized, label, type, weight: 0 };
	  this.memory.knowledgeGraph.nodes.push(node);
	}
	node.weight += 1;
	return node.key;
  }

  edge(from, relation, to) {
	if (!from || !to) return;
	if (!this.memory.knowledgeGraph.edges.some((item) => item.from === from && item.relation === relation && item.to === to)) this.memory.knowledgeGraph.edges.push({ from, relation, to, weight: 1 });
  }

  record(text, analysis, consequences = [], player = {}) {
	const now = new Date().toISOString();
	const importance = this.importance(text, analysis);
	const episode = { text: text.slice(0, 300), lang: currentLanguage, date: now, location: analysis.entities.locations[0] || player.location || '', consequences, emotion: this.emotion(text), importance, intent: analysis.intent };
	this.memory.episodes.push(episode);
	this.learnSemantics(text);
	const episodeNode = this.node(text.slice(0, 80), 'episode');
	const locationNode = this.node(episode.location, 'location');
	this.edge(episodeNode, 'ocurre_en', locationNode);
	analysis.entities.people.forEach((person) => this.edge(this.node(person, 'person'), 'participa_en', episodeNode));
	analysis.entities.hobbies.forEach((hobby) => this.edge(this.node(hobby, 'skill'), 'aparece_en', episodeNode));
	this.pruneExpired();
	return episode;
  }

  pruneExpired() {
	const halfLife = (this.memory.decay.halfLifeDays || 30) * 86400000;
	const now = Date.now();
	this.memory.episodes = this.memory.episodes.filter((episode) => episode.importance >= 2 || now - new Date(episode.date).getTime() < halfLife);
  }
}

class LifeEngine {
  preparePlayer(playerState) {
	playerState.energy = Number.isFinite(Number(playerState.energy)) ? Number(playerState.energy) : 100;
	playerState.health = Number.isFinite(Number(playerState.health)) ? Number(playerState.health) : 100;
	playerState.reputation = Number.isFinite(Number(playerState.reputation)) ? Number(playerState.reputation) : 0;
	playerState.mood = playerState.mood || 'estable';
	playerState.occupation = playerState.occupation || '';
	playerState.inventory = Array.isArray(playerState.inventory) ? playerState.inventory : [];
	playerState.skills = playerState.skills || {};
	playerState.relationships = playerState.relationships || {};
	playerState.familyTree = normalizeFamilyTree(playerState.familyTree, playerState);
	playerState.events = Array.isArray(playerState.events) ? playerState.events : [];
	normalizeDiseases(playerState);
	return playerState;
  }
  analyze(text, memory) {
	return analyzeText(text, memory);
  }

	processDecision(text, playerState, memory, world = createEmptyWorld()) {
	this.preparePlayer(playerState);
	const interpretation = interpretDecision(text, memory, world);
	const analysis = interpretation.analysis;
	if (isConversationMessage(text, analysis)) {
	  return { analysis, interpretation, effects: [], event: null, narrative: getConversationReply(text, playerState, world) };
	}
	const effects = applyDecisionEffects(text, playerState, analysis);
	if (analysis.mutationAllowed && analysis.entities.locations?.length) playerState.location = analysis.entities.locations[0];
	if (analysis.mutationAllowed && analysis.entities.locations?.length) {
	  const locationName = analysis.entities.locations[0];
	  if (!world.locations.some((location) => location.name.toLowerCase() === locationName.toLowerCase())) {
		world.locations.push({ id: `location-${Date.now()}-${world.locations.length}`, name: locationName, discovered: true, description: currentLanguage === 'en' ? 'Location discovered through movement.' : 'Lugar descubierto mediante el desplazamiento.', visits: 1, connectedTo: '', createdAt: new Date().toISOString() });
	  }
	}
	this.applyExtendedConsequences(text, playerState, analysis, effects);
	const diseaseDeath = updateDiseases(text, playerState, effects);
	if (diseaseDeath) effects.push(`DEATH_CAUSE: ${diseaseDeath}`);
	effects.push(...worldEngine.apply(text, interpretation, world, playerState));
	const event = {
	  text,
	  intent: analysis.intent,
	  entities: analysis.entities,
	  interpretation,
	  effects: [...effects],
	  date: new Date().toISOString()
	};
	playerState.events.push(event);
	playerState.events = playerState.events.slice(-100);
	return { analysis, interpretation, effects, event, narrative: this.generateNarrative(text, memory, playerState, effects, analysis, world) };
  }

  applyExtendedConsequences(text, playerState, analysis, effects) {
	if (!analysis.mutationAllowed || analysis.mutationConfidence < .48) return;
	// Ensure any explicit location mentioned in the decision updates player state
	const explicitLocation = extractContextualLocation(text) || extractText(text, [
	  'me mudo a', 'vivo en', 'viajo a', 'viajo al', 'voy a', 'voy al', 'llego a', 'llego al',
	  'mi nueva ubicacion es', 'mi nueva ubicación es', 'encuentro un lugar llamado', 'descubro la ciudad de',
	  'move to', 'live in', 'travel to', 'go to', 'arrive at', 'new location is'
	]);
	if (explicitLocation) {
	  playerState.location = explicitLocation;
	}
	const words = normalizeWords(text).join(' ');
	const negated = hasNegation(text);
	applyFamilyConsequences(text, playerState, analysis, effects);
	const amountFor = (fallback) => {
	  const numeric = text.match(/\b\d+(?:[.,]\d+)?\b/);
	  return numeric ? Number(numeric[0].replace(',', '.')) : (numberFromWords(text) ?? fallback);
	};
	const detectedCareer = detectCareer(text);
	const career = detectedCareer || careerById(playerState.occupation);
	const workAction = detectedCareer || /trabajo|trabajar|laburo|laburar|empleo|oficina|turno|jornada|sueldo|salario|negocio|work|working|job|office|shift|salary|business/.test(words);
	if (!negated && detectedCareer) {
	  playerState.occupation = career.id;
	  effects.push(`${currentLanguage === 'en' ? 'occupation' : 'profesión'}: ${careerLabel(career)}`);
	}
	const foundItem = detectFoundItem(text);
	const acquiredName = extractAcquiredItemName(text);
	const acquiredDefinition = foundItem || extractItemAlias(acquiredName)?.item || null;
	if (!negated && acquiredName) {
	  const entry = acquiredDefinition
		? addFoundItem(playerState, acquiredDefinition, playerState.location || '')
		: addInventoryItem(playerState, acquiredName, playerState.location || '');
	  effects.push(currentLanguage === 'en' ? `obtained: ${entry.name} x${entry.quantity} · sale value: ${entry.saleValue}` : `obtenido: ${entry.name} x${entry.quantity} · valor de venta: ${entry.saleValue}`);
	}
	const change = (property, amount, label) => {
	  if (negated) return;
	  const current = Number(playerState[property]) || 0;
	  playerState[property] = Math.max(0, Math.min(property === 'energy' ? 100 : Infinity, current + amount));
	  effects.push(`${label}: ${amount > 0 ? '+' : ''}${amount}`);
	};
	const improveSkill = (skill) => {
	  playerState.skills[skill] = (playerState.skills[skill] || 0) + 1;
	  effects.push(`${currentLanguage === 'en' ? 'skill' : 'habilidad'} ${skill}: ${currentLanguage === 'en' ? 'level' : 'nivel'} ${playerState.skills[skill]}`);
	};

	if (/dormir|duermo|descansar|descanso|recuperar|sleep|rest|recover/.test(words)) change('energy', amountFor(20), currentLanguage === 'en' ? 'energy' : 'energía');
	if (workAction) change('energy', -(career?.energy || amountFor(10)), currentLanguage === 'en' ? 'energy' : 'energía');
	if (/estudiar|estudio|curso|clase|aprender|leer|study|class|course|learn|read/.test(words)) change('energy', -amountFor(5), currentLanguage === 'en' ? 'energy' : 'energía');
	if (!negated && /ejercicio|entrenar|correr|gimnasio|deporte|exercise|train|run|gym|sport/.test(words)) {
	  change('energy', 5, currentLanguage === 'en' ? 'energy' : 'energía');
	  improveSkill(currentLanguage === 'en' ? 'health' : 'salud');
	}
	if (!negated && /aprender|estudiar|curso|clase|leer|practicar|learn|study|course|class|read|practice/.test(words)) improveSkill(currentLanguage === 'en' ? 'knowledge' : 'conocimiento');
	if (!negated && /trabajo|trabajar|negocio|ayudar|voluntariado|work|business|help|volunteer/.test(words)) {
	  playerState.reputation += 1;
	  effects.push(currentLanguage === 'en' ? 'reputation: +1' : 'reputación: +1');
	  improveSkill(currentLanguage === 'en' ? 'experience' : 'experiencia');
	}
	if (!negated && /crear|escribir|dibujar|pintar|musica|música|cantar|diseñar|fotografia|fotografía|create|write|draw|paint|music|sing|design|photo/.test(words)) improveSkill(currentLanguage === 'en' ? 'creativity' : 'creatividad');
	if (!negated && /programar|codigo|código|software|desarrollar|computacion|computación|python|javascript|program|coding|developer|code/.test(words)) improveSkill(currentLanguage === 'en' ? 'programming' : 'programación');
	if (!negated && /idioma|idiomas|ingles|inglés|frances|francés|aleman|alemán|italiano|chino|language|languages|english|french|german/.test(words)) improveSkill(currentLanguage === 'en' ? 'languages' : 'idiomas');
	if (!negated && /cocinar|cocina|receta|recetas|hornear|plato|cook|cooking|bake|recipe|chef/.test(words)) improveSkill(currentLanguage === 'en' ? 'cooking' : 'cocina');
	if (!negated && /guitarra|piano|cantar|canto|bateria|batería|violin|violín|instrumento|musica|música|guitar|sing|drums|violin|instrument|music/.test(words)) improveSkill(currentLanguage === 'en' ? 'music' : 'música');
	if (!negated && /manejar|conducir|auto|coche|vehiculo|vehículo|licencia|volante|drive|driving|car|license/.test(words)) improveSkill(currentLanguage === 'en' ? 'driving' : 'conducción');
	if (!negated && /invertir|inversion|inversión|acciones|cripto|criptomonedas|bolsa|ahorros|finanzas|invest|investment|stocks|crypto|finance/.test(words)) improveSkill(currentLanguage === 'en' ? 'finance' : 'finanzas');
	if (!negated && /boxeo|boxear|artes marciales|defensa personal|karate|judo|mma|pelear|lucha|boxing|martial arts|self defense|fight/.test(words)) improveSkill(currentLanguage === 'en' ? 'combat' : 'combate');
	if (!negated && /logro|éxito|exito|ganar|victoria|mejorar|conseguir|terminar|completar|achievement|success|win|victory|improve|achieve|finish|complete/.test(words)) {
		change('reputation', Math.min(5, amountFor(2)), currentLanguage === 'en' ? 'reputation' : 'reputación');
	} else if (!negated && /fracaso|fallar|perder|error|problema|conflicto|pelea|failure|fail|lose|mistake|problem|conflict|fight/.test(words)) {
		change('reputation', -Math.min(5, amountFor(1)), currentLanguage === 'en' ? 'reputation' : 'reputación');
	}
	if (!negated && /amigo|familia|pareja|amor|conversar|visitar|cita|fiesta|friend|family|partner|love|talk|visit|date|party/.test(words)) {
	  playerState.mood = currentLanguage === 'en' ? 'accompanied' : 'acompañado';
		playerState.relationships.social = (playerState.relationships.social || 0) + 1;
	  effects.push(currentLanguage === 'en' ? 'mood: accompanied' : 'ánimo: acompañado');
	  effects.push(`${currentLanguage === 'en' ? 'social relationships' : 'relaciones sociales'}: ${currentLanguage === 'en' ? 'level' : 'nivel'} ${playerState.relationships.social}`);
	} else if (!negated && /romper|ruptura|discusion|discusión|pelea|enemigo|alejar|break up|argument|fight|enemy|distance/.test(words)) {
		playerState.mood = currentLanguage === 'en' ? 'worried' : 'preocupado';
		playerState.relationships.social = Math.max(0, (playerState.relationships.social || 0) - 1);
		effects.push(currentLanguage === 'en' ? 'mood: worried' : 'ánimo: preocupado');
		effects.push(`${currentLanguage === 'en' ? 'social relationships' : 'relaciones sociales'}: -1`);
	}
	if (!negated && /feliz|celebr|logro|éxito|exito|contento|happy|celebrate|achievement|success|glad/.test(words)) {
	  playerState.mood = currentLanguage === 'en' ? 'happy' : 'feliz';
	  effects.push(currentLanguage === 'en' ? 'mood: happy' : 'ánimo: feliz');
	} else if (!negated && /triste|solo|fracaso|problema|perdí|perdi|sad|alone|failure|problem|lost/.test(words)) {
	  playerState.mood = currentLanguage === 'en' ? 'worried' : 'preocupado';
	  effects.push(currentLanguage === 'en' ? 'mood: worried' : 'ánimo: preocupado');
	}
	const isSeekingCare = /médico|medico|doctor|hospital|clínica|clinica|farmacia|pastilla|remedio|curar|sanar|tratamiento|recuperar|doctor|hospital|clinic|pharmacy|pill|medicine|heal|treatment|recover/.test(words) && /fui|voy|consultar|atender|tomar|comprar|curar|sanar|ver|visit|go|went|take|see/.test(words);
	if (!negated && isSeekingCare) {
		change('energy', amountFor(15), currentLanguage === 'en' ? 'energy' : 'energía');
		playerState.mood = currentLanguage === 'en' ? 'relieved' : 'aliviado';
		effects.push(currentLanguage === 'en' ? 'mood: relieved' : 'ánimo: aliviado');
	} else if (!negated && /enfermo|enferma|dolor|lesion|lesión|accidente|gripe|fiebre|sick|ill|pain|injury|accident|flu|fever/.test(words)) {
		change('energy', -amountFor(10), currentLanguage === 'en' ? 'energy' : 'energía');
		playerState.mood = currentLanguage === 'en' ? 'worried' : 'preocupado';
		effects.push(currentLanguage === 'en' ? 'mood: worried' : 'ánimo: preocupado');
	} else if (!negated && /curar|sanar|medicina|tratamiento|recuperar|heal|medicine|treatment|recover/.test(words)) {
		change('energy', amountFor(10), currentLanguage === 'en' ? 'energy' : 'energía');
	}
	if (!negated && (analysis.intent === 'travel' || /viaje|viajar|aventura|travel|trip|adventure|explore/.test(words))) improveSkill(currentLanguage === 'en' ? 'exploration' : 'exploración');
  }

	generateNarrative(text, memory, playerState, effects, analysis, world = createEmptyWorld()) {
	const base = generateContinuation(text, memory, effects);
	const en = currentLanguage === 'en';
	const context = en ? ` Current state: mood ${playerState.mood}, energy ${playerState.energy}/100 and reputation ${playerState.reputation}.` : ` Estado actual: ánimo ${playerState.mood}, energía ${playerState.energy}/100 y reputación ${playerState.reputation}.`;
	const recent = playerState.events.length > 1 ? (en ? ` This is event number ${playerState.events.length}; your previous decisions continue shaping your story.` : ` Este es tu evento número ${playerState.events.length}; tus decisiones anteriores siguen formando tu historia.`) : '';
	const latestCustomRule = memory.customRules && memory.customRules.length ? memory.customRules[memory.customRules.length - 1] : '';
	const activeRule = latestCustomRule && latestCustomRule.text ? latestCustomRule.text : latestCustomRule;
	const rule = activeRule ? (en ? ` The active world rule is: "${activeRule}".` : ` La regla activa de tu mundo es: "${activeRule}".`) : '';
	const uncertainty = analysis.confidence < .55 ? (en ? ' The situation is ambiguous, so the outcome remains open to new decisions.' : ' La situación es ambigua, así que el resultado queda abierto a nuevas decisiones.') : '';
	const worldContext = en ? ` It is day ${world.time.day}, month ${world.time.month}, year ${world.time.year}, at ${String(world.time.hour).padStart(2, '0')}:${String(world.time.minute).padStart(2, '0')}.` : ` Es el día ${world.time.day}, mes ${world.time.month}, año ${world.time.year}, a las ${String(world.time.hour).padStart(2, '0')}:${String(world.time.minute).padStart(2, '0')}.`;
	const activeQuests = world.quests.filter((quest) => quest.status === 'active').slice(-2);
	const questText = activeQuests.length ? (en ? ` Active goals: ${activeQuests.map((quest) => `${quest.title} (${quest.progress}%)`).join(' and ')}.` : ` Objetivos en curso: ${activeQuests.map((quest) => `${quest.title} (${quest.progress}%)`).join(' y ')}.`) : '';
	const discoveries = world.news.slice(0, 2).map((item) => item.text).join(' ');
	const discoveryText = discoveries ? (en ? ` The world also records: ${discoveries}` : ` El mundo también registra: ${discoveries}`) : '';
	const nearby = world.locations.slice(-2).map((place) => place.name).join(' y ');
	const people = world.characters.slice(-2).map((character) => `${character.name} (confianza ${character.trust || 0})`).join(' y ');
	const factions = world.factions.slice(-2).map((faction) => faction.name).join(' y ');
	const rules = world.rules.filter((item) => item.active !== false).slice(-2).map((item) => item.text).join(' | ');
	const worldDetails = `${nearby ? (en ? ` Relevant places: ${nearby}.` : ` Lugares relevantes: ${nearby}.`) : ''}${people ? (en ? ` Linked characters: ${people}.` : ` Personajes vinculados: ${people}.`) : ''}${factions ? (en ? ` Active organizations: ${factions}.` : ` Organizaciones activas: ${factions}.`) : ''}${rules ? (en ? ` World rules: ${rules}.` : ` Reglas del mundo: ${rules}.`) : ''}`;
	return `${base}${context}${worldContext}${worldDetails}${questText}${discoveryText}${recent}${rule}${uncertainty}`;
  }
}

const lifeEngine = new LifeEngine();

const semanticDictionary = {
	age: ['edad', 'año', 'anos', 'crecer', 'creci', 'crezco', 'cumplir', 'cumpli', 'mayor', 'envejecer', 'envejecí', 'tiempo', 'cumpleaños', 'birthday', 'age', 'year', 'grow', 'grew', 'growing', 'older', 'aging', 'birthday'],
	work: ['trabajo', 'trabajar', 'trabaje', 'trabajando', 'laburo', 'laburar', 'empleo', 'oficina', 'turno', 'jornada', 'profesion', 'profesión', 'negocio', 'contrato', 'sueldo', 'salario', 'jefe', 'entrevista', 'curriculum', 'empresa', 'work', 'worked', 'working', 'job', 'office', 'shift', 'business', 'contract', 'salary', 'wage', 'boss', 'interview', 'career', 'company', 'hired'],
  learning: ['estudiar', 'estudio', 'estudiando', 'aprender', 'aprendo', 'curso', 'clase', 'escuela', 'universidad', 'leer', 'practicar', 'programar', 'investigar', 'tarea', 'examen', 'idioma', 'learn', 'study', 'studying', 'course', 'class', 'school', 'university', 'read', 'practice', 'code', 'coding', 'research', 'homework', 'exam', 'language'],
  travel: ['viaje', 'viajar', 'viajo', 'viajando', 'camino', 'carretera', 'ciudad', 'explorar', 'aventura', 'destino', 'mudanza', 'vacaciones', 'visitar', 'playa', 'travel', 'trip', 'road', 'city', 'explore', 'adventure', 'destination', 'move', 'moving', 'vacation', 'visit', 'beach'],
  social: ['amigo', 'amiga', 'familia', 'pareja', 'amor', 'conocer', 'hablar', 'conversar', 'ayudar', 'reunir', 'visitar', 'cita', 'fiesta', 'friend', 'family', 'partner', 'love', 'meet', 'talk', 'help', 'gather', 'visit', 'date', 'party'],
  health: ['salud', 'enfermo', 'enferma', 'enfermedad', 'medico', 'médico', 'hospital', 'dolor', 'cansancio', 'cansado', 'energia', 'energía', 'ejercicio', 'correr', 'dormir', 'descansar', 'curar', 'medicina', 'tratamiento', 'health', 'sick', 'ill', 'illness', 'doctor', 'hospital', 'pain', 'tired', 'energy', 'exercise', 'run', 'sleep', 'rest', 'heal', 'medicine', 'treatment'],
  money: ['dinero', 'plata', 'pesos', 'sueldo', 'salario', 'gastar', 'pagar', 'comprar', 'vender', 'ahorrar', 'invertir', 'cuesta', 'precio', 'deuda', 'regalo', 'money', 'cash', 'salary', 'wage', 'spend', 'pay', 'buy', 'sell', 'save', 'invest', 'cost', 'price', 'debt', 'gift'],
  emotion: ['feliz', 'felicidad', 'alegre', 'contento', 'contenta', 'triste', 'enojado', 'enojada', 'enfadado', 'ansiedad', 'miedo', 'preocupado', 'emocionado', 'solo', 'sola', 'aburrido', 'orgulloso', 'happy', 'happiness', 'glad', 'sad', 'angry', 'mad', 'anxiety', 'fear', 'worried', 'excited', 'alone', 'bored', 'proud'],
  creativity: ['escribir', 'dibujar', 'pintar', 'musica', 'cantar', 'crear', 'inventar', 'historia', 'arte', 'write', 'draw', 'paint', 'music', 'sing', 'create', 'invent', 'story', 'art'],
  risk: ['riesgo', 'peligro', 'accidente', 'atropello', 'atropellar', 'caida', 'caída', 'choque', 'enfermedad', 'apostar', 'pelea', 'escapar', 'arriesgar', 'morir', 'muerte', 'muerto', 'fallecer', 'falleció', 'risk', 'danger', 'accident', 'hit by a car', 'car crash', 'fall', 'illness', 'bet', 'fight', 'escape', 'die', 'died', 'death', 'dead', 'dying'],
	home: ['casa', 'hogar', 'habitacion', 'cocinar', 'comida', 'familia', 'house', 'home', 'room', 'cook', 'food'],
	communication: ['decir', 'contar', 'explicar', 'preguntar', 'responder', 'escuchar', 'mensaje', 'llamar', 'escribir', 'hablar', 'charlar', 'conversar', 'platicar', 'saludar', 'discutir', 'debatir', 'opinar', 'aconsejar', 'prometer', 'confesar', 'say', 'tell', 'explain', 'ask', 'answer', 'listen', 'message', 'call', 'write', 'speak', 'talk', 'chat', 'greet', 'discuss', 'debate', 'advise', 'promise', 'confess'],
  routine: ['mañana', 'tarde', 'noche', 'despertar', 'levantarse', 'bañarse', 'vestirse', 'salir', 'volver', 'rutina', 'morning', 'afternoon', 'night', 'wake', 'get up', 'shower', 'dress', 'leave', 'return', 'routine'],
  family: ['madre', 'padre', 'mama', 'mamá', 'papa', 'papá', 'hijo', 'hija', 'hermano', 'hermana', 'abuelo', 'abuela', 'mother', 'father', 'mom', 'dad', 'son', 'daughter', 'brother', 'sister', 'grandparent'],
  conflict: ['discusión', 'discusion', 'pelea', 'problema', 'enemigo', 'conflicto', 'discutir', 'perdonar', 'mentira', 'discute', 'argument', 'fight', 'problem', 'enemy', 'conflict', 'argue', 'forgive', 'lie'],
  achievement: ['logro', 'éxito', 'exito', 'ganar', 'victoria', 'mejorar', 'conseguir', 'terminar', 'completar', 'achievement', 'success', 'win', 'victory', 'improve', 'achieve', 'finish', 'complete'],
  failure: ['fallar', 'fracasar', 'fracaso', 'perder', 'perdí', 'error', 'equivocarse', 'fall', 'failure', 'lose', 'lost', 'mistake', 'wrong'],
	nature: ['clima', 'lluvia', 'llover', 'frio', 'frío', 'calor', 'caluroso', 'niebla', 'sol', 'viento', 'tormenta', 'nieve', 'primavera', 'verano', 'otoño', 'otono', 'invierno', 'estacion', 'estación', 'weather', 'rain', 'cold', 'hot', 'fog', 'sun', 'wind', 'storm', 'snow', 'spring', 'summer', 'autumn', 'fall', 'winter', 'season'],
  objects: ['coche', 'auto', 'casa', 'llave', 'teléfono', 'telefono', 'computadora', 'ordenador', 'portatil', 'portátil', 'libro', 'mesa', 'arma', 'regalo', 'objeto', 'mochila', 'billetera', 'moneda', 'documento', 'herramienta', 'palo', 'madera', 'rama', 'tronco', 'leña', 'coche', 'car', 'key', 'phone', 'computer', 'laptop', 'book', 'table', 'weapon', 'gift', 'object', 'backpack', 'wallet', 'coin', 'document', 'tool', 'stick', 'wood', 'branch', 'log', 'firewood', 'plank'],
  questions: ['quien', 'quién', 'que', 'qué', 'cuando', 'cuándo', 'donde', 'dónde', 'como', 'cómo', 'por que', 'por qué', 'who', 'what', 'when', 'where', 'how', 'why'],
	quantity: ['uno', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'diez', 'cien', 'hora', 'día', 'dia', 'semana', 'mes', 'año', 'ano', 'one', 'two', 'three', 'four', 'five', 'ten', 'hundred', 'hour', 'day', 'week', 'month', 'year'],
  food: ['comer', 'comida', 'cocinar', 'cocino', 'desayuno', 'almuerzo', 'cena', 'receta', 'restaurante', 'hambre', 'sed', 'agua', 'pan', 'fruta', 'carne', 'verdura', 'eat', 'food', 'cook', 'cooking', 'breakfast', 'lunch', 'dinner', 'recipe', 'restaurant', 'hungry', 'thirsty', 'water', 'fruit', 'meat', 'vegetable'],
  housing: ['alquilar', 'alquiler', 'comprar casa', 'vender casa', 'mudarse', 'mudanza', 'vecino', 'vecina', 'barrio', 'departamento', 'piso', 'techo', 'reparar', 'arreglar', 'limpiar', 'alquiler', 'rent', 'renting', 'buy a house', 'sell a house', 'move house', 'neighbor', 'neighborhood', 'apartment', 'flat', 'roof', 'repair', 'fix', 'clean'],
  leisure: ['jugar', 'videojuego', 'película', 'pelicula', 'serie', 'bailar', 'deporte', 'fútbol', 'futbol', 'pescar', 'nadar', 'pasear', 'hobby', 'juego', 'play', 'game', 'videogame', 'movie', 'film', 'series', 'dance', 'sport', 'football', 'fish', 'swim', 'walk', 'hobby'],
  technology: ['computadora', 'ordenador', 'celular', 'móvil', 'movil', 'internet', 'red', 'aplicación', 'aplicacion', 'programa', 'código', 'codigo', 'robot', 'tecnología', 'technology', 'computer', 'phone', 'mobile', 'internet', 'network', 'app', 'application', 'software', 'code', 'robot'],
  law: ['policía', 'policia', 'denuncia', 'juicio', 'abogado', 'ley', 'legal', 'contrato', 'derechos', 'permiso', 'police', 'report', 'trial', 'lawyer', 'law', 'legal', 'contract', 'rights', 'permit'],
  transport: ['auto', 'coche', 'colectivo', 'autobús', 'autobus', 'tren', 'avión', 'avion', 'bicicleta', 'moto', 'conducir', 'manejar', 'transporte', 'car', 'bus', 'train', 'plane', 'bicycle', 'bike', 'motorcycle', 'drive', 'transport'],
  decision: ['decidir', 'decido', 'elegir', 'elijo', 'aceptar', 'rechazar', 'intentar', 'probar', 'preferir', 'quiero', 'necesito', 'planeo', 'propongo', 'decide', 'choose', 'accept', 'reject', 'try', 'prefer', 'want', 'need', 'plan', 'propose']
};

const commonWordAliases = {
	travajo: 'trabajo', trabjo: 'trabajo', trbajo: 'trabajo', trabjar: 'trabajar', laburo: 'trabajo', laburar: 'trabajar',
	laburito: 'trabajo', laburando: 'trabajar', chamba: 'trabajo', chambear: 'trabajar', chambeando: 'trabajar', chambita: 'trabajo',
  estduiar: 'estudiar', estudar: 'estudiar', aprnder: 'aprender', apender: 'aprender', estudiando: 'estudiar',
  biaje: 'viaje', viage: 'viaje', viajr: 'viajar', vacasiones: 'vacaciones', amgo: 'amigo', famlia: 'familia',
  relasion: 'relacion', relacione: 'relaciones', felis: 'feliz', felz: 'feliz',
  trsite: 'triste', preoupado: 'preocupado', ansieda: 'ansiedad', enojdo: 'enojado',
  cansdo: 'cansado', enerjia: 'energia', dinaro: 'dinero', plta: 'plata', guita: 'dinero', mangos: 'dinero', lucas: 'dinero', pasta: 'dinero', pavos: 'dinero',
  ahorar: 'ahorrar', comprr: 'comprar', vendr: 'vender', descasar: 'descansar',
	dormr: 'dormir', ejercico: 'ejercicio', salu: 'salud', medco: 'medico', doc: 'medico', doctorcito: 'medico', agaro: 'agarro', agarro: 'agarro', agarre: 'agarre', tomr: 'tomar', levanto: 'levanto', recojo: 'recojo', mdera: 'madera', madrea: 'madera', pal: 'palo',
  gym: 'gimnasio', entreno: 'entrenar', entrenando: 'entrenar',
  morfi: 'comida', morfar: 'comer', morfando: 'comer', birra: 'cerveza', birras: 'cerveza',
  facu: 'universidad', uni: 'universidad', cole: 'escuela',
  noviecito: 'novio', noviecita: 'novia', noviesito: 'novio', noviesita: 'novia',
  cresi: 'creci', creci: 'creci', cumpli: 'cumpli', anio: 'ano', anyo: 'ano',
  maniana: 'manana', demas: 'despues', despues: 'despues', kiero: 'quiero', qiero: 'quiero',
  nesesito: 'necesito', ncesito: 'necesito', xq: 'porque', porke: 'porque',
	tmb: 'tambien', tambn: 'tambien', ai: 'ahi', llendo: 'yendo', aciendo: 'haciendo', q: 'que', xfa: 'por favor',
	wanna: 'want to', gonna: 'going to', gotta: 'got to', bucks: 'money', cash: 'money', bday: 'birthday',
	pls: 'please', plz: 'please', dont: 'do not', cant: 'cannot', wont: 'will not', im: 'i am', ive: 'i have', heyy: 'hey', heyyy: 'hey', holaa: 'hola', holaaa: 'hola', buenass: 'buenas', buenasss: 'buenas'
};

function editDistance(first, second) {
  const row = Array.from({ length: second.length + 1 }, (_, index) => index);
  for (let i = 1; i <= first.length; i += 1) {
	let previous = row[0];
	row[0] = i;
	for (let j = 1; j <= second.length; j += 1) {
	  const current = row[j];
	  row[j] = first[i - 1] === second[j - 1] ? previous : Math.min(previous, row[j - 1], current) + 1;
	  previous = current;
	}
  }
  return row[second.length];
}

function closeSemanticWord(word, term) {
  const normalizedWord = normalizeWords(word)[0] || '';
  const normalizedTerm = normalizeWords(term)[0] || '';
  if (!normalizedWord || normalizedWord === normalizedTerm) return true;
  if (normalizedWord.length < 5 || normalizedTerm.length < 5) return false;
  const limit = Math.max(normalizedWord.length, normalizedTerm.length) >= 9 ? 2 : 1;
  return editDistance(normalizedWord, normalizedTerm) <= limit;
}

function matchesIntentPattern(normalized, pattern) {
  const patternWords = normalizeWords(pattern);
  const inputWords = normalized.split(/\s+/).filter(Boolean);
  if (!patternWords.length) return false;
  if (normalized.includes(patternWords.join(' '))) return true;
  return patternWords.length === 1 && inputWords.some((word) => closeSemanticWord(word, patternWords[0]));
}

function intentPatternWeight(normalized, pattern) {
  if (!matchesIntentPattern(normalized, pattern)) return 0;
  const words = normalizeWords(pattern);
  return words.length > 1 ? 2 : 1;
}

function semanticCategories(text) {
  const words = new Set(normalizeWords(text));
  return Object.entries(semanticDictionary)
	.map(([category, terms]) => ({ category, score: terms.map((term) => normalizeWords(term)).flat().filter((term) => [...words].some((word) => closeSemanticWord(word, term))).length }))
	.filter((item) => item.score > 0)
	.sort((a, b) => b.score - a.score);
}

function inferLocalContext(text, memory = {}) {
  const normalized = normalizeWords(text).join(' ');
  const categories = semanticCategories(text);
  const recent = (memory.recentInputs || []).slice(-5).map((entry) => entry.text || entry).join(' ');
  const previous = normalizeWords(recent).join(' ');
	const subject = /\b(?:yo|vos|tu|tú|me|mi|mis|tengo|quiero|decidi|decido|i|my|me|we|our)\b/.test(normalized) ? 'player' : /\b(?:el|ella|ellos|una persona|alguien|he|she|they|someone)\b/.test(normalized) ? 'other' : 'unknown';
  const temporal = /\b(?:hoy|ahora|ya|ayer|mañana|manana|pronto|antes|despues|después|today|now|yesterday|tomorrow|soon|before|after)\b/.test(normalized) ? 'explicit' : 'open';
  const referencesPrevious = /\b(?:eso|esa|ese|aquello|lo anterior|antes|sigue|continua|continúa|tambien|también|that|this|before|still|continue|also)\b/.test(normalized);
  const previousCategories = previous ? semanticCategories(previous).slice(0, 3) : [];
  const topic = categories[0]?.category || previousCategories[0]?.category || strongestTopic(memory.topics || {});
  return { subject, temporal, topic, categories, previousCategories, referencesPrevious, recentText: recent };
}

const intentPatterns = {
	change_age: ['crezco', 'creci', 'creciste', 'cumplo', 'cumpli', 'cumpliste', 'me hago mayor', 'me hice mayor', 'envejezco', 'envejecí', 'años', 'anos', 'un año más', 'un ano mas', 'otro año', 'otro ano', 'pasaron los años', 'pasaron los anos', 'transcurrió un año', 'transcurrio un ano', 'tiempo pasa', 'grow older', 'grew older', 'get older', 'turn', 'age', 'years old', 'another year'],
  change_name: ['me llamo', 'mi nombre', 'cambio mi nombre', 'nuevo nombre', 'my name is', 'call me', 'change my name'],
  change_surname: ['mi apellido', 'cambio mi apellido', 'nuevo apellido', 'my surname', 'my last name', 'change my surname'],
	change_money: ['dinero', 'pesos', 'plata', 'sueldo', 'salario', 'gano', 'cobro', 'recibo', 'pago', 'gasto', 'ahorro', 'invierto', 'money', 'salary', 'wage', 'earn', 'receive', 'pay', 'spend', 'save', 'invest'],
  change_location: ['me mudo', 'vivo en', 'viajo', 'ubicación', 'ubicacion', 'ciudad', 'lugar', 'move to', 'live in', 'travel to', 'city', 'place'],
  change_hobby: ['hobby', 'me gusta', 'afición', 'aficion', 'aprendo', 'tocar', 'dibujar', 'like', 'learn', 'play', 'draw'],
	preference: ['prefiero', 'me encanta', 'me gusta', 'no me gusta', 'odio', 'prefer', 'i like', 'i love', 'i dislike', 'i hate'],
  identity: ['soy', 'trabajo como', 'estudio', 'vivo', 'i am', 'i work as', 'i study', 'i live'],
  question: ['qué', 'que', 'cómo', 'como', 'por qué', 'porque', 'what', 'how', 'why', 'when', 'where'],
  memory_query: ['recuerdas', 'recordás', 'recordas', 'qué sabes', 'do you remember', 'what do you know', 'remember'],
  remember_fact: ['recuerda', 'acordate', 'acuérdate', 'acuerdate', 'memoria', 'remember', 'keep in mind', 'memory'],
  custom_rule: ['regla', 'siempre', 'nunca', 'a partir de ahora', 'rule', 'always', 'never', 'from now on'],
  social: ['amigo', 'familia', 'amor', 'pareja', 'conocer', 'ayudar', 'friend', 'family', 'love', 'partner', 'meet', 'help'],
	work: ['trabajo', 'trabajar', 'trabajé', 'trabaje', 'oficina', 'turno', 'jornada', 'empleo', 'profesión', 'profesion', 'negocio', 'contrato', 'entrevista', 'work', 'worked', 'job', 'office', 'shift', 'employment', 'profession', 'business', 'contract', 'interview'],
  travel: ['viaje', 'viajar', 'aventura', 'camino', 'explorar', 'travel', 'trip', 'adventure', 'road', 'explore'],
	learn: ['estudiar', 'estudio', 'aprendo', 'aprender', 'curso', 'clase', 'escuela', 'universidad', 'leer', 'practicar', 'study', 'learn', 'course', 'class', 'school', 'university', 'read', 'practice'],
	health: ['salud', 'enfermo', 'enfermedad', 'médico', 'medico', 'hospital', 'dolor', 'curarme', 'health', 'sick', 'illness', 'doctor', 'pain', 'heal'],
  rest: ['dormir', 'duermo', 'descansar', 'descanso', 'cansado', 'sueño', 'sueno', 'sleep', 'rest', 'tired', 'dream'],
  exercise: ['ejercicio', 'entrenar', 'correr', 'gimnasio', 'deporte', 'caminar', 'exercise', 'train', 'run', 'gym', 'sport', 'walk'],
	emotion: ['feliz', 'contento', 'alegre', 'triste', 'enojado', 'enfadado', 'ansiedad', 'miedo', 'preocupado', 'emocionado', 'solo', 'happy', 'glad', 'sad', 'angry', 'anxiety', 'fear', 'worried', 'excited', 'alone'],
  home: ['casa', 'hogar', 'habitación', 'habitacion', 'mudanza', 'cocinar', 'comida', 'home', 'house', 'room', 'move', 'cook', 'food'],
  creativity: ['escribir', 'dibujar', 'pintar', 'música', 'musica', 'cantar', 'crear', 'arte', 'write', 'paint', 'music', 'sing', 'create', 'art'],
  risk: ['riesgo', 'peligro', 'accidente', 'apostar', 'arriesgar', 'pelea', 'escapar', 'risk', 'danger', 'accident', 'bet', 'fight', 'escape'],
  planning: ['plan', 'mañana', 'manana', 'futuro', 'objetivo', 'meta', 'decidir', 'tomorrow', 'future', 'goal', 'decide', 'plan'],
	advance_story: ['quiero', 'decido', 'decidir', 'hago', 'hacer', 'sucede', 'continúo', 'continuo', 'después', 'despues', 'want', 'choose', 'decide', 'do', 'happens', 'continue', 'after']
};

intentPatterns.change_money.push(...semanticDictionary.money, 'cobrar', 'cobro', 'ganar', 'gano', 'perder dinero', 'cuenta', 'banco', 'préstamo', 'prestamo', 'devolver', 'charge', 'earn', 'lose money', 'bill', 'bank', 'loan', 'refund');
intentPatterns.change_location.push(...semanticDictionary.transport, 'barrio', 'departamento', 'mudanza', 'destination', 'subway', 'metro');
intentPatterns.social.push(...semanticDictionary.family, 'visitar a', 'invitar', 'confiar', 'perdonar', 'discutir', 'acompañar', 'visit', 'invite', 'trust', 'forgive', 'argue', 'accompany');
intentPatterns.health.push(...semanticDictionary.health, 'alimentarme', 'alimentarse', 'respirar', 'terapia', 'psicólogo', 'psicologo', 'dentista', 'vacuna', 'dieta', 'breathe', 'therapy', 'dentist', 'vaccine', 'diet');
intentPatterns.home.push(...semanticDictionary.housing, ...semanticDictionary.food, 'vivir', 'amoblar', 'ordenar', 'live', 'furnish', 'tidy');
intentPatterns.creativity.push(...semanticDictionary.creativity, 'fotografía', 'fotografia', 'actuar', 'diseñar', 'diseñar', 'componer', 'photography', 'act', 'design', 'compose');
intentPatterns.risk.push(...semanticDictionary.risk, 'arriesgarme', 'salvar', 'rescatar', 'enfrentar', 'desafiar', 'risk myself', 'rescue', 'face', 'challenge');
intentPatterns.advance_story.push(...semanticDictionary.decision, 'entonces', 'luego', 'despues', 'más tarde', 'mas tarde', 'then', 'later');

const hobbyIntentWords = [...knownHobbies, 'hobby', 'afición', 'aficion', 'interés', 'interes', 'interest'];
intentPatterns.change_hobby.push(...hobbyIntentWords);

function analyzeText(text, memory = {}) {
  const normalized = normalizeWords(text).join(' ');
  const entities = extractEntities(text, normalized);
  const scores = {};

  Object.entries(intentPatterns).forEach(([intent, patterns]) => {
	 scores[intent] = patterns.reduce((score, pattern) => score + intentPatternWeight(normalized, pattern), 0);
  });
  (memory.learnedIntents || []).forEach((learned) => {
	if (normalized.includes(learned.phrase)) scores[learned.intent] = (scores[learned.intent] || 0) + 3;
  });

  const ageSignal = /(?:creci|creciste|crecer|cumpli|cumpliste|me hice mayor|me hago mayor|envejec|un ano mas|otro ano|pasaron los anos|transcurrio un ano|grow older|grew older|get older|another year|turned another year)/.test(normalized);
  const workSignal = /(?:trabajo|trabajar|trabaje|oficina|turno|jornada|empleo|profesion|negocio|contrato|entrevista|work|worked|job|office|shift|employment|business|contract|interview)/.test(normalized);
	const locationSignal = Boolean(entities.locations.length);
  if (ageSignal) {
	scores.change_age = (scores.change_age || 0) + 6;
	if (!workSignal) scores.work = 0;
  }
	if (entities.hobbies?.length) scores.change_hobby = (scores.change_hobby || 0) + 5;
  if (entities.people?.length) scores.social = (scores.social || 0) + 2;
  if (entities.goals?.length) scores.planning = (scores.planning || 0) + 4;
	const globalIntent = window.__lifeGlobalPatterns?.find((item) => item.intent === Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0]);
	if (globalIntent) scores[globalIntent.intent] += Math.min(3, Math.log10(Number(globalIntent.event_count) + 1));
  if (workSignal && !ageSignal) scores.work = (scores.work || 0) + 2;
  if (locationSignal) {
	 scores.change_location = (scores.change_location || 0) + 5;
	 scores.travel = (scores.travel || 0) + 2;
  }
	const explicitLocation = extractContextualLocation(text);
	if (explicitLocation) {
	  scores.change_location = (scores.change_location || 0) + 8;
	  scores.travel = Math.max(0, (scores.travel || 0) - 1);
	}

  const context = inferLocalContext(text, memory);
  const intentCategory = {
	change_age: 'age', change_money: 'money', work: 'work', learn: 'learning', travel: 'travel',
	social: 'social', health: 'health', rest: 'health', exercise: 'health', emotion: 'emotion',
	creativity: 'creativity', risk: 'risk', home: 'home'
  };
  Object.entries(scores).forEach(([intent, score]) => {
	const category = intentCategory[intent];
	const categoryScore = context.categories.find((item) => item.category === category)?.score || 0;
	const previousScore = context.previousCategories.find((item) => item.category === category)?.score || 0;
	scores[intent] = score + categoryScore * .35 + (context.referencesPrevious ? previousScore * .2 : 0);
  });

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const best = ranked[0] || ['advance_story', 0];
  const second = ranked[1]?.[1] || 0;
	const semanticCoverage = new Set(semanticCategories(text).map((category) => category.category)).size;
	const confidence = Math.min(.98, Math.max(.08, .28 + best[1] * .15 + Math.min(.18, semanticCoverage * .04) - (second > 0 ? .05 : 0)));
	const negated = /\b(no|nunca|jamas|jamás|sin|not|never|without)\b/.test(normalized);
	const question = /\?|^(?:que|qué|como|cómo|por que|por qué|what|how|why|when|where)\b/.test(normalized);
	const firstPerson = /\b(?:yo|vos|tu|tú|me|mi|mis|tengo|quiero|voy|vivo|soy|estoy|decido|hago|aprendo|trabajo|fui|viaje|viajé|estudie|estudié|trabaje|trabajé|dormi|dormí|compre|compré|vendi|vendí|conoci|conocí|adopte|adopté|case|casé|i|i'm|im|ive|i've|i'll|my|me|we|our|myself)\b/.test(normalized);
	const actionVerb = /\b(?:quiero|decido|decidir|elijo|elegir|acepto|aceptar|rechazo|rechazar|intento|intentar|pruebo|probar|hago|hacer|voy|fui|fuimos|viajo|viajar|viaje|viajé|viajamos|me mudo|me mude|me mudé|vivo|vivi|viví|trabajo|trabajar|trabaje|trabajé|laburo|laburar|labure|laburé|trabajamos|aprendo|aprender|aprendi|aprendí|estudio|estudiar|estudie|estudié|estudiamos|leo|leer|lei|leí|cocino|cocinar|cocine|cociné|como|comer|comi|comí|duermo|dormir|dormi|dormí|descanso|descansar|descanse|descansé|compro|comprar|compre|compré|compramos|vendo|vender|vendi|vendí|vendimos|pago|pagar|pague|pagué|ahorro|ahorrar|ahorre|ahorré|invierto|invertir|inverti|invertí|crezco|cumplo|cumpli|cumplí|cambio|cambie|cambié|aumento|pierdo|perdi|perdí|gano|gane|gané|conozco|conoci|conocí|adopto|adoptar|adopte|adopté|caso|casarme|casar|case|casé|casamos|ayudo|ayude|ayudé|exploro|explore|exploré|juego|jugar|jugue|jugué|escribo|escribir|escribi|escribí|dibujo|dibujar|dibuje|dibujé|arreglo|reparo|repare|reparé|limpio|limpiar|limpie|limpié|conduzco|conduje|manejo|maneje|manejé|nado|nade|nadé|corro|corri|corrí|salgo|sali|salí|regreso|regrese|regresé|volvi|volví|empece|empecé|comence|comencé|entreno|entrenar|entrene|entrené|i want|i choose|i decide|i accept|i reject|i try|i do|i go|i went|i travel|i travelled|i traveled|i live|i lived|i work|i worked|i learn|i learned|i study|i studied|i read|i cook|i cooked|i eat|i ate|i sleep|i slept|i rest|i rested|i buy|i bought|i sell|i sold|i pay|i paid|i save|i saved|i invest|i invested|i grow|i grew|i turn|i change|i changed|i increase|i lose|i lost|i earn|i earned|i meet|i met|i adopt|i adopted|i marry|i married|i help|i helped|i explore|i explored|i play|i played|i write|i wrote|i draw|i drew|i repair|i repaired|i fix|i fixed|i clean|i cleaned|i drive|i drove|i swim|i swam|i run|i ran|i leave|i left|i return|i returned|went|travelled|traveled|worked|studied|learned|bought|sold|slept|rested|adopted|married|trained|drove)\b/.test(normalized);
	const pickupAction = Boolean(extractAcquiredItemName(normalized));
	const explicitDeclaration = /\b(?:tengo|mi edad es|mi nombre es|me llamo|mi apellido es|mi dinero es|vivo en|me mudo a|viajo a|my name is|my surname is|my last name is|my money is|i am|i'm|i live in|i move to|i travel to|i have)\b/.test(normalized);
	const subjectIsOther = context.subject === 'other';
  const mutationAllowed = !question && !negated && !subjectIsOther && (explicitDeclaration || firstPerson || actionVerb || pickupAction);
  const mutationConfidence = Math.min(1, confidence + (explicitDeclaration ? .25 : 0) + (firstPerson ? .12 : 0) + (pickupAction ? .2 : 0) - (question ? .35 : 0) - (negated ? .35 : 0) - (subjectIsOther ? .3 : 0));
	const urgency = /\bahora|urgente|necesito|ya|today|urgent|need|now\b/.test(normalized) ? 'high' : /\bpronto|soon|mañana|tomorrow\b/.test(normalized) ? 'medium' : 'low';
  const sentiment = /\b feliz|alegre|amor|éxito|happy|glad|love|success\b/.test(` ${normalized}`) ? 'positive' : /\b triste|miedo|ansiedad|problema|sad|fear|anxiety|problem\b/.test(` ${normalized}`) ? 'negative' : 'neutral';
	const closeAlternatives = ranked.filter(([, score]) => score > 0 && best[1] - score <= .8).slice(1, 3);
  const needsClarification = !best[1] || (best[1] <= 1 && second === best[1]) || closeAlternatives.length > 1;
	return { intent: best[1] ? best[0] : 'unknown', score: best[1], confidence, semanticCoverage, entities, normalized, negated, question, firstPerson, actionVerb, explicitDeclaration, explicitLocation, mutationAllowed, mutationConfidence, urgency, sentiment, needsClarification, alternatives: ranked.slice(1, 4), context, ambiguity: closeAlternatives };
}

function validateDecisionText(text, analysis = analyzeText(text)) {
  const clean = String(text || '').trim();
  if (!clean) return false;
  const words = normalizeWords(clean).filter(Boolean);
  if (!words.length || words.length > 200) return false;
  if (/^(.)\1{4,}$/.test(words.join(''))) return false;
  if (/(.)\1{4,}/.test(words.join('')) || /(?:[bcdfghjklmnpqrstvwxyz]){6,}/i.test(words.join(''))) return false;
  const letters = words.join('').replace(/[^a-záéíóúüñ]/gi, '');
  if (letters.length < 2) return false;
  const vowels = (letters.match(/[aeiouáéíóúü]/gi) || []).length;
  if (letters.length >= 7 && (vowels === 0 || vowels / letters.length < .12)) return false;
  return true;
}

function extractEntities(original, normalized) {
  const numbers = [...normalized.matchAll(/\b\d+(?:[.,]\d+)?\b/g)].map((match) => Number(match[0].replace(',', '.')));
	const entities = { numbers, money: [], age: [], names: [], locations: [], hobbies: [], durations: [], dates: [], people: [], relationships: [] };
	const moneyMatches = original.match(/(?:\$|€|£|ars|usd|eur|pesos?|dólares?|dolares?|plata|libras?|dollars?|euros?|bucks?)\s*\d+(?:[.,]\d+)?|\d+(?:[.,]\d+)?\s*(?:ars|usd|eur|pesos?|dólares?|dolares?|plata|libras?|dollars?|euros?|bucks?)/gi) || [];
  entities.money = moneyMatches;
	const ageMatches = original.match(/\d+\s*(?:años?|anos?|years?\s*old)/gi) || [];
  entities.age = ageMatches;
	entities.durations = original.match(/\d+\s*(?:días?|dias?|semanas?|meses?|años?|anos?|days?|weeks?|months?|years?)/gi) || [];
	entities.dates = original.match(/(?:hoy|mañana|manana|ayer|anteayer|esta noche|este año|este ano|la próxima semana|proxima semana|el mes que viene|today|tomorrow|yesterday|the day before yesterday|tonight|this year|next week|next month)/gi) || [];
	const name = extractText(original, ['me llamo', 'mi nombre es', 'nuevo nombre', 'my name is', 'call me']);
	const location = extractContextualLocation(original) || extractText(original, ['me mudo a', 'vivo en', 'estoy en', 'ahora estoy en', 'viajo a', 'viajo al', 'voy a', 'voy al', 'llego a', 'llego al', 'mi nueva ubicación es', 'mi nueva ubicacion es', 'encuentro un lugar llamado', 'descubro la ciudad de', 'move to', 'live in', 'i am in', "i'm in", 'travel to', 'go to', 'arrive at', 'new location is']);
  const hobby = extractText(original, ['mi hobby es', 'mi nuevo hobby es', 'me gusta', 'my hobby is', 'I like']);
  if (name) entities.names.push(name);
  if (location) entities.locations.push(location);
  if (hobby) entities.hobbies.push(hobby);
	const relationshipMatch = original.match(/(?:nuevo amigo(?: llamado| que se llama)?|nueva amiga(?: llamada| que se llama)?|nuevo conocido(?: llamado| que se llama)?|conoc[ií] a(?: alguien)?(?: llamado| que se llama)?|me hice amigo de|tengo un amigo llamado|tengo una amiga llamada|new friend(?: named| called)?|new acquaintance(?: named| called)?|i met(?: someone)?(?: named| called)?|i became friends with|my new friend is)\s+([^,.!?;]+?)(?=\s+(?:que|quien|una|un|el|la|para|porque|who|that|a|an|the|to|because|llamado|llamada|named|called)\b|[,.!?;]|$)/i);
	const relationName = relationshipMatch ? relationshipMatch[1].replace(/^(?:llamado|llamada|named|called)\s+/i, '').trim() : '';
	if (relationName) {
	  entities.people.push(relationName);
	  entities.relationships.push({ name: relationName, type: /amig|friend/i.test(relationshipMatch[0]) ? 'friend' : 'acquaintance' });
	}
	const personMatch = original.match(/(?:hablo con|conozco a|visito a|ayudo a|me encuentro con|me reúno con|me reuno con|talk to|meet|visit|help|introduce)\s+([^,.!?;]+?)(?=\s+(?:que|quien|una|un|el|la|para|porque|who|that|a|an|the|to|because)\b|[,.!?;]|$)/i);
  const person = personMatch ? personMatch[1].trim() : '';
	if (person) entities.people.push(person);
	entities.people = [...new Set(entities.people)];
  return entities;
}

function interpretDecision(text, memory = createEmptyMemory(), world = createEmptyWorld()) {
  const analysis = analyzeText(text, memory);
  const normalized = analysis.normalized;
  const actions = [];
  const addAction = (type, score, detail = '') => actions.push({ type, score, detail });
  const has = (...terms) => terms.some((term) => normalized.includes(normalizeWords(term).join(' ')));

  if (has('crear', 'inventar', 'construir', 'fundar', 'organizar', 'aparece', 'entra en escena', 'se une', 'create', 'invent', 'build', 'found', 'organize', 'appears', 'joins')) addAction('create', 3);
	if (has('conocer', 'hablar con', 'visitar', 'ayudar', 'invitar', 'me encuentro con', 'me reúno con', 'me reuno con', 'nuevo amigo', 'nueva amiga', 'conocí a', 'me hice amigo de', 'meet', 'talk to', 'visit', 'help', 'invite', 'new friend', 'i met', 'became friends')) addAction('social', 2);
  if (has('buscar', 'investigar', 'descubrir', 'averiguar', 'seguir', 'search', 'investigate', 'discover', 'find out', 'follow')) addAction('investigate', 3);
  if (has('aceptar', 'rechazar', 'decidir', 'elegir', 'intentar', 'accept', 'reject', 'decide', 'choose', 'try')) addAction('decide', 2);
  if (has('comprar', 'vender', 'negociar', 'invertir', 'fundar un negocio', 'buy', 'sell', 'negotiate', 'invest', 'start a business')) addAction('trade', 2);
  if (has('viajar', 'viaje', 'explorar', 'mudarse', 'escapar', 'travel', 'trip', 'explore', 'move', 'escape')) addAction('travel', 2);
  if (has('aprender', 'estudiar', 'practicar', 'entrenar', 'learn', 'study', 'practice', 'train')) addAction('learn', 2);
  if (has('trabajar', 'trabajo', 'conseguir empleo', 'work', 'job', 'get a job')) addAction('work', 2);
  if (has('dormir', 'descansar', 'recuperar', 'sleep', 'rest', 'recover')) addAction('rest', 2);
  if (!actions.length) addAction(analysis.intent === 'unknown' ? 'freeform' : analysis.intent, 1);

  const quoted = [...text.matchAll(/["“”«»']([^"“”«»']+)["“”«»']/g)].map((match) => match[1].trim());
  const explicitLocation = extractContextualLocation(text) || extractText(text, ['me mudo a', 'vivo en', 'viajo a', 'viajo al', 'voy a', 'voy al', 'llego a', 'llego al', 'hacia', 'mi nueva ubicación es', 'mi nueva ubicacion es', 'encuentro un lugar llamado', 'descubro la ciudad de', 'move to', 'live in', 'travel to', 'go to', 'arrive at', 'new location is']);
  const location = analysis.entities.locations[0] || explicitLocation;
	const introducedPeople = [...text.matchAll(/(?:aparece|llega|entra en escena|se une|encuentro a|conozco a|appears|arrives|joins|I meet|meet)\s+([^,.!?;]+?)(?=\s+(?:que|quien|una|un|el|la|para|porque|who|that|a|an|the|to|because)\b|[,.!?;]|$)/gi)].map((match) => match[1].trim());
	const people = [...new Set([...analysis.entities.people, ...introducedPeople].filter((item) => item.length > 1))];
	analysis.entities.people = people;
	const relationshipType = analysis.entities.relationships[0]?.type || (has('amigo', 'amiga', 'friend') ? 'friend' : 'acquaintance');
  const objectNames = quoted.filter((item) => item.length > 2);
	const goalMatch = text.match(/(?:quiero|me gustaría|me gustaria|mi objetivo es|planeo|intento|i want to|my goal is|i plan to|i try to)\s+(.+)/i);
  const goalText = goalMatch ? goalMatch[1].replace(/[.!?]+$/, '').trim() : '';
	const ruleMatch = text.match(/(?:en este mundo|la regla es|a partir de ahora|en mi mundo|in this world|the rule is|from now on|in my world)\s*[:,-]?\s*(.+)/i);
  const factionMatch = text.match(/(?:creo|fundo|formo|organizo|i create|i found|i form|i organize)\s+(?:una|un|a|an)\s+(?:organización|organizacion|facción|faccion|empresa|grupo|organization|faction|company|group)\s+(?:llamad[ao]|denominad[ao]|called|named)?\s*([^,.!?;]+)/i);
  const knownLocations = world.locations.map((item) => item.name.toLowerCase());
  const knownCharacters = world.characters.map((item) => item.name.toLowerCase());
  const creates = [];
  if (actions.some((action) => action.type === 'create') || objectNames.length) {
	objectNames.forEach((name) => creates.push({ type: 'place_or_object', name }));
  }
  const locationAction = has('crear', 'construir', 'fundar', 'viajar', 'viaje', 'mudarse', 'me mudo', 'vivo en', 'voy a', 'llego a', 'explorar', 'descubrir', 'aparece una ciudad', 'aparece un lugar', 'encuentro un lugar');
  if (location && !knownLocations.includes(location.toLowerCase()) && locationAction) {
	creates.push({ type: 'location', name: location });
  }
	people.filter((person) => !knownCharacters.includes(person.toLowerCase())).forEach((name) => creates.push({ type: 'character', name, relationshipType }));
  return {
	analysis,
	actions: actions.sort((a, b) => b.score - a.score),
	entities: analysis.entities,
	relationshipType,
	goal: goalText,
	rule: ruleMatch ? ruleMatch[1].replace(/[.!?]+$/, '').trim() : '',
	faction: factionMatch ? factionMatch[1].trim() : '',
	creates,
	risks: has('riesgo', 'peligro', 'arriesgar', 'pelea', 'escapar') ? ['La decisión puede provocar consecuencias inesperadas.'] : [],
	ambiguity: analysis.confidence < .5 || actions[0].type === 'freeform',
	clarification: analysis.needsClarification ? analysis.ambiguity.map(([intent]) => intent) : [],
	worldTime: { ...world.time }
  };
}

function updateAnalysisView(analysis) {
  const entities = Object.entries(analysis.entities)
	.filter(([, values]) => values.length)
	.map(([key, values]) => `${key}: ${values.join(', ')}`)
	.join(' · ') || t('none');
	const urgencyLabel = currentLanguage === 'en' ? 'urgency' : 'urgencia';
	const sentimentLabel = currentLanguage === 'en' ? 'sentiment' : 'sentimiento';
	const contextLabel = currentLanguage === 'en' ? 'topic' : 'tema';
	const subjectLabel = currentLanguage === 'en' ? 'subject' : 'sujeto';
	analysisDetails.textContent = `${t('intent')}: ${analysis.intent} · ${t('confidence')}: ${Math.round(analysis.confidence * 100)}% · ${t('entities')}: ${entities} · ${urgencyLabel}: ${analysis.urgency} · ${sentimentLabel}: ${analysis.sentiment} · ${contextLabel}: ${analysis.context?.topic || '—'} · ${subjectLabel}: ${analysis.context?.subject || '—'}`;
	const memory = mergeMemories(readSave().memory, readGlobalMemory());
	const predictions = predictIntent(analysis.normalized, memory);
	const goal = memory.goals.find((item) => item.status === 'active');
	  predictionDetails.textContent = `${t('prediction')}: ${predictions.join(', ') || '—'} · ${t('goal')}: ${goal ? `${goal.text} (${goal.progress}%)` : '—'}`;
	return analysis;
}

function updateQuestion() {
  const question = questions[currentQuestion];
	questionLabel.textContent = t(question.key);
  questionHint.textContent = t(`${question.key}Hint`);
  questionHint.classList.remove('error');
  questionNumber.textContent = String(currentQuestion + 1).padStart(2, '0');
  progressBar.textContent = `[${'■'.repeat(currentQuestion)}${'□'.repeat(questions.length - currentQuestion)}]`;
  answerInput.value = '';
  answerInput.type = question.key === 'age' || question.key === 'money' ? 'number' : 'text';
  answerInput.focus();
}

function showStats() {
	lifeEngine.preparePlayer(player);
	renderStats();
	window.lifeSupabase?.resetGameReference?.();
	const newLifeId = 'life-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);
	const initialSave = { id: newLifeId, player: { ...player }, chapters: [], memory: createEmptyMemory(), world: createEmptyWorld(), weather: chooseInitialWeather(), lifeStatus: 'active' };
	assignBirthDiseases(initialSave.player);
	window.__lifeSave = initialSave;
	saveCurrentGame(initialSave);
  startWorldClock(initialSave);
	setWelcomeNavigationVisible(false);
  questionScreen.classList.add('hidden');
	statsScreen.classList.add('hidden');
  storyScreen.classList.remove('hidden');
	startWeatherCycle(initialSave);
  renderWorldEnvironment(initialSave);
	renderCurrentOccupation();
  storyInput.focus();
}

function detectLifeEnding(text) {
	const normalized = normalizeWords(text).join(' ');
	return /\b(?:morir|muere|murio|muriendo|muerto|muerte|fallecio|fallecer|fallecido|paso a mejor vida|dejo de existir|dejo de vivir|se quito la vida|me quito la vida|termino su vida|suicid|died|dead|die|dying|death|passed away|suicide|committed suicide|killed himself|killed herself|kill myself|end my life|ended his life|ended her life|stop existing)\b/i.test(normalized);
}

async function finishLife(decision, savedGame, globalMemory) {
	if (hasInfiniteLifeCollar(savedGame)) {
	 savedGame.player.health = Math.max(1, Number(savedGame.player.health) || 1);
	 savedGame.endedReason = '';
	 window.__lifeSave = savedGame;
	 await saveCurrentGame(savedGame);
	 savedMessage.textContent = currentLanguage === 'en' ? '// infinite life collar protected this life.' : '// el collar de vida infinita protegió esta vida.';
	 savedMessage.classList.remove('hidden');
	 return;
  }
  const now = new Date().toISOString();
	globalMemory.lifeCount = (Number(globalMemory.lifeCount) || 0) + 1;
  globalMemory.sessions.push({ id: `life-${Date.now()}`, type: 'life-ended', reason: decision.slice(0, 300), player: { ...savedGame.player }, chapters: savedGame.chapters.length, date: now, lang: currentLanguage });
  globalMemory.facts.push({ text: currentLanguage === 'en' ? `A previous life ended after: ${decision.slice(0, 240)}` : `Una vida anterior terminó después de: ${decision.slice(0, 240)}`, lang: currentLanguage, date: now, importance: 3 });
  normalizeMemory(globalMemory);
  await saveGlobalMemory(globalMemory);
	savedGame.lifeStatus = 'ended';
	  savedGame.endedReason = decision || randomDeathCause();
  window.__lifeSave = savedGame;
	await saveCurrentGame(savedGame);
  renderGameOver(savedGame.endedReason, savedGame, globalMemory);
}

function captureDecisionStats(save) {
  const playerState = save?.player || {};
  const worldState = save?.world || {};
  const relationships = playerState.relationships || playerState.relations || {};
  return {
	 age: Number(playerState.age) || 0,
	 money: Number(playerState.money) || 0,
	 energy: Number(playerState.energy) || 0,
	 mood: Number(playerState.mood) || 0,
	 reputation: Number(playerState.reputation) || 0,
	 health: Number(playerState.health) || 0,
	 location: playerState.location || '',
	 occupation: playerState.occupation || '',
	 inventory_count: Array.isArray(playerState.inventory) ? playerState.inventory.length : 0,
	 disease_count: Array.isArray(playerState.diseases) ? playerState.diseases.length : 0,
	 skill_count: Object.keys(playerState.skills || {}).length,
	 relationship_count: Array.isArray(relationships) ? relationships.length : Object.keys(relationships).length,
	 family_children: Array.isArray(playerState.familyTree?.children) ? playerState.familyTree.children.length : 0,
	 marital_status: playerState.familyTree?.maritalStatus || 'single',
	 chapter_count: Array.isArray(save?.chapters) ? save.chapters.length : 0,
	 quest_count: Array.isArray(worldState.quests) ? worldState.quests.length : 0,
	 location_count: Array.isArray(worldState.locations) ? worldState.locations.length : 0
  };
}

function getChangedDecisionStats(before, after) {
  const labels = {
	 age: ['Edad', 'Age'], money: ['Dinero', 'Money'], energy: ['Energía', 'Energy'], mood: ['Ánimo', 'Mood'],
	 reputation: ['Reputación', 'Reputation'], health: ['Salud', 'Health'], location: ['Ubicación', 'Location'],
	 occupation: ['Profesión', 'Occupation'], inventory_count: ['Objetos', 'Items'], disease_count: ['Enfermedades', 'Diseases'],
	 skill_count: ['Habilidades', 'Skills'], relationship_count: ['Relaciones', 'Relationships'], family_children: ['Hijos', 'Children'], marital_status: ['Estado civil', 'Marital status'], chapter_count: ['Capítulos', 'Chapters'],
	 quest_count: ['Misiones', 'Quests'], location_count: ['Lugares descubiertos', 'Discovered places']
  };
  return Object.keys(labels).filter((key) => before[key] !== after[key]).map((key) => ({
	 key,
	 label: labels[key][currentLanguage === 'en' ? 1 : 0],
	 before: before[key],
	 after: after[key],
	 delta: typeof before[key] === 'number' && typeof after[key] === 'number' ? after[key] - before[key] : null
  }));
}

function renderChangedDecisionStats(changes) {
  if (!changes.length) {
	 effectsText.textContent = '';
	 effectsText.classList.add('hidden');
	 return;
  }
  effectsText.textContent = `${currentLanguage === 'en' ? '// changed stats: ' : '// estadísticas modificadas: '}${changes.map((change) => {
	 const values = change.delta === null ? `${change.before || '—'} → ${change.after || '—'}` : `${change.before} → ${change.after} (${change.delta > 0 ? '+' : ''}${change.delta})`;
	 return `${change.label}: ${values}`;
  }).join(' · ')}`;
  effectsText.classList.remove('hidden');
}

listen(storyInput, 'keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    saveStoryButton.click();
  }
});

listen(saveStoryButton, 'click', async () => {
	const decision = storyInput.value.trim();
  if (!decision) return;

	const savedGame = readSave();
	if (savedGame.lifeStatus === 'ended') {
	  setWelcomeNavigationVisible(true);
	  savedMessage.textContent = currentLanguage === 'en' ? '// this life has ended; start a new life from MENU_' : '// esta vida terminó; comienza una nueva vida desde MENU_';
	  savedMessage.classList.remove('hidden');
	  return;
	}
	const globalMemory = readGlobalMemory();
	const memory = mergeMemories(savedGame.memory, globalMemory);
	const decisionAnalysis = analyzeText(decision, memory);
	if (isConversationMessage(decision, decisionAnalysis)) {
	  savedMessage.classList.remove('error');
	  savedMessage.classList.add('hidden');
	  aiText.textContent = getConversationReply(decision, savedGame.player, savedGame.world);
	  renderChangedDecisionStats([]);
	  aiOutput.classList.remove('hidden');
	  storyInput.value = '';
	  return;
	}
	if (!validateDecisionText(decision, decisionAnalysis)) {
	  window.lifeSupabase?.saveDecisionValidation?.(savedGame, decisionAnalysis, false).catch((error) => console.warn('LIFE.AI validation sync:', error));
	  savedMessage.textContent = currentLanguage === 'en'
		? '// LIFE.AI could not understand that decision. Write something clearer next time.'
		: '// LIFE.AI no pudo entender esa decisión. Escribe algo más claro la próxima vez.';
	  savedMessage.classList.add('error');
	  savedMessage.classList.remove('hidden');
	  return;
	}
	savedMessage.classList.remove('error');
	window.lifeSupabase?.saveDecisionValidation?.(savedGame, decisionAnalysis, true).catch((error) => console.warn('LIFE.AI validation sync:', error));
	const previousAge = Number(savedGame.player.age) || 0;
	if (detectLifeEnding(decision)) {
	  learnFrom(decision, globalMemory);
	  await finishLife(decision, savedGame, globalMemory);
	  return;
	}
	const previousStats = captureDecisionStats(savedGame);
  learnFrom(decision, savedGame.memory);
  learnFrom(decision, globalMemory);
	const result = lifeEngine.processDecision(decision, savedGame.player, memory, savedGame.world);
	const diseaseDeath = result.effects.find((effect) => effect.startsWith('DEATH_CAUSE:'));
	if (diseaseDeath) {
	  const reason = diseaseDeath.replace('DEATH_CAUSE:', '').trim();
	  await finishLife(reason, savedGame, globalMemory);
	  return;
	}
	const ageGained = Math.max(0, (Number(savedGame.player.age) || 0) - previousAge);
	if (ageGained > 0) {
	  savedGame.player.familyTree = normalizeFamilyTree(savedGame.player.familyTree, savedGame.player);
	  savedGame.player.familyTree.children.forEach((child) => { child.age = Math.min(120, Math.max(0, Number(child.age) || 0) + ageGained); });
	  savedGame.world.time.year = Math.max(1, Number(savedGame.world.time.year) || 1) + ageGained;
	  result.effects.push(currentLanguage === 'en' ? `world year: +${ageGained}` : `año mundial: +${ageGained}`);
	}
	(result.interpretation.entities.relationships || []).forEach((relationship) => {
	  const currentLevel = Number(savedGame.player.relationships[relationship.name] || 0);
	  savedGame.player.relationships[relationship.name] = Math.min(100, currentLevel + (relationship.type === 'friend' ? 20 : 5));
	});
	new CognitiveMemory(savedGame.memory).record(decision, result.analysis, result.effects, savedGame.player);
	new PlanningEngine(savedGame.memory).update(decision);
	new CognitiveMemory(globalMemory).record(decision, result.analysis, result.effects, savedGame.player);
	new PlanningEngine(globalMemory).update(decision);
	const changedStats = getChangedDecisionStats(previousStats, captureDecisionStats(savedGame));
	result.changedStats = changedStats;
	window.lifeSupabase?.saveEvent?.(savedGame, decision, result).catch((error) => console.warn('LIFE.AI Supabase event sync:', error));
	window.lifeSupabase?.submitLearningEvent?.(savedGame, result).catch((error) => console.warn('LIFE.AI global learning sync:', error));
	window.lifeSupabase?.saveLearningSignal?.(savedGame, result, 'decision_state').catch((error) => console.warn('LIFE.AI learning signal sync:', error));
  Object.assign(player, savedGame.player);
	setWelcomeNavigationVisible(false);
	lifeEngine.preparePlayer(player);
	const continuation = result.narrative;
	savedGame.chapters.push({ decision, continuation, effects: result.effects, analysis: result.analysis, date: new Date().toISOString() });
	window.__lifeSave = savedGame;
	await saveCurrentGame(savedGame);
	await saveGlobalMemory(globalMemory);
	const deathAge = diedWhileAging(previousAge, savedGame.player.age);
	if (deathAge) {
	  const reason = currentLanguage === 'en'
		? `Your character reached age ${deathAge} and died during the passage of time.`
		: `Tu personaje llegó a los ${deathAge} años y murió durante el paso del tiempo.`;
	  await finishLife(reason, savedGame, globalMemory);
	  return;
	}
  savedMessage.classList.remove('hidden');
  aiText.textContent = continuation;
	renderChangedDecisionStats(changedStats);
  aiOutput.classList.remove('hidden');
	renderStats();
  storyInput.value = '';
});

listen(exportButton, 'click', async () => {
  const save = readSave();
	const exportData = { ...save, aiMemory: readGlobalMemory() };
  const file = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = `partida-${save.player.name || 'vida'}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
});

listen(importButton, 'click', () => importInput?.click());

listen(learnFileButton, 'click', () => learnFileInput?.click());

listen(learnFileInput, 'change', async () => {
  const file = learnFileInput.files?.[0];
  if (!file) return;
  try {
	const text = await file.text();
	const memory = readGlobalMemory();
	const learned = learnKnowledgeText(text, memory, file.name);
	await saveGlobalMemory(memory);
	savedMessage.textContent = currentLanguage === 'en'
	  ? `// knowledge loaded: ${learned} entries from ${file.name}_`
	  : `// conocimiento cargado: ${learned} entradas desde ${file.name}_`;
	savedMessage.classList.remove('hidden');
  } catch (error) {
	console.error('LIFE.AI knowledge import error:', error);
  } finally {
	learnFileInput.value = '';
  }
});

listen(resetButton, 'click', async () => {
	const confirmed = window.confirm(currentLanguage === 'en' ? 'Are you sure you want to archive this life and start over?' : '¿Seguro que quieres archivar esta vida y comenzar de nuevo?');
  if (!confirmed) return;
	try {
	  await window.lifeSupabase?.archiveCurrentGame?.(readSave());
	} catch (error) {
	  console.warn('LIFE.AI Supabase game archive:', error);
	}
	await startNewLife();
	startButton?.focus();
});

listen(importInput, 'change', async () => {
  const file = importInput.files[0];
  if (!file) return;
  const reader = new FileReader();
	reader.onload = async () => {
	try {
	  const save = JSON.parse(reader.result);
		if (!save.player?.name || !Array.isArray(save.chapters)) throw new Error('invalid save');
		  window.__lifeSave = normalizeSave(save);
	  await saveCurrentGame(window.__lifeSave);
	  if (save.aiMemory) await saveGlobalMemory(save.aiMemory);
	  location.reload();
	} catch {
	  savedMessage.textContent = currentLanguage === 'en' ? '// ERROR: invalid game file.' : '// ERROR: archivo de partida no válido.';
	  savedMessage.classList.remove('hidden');
	}
  };
  reader.readAsText(file);
  importInput.value = '';
});

listen(historyButton, 'click', () => {
  renderHistory(readSave().chapters);
  historyScreen.classList.remove('hidden');
});

listen(closeHistoryButton, 'click', () => {
	returnToMenuFromPanel(historyScreen);
});

listen(statsButton, 'click', () => {
  statsScreen.classList.remove('hidden');
  try {
	renderStats();
	renderFullStats();
  } catch (error) {
	statsExtra.textContent = currentLanguage === 'en' ? 'Basic statistics are available. Advanced memory is still loading.' : 'Estadísticas básicas disponibles. La memoria avanzada todavía se está cargando.';
	console.error('LIFE.AI stats error:', error);
  }
});

listen(closeStatsButton, 'click', () => {
	returnToMenuFromPanel(statsScreen);
});

listen(worldButton, 'click', () => {
  renderWorldPanel();
  worldScreen.classList.remove('hidden');
});

listen(closeWorldButton, 'click', () => {
	returnToMenuFromPanel(worldScreen);
});

listen(skillsButton, 'click', () => {
  renderSkillsPanel();
  skillsScreen.classList.remove('hidden');
});

listen(closeSkillsButton, 'click', () => {
	returnToMenuFromPanel(skillsScreen);
});

listen(relationsButton, 'click', () => {
  renderRelationsPanel();
  relationsScreen.classList.remove('hidden');
});

listen(closeRelationsButton, 'click', () => {
	returnToMenuFromPanel(relationsScreen);
});

try {
  applyTranslations();
} catch (error) {
  console.error('LIFE.AI translation startup error:', error);
}
initializeApplication().catch((error) => {
  console.error('LIFE.AI initialization error:', error);
  applicationReady = true;
  if (startButton) startButton.disabled = false;
});

window.addEventListener('beforeunload', () => {
  if (window.__lifeSave?.lifeStatus === 'active') saveCurrentGame(window.__lifeSave);
  window.lifeSupabase?.clearPresence?.().catch(() => undefined);
});

window.setInterval(() => {
  if (window.__lifeSave?.lifeStatus === 'active') saveCurrentGame(window.__lifeSave);
}, 10000);

window.setInterval(() => {
	if (currentUsername) {
	  window.lifeSupabase?.updatePresence?.(window.__lifeSave || null).catch((error) => console.warn('LIFE.AI presence heartbeat:', error));
	  window.lifeSupabase?.recordPlayTime?.(window.__lifeSave || null).catch((error) => console.warn('LIFE.AI play time sync:', error));
	}
	window.__lifePlaySeconds = getSessionPlaySeconds();
	if (window.__lifeSave?.lifeStatus === 'active') renderPlayTimeRewards();
  refreshActivePlayers();
}, 15000);

async function initializeApplication() {
	if (startButton) startButton.disabled = true;
  try {
	let storedLanguage = null;
	try { storedLanguage = localStorage.getItem('lifeLanguage'); } catch { /* idioma predeterminado */ }
	const browserLang = (typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage || '').toLowerCase().startsWith('es')) ? 'es' : 'en';
	currentLanguage = storedLanguage === 'es' || storedLanguage === 'en' ? storedLanguage : browserLang;
	applyTranslations();
	const supabaseUser = await window.lifeSupabase?.initialize?.();
	if (window.lifeSupabase?.enabled) {
	  try {
		window.__lifeGlobalPatterns = await window.lifeSupabase.loadGlobalLearning();
	  } catch (error) {
		window.__lifeGlobalPatterns = [];
		console.warn('LIFE.AI global learning load:', error);
	  }
	refreshActivePlayers();
	}
	if (!currentUsername && window.lifeSupabase?.displayName) {
	  currentUsername = window.lifeSupabase.displayName;
	  window.currentUsername = currentUsername;
	  try { localStorage.setItem('lifeUsername', currentUsername); } catch { /* almacenamiento opcional */ }
	}
	renderUsernameStatus();
	await storage.open();
	await storage.migrateLegacy();
	const indexedDbSave = await storage.get('game', 'current');
	window.__lifeMemory = await storage.get('memory', 'global');
	window.__lifeSave = selectMostRecentSave(indexedDbSave, readFallbackSave());
	if (window.lifeSupabase?.enabled) {
	  try {
		const remoteSave = await window.lifeSupabase.loadLatestGame();
		const localUpdated = new Date(window.__lifeSave?.updatedAt || 0).getTime();
		const remoteUpdated = new Date(remoteSave?.updatedAt || 0).getTime();
		if (remoteSave?.player?.name && (!window.__lifeSave || remoteUpdated > localUpdated)) window.__lifeSave = normalizeSave(remoteSave);
	  } catch (error) {
		console.warn('LIFE.AI Supabase load sync:', error);
	  }
	}
	window.__lifeMemory = window.__lifeMemory || readFallbackMemory();
	if (window.__lifeMemory) normalizeMemory(window.__lifeMemory);
	if (window.__lifeSave) {
	  window.__lifeSave = normalizeSave(window.__lifeSave);
	}
	await autoLearnFromProject();
	applyTranslations();
  } catch {
	window.__lifeSave = selectMostRecentSave(readFallbackSave());
	window.__lifeMemory = readFallbackMemory() || createEmptyMemory();
	  try { applyTranslations(); } catch (error) { console.error('LIFE.AI fallback translation error:', error); }
	} finally {
	applicationReady = true;
	if (startButton) startButton.disabled = false;
	if (currentUsername) {
	  showApplicationEntry();
	  window.lifeSupabase?.updatePresence?.(window.__lifeSave || null).catch((error) => console.warn('LIFE.AI initial presence:', error));
	  refreshActivePlayers();
	}
	else showUsernameGate();
  }
}

function restoreSavedGame() {
  try {
	const savedGame = readSave();
	if (!savedGame.player?.name) return;
	if (savedGame.lifeStatus === 'ended') {
	  stopWeatherCycle();
	  stopWorldClock();
	  resetWeatherVisuals();
	  renderGameOver(savedGame.endedReason, savedGame, readGlobalMemory());
	  return;
	}
	Object.assign(player, savedGame.player);
	setWelcomeNavigationVisible(false);
	renderStats();
	startWeatherCycle(savedGame);
	startWorldClock(savedGame);
	welcomeScreen.classList.add('hidden');
	questionScreen.classList.add('hidden');
	statsScreen.classList.add('hidden');
	storyScreen.classList.remove('hidden');
	renderWorldEnvironment(savedGame);
	renderCurrentOccupation();
	} catch {
	window.__lifeSave = null;
  }
}

function renderStats() {
  const activePlayer = player?.name ? player : (readSave().player || player || {});
  if (nameStat) nameStat.textContent = `"${activePlayer.name || ''}"`;
  if (surnameStat) surnameStat.textContent = `"${activePlayer.surname || ''}"`;
  if (ageStat) ageStat.textContent = activePlayer.age || 0;
	if (characterStat) characterStat.textContent = `"${activePlayer.name || ''}"`;
  const moneyEl = document.querySelector('#moneyStat');
  if (moneyEl) moneyEl.textContent = activePlayer.money || 0;
  if (locationStat) locationStat.textContent = `"${activePlayer.location || ''}"`;
  if (hobbyStat) hobbyStat.textContent = `"${activePlayer.hobby || ''}"`;
	const occupation = careerById(activePlayer.occupation);
  if (occupationStat) occupationStat.textContent = `"${careerLabel(occupation)}"`;
  if (energyStat) energyStat.textContent = activePlayer.energy ?? 100;
	if (moodStat) moodStat.textContent = `"${activePlayer.mood || t('stable')}"`;
  if (reputationStat) reputationStat.textContent = activePlayer.reputation ?? 0;
  renderCurrentOccupation();
}

function renderFullStats() {
	const current = player?.name ? player : (readSave().player || player || {});
	const save = readSave();
  const memory = mergeMemories(save.memory || createEmptyMemory(), readGlobalMemory() || createEmptyMemory());
	const empty = t('none');
  const relationships = Object.entries(current.relationships || {}).map(([name, level]) => `${name}: ${level}`).join(' · ') || empty;
  const activeGoals = memory.goals.filter((goal) => goal.status === 'active').map((goal) => `${goal.text} (${goal.progress}%)`).join(' · ') || empty;
	const diseases = normalizeDiseases(current).filter((disease) => disease.active).map((disease) => `${diseaseLabel(disease)}${disease.controlled ? (currentLanguage === 'en' ? ' (controlled)' : ' (controlada)') : ''}`).join(', ') || empty;
	if (statsExtra) statsExtra.textContent = currentLanguage === 'en' ? `recorded events: ${(current.events || []).length} | personal goals: ${activeGoals} | diseases: ${diseases}` : `eventos registrados: ${(current.events || []).length} | objetivos personales: ${activeGoals} | enfermedades: ${diseases}`;
}

function addPanelSection(container, title, entries, emptyText = currentLanguage === 'en' ? 'none' : 'ninguno') {
  const section = document.createElement('section');
  section.className = 'panel-section';
  const heading = document.createElement('h3');
  heading.className = 'panel-section-title';
  heading.textContent = `[ ${title} ]`;
  section.append(heading);
  if (!entries || !entries.length) {
	const empty = document.createElement('p');
	empty.className = 'panel-empty';
	empty.textContent = `// ${emptyText}`;
	section.append(empty);
  } else {
    const grid = document.createElement('div');
    grid.className = 'panel-grid-2';
	entries.forEach((entry) => {
	  const card = document.createElement('article');
	  card.className = 'panel-card';
	  const name = document.createElement('strong');
	  name.textContent = entry.title;
	  card.append(name);
	  if (entry.details) {
		const details = document.createElement('p');
		details.textContent = entry.details;
		card.append(details);
	  }
	  grid.append(card);
	});
    section.append(grid);
  }
  container.append(section);
}

function renderWorldPanel() {
  const world = normalizeWorld(readSave().world);
  worldDashboard.replaceChildren();
	const en = currentLanguage === 'en';
	addPanelSection(worldDashboard, panelLabel('time'), [{ title: `${en ? 'Day' : 'Día'} ${world.time.day} · ${en ? 'Month' : 'Mes'} ${world.time.month} · ${en ? 'Year' : 'Año'} ${world.time.year} · ${String(world.time.hour).padStart(2, '0')}:${String(world.time.minute).padStart(2, '0')}`, details: `${en ? 'Season' : 'Estación'}: ${localizedSeason(world.time.season)}. ${en ? 'One real second advances one game minute. Decisions can also advance time.' : 'Un segundo real avanza un minuto del juego. Las decisiones también pueden avanzar el tiempo.'}` }]);
  addPanelSection(worldDashboard, panelLabel('places'), world.locations.map((place) => ({ title: place.name, details: `${place.description || (en ? 'Place discovered during the story.' : 'Lugar descubierto durante la historia.')} ${en ? 'Status' : 'Estado'}: ${place.discovered ? (en ? 'discovered' : 'descubierto') : (en ? 'unknown' : 'desconocido')}.` })));
  addPanelSection(worldDashboard, panelLabel('people'), world.characters.map((character) => ({ title: character.name, details: `${character.role || (en ? 'World character' : 'Persona del mundo')} · ${en ? 'trust' : 'confianza'}: ${character.trust || 0} · ${en ? 'memories' : 'recuerdos'}: ${(character.memories || []).length} · ${en ? 'goals' : 'objetivos'}: ${(character.goals || []).join(', ') || (en ? 'unknown' : 'por descubrir')}` })));
  addPanelSection(worldDashboard, panelLabel('factions'), world.factions.map((faction) => ({ title: faction.name, details: `${faction.description || (en ? 'World organization' : 'Organización del mundo')} · ${en ? 'reputation' : 'reputación'}: ${faction.reputation || 0} · ${en ? 'members' : 'miembros'}: ${(faction.members || []).join(', ') || (en ? 'none' : 'ninguno')} · ${en ? 'goals' : 'objetivos'}: ${(faction.goals || []).join(', ') || (en ? 'unknown' : 'por descubrir')}` })));
	addPanelSection(worldDashboard, panelLabel('quests'), world.quests.map((quest) => ({ title: `${quest.title} · ${localizedStatus(quest.status)}`, details: `${en ? 'Progress' : 'Progreso'}: ${quest.progress || 0}% · ${en ? 'steps' : 'pasos'}: ${(quest.steps || []).join(' → ')}` })));
  addPanelSection(worldDashboard, panelLabel('events'), world.events.filter((event) => event.status === 'pending').map((event) => ({ title: event.text, details: `${en ? 'Activates around day' : 'Se activa alrededor del día'} ${event.dueDay || event.day || world.time.day}. ${en ? 'Source' : 'Origen'}: ${event.source || (en ? 'world' : 'mundo')}.` })));
  addPanelSection(worldDashboard, panelLabel('news'), world.news.slice(0, 8).map((item) => ({ title: `${en ? 'Day' : 'Día'} ${item.day || '?'}`, details: item.text })));
  addPanelSection(worldDashboard, panelLabel('rules'), world.rules.map((rule) => ({ title: rule.title || (en ? 'Active rule' : 'Regla activa'), details: rule.text || rule.description || String(rule) })));
}

function renderSkillsPanel() {
  const save = readSave();
  const skills = Object.entries(save.player.skills || {});
  skillsDashboard.replaceChildren();
	const en = currentLanguage === 'en';
  addPanelSection(skillsDashboard, panelLabel('learned'), skills.map(([name, level]) => ({ title: name, details: `${en ? 'Level' : 'Nivel'} ${level} · ${'█'.repeat(Math.min(10, Number(level) || 0))}${'░'.repeat(Math.max(0, 10 - Math.min(10, Number(level) || 0)))} · ${en ? 'progress generated by your decisions.' : 'progreso generado por tus decisiones.'}` })));
  addPanelSection(skillsDashboard, panelLabel('upgrades'), skills.length ? skills.map(([name, level]) => ({ title: `${name}: ${en ? 'next level' : 'siguiente nivel'}`, details: `${en ? 'Keep taking related actions to reach level' : 'Continúa realizando acciones relacionadas para alcanzar el nivel'} ${Number(level) + 1}.` })) : [], en ? 'there are no skills yet; your decisions will discover them' : 'todavía no hay habilidades; tus decisiones las descubrirán');
}

function renderRelationsPanel() {
  const save = readSave();
  const en = currentLanguage === 'en';
	const relationships = Object.entries(save.player.relationships || {});
  const worldRelationships = (save.world.characters || []).filter((character) => character.relationships?.length).map((character) => [character.name, character.trust || 0]);
  const allRelationships = [...new Map([...relationships, ...worldRelationships].map(([name, level]) => [name, Math.max(Number(level) || 0, Number(save.player.relationships?.[name]) || 0)])).entries()];
  relationsDashboard.replaceChildren();
	addPanelSection(relationsDashboard, en ? 'RELATIONSHIPS' : 'RELACIONES', allRelationships.map(([name, level]) => ({
	title: name,
	details: `${en ? 'Bond level' : 'Nivel de vínculo'}: ${level}. ${en ? 'Social decisions and conversations can change it.' : 'Las decisiones sociales y conversaciones pueden modificarlo.'}`
  })), en ? 'no relationships recorded yet' : 'todavía no hay relaciones registradas');
}

function applyDecisionEffects(decision, savedPlayer, analysis = analyzeText(decision)) {
	if (!analysis.mutationAllowed || analysis.mutationConfidence < .48) return [];
	const text = normalizeWords(decision).join(' ');
  const has = (...words) => words.some((word) => text.includes(word));
  const effects = [];
  let money = Number(savedPlayer.money) || 0;
  let age = Number(savedPlayer.age) || 0;
  // Detect explicit age like "tengo 30 años" to avoid confusing it with money amounts.
	const exactAge = decision.match(/(?:edad(?: es| de)?|tengo|ahora tengo|pongo|mi edad es|age is|i am|i'm)\D{0,12}(\d{1,3})\s*(?:años|anos|año|years?\s*old)?/i);
  if (exactAge) {
		const requestedAge = Number(exactAge[1]);
		if (requestedAge >= age) {
			age = requestedAge;
			effects.push(`${currentLanguage === 'en' ? 'age' : 'edad'}: ${age}`);
		}
  }
  // Detect explicit money declarations like "ahora tengo 500 pesos" or "$500".
	const exactMoney = decision.match(/(?:tengo|ahora tengo|poseo|mi dinero es|i have|my money is|i own)\D{0,12}(\d{1,8})\s*(?:pesos|plata|dolares|dólares|dollars?|euros?|€|\$)/i);
  if (exactMoney) {
	money = Number(exactMoney[1]);
	 effects.push(`${currentLanguage === 'en' ? 'money' : 'dinero'}: ${money}`);
  }
	const newName = extractText(decision, ['me llamo', 'mi nombre es', 'cambio mi nombre a', 'my name is', 'call me', 'change my name to']);
	const newSurname = extractText(decision, ['mi apellido es', 'cambio mi apellido a', 'my surname is', 'my last name is']);
	const newLocation = extractContextualLocation(decision) || extractText(decision, ['me mudo a', 'vivo en', 'viajo a', 'mi nueva ubicacion es', 'mi nueva ubicación es', 'i move to', 'i live in', 'i travel to', 'my new location is']);
	const newHobby = extractText(decision, ['mi hobby es', 'mi nuevo hobby es', 'my hobby is']);
	if (newName) {
		savedPlayer.name = newName;
		effects.push(`${currentLanguage === 'en' ? 'name' : 'nombre'}: ${newName}`);
	}
	if (newSurname) {
		savedPlayer.surname = newSurname;
		effects.push(`${currentLanguage === 'en' ? 'surname' : 'apellido'}: ${newSurname}`);
	}
	if (newLocation) {
		savedPlayer.location = newLocation;
		effects.push(`${currentLanguage === 'en' ? 'location' : 'ubicación'}: ${newLocation}`);
	}
	if (newHobby) {
		savedPlayer.hobby = newHobby;
		effects.push(`hobby: ${newHobby}`);
	}
	const sellAction = /\b(vender|vendo|venta|vendi|vendí|sell|sold|sell off|cash out)\b/i.test(text);
	if (sellAction && savedPlayer.inventory?.length) {
	  const item = findInventoryItem(decision, savedPlayer.inventory) || savedPlayer.inventory[0];
	  const quantityMatch = text.match(/\b(\d+)\s+(?:unidades?|items?|objetos?|items?|x)\b/i);
	  const quantity = Math.min(item.quantity || 1, Math.max(1, Number(quantityMatch?.[1]) || 1));
	  let value = itemSaleValue(item) * quantity;
	  if (isMoneyRainActive()) value *= 10;
	  item.quantity = (item.quantity || 1) - quantity;
	  if (item.quantity <= 0) savedPlayer.inventory = savedPlayer.inventory.filter((entry) => entry !== item);
	  money += value;
	  effects.push(currentLanguage === 'en' ? `sold ${quantity} ${item.name || 'item'} for +${value} money${isMoneyRainActive() ? ' (RAIN x10!)' : ''}` : `vendiste ${quantity} ${item.name || 'objeto'} por +${value} dinero${isMoneyRainActive() ? ' (¡LLUVIA x10!)' : ''}`);
	}

	const detectedCareer = detectCareer(decision);
	const activeCareer = detectedCareer || careerById(savedPlayer.occupation);
	const isWorkAction = /(?:fui a|voy a|sali a|estoy|hice|cumpli|cumplí|trabaje|trabajé|labure|laburé|atendi|atendí|opere|operé|patrulle|patrullé|enseñe|enseñé|programe|programé)\s+(?:a\s+)?(?:trabajar|trabajo|laburo|laburar|guardia|turno|oficina|hospital|escuela|comisaria|comisaría|empresa|work|job|shift)|(?:\b(?:trabaj[eéoó]|trabajar|labur[eéoó]|laburar)\b)/i.test(text);
	if (isWorkAction && activeCareer && !hasNegation(decision)) {
	  let income = activeCareer?.income || 250;
	  if (isMoneyRainActive()) income *= 10;
	  money += income;
	  effects.push(currentLanguage === 'en' ? `+${income} money from ${activeCareer.names.en.toLowerCase()}${isMoneyRainActive() ? ' (RAIN x10!)' : ''}` : `+${income} dinero por trabajo (${activeCareer.names.es.toLowerCase()})${isMoneyRainActive() ? ' (¡LLUVIA x10!)' : ''}`);
	} else if (isWorkAction && !hasNegation(decision)) {
	  let income = 150;
	  if (isMoneyRainActive()) income *= 10;
	  money += income;
	  effects.push(currentLanguage === 'en' ? `+${income} money from labor${isMoneyRainActive() ? ' (RAIN x10!)' : ''}` : `+${income} dinero por trabajo ocasional${isMoneyRainActive() ? ' (¡LLUVIA x10!)' : ''}`);
	}

	const buyAction = /\b(?:compr(?:ar|é|e|o|amos|aron)|gast(?:ar|é|e|o|amos)|pag(?:ar|ué|ue|o|amos)|buy|bought|purchas(?:e|ed)|spent|spend|pay|paid)\b/i.test(text);
	const isQuestion = /[?¿]/.test(decision);
	if (buyAction && !isQuestion && !hasNegation(decision)) {
	  const amountMatch = decision.match(/(?:\$|€|usd|ars|pesos?|dólares?|dolares?)\s*(\d+)|(\d+)\s*(?:pesos?|dólares?|dolares?|\$|€)/i);
	  const requestedExpense = amountMatch ? Number(amountMatch[1] || amountMatch[2]) : 75;
	  const expense = Math.min(money, requestedExpense);
	  if (expense > 0) {
	    money = Math.max(0, money - expense);
	    effects.push(currentLanguage === 'en' ? `-${expense} money spent` : `-${expense} dinero por gasto`);
	  }
	}

	if (has('ahorrar', 'ahorro', 'guardar plata', 'guardar dinero', 'save money', 'saving') && !isQuestion) {
	  effects.push(currentLanguage === 'en' ? 'finances: disciplined savings' : 'finanzas: ahorro disciplinado');
	}

	// In-decision pet interactions
	const petPlayAction = /\b(juego con|jugar con|acaricio a|acariciar|mimar|play with|petting)\b/i.test(text) && /\b(perro|perra|gato|gata|mascota|cachorro|dog|cat|pet)\b/i.test(text);
	const petFeedAction = /\b(alimentar|alimento|le doy comida|dar de comer|feed|feeding)\b/i.test(text) && /\b(perro|perra|gato|gata|mascota|cachorro|dog|cat|pet)\b/i.test(text);
	const petVetAction = /\b(veterinari[ao]|vet|clinic)\b/i.test(text);
	if (petPlayAction && savedPlayer.familyTree?.pets?.length) {
	  const firstPet = savedPlayer.familyTree.pets[0];
	  firstPet.happiness = Math.min(100, (Number(firstPet.happiness) || 80) + 15);
	  firstPet.affection = Math.min(100, (Number(firstPet.affection) || 50) + 10);
	  effects.push(currentLanguage === 'en' ? `pet: ${firstPet.name} is joyful (+affection)` : `mascota: ${firstPet.name} está feliz (+cariño)`);
	}
	if (petFeedAction && savedPlayer.familyTree?.pets?.length) {
	  const firstPet = savedPlayer.familyTree.pets[0];
	  firstPet.hunger = Math.max(0, (Number(firstPet.hunger) || 20) - 30);
	  firstPet.health = Math.min(100, (Number(firstPet.health) || 100) + 5);
	  effects.push(currentLanguage === 'en' ? `pet: ${firstPet.name} fed` : `mascota: ${firstPet.name} alimentada`);
	}
	if (petVetAction && savedPlayer.familyTree?.pets?.length) {
	  const firstPet = savedPlayer.familyTree.pets[0];
	  firstPet.health = 100;
	  const cost = Math.min(money, 40);
	  money = Math.max(0, money - cost);
	  effects.push(currentLanguage === 'en' ? `pet: ${firstPet.name} treated by vet (-$${cost})` : `mascota: ${firstPet.name} atendida por el veterinario (-$${cost})`);
	}
	const growthVerb = /(?:crez?c(?:i|o|a|e|ere|eremos|ieron|iste)|cresk(?:i|o|e)|aument(?:e|o|ar|are)|sum(?:e|o|ar|are)|cumpl(?:i|o|e|ir|ire|iste)|pas(?:aron|o)|transcurr(?:io|ieron)|me hice mayor|me hago mayor|grow|grew|grown|grow up|increase|increased|increasing|add)/i;
	const incrementMatch = text.match(new RegExp(`${growthVerb.source}\\D{0,18}(\\d{1,3})\\s*(?:anos|ano|years?)?`, 'i'));
	const compactGrowth = /(?:creci|creski|aumente|sume|cumpli|pasaron|transcurrio|grow|grew|increase|add)\s*(?:en|by|de)?\s*(\d{1,3})\s*(?:anos|ano|years?)?/i.exec(text);
	const birthdayIncrement = /(?:creci(?: un| otro)? ano|creciste(?: un| otro)? ano|cumpli(?: un| otro)? ano|me hice mayor|me hago mayor|paso otro ano|pasaron los anos|transcurrio un ano|birthday|had my birthday|turned another year)/i.test(text);
	const growthMatch = incrementMatch || compactGrowth;
  const ageDelta = growthMatch ? Number(growthMatch[1]) : (birthdayIncrement ? (numberFromWords(text) || 1) : 0);
	const explicitAgeChange = Boolean(growthMatch || birthdayIncrement);
	if (!exactAge && explicitAgeChange && ageDelta > 0) {
	  age += ageDelta;
		effects.push(currentLanguage === 'en' ? `+${ageDelta} year${ageDelta === 1 ? '' : 's'}` : `+${ageDelta} año${ageDelta === 1 ? '' : 's'}`);
  }
	if (has('viaje', 'viajar', 'camino', 'aventura', 'travel', 'trip', 'adventure')) {
	  // Preserve any explicit location change detected earlier (newLocation).
	  // Do not overwrite an explicitly detected location with a generic travel label.
	  if (!newLocation) {
		savedPlayer.location = currentLanguage === 'en' ? 'On the road' : 'En camino';
		effects.push(`${currentLanguage === 'en' ? 'location' : 'ubicación'}: ${savedPlayer.location}`);
	  }
  } else if (has('mudanza', 'mudarse', 'ciudad', 'vivir', 'move', 'city', 'live')) {
	  if (!newLocation) {
		savedPlayer.location = currentLanguage === 'en' ? 'New city' : 'Nueva ciudad';
		effects.push(`${currentLanguage === 'en' ? 'location' : 'ubicación'}: ${savedPlayer.location}`);
	  }
  }

  const hobbies = [
	['música', 'musica'], ['fútbol', 'futbol'], ['videojuegos', 'juegos'],
	['dibujar', 'dibujo'], ['cocinar', 'cocina'], ['leer', 'lectura'],
	['deporte', 'deportes'], ['fotografía', 'fotografia']
  ];
	const inferredHobby = hobbies.find((hobby) => hobby.some((word) => text.includes(word)));
  if (inferredHobby && !newHobby) {
	savedPlayer.hobby = inferredHobby[0];
	effects.push(`hobby: ${inferredHobby[0]}`);
  }

	savedPlayer.money = money;
	savedPlayer.age = Math.max(Number(savedPlayer.age) || 0, age);
	applyNaturalNumericChanges(decision, savedPlayer, effects);
  return effects;
}

function applyNaturalNumericChanges(decision, playerState, effects) {
  const text = normalizeWords(decision).join(' ');
  const number = '(\\d+(?:[.,]\\d+)?)';
	const rules = [
	{ property: 'energy', words: ['energia', 'energy', 'cansancio', 'fatiga', 'energy'], up: ['recupero', 'recuperar', 'descanso', 'descansar', 'duermo', 'duerme', 'rest', 'recover'], down: ['pierdo', 'perdi', 'gasto', 'agoto', 'canso', 'fatiga', 'lose', 'spend', 'drain', 'tired'], label: ['energía', 'energy'] },
	{ property: 'health', words: ['salud', 'health', 'bienestar', 'wellbeing', 'wellness'], up: ['mejoro', 'mejorar', 'recupero', 'recuperar', 'sano', 'sanar', 'curo', 'curar', 'heal', 'recover', 'improve'], down: ['pierdo', 'empeora', 'empeorar', 'enfermo', 'daño', 'dano', 'hurt', 'harm', 'worsen', 'sick'], label: ['salud', 'health'] },
	{ property: 'reputation', words: ['reputacion', 'reputation', 'fama', 'respeto', 'respect'], up: ['gano', 'ganar', 'sube', 'aumento', 'mejoro', 'gain', 'increase', 'improve'], down: ['pierdo', 'baja', 'disminuye', 'pierde', 'lose', 'decrease', 'lower'], label: ['reputación', 'reputation'] },
	{ property: 'money', words: ['dinero', 'plata', 'pesos', 'money', 'cash'], up: ['gano', 'cobro', 'recibo', 'aumento', 'ingreso', 'earn', 'receive', 'increase'], down: ['pierdo', 'gasto', 'pago', 'compro', 'disminuye', 'lose', 'spend', 'pay', 'decrease'], label: ['dinero', 'money'] }
  ];
  rules.forEach((rule) => {
	if (!rule.words.some((word) => text.includes(word))) return;
	const declaration = new RegExp(`(?:tengo|ahora tengo|mi|mi actual|actualmente|i have|my|currently)\\D{0,12}(?:${rule.words.join('|')})?\\D{0,12}${number}`,'i').exec(text);
	if (declaration) {
	  const value = Math.max(0, Number(declaration[1].replace(',', '.')));
	  if (['energy', 'health'].includes(rule.property)) playerState[rule.property] = Math.min(100, value);
	  else playerState[rule.property] = value;
	  effects.push(`${currentLanguage === 'en' ? rule.label[1] : rule.label[0]}: ${playerState[rule.property]}`);
	  return;
	}
	const changePattern = new RegExp(`(?:${rule.up.join('|')}|${rule.down.join('|')})\\D{0,18}${number}`,'i');
	const change = changePattern.exec(text);
	if (!change) return;
	const isDown = rule.down.some((word) => change[0].includes(word));
	let amount = Number(change[1].replace(',', '.')) * (isDown ? -1 : 1);
	if (rule.property === 'money' && !isDown && amount > 0 && isMoneyRainActive()) {
	  amount *= 10;
	}
	const current = Number(playerState[rule.property]) || 0;
	playerState[rule.property] = Math.max(0, ['energy', 'health'].includes(rule.property) ? Math.min(100, current + amount) : current + amount);
	effects.push(`${currentLanguage === 'en' ? rule.label[1] : rule.label[0]}: ${amount > 0 ? '+' : ''}${amount}${rule.property === 'money' && !isDown && isMoneyRainActive() ? ' (x10!)' : ''}`);
  });
}

function extractNumber(text, triggers) {
  for (const trigger of triggers) {
	const index = text.indexOf(trigger);
	if (index < 0) continue;
	const match = text.slice(index + trigger.length).match(/\D*(\d+)/);
	if (match) return Number(match[1]);
  }
  return 0;
}

function extractText(original, triggers) {
  const normalized = normalizeWords(original).join(' ');
  for (const trigger of triggers) {
	const cleanTrigger = normalizeWords(trigger).join(' ');
	const index = normalized.indexOf(cleanTrigger);
	if (index < 0) continue;
	const value = normalized.slice(index + cleanTrigger.length).replace(/^(es|a|de|:)+\s*/, '').trim();
	if (value) return value.split(/[,.;!?]|\s+y\s+/)[0].trim();
  }
  return '';
}

function readSave() {
	const emptySave = { player: {}, chapters: [], memory: createEmptyMemory(), world: createEmptyWorld() };
	return normalizeSave(window.__lifeSave || emptySave);
}

function chooseLocal(options) {
  return options[Math.floor(Math.random() * options.length)];
}

function generateFreeLocalResponse(message, memory, analysis, context, effects = []) {
  const en = currentLanguage === 'en';
  const topic = analysis.context?.topic || strongestTopic(memory.topics);
  const recent = context[0]?.text || analysis.context?.recentText || '';
  const goal = memory.goals.find((item) => item.status === 'active');
  const subject = analysis.context?.subject === 'other' ? (en ? 'That person' : 'Esa persona') : (en ? 'Your story' : 'Tu historia');
  const options = en ? {
	unknown: ['I am following the direction of your thought.', 'That opens more than one possible reading.', 'I do not want to reduce what you said to a single automatic answer.'],
	age: ['Another year changes the frame around your choices.', 'Growing older adds memories, limits and possibilities to the story.', 'Time moves forward, and your character has to decide what this new stage means.'],
	work: ['A work-related path appears, but its value depends on what you want from it.', 'This connects your resources with a decision about effort, stability or ambition.', 'The situation suggests a practical opportunity with consequences beyond money.'],
	learning: ['This can become a skill if you turn the intention into repeated practice.', 'Knowledge is beginning to connect with a concrete direction in your life.', 'The next useful step is not necessarily bigger; it is clearer and repeatable.'],
	travel: ['A change of place also changes what can happen next.', 'The road creates uncertainty, but it gives your story new variables to work with.', 'Exploration is becoming part of the way your character understands the world.'],
	social: ['Another person changes the meaning of the situation, not just the event itself.', 'This decision creates a social thread that can strengthen or become complicated later.', 'Relationships here are being shaped by trust, timing and what remains unsaid.'],
	health: ['Your body is becoming part of the decision instead of just the background.', 'This has a physical cost or benefit that may influence the next chapter.', 'Energy and wellbeing can change what choices are realistically available.'],
	money: ['The decision changes your resources, but also what those resources make possible.', 'Money is acting as a tool, a limit or a source of pressure in this situation.', 'This choice gives your economy a new direction rather than only changing a number.'],
	emotion: ['The emotional state is information about the situation, not the entire conclusion.', 'What you feel can influence the next choice without deciding it for you.', 'This emotion gives the scene a different tone and may change how others respond.'],
	planning: ['There is a direction here, even if the first step is still undefined.', 'The idea becomes more useful when it is turned into a sequence of small decisions.', 'A goal is starting to organize the possibilities around you.']
  } : {
	unknown: ['Estoy siguiendo la dirección de lo que estás pensando.', 'Lo que dices admite más de una lectura posible.', 'No quiero reducir lo que contaste a una respuesta automática única.'],
	age: ['Un año más cambia el marco de las decisiones que puedes tomar.', 'Crecer suma recuerdos, límites y posibilidades nuevas a la historia.', 'El tiempo avanza y tu personaje debe decidir qué significa esta nueva etapa.'],
	work: ['Aparece un camino laboral, pero su valor depende de lo que buscas en él.', 'Esto conecta tus recursos con una decisión sobre esfuerzo, estabilidad o ambición.', 'La situación sugiere una oportunidad práctica con consecuencias que van más allá del dinero.'],
	learning: ['Esto puede convertirse en una habilidad si transformas la intención en práctica repetida.', 'El conocimiento empieza a conectarse con una dirección concreta de tu vida.', 'El siguiente paso útil no tiene que ser más grande, sino más claro y repetible.'],
	travel: ['Cambiar de lugar también cambia lo que puede suceder después.', 'El camino introduce incertidumbre, pero aporta variables nuevas a tu historia.', 'Explorar empieza a formar parte de la manera en que tu personaje entiende el mundo.'],
	social: ['Otra persona cambia el significado de la situación, no solo el acontecimiento.', 'Esta decisión crea un hilo social que después puede fortalecerse o complicarse.', 'Las relaciones se están formando mediante confianza, tiempo y cosas que todavía no se dicen.'],
	health: ['Tu cuerpo empieza a formar parte de la decisión, en vez de ser solo el fondo.', 'Esto tiene un coste o beneficio físico que puede influir en el próximo capítulo.', 'La energía y el bienestar pueden cambiar qué opciones están realmente disponibles.'],
	money: ['La decisión cambia tus recursos, pero también lo que esos recursos permiten hacer.', 'El dinero actúa aquí como herramienta, límite o fuente de presión.', 'Esta elección le da una nueva dirección a tu economía, no solo cambia una cifra.'],
	emotion: ['El estado emocional aporta información, pero no es toda la conclusión.', 'Lo que sientes puede influir en la próxima decisión sin decidir por ti.', 'Esta emoción cambia el tono de la escena y puede modificar cómo responden los demás.'],
	planning: ['Aquí hay una dirección, aunque el primer paso todavía no esté definido.', 'La idea se vuelve más útil cuando se transforma en una secuencia de decisiones pequeñas.', 'Un objetivo empieza a ordenar las posibilidades que tienes alrededor.']
  };
  const base = chooseLocal(options[analysis.intent] || options[topic] || options.unknown);
  const memoryLine = recent && Math.random() > .35
	? (en ? ` I connect this with what you recently said: “${recent.slice(0, 160)}”.` : ` Lo conecto con algo que dijiste hace poco: «${recent.slice(0, 160)}».`)
	: '';
  const goalLine = goal && Math.random() > .45
	? (en ? ` Your active goal is “${goal.text}” at ${goal.progress}%.` : ` Tu objetivo activo es «${goal.text}» y está al ${goal.progress}%.`)
	: '';
  const ambiguityLine = analysis.needsClarification && analysis.ambiguity?.length
	? (en ? ` I can read this as ${analysis.intent} or ${analysis.ambiguity[0][0]}; which meaning is closer?` : ` Puedo leerlo como ${analysis.intent} o como ${analysis.ambiguity[0][0]}; ¿cuál de esas ideas se acerca más?`)
	: '';
  const effectLine = effects.length ? (en ? ` The local simulation applied: ${effects.join(', ')}.` : ` La simulación local aplicó: ${effects.join(', ')}.`) : '';
  return `${subject}: ${base}${memoryLine}${goalLine}${ambiguityLine}${effectLine}`;
}

function learnFrom(decision, memory) {
  const words = normalizeWords(decision);
  words.forEach((word) => {
	memory.wordCounts[word] = (memory.wordCounts[word] || 0) + 1;
  });

  const topicWords = {
	trabajo: ['trabajo', 'trabajar', 'oficina', 'jefe', 'dinero', 'sueldo', 'negocio', 'work', 'job', 'office', 'boss', 'money', 'salary', 'business'],
	viaje: ['viaje', 'viajar', 'viajo', 'camino', 'ciudad', 'aventura', 'conocer', 'travel', 'trip', 'road', 'city', 'adventure', 'meet'],
	relaciones: ['amigo', 'amigos', 'familia', 'amor', 'pareja', 'ayudar', 'conversar', 'friend', 'friends', 'family', 'love', 'partner', 'help', 'talk'],
	aprendizaje: ['estudiar', 'estudio', 'aprender', 'curso', 'escuela', 'leer', 'practicar', 'study', 'learn', 'course', 'school', 'read', 'practice'],
	riesgo: ['riesgo', 'peligro', 'decidir', 'decision', 'arriesgar', 'valiente', 'risk', 'danger', 'decide', 'decision', 'brave'],
	hogar: ['casa', 'hogar', 'habitacion', 'dormir', 'descansar', 'comida', 'house', 'home', 'room', 'sleep', 'rest', 'food']
  };

  Object.entries(topicWords).forEach(([topic, keywords]) => {
	const matches = words.filter((word) => keywords.includes(word)).length;
	if (matches) memory.topics[topic] = (memory.topics[topic] || 0) + matches;
  });

  memory.choices.push(...words.slice(0, 12));
  memory.choices = memory.choices.slice(-80);
  memory.recentInputs = memory.recentInputs || [];
	memory.recentInputs.push({ text: decision.slice(0, 240), lang: currentLanguage, date: new Date().toISOString() });
  memory.recentInputs = memory.recentInputs.slice(-30);

  const toneWords = {
	positive: ['feliz', 'alegre', 'amor', 'éxito', 'exito', 'logro', 'contento', 'genial', 'happy', 'love', 'success', 'achievement', 'great'],
	negative: ['triste', 'miedo', 'ansiedad', 'problema', 'fracaso', 'solo', 'dolor', 'sad', 'fear', 'anxiety', 'problem', 'failure', 'alone', 'pain'],
	neutral: ['decido', 'quiero', 'plan', 'mañana', 'manana', 'decide', 'want', 'plan', 'tomorrow']
  };
  memory.sentiment = memory.sentiment || {};
	normalizeCodeMemory(memory);
  Object.entries(toneWords).forEach(([tone, keywords]) => {
	  const matches = words.filter((word) => keywords.includes(word)).length;
	  if (matches) memory.sentiment[tone] = (memory.sentiment[tone] || 0) + matches;
  });
	const factMatch = decision.match(/(?:recuerda que|acuérdate de que|acordate de que|mi dato es|remember that|keep in mind that|my fact is)\s+(.+)/i);
	if (factMatch) {
	  memory.facts.push({ text: factMatch[1].trim(), lang: currentLanguage, date: new Date().toISOString(), importance: 2 });
	  memory.facts = memory.facts.slice(-300);
	}
	const ruleMatch = decision.match(/(?:la regla es|a partir de ahora|en este mundo|the rule is|from now on|in this world)\s*[:,-]?\s*(.+)/i);
	if (ruleMatch) {
	  const rule = ruleMatch[1].trim();
	  if (!memory.customRules.some((entry) => (entry.text || entry) === rule)) memory.customRules.push({ text: rule, lang: currentLanguage, date: new Date().toISOString() });
	  memory.customRules = memory.customRules.slice(-100);
	}
}

function learnKnowledgeText(source, memory, sourceName = 'knowledge.txt') {
  normalizeMemory(memory);
  const lines = source.replace(/\r/g, '').split(/\n+/).map((line) => line.trim()).filter((line) => line.length >= 12);
  const language = getTextLanguage(source);
  const now = new Date().toISOString();
  let learned = 0;
  lines.slice(0, 1000).forEach((line) => {
	const text = line.replace(/^[-*#\d.)\s]+/, '').trim().slice(0, 500);
	if (!text) return;
	const entry = { text, lang: language, source: sourceName, date: now, importance: 1.5 };
	if (!memory.notes.some((item) => (item.text || item) === text)) {
	  memory.notes.push(entry);
	  learned += 1;
	}
	learnFrom(text, memory);
	const fact = text.match(/^(?:fact|hecho|remember|recuerda)\s*[:\-]\s*(.+)$/i);
	if (fact && !memory.facts.some((item) => item.text === fact[1].trim())) memory.facts.push({ text: fact[1].trim(), lang: language, source: sourceName, date: now, importance: 2 });
	const rule = text.match(/^(?:rule|regla)\s*[:\-]\s*(.+)$/i);
	if (rule && !memory.customRules.some((item) => (item.text || item) === rule[1].trim())) memory.customRules.push({ text: rule[1].trim(), lang: language, source: sourceName, date: now });
  });
  memory.notes = memory.notes.slice(-500);
  memory.facts = memory.facts.slice(-300);
  memory.customRules = memory.customRules.slice(-100);
  memory.updatedAt = now;
  return learned;
}

const normalizeWordsCache = new Map();
function normalizeWords(text) {
  const key = String(text || '');
  if (normalizeWordsCache.has(key)) return normalizeWordsCache.get(key);
  const normalized = key.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const aliases = {
	cresko: 'crezco', cresi: 'creci', kiero: 'quiero', qiero: 'quiero', keria: 'queria',
	ai: 'ahi', anio: 'ano', anyo: 'ano', enerjia: 'energia', reputasion: 'reputacion',
	felis: 'feliz', travajo: 'trabajo', bibo: 'vivo', bivi: 'vivi', laburo: 'trabajo',
	trabajando: 'trabajar', estudiando: 'estudiar', viajando: 'viajar', comprando: 'comprar',
	durmiendo: 'dormir', descansando: 'descansar', haciendo: 'hacer', diciendo: 'decir',
	quiero: 'quiero', quisiera: 'quiero'
  };
  const result = (normalized.match(/[a-z0-9]+/g) || []).map((word) => commonWordAliases[word] || aliases[word] || word);
  if (normalizeWordsCache.size > 1500) {
    const firstKey = normalizeWordsCache.keys().next().value;
    normalizeWordsCache.delete(firstKey);
  }
  normalizeWordsCache.set(key, result);
  return result;
}

function numberFromWords(text) {
  const values = { cero: 0, zero: 0, uno: 1, una: 1, un: 1, one: 1, dos: 2, two: 2, tres: 3, three: 3, cuatro: 4, four: 4, cinco: 5, five: 5, seis: 6, six: 6, siete: 7, seven: 7, ocho: 8, eight: 8, nueve: 9, nine: 9, diez: 10, ten: 10, veinte: 20, twenty: 20, cien: 100, hundred: 100 };
  const match = normalizeWords(text).find((word) => Object.prototype.hasOwnProperty.call(values, word));
  return match === undefined ? null : values[match];
}

function hasNegation(text) {
  return /\b(?:no|nunca|jamas|sin|not|never|don't|dont|didn't|didnt|can't|cant)\b/i.test(normalizeWords(text).join(' '));
}

function strongestTopic(topics) {
  return Object.entries(topics).sort((a, b) => b[1] - a[1])[0]?.[0] || 'aventura';
}

function generateFreeNarrative(decision, memory, effects = []) {
  const en = currentLanguage === 'en';
  const analysis = analyzeText(decision, memory);
  const context = analysis.context || inferLocalContext(decision, memory);
  const subject = context.subject === 'other' ? (en ? 'Someone close to you' : 'Alguien cercano a ti') : (en ? 'Your character' : 'Tu personaje');
  const fragments = en ? {
	unknown: ['takes the decision seriously and leaves room for the next detail to define what happens', 'notices that this moment can lead in several directions', 'moves forward without knowing every consequence, but with a clearer sense of what matters'],
	change_age: ['enters a new stage and starts comparing the person they were with the person they are becoming', 'feels time moving through memories, responsibilities and new possibilities', 'understands that growing older changes priorities even when the outside world looks the same'],
	work: ['tests a practical opportunity and discovers that stability also asks for choices', 'opens a path connected to effort, money and the kind of future they want', 'meets a decision that can improve resources but consume time and energy'],
	learn: ['turns curiosity into a first practice session and discovers a small pattern worth following', 'connects a new idea with an older interest and begins building a skill', 'accepts that progress will come from repetition rather than one perfect attempt'],
	travel: ['changes direction and lets the unknown introduce new places and people', 'moves toward a different horizon, carrying questions that have not been answered yet', 'finds that leaving the familiar also changes how every later choice is interpreted'],
	social: ['opens a conversation where trust can grow, weaken or reveal something unexpected', 'shares a moment with another person and creates a relationship that can evolve', 'realizes that the next part of the story depends partly on what remains unsaid'],
	health: ['pays attention to the body and learns that energy changes the range of possible choices', 'adjusts the rhythm of the day to protect strength and wellbeing', 'discovers a physical consequence that will influence the next decision'],
	planning: ['turns an intention into a direction and identifies a possible first step', 'looks at the future as a sequence of choices instead of a single distant result', 'begins organizing resources, time and motivation around a goal']
  } : {
	unknown: ['toma la decisión en serio y deja que el siguiente detalle defina lo que ocurre', 'nota que este momento puede llevar a varios caminos', 'avanza sin conocer todas las consecuencias, pero con una idea más clara de lo que importa'],
	change_age: ['entra en una nueva etapa y compara quién era con la persona en la que se está convirtiendo', 'siente cómo el tiempo atraviesa recuerdos, responsabilidades y posibilidades nuevas', 'entiende que crecer cambia las prioridades aunque el mundo exterior parezca igual'],
	work: ['prueba una oportunidad práctica y descubre que la estabilidad también exige decisiones', 'abre un camino relacionado con esfuerzo, dinero y el futuro que quiere construir', 'se encuentra con una decisión que puede mejorar sus recursos, pero consumir tiempo y energía'],
	learn: ['transforma la curiosidad en una primera práctica y descubre un patrón pequeño que vale la pena seguir', 'conecta una idea nueva con un interés anterior y empieza a construir una habilidad', 'acepta que progresar dependerá de repetir, no de acertar una sola vez'],
	travel: ['cambia de dirección y permite que lo desconocido introduzca lugares y personas nuevas', 'avanza hacia otro horizonte con preguntas que todavía no tienen respuesta', 'descubre que alejarse de lo conocido cambia la forma de interpretar cada decisión posterior'],
	social: ['abre una conversación donde la confianza puede crecer, debilitarse o revelar algo inesperado', 'comparte un momento con otra persona y crea una relación que todavía puede evolucionar', 'entiende que la siguiente parte de la historia depende también de lo que queda sin decir'],
	health: ['presta atención al cuerpo y descubre que la energía cambia el margen de decisiones posibles', 'ajusta el ritmo del día para proteger su fuerza y bienestar', 'descubre una consecuencia física que influirá en la próxima decisión'],
	planning: ['transforma una intención en una dirección e identifica un primer paso posible', 'mira el futuro como una secuencia de elecciones en vez de un único resultado lejano', 'empieza a organizar recursos, tiempo y motivación alrededor de un objetivo']
  };
  const selected = chooseLocal(fragments[analysis.intent] || fragments[context.topic] || fragments.unknown);
  const contextLine = context.referencesPrevious && context.recentText
	? (en ? ` This continues the thread of “${context.recentText.slice(0, 100)}”.` : ` Esto continúa el hilo de «${context.recentText.slice(0, 100)}».`)
	: '';
  const effectLine = effects.length ? (en ? ` The immediate effects are ${effects.join(', ')}.` : ` Los efectos inmediatos son ${effects.join(', ')}.`) : '';
  return `${subject} ${selected}.${contextLine}${effectLine}`;
}

function generateContinuation(decision, memory, effects = []) {
	const generated = generateFreeNarrative(decision, memory, effects);
  if (generated) return generated;
  const text = decision.toLowerCase();
	const en = currentLanguage === 'en';
	const topic = strongestTopic(memory.topics);
  const learnedWords = Object.entries(memory.wordCounts)
	.sort((a, b) => b[1] - a[1])
	.filter(([word]) => word.length > 4 && !['quiero', 'hacer', 'tengo', 'desde', 'porque'].includes(word))
	.slice(0, 3)
	.map(([word]) => word);
  let response;

	if (/(?:creci|crecer|cumpli|me hice mayor|me hago mayor|pasaron los anos|transcurrio un ano|grow older|grew older|another year)/.test(text)) {
  response = en ? 'Another year becomes part of your life. You notice how your priorities, memories and possibilities change as you grow older.' : 'Un año más pasa a formar parte de tu vida. Notas cómo cambian tus prioridades, tus recuerdos y las posibilidades que tienes al crecer.';
  } else if (text.includes('trabajo') || text.includes('trabajar') || text.includes('work') || text.includes('job')) {
  response = en ? 'Your character decides to pursue a new work opportunity. They leave early, nervous but certain this could become the first major change in their life.' : 'Tu personaje decide buscar una oportunidad de trabajo. Sale temprano, con algo de nervios, pero también con la sensación de que este puede ser el primer gran cambio de su vida.';
  } else if (text.includes('viaj') || text.includes('viaje') || text.includes('travel') || text.includes('trip')) {
  response = en ? 'You pack lightly and choose an unknown destination. The road is uncertain, but every mile opens a new possibility.' : 'Preparas una pequeña mochila y eliges un destino desconocido. El camino no promete ser fácil, pero cada kilómetro abre una posibilidad nueva.';
	  } else if (text.includes('estudi') || text.includes('aprender') || text.includes('study') || text.includes('learn')) {
	  response = en ? 'You find a quiet place to study and begin building a new skill. Progress is slow, but each day reveals something new.' : 'Encuentras un lugar tranquilo para estudiar y empiezas a construir una nueva habilidad. El progreso es lento, aunque cada día entiendes un poco más.';
	  } else if (text.includes('amigo') || text.includes('familia') || text.includes('friend') || text.includes('family') || text.includes('conoc')) {
	 response = en ? 'You meet someone who may become an important part of your story. A sincere conversation creates the first thread of a new relationship.' : 'Conoces a alguien que puede convertirse en una parte importante de tu historia. Una conversación sincera crea el primer hilo de una nueva relación.';
  } else if (text.includes('compr') || text.includes('dinero')) {
	  response = en ? 'You review your resources before making the decision. It is a small expense, but it could become an important investment in your future.' : 'Revisas tus recursos antes de tomar la decisión. Es un pequeño gasto, pero podría convertirse en una inversión importante para tu futuro.';
	} else {
	const memoryHint = learnedWords.length ? (en ? ` LIFE.AI remembers that you often think about ${learnedWords.join(', ')}.` : ` La IA recuerda que sueles pensar en ${learnedWords.join(', ')}.`) : '';
	response = en ? `"${decision}". Your story moves along the path of ${topic}. This choice changes the next chapter and opens a possibility that did not exist before.${memoryHint}` : `"${decision}". Tu historia avanza por el camino de ${topic}. Esta elección cambia el siguiente capítulo y abre una posibilidad que antes no existía.${memoryHint}`;
  }

	if (effects.length) response += en ? ` Applied changes: ${effects.join(', ')}.` : ` Cambios aplicados: ${effects.join(', ')}.`;
  return response;
}

function renderHistory(chapters) {
  historyList.replaceChildren();
	if (!chapters.length) {
	const empty = document.createElement('p');
	empty.textContent = t('emptyHistory');
	historyList.append(empty);
	return;
  }

  chapters.forEach((chapter, index) => {
	const item = document.createElement('article');
	item.className = 'history-item';
	const number = document.createElement('span');
	number.className = 'history-number';
	number.textContent = `#${String(index + 1).padStart(2, '0')}`;
	const decision = document.createElement('p');
	decision.textContent = `${t('you')}: ${chapter.decision}`;
	const continuation = document.createElement('p');
	continuation.textContent = `${t('ai')}: ${chapter.continuation}`;
	item.append(number, decision, continuation);
	historyList.append(item);
  });
}
