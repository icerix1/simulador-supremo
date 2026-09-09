const startButton = document.querySelector('#startButton');
const welcomeScreen = document.querySelector('#welcomeScreen');
const questionScreen = document.querySelector('#questionScreen');
const statsScreen = document.querySelector('#statsScreen');
const statsButton = document.querySelector('#statsButton');
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
const chatButton = document.querySelector('#chatButton');
const chatScreen = document.querySelector('#chatScreen');
const closeChatButton = document.querySelector('#closeChatButton');
const chatForm = document.querySelector('#chatForm');
const chatInput = document.querySelector('#chatInput');
const chatMessages = document.querySelector('#chatMessages');
const analysisDetails = document.querySelector('#analysisDetails');
const predictionDetails = document.querySelector('#predictionDetails');
const languageSelect = document.querySelector('#languageSelect');
const welcomeNavigation = document.querySelector('#welcomeNavigation');
const playNavButton = document.querySelector('#playNavButton');
const blogButton = document.querySelector('#blogButton');
const blogScreen = document.querySelector('#blogScreen');
const closeBlogButton = document.querySelector('#closeBlogButton');
const discordLink = document.querySelector('#discordLink');
const weatherIndicator = document.querySelector('#weatherIndicator');
const weatherOverlay = document.querySelector('#weatherOverlay');
const seasonIndicator = document.querySelector('#seasonIndicator');
const seasonEffects = document.querySelector('#seasonEffects');
const gameOverScreen = document.querySelector('#gameOverScreen');
const gameOverTitle = document.querySelector('#gameOverTitle');
const gameOverText = document.querySelector('#gameOverText');
const gameOverStats = document.querySelector('#gameOverStats');
const gameOverNewLifeButton = document.querySelector('#gameOverNewLifeButton');
const closeGameOverButton = document.querySelector('#closeGameOverButton');
const supabaseStatus = document.querySelector('#supabaseStatus');
const usernameStatus = document.querySelector('#usernameStatus');
const activePlayersIndicator = document.querySelector('#activePlayersIndicator');
const usernameScreen = document.querySelector('#usernameScreen');
const usernameForm = document.querySelector('#usernameForm');
const usernameTitle = document.querySelector('#usernameTitle');
const usernameIntro = document.querySelector('#usernameIntro');
const usernameLabel = document.querySelector('#usernameLabel');
const usernameInput = document.querySelector('#usernameInput');
const usernameSubmit = document.querySelector('#usernameSubmit');
const usernameHint = document.querySelector('#usernameHint');

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
  const treatment = /medico|médico|doctor|hospital|medicina|medication|medicine|tratamiento|treatment|curar|heal|descansar|rest/.test(text);
  const risky = /riesgo|peligro|accidente|atropello|atropellar|caida|caída|choque|enfermo|enfermedad|risk|danger|accident|hit by a car|car crash|ill|illness/.test(text);
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
  const age = Number(playerState.age) || 0;
  diseaseCatalog.forEach((definition) => {
	const chance = definition.onsetChance + (age > 60 ? .002 : 0) + (risky && definition.risks.some((risk) => text.includes(risk)) ? .012 : 0);
	if (Math.random() < chance) {
	  if (addDisease(playerState, definition, false)) effects.push(currentLanguage === 'en' ? `new condition: ${definition.names.en}` : `nueva enfermedad: ${definition.names.es}`);
	}
  });
  const fatal = diseases.find((entry) => entry.fatalRisk && entry.active);
  return fatal ? (currentLanguage === 'en' ? `A sudden complication of ${diseaseLabel(fatal)} ended your life.` : `Una complicación súbita de ${diseaseLabel(fatal)} terminó con tu vida.`) : '';
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
  } else {
	resetWeatherVisuals();
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
	  for (let index = 0; index < 16; index += 1) {
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

function normalizeCareerAlias(value) {
  return String(value || '')
	.toLowerCase()
	.normalize('NFD')
	.replace(/[\u0300-\u036f]/g, '')
	.replace(/[^a-z0-9]+/g, ' ')
	.trim();
}

function extractContextualLocation(text) {
  const source = String(text || '').trim();
  const patterns = [
	/\b(?:voy|vamos|fui|llego|llegue|llegué|viajo|viaje|me mudo|me mudé|me mude|estoy|estaba|me encuentro|me encontré|me encontre|permanezco|quedo)\s+(?:a|al|en|hacia|por)\s+(.+?)(?=[,.!?;]|$)/i,
	/\b(?:go|went|arrive|arrived|travel|traveled|move|moved|i am|i'm|i was|i find myself|i found myself|stay|staying)\s+(?:to|at|in|near)\s+(.+?)(?=[,.!?;]|$)/i,
	/\b(?:mi ubicaci[oó]n es|ahora estoy en|ahora me encuentro en|my location is|i am currently in)\s+(.+?)(?=[,.!?;]|$)/i
  ];
  for (const pattern of patterns) {
	const match = source.match(pattern);
	if (!match) continue;
	const value = match[1]
	  .replace(/^(?:el|la|los|las|un|una|a|the|a|an)\s+/i, '')
	  .replace(/\s+(?:y|and)\s+(?:encuentro|veo|conozco|find|see|meet)\b.*$/i, '')
	  .trim();
	if (value) return value;
  }
  return '';
}

function detectFoundItem(text) {
  const normalized = normalizeCareerAlias(text);
  if (!/(encontre|encontrar|hall[eé]|recogi|recoger|found|find|picked up|pick up|discover)/.test(normalized)) return null;
  return itemAliases.find(({ alias }) => normalized.includes(alias))?.item || null;
}

function itemFindProbability(item, location) {
  const profile = detectPlaceProfile(location);
  return item.places[profile.id] ?? item.base;
}

function addFoundItem(playerState, item, location) {
  playerState.inventory = Array.isArray(playerState.inventory) ? playerState.inventory : [];
  const existing = playerState.inventory.find((entry) => entry.id === item.id);
  if (existing) existing.quantity = (existing.quantity || 0) + 1;
  else playerState.inventory.push({ id: item.id, name: item.names.es, quantity: 1, location, discoveredAt: new Date().toISOString() });
  return existing || playerState.inventory[playerState.inventory.length - 1];
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
  { id: 'stick', names: { es: 'palo', en: 'stick' }, aliases: ['palo', 'rama', 'ramita', 'stick', 'branch'], places: { outdoors: 0.85, forest: 0.98, park: 0.8, hospital: 0.04, city: 0.25 }, base: 0.55 },
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
  const save = readSave();
  const career = careerById(save.player?.occupation);
  if (!currentOccupation) return;
  // Keep the bottom occupation indicator visible while a life is active,
  // even if the player's name hasn't been set yet. Preserve localization for the label.
	const hideIndicator = save.lifeStatus !== 'active' || storyScreen?.classList.contains('hidden');
  currentOccupation.classList.toggle('hidden', hideIndicator);
	const age = Number(save.player?.age) || 0;
	const characterName = save.player?.name || t('none');
  currentOccupation.textContent = currentLanguage === 'en'
	? `CHARACTER: ${characterName} · AGE: ${age} · JOB: ${careerLabel(career)}`
	: `PERSONAJE: ${characterName} · EDAD: ${age} · TRABAJO: ${careerLabel(career)}`;
}

function renderCareersPanel() {
  if (!careersDashboard) return;
  careersDashboard.replaceChildren();
  const current = careerById(readSave().player?.occupation);
	const card = document.createElement('article');
  card.className = 'career-card active-career';
  const title = document.createElement('h3');
	title.textContent = current ? current.names[currentLanguage] : (currentLanguage === 'en' ? 'No job assigned' : 'Ningún trabajo asignado');
  const details = document.createElement('p');
	  details.textContent = current
	? (currentLanguage === 'en' ? `${careerFamilyLabel(current)} · income: +${current.income} · energy: -${current.energy}` : `${careerFamilyLabel(current)} · ingreso: +${current.income} · energía: -${current.energy}`)
	: (currentLanguage === 'en' ? 'Your character does not have a profession yet.' : 'Tu personaje todavía no tiene una profesión.');
  card.append(title, details);
  careersDashboard.append(card);
}

function renderFamilyPanel() {
  if (!familyDashboard) return;
  const family = readSave().player?.familyTree;
  familyDashboard.replaceChildren();
  if (!family?.members?.length) return;
  const grouped = new Map();
	family.members.forEach((member) => {
	const group = member.relation.startsWith('paternal') || member.relation === 'cousin' ? (currentLanguage === 'en' ? 'Paternal family' : 'Familia paterna') : member.relation.startsWith('maternal') || member.relation === 'maternalCousin' ? (currentLanguage === 'en' ? 'Maternal family' : 'Familia materna') : (currentLanguage === 'en' ? 'Close family' : 'Familia cercana');
	if (!grouped.has(group)) grouped.set(group, []);
	grouped.get(group).push(member);
  });
  grouped.forEach((members, group) => {
	const section = document.createElement('section');
	section.className = 'family-group';
	const heading = document.createElement('h3');
	heading.textContent = `[ ${group} ]`;
	section.append(heading);
	members.forEach((member) => {
	  const entry = document.createElement('p');
	  const relationLabels = currentLanguage === 'en' ? { father: 'father', mother: 'mother', paternalGrandfather: 'paternal grandfather', paternalGrandmother: 'paternal grandmother', maternalGrandfather: 'maternal grandfather', maternalGrandmother: 'maternal grandmother', sibling: 'sibling', cousin: 'cousin', maternalCousin: 'maternal cousin' } : { father: 'padre', mother: 'madre', paternalGrandfather: 'abuelo paterno', paternalGrandmother: 'abuela paterna', maternalGrandfather: 'abuelo materno', maternalGrandmother: 'abuela materna', sibling: 'hermano/a', cousin: 'primo/a', maternalCousin: 'primo/a materno/a' };
	  entry.textContent = `${member.name} ${member.surname} — ${relationLabels[member.relation] || member.relation}`;
	  section.append(entry);
	});
	familyDashboard.append(section);
  });
}

function renderInventoryPanel() {
  if (!inventoryDashboard) return;
  inventoryDashboard.replaceChildren();
  const inventory = readSave().player?.inventory || [];
  if (!inventory.length) {
	const empty = document.createElement('p');
	empty.textContent = currentLanguage === 'en' ? '// inventory is empty' : '// el inventario está vacío';
	inventoryDashboard.append(empty);
	return;
  }
  inventory.forEach((entry) => {
	const item = itemCatalog.find((candidate) => candidate.id === entry.id);
	const card = document.createElement('article');
	card.className = 'inventory-card';
	const title = document.createElement('h3');
	title.textContent = `${item?.names[currentLanguage] || entry.name} x${entry.quantity}`;
	const details = document.createElement('p');
	details.textContent = currentLanguage === 'en' ? `Found at: ${entry.location || 'unknown place'}` : `Encontrado en: ${entry.location || 'lugar desconocido'}`;
	card.append(title, details);
	inventoryDashboard.append(card);
  });
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

function localizedPersonality(personality) {
  const labels = {
	serio: { es: 'serio', en: 'serious' },
	aventurero: { es: 'aventurero', en: 'adventurous' },
	sarcastico: { es: 'sarcástico', en: 'sarcastic' },
	profesor: { es: 'profesor', en: 'teacher' },
	narrador: { es: 'narrador', en: 'narrator' }
  };
  return labels[personality]?.[currentLanguage] || personality;
}

const player = {};
let currentQuestion = 0;
let lastAnalysis = null;
let currentLanguage = 'en';
try { currentLanguage = localStorage.getItem('lifeLanguage') === 'es' ? 'es' : 'en'; } catch { /* default language */ }
window.currentLanguage = currentLanguage;
let currentUsername = '';
try { currentUsername = localStorage.getItem('lifeUsername')?.trim() || ''; } catch { /* optional storage */ }
window.currentUsername = currentUsername;
window.__lifeGlobalPatterns = [];
let applicationReady = false;
let weatherTimer = null;
let worldClockTimer = null;

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
	usernameTitle: 'IDENTIFICAR USUARIO', usernameIntro: 'Elige un nombre de usuario antes de entrar al simulador de vida.', usernameLabel: 'Nombre de usuario', usernameSubmit: '[ ENTRAR ]', usernameHint: 'Usa de 2 a 24 letras, números, espacios, guiones o guiones bajos.', usernameError: 'ERROR: introduce un nombre de usuario válido.', userStatus: 'USUARIO:',
	start: 'COMENZAR VIDA', next: '[ ENTER ]', name: '¿Cuál es tu nombre?', surname: '¿Cuál es tu apellido?', age: '¿Cuántos años tienes?', money: '¿Cuánto dinero tienes?', location: '¿Dónde comienza tu historia?', hobby: '¿Cuál es tu hobby?',
	nameHint: 'Escribe tu nombre.', surnameHint: 'Escribe tu apellido.', ageHint: 'Introduce tu edad.', moneyHint: 'Introduce una cantidad inicial.', locationHint: 'Escribe una ubicación.', hobbyHint: 'Ejemplo: música, fútbol, videojuegos, dibujo...',
		storyLabel: '¿Cómo quieres continuar tu vida?', storyPlaceholder: 'Escribe lo que sucede a continuación...', save: '[ GUARDAR ]', menu: '[ MENU ]', play: '[ JUGAR ]', blog: '[ BLOG ]', logout: '[ CERRAR SESIÓN ]', logoutConfirm: '¿Quieres cerrar la sesión? La partida se conservará.', history: '[ VER TODAS LAS DECISIONES ]', chat: '[ HABLAR CON LIFE.AI ]', stats: '[ VER ESTADÍSTICAS ]', careers: '[ VER CARRERA ]', family: '[ VER FAMILIA ]', inventory: '[ VER INVENTARIO ]', world: '[ VER MUNDO ]', skills: '[ VER HABILIDADES ]', relations: '[ VER RELACIONES ]', learnFile: '[ CARGAR CONOCIMIENTO ]', export: '[ EXPORTAR PARTIDA ]', import: '[ IMPORTAR PARTIDA ]', reset: '[ NUEVA PARTIDA ]', menuTitle: 'menu.json // panel de control', menuSubtitle: '// todos los módulos de LIFE.AI',
 nameKey: '"nombre"', surnameKey: '"apellido"', ageKey: '"edad"', characterKey: '"personaje"', moneyKey: '"dinero"',
  },
  en: {
	appTitle: 'Unnamed life simulation', languageLabel: 'LANG:', languageAria: 'Language',
	usernameTitle: 'IDENTIFY USER', usernameIntro: 'Choose a username before entering the life simulator.', usernameLabel: 'Username', usernameSubmit: '[ ENTER ]', usernameHint: 'Use 2 to 24 letters, numbers, spaces, hyphens or underscores.', usernameError: 'ERROR: enter a valid username.', userStatus: 'USER:',
	start: 'START LIFE', next: '[ ENTER ]', name: 'What is your name?', surname: 'What is your surname?', age: 'How old are you?', money: 'How much money do you have?', location: 'Where does your story begin?', hobby: 'What is your hobby?',
	nameHint: 'Write your name.', surnameHint: 'Write your surname.', ageHint: 'Enter your age.', moneyHint: 'Enter an initial amount.', locationHint: 'Write a location.', hobbyHint: 'Example: music, football, games, drawing...',
		storyLabel: 'How do you want to continue your life?', storyPlaceholder: 'Write what happens next...', save: '[ SAVE ]', menu: '[ MENU ]', play: '[ PLAY ]', blog: '[ BLOG ]', logout: '[ LOG OUT ]', logoutConfirm: 'Do you want to log out? Your game will be preserved.', history: '[ VIEW ALL DECISIONS ]', chat: '[ TALK TO LIFE.AI ]', stats: '[ VIEW STATS ]', careers: '[ VIEW CAREERS ]', family: '[ VIEW FAMILY ]', inventory: '[ VIEW INVENTORY ]', world: '[ VIEW WORLD ]', skills: '[ VIEW SKILLS ]', relations: '[ VIEW RELATIONSHIPS ]', learnFile: '[ LOAD KNOWLEDGE ]', export: '[ EXPORT GAME ]', import: '[ IMPORT GAME ]', reset: '[ NEW GAME ]', menuTitle: 'menu.json // control panel', menuSubtitle: '// all LIFE.AI modules',
		blogReleaseTitle: '[ UPDATE ] NEW VERSION 0.0.1b', blogReleaseText: 'This update expands the world, diseases, hobbies, locations and secure Supabase synchronization.',
	}
};

document.querySelectorAll('[data-close]').forEach((button) => {
  button.addEventListener('click', (event) => {
	event.preventDefault();
	const screen = document.getElementById(button.dataset.close);
	if (screen) screen.classList.add('hidden');
	});

});

function startNewLife() {
	const freshPlayer = { familyTree: generateFamilyTree('') };
	// Keep the new game separate from persistent memory until the player completes setup.
	window.lifeSupabase?.resetGameReference?.();
	window.__lifeSave = null;
  Object.keys(player).forEach((key) => delete player[key]);
	Object.assign(player, freshPlayer);
  menuScreen.classList.add('hidden');
	gameOverScreen?.classList.add('hidden');
	setWelcomeNavigationVisible(true);
  storyScreen.classList.add('hidden');
  statsScreen.classList.add('hidden');
  welcomeScreen.classList.remove('hidden');
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
listen(closeGameOverButton, 'click', () => {
  gameOverScreen?.classList.add('hidden');
  welcomeScreen?.classList.remove('hidden');
  setWelcomeNavigationVisible(true);
});

listen(testGameOverButton, async () => {
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

function renderSupabaseStatus(state, detail = '') {
  if (!supabaseStatus) return;
	const connected = state === 'online';
	const labels = currentLanguage === 'en'
	? { online: 'CONNECTED', offline: 'DISCONNECTED' }
	: { online: 'CONECTADO', offline: 'DESCONECTADO' };
  supabaseStatus.classList.remove('status-pending', 'status-online', 'status-offline');
  supabaseStatus.classList.add(connected ? 'status-online' : 'status-offline');
  supabaseStatus.textContent = connected ? labels.online : labels.offline;
  supabaseStatus.title = detail || supabaseStatus.textContent;
}

function renderUsernameStatus() {
  if (!usernameStatus) return;
  usernameStatus.textContent = `${t('userStatus')} ${currentUsername || '—'}`;
}

function isValidUsername(value) {
  return /^[\p{L}\p{N} _-]{2,24}$/u.test(String(value || '').trim());
}

function showUsernameGate() {
  usernameScreen?.classList.remove('hidden');
  welcomeScreen?.classList.add('hidden');
  setWelcomeNavigationVisible(false);
  usernameInput?.focus();
}

function showApplicationEntry() {
  usernameScreen?.classList.add('hidden');
	if (window.__lifeSave?.player?.name) restoreSavedGame();
  else {
	window.__lifeSave = null;
	welcomeScreen?.classList.remove('hidden');
	setWelcomeNavigationVisible(true);
  }
}

async function acceptUsername(value) {
  const normalized = String(value || '').trim();
  if (!isValidUsername(normalized)) {
	if (usernameHint) {
	  usernameHint.textContent = t('usernameError');
	  usernameHint.classList.add('error');
	}
	return false;
  }
  currentUsername = normalized;
  window.currentUsername = currentUsername;
  try { localStorage.setItem('lifeUsername', currentUsername); } catch { /* almacenamiento opcional */ }
  renderUsernameStatus();
  usernameHint?.classList.remove('error');
  usernameScreen?.classList.add('hidden');
  showApplicationEntry();
  if (window.lifeSupabase?.enabled) {
	try {
	  await window.lifeSupabase.saveUsername(currentUsername, currentLanguage);
	  await window.lifeSupabase.updatePresence(null);
	} catch (error) {
	  console.warn('LIFE.AI Supabase username sync:', error);
	}
  }
  return true;
}

listen(usernameForm, 'submit', async (event) => {
  event.preventDefault();
  if (!applicationReady) return;
  usernameSubmit && (usernameSubmit.disabled = true);
  try {
	await acceptUsername(usernameInput?.value);
  } finally {
	if (usernameSubmit) usernameSubmit.disabled = false;
  }
});

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
	window.lifeSupabase?.updatePresence?.(activeSave).catch(() => undefined);
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
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
	renderActivePlayers(Number.isFinite(window.__activePlayerCount) ? window.__activePlayerCount : null);
	if (languageSelect && languageSelect.value !== currentLanguage) languageSelect.value = currentLanguage;
	document.title = t('appTitle');
	setText(document.querySelector('#appTitle'), t('appTitle'));
	setText(document.querySelector('#languageLabel'), t('languageLabel'));
	setText(usernameTitle, t('usernameTitle')); setText(usernameIntro, t('usernameIntro')); setText(usernameLabel, t('usernameLabel')); setText(usernameSubmit, t('usernameSubmit')); setText(usernameHint, t('usernameHint'));
	renderUsernameStatus();
	if (languageSelect) languageSelect.setAttribute('aria-label', t('languageAria'));
	setText(startButton, t('start'));
  setText(playNavButton, t('play')); setText(blogButton, t('blog'));
	setText(lifeForm?.querySelector('button'), t('next'));
	setText(gameOverTitle, t('gameOverTitle')); setText(gameOverNewLifeButton, t('gameOverNewLife')); setText(closeGameOverButton, t('gameOverClose'));
	setText(menuButton, t('menu'));
  setText(document.querySelector('#menuTitle'), t('menuTitle'));
  setText(document.querySelector('#menuSubtitle'), t('menuSubtitle'));
  setText(questionLabel, t(questions[currentQuestion].key));
  setText(questionHint, t(`${questions[currentQuestion].key}Hint`));
  setText(document.querySelector('.story-editor label'), t('storyLabel'));
  setPlaceholder(storyInput, t('storyPlaceholder'));
	setText(saveStoryButton, t('save')); setText(historyButton, t('history')); setText(chatButton, t('chat')); setText(statsButton, t('stats')); setText(careersButton, t('careers')); setText(familyButton, t('family')); setText(worldButton, t('world')); setText(skillsButton, t('skills'));
	setText(exportButton, t('export')); setText(importButton, t('import')); setText(resetButton, t('reset')); setText(testGameOverButton, currentLanguage === 'en' ? '[ TEST GAME OVER ]' : '[ PROBAR GAME OVER ]'); setText(savedMessage, t('saved'));
	setText(relationsButton, t('relations'));
	setText(learnFileButton, t('learnFile'));
	setText(careersButton, t('careers')); setText(familyButton, t('family')); setText(inventoryButton, t('inventory'));
	setText(document.querySelector('#worldTitle'), t('worldTitle')); setText(document.querySelector('#skillsTitle'), t('skillsTitle')); setText(document.querySelector('#relationsTitle'), t('relationsTitle')); setText(document.querySelector('#statsTitle'), t('statsTitle')); setText(document.querySelector('#chatTitle'), t('chatTitle')); setText(document.querySelector('#historyTitle'), t('historyTitle'));
  setText(document.querySelector('#worldSubtitle'), t('worldSubtitle')); setText(document.querySelector('#skillsSubtitle'), t('skillsSubtitle')); setText(document.querySelector('#relationsSubtitle'), t('relationsSubtitle')); setText(document.querySelector('#statsSubtitle'), t('statsSubtitle')); setText(document.querySelector('#chatSubtitle'), t('chatSubtitle')); setText(document.querySelector('#historySubtitle'), t('historySubtitle'));
	setText(document.querySelector('#careersTitle'), t('careersTitle')); setText(document.querySelector('#careersSubtitle'), t('careersSubtitle')); setText(document.querySelector('#familyTitle'), t('familyTitle')); setText(document.querySelector('#familySubtitle'), t('familySubtitle'));
	setText(document.querySelector('#inventoryTitle'), t('inventoryTitle')); setText(document.querySelector('#inventorySubtitle'), t('inventorySubtitle')); setText(inventoryButton, t('inventory'));
	['nameKey', 'surnameKey', 'ageKey', 'characterKey', 'moneyKey', 'locationKey', 'hobbyKey', 'occupationKey', 'energyKey', 'moodKey', 'reputationKey'].forEach((key) => setText(document.querySelector(`#${key}`), t(key)));
  setPlaceholder(chatInput, t('chatPlaceholder')); setText(chatForm?.querySelector('button'), t('send')); setText(document.querySelector('.chat-help'), t('chatHelp'));
  setText(document.querySelector('.analysis-title'), t('analyzer'));
	setText(document.querySelector('#blogTitle'), t('blogTitle')); setText(document.querySelector('#blogSubtitle'), t('blogSubtitle'));
  setText(document.querySelector('#blogReleaseTitle'), t('blogReleaseTitle')); setText(document.querySelector('#blogReleaseText'), t('blogReleaseText'));
	const chatGreeting = chatMessages?.querySelector('.chat-ai');
	if (chatGreeting) {
	  const label = chatGreeting.querySelector('span');
	  chatGreeting.replaceChildren(label || document.createElement('span'), document.createTextNode(` ${t('chatGreeting')}`));
	}
	renderCreatorBlog();
  if (lastAnalysis) updateAnalysisView(lastAnalysis); else { setText(analysisDetails, `${t('intent')}: — · ${t('confidence')}: — · ${t('entities')}: —`); setText(predictionDetails, `${t('prediction')}: — · ${t('personality')}: — · ${t('goal')}: —`); }
}

function changeLanguage(value) {
  const nextLanguage = value === 'en' ? 'en' : 'es';
  currentLanguage = nextLanguage;
	window.currentLanguage = currentLanguage;
  try { localStorage.setItem('lifeLanguage', currentLanguage); } catch { /* almacenamiento opcional */ }
  applyTranslations();
	if (window.lifeSupabase?.enabled) renderSupabaseStatus('online');
	else if (window.lifeSupabase) renderSupabaseStatus('offline', window.lifeSupabase.lastError || '');
  if (!historyScreen.classList.contains('hidden')) renderHistory(readSave().chapters);
  if (!worldScreen.classList.contains('hidden')) renderWorldPanel();
  if (!skillsScreen.classList.contains('hidden')) renderSkillsPanel();
  if (typeof relationsScreen !== 'undefined' && !relationsScreen.classList.contains('hidden')) renderRelationsPanel();
  if (!menuScreen.classList.contains('hidden')) renderMenu();
	if (!careersScreen.classList.contains('hidden')) renderCareersPanel();
  if (!familyScreen.classList.contains('hidden')) renderFamilyPanel();
	if (!inventoryScreen.classList.contains('hidden')) renderInventoryPanel();
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
listen(inventoryButton, 'click', () => { renderInventoryPanel(); inventoryScreen.classList.remove('hidden'); });
listen(closeInventoryButton, 'click', () => returnToMenuFromPanel(inventoryScreen));
listen(playNavButton, 'click', () => {
  blogScreen?.classList.add('hidden');
  welcomeScreen?.classList.remove('hidden');
  playNavButton?.classList.add('active');
  blogButton?.classList.remove('active');
});
listen(blogButton, 'click', () => {
	renderCreatorBlog();
  blogScreen?.classList.remove('hidden');
  welcomeScreen?.classList.add('hidden');
  playNavButton?.classList.remove('active');
  blogButton?.classList.add('active');
});
function closeCreatorBlog() {
  blogScreen?.classList.add('hidden');
  welcomeScreen?.classList.remove('hidden');
  playNavButton?.classList.add('active');
  blogButton?.classList.remove('active');
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

function renderMenu() {
	const controls = [
	['history', () => { renderHistory(readSave().chapters); historyScreen.classList.remove('hidden'); }],
	['chat', () => { renderChat(readSave().memory.chat || []); chatScreen.classList.remove('hidden'); chatInput.focus(); }],
	['stats', () => { statsScreen.classList.remove('hidden'); renderStats(); renderFullStats(); }],
	['careers', () => { renderCareersPanel(); careersScreen.classList.remove('hidden'); }],
	['family', () => { renderFamilyPanel(); familyScreen.classList.remove('hidden'); }],
	['inventory', () => { renderInventoryPanel(); inventoryScreen.classList.remove('hidden'); }],
	['world', () => { renderWorldPanel(); worldScreen.classList.remove('hidden'); }],
	['skills', () => { renderSkillsPanel(); skillsScreen.classList.remove('hidden'); }],
	['relations', () => { renderRelationsPanel(); relationsScreen.classList.remove('hidden'); }],
	['learnFile', () => learnFileInput.click()],
	['export', () => exportButton.click()],
	['import', () => importInput.click()],
	['reset', () => resetButton.click()],
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

class AdaptivePersonality {
  choose(text, analysis, memory) {
	const scores = { serio: 0, aventurero: 0, sarcastico: 0, profesor: 0, narrador: 0 };
	if (['health', 'risk', 'change_money'].includes(analysis.intent)) scores.serio += 4;
	if (['travel', 'risk', 'adventure'].includes(analysis.intent) || /viaje|aventura|explorar/i.test(text)) scores.aventurero += 4;
	if (analysis.intent === 'learn' || analysis.intent === 'planning' || /cómo|como|aprender|estudiar/i.test(text)) scores.profesor += 4;
	if (memory.episodes.length > 3 && /historia|sucede|vida/i.test(text)) scores.narrador += 3;
	if (/jaja|broma|gracioso|absurdo/i.test(text)) scores.sarcastico += 3;
	if (memory.personality?.current) scores[memory.personality.current] += 1;
	const [mode, score] = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
	memory.personality = memory.personality || { current: mode, confidence: 0, history: [] };
	memory.personality.current = mode;
	memory.personality.confidence = Math.min(1, score / 6);
	memory.personality.history.push({ mode, score, intent: analysis.intent, date: new Date().toISOString() });
	return { mode, confidence: memory.personality.confidence };
  }

  style(text, personality) {
	const prefixes = currentLanguage === 'en' ? {
	  serio: 'I will analyze this carefully.', aventurero: 'The next possibility opens an interesting path.', sarcastico: 'Well, because life clearly could not make this simple.', profesor: 'Let us go step by step.', narrador: 'In this chapter of your story,'
	} : {
	  serio: 'Voy a analizarlo con cuidado.', aventurero: 'La próxima posibilidad abre un camino interesante.', sarcastico: 'Bueno, porque claramente la vida no podía hacerlo sencillo.', profesor: 'Veámoslo paso a paso.', narrador: 'En este capítulo de tu historia,'
	};
	return `${prefixes[personality.mode] || prefixes.narrador} ${text}`;
  }
}

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
  questionScreen.classList.remove('hidden');
  answerInput.focus();
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
	chat: [], learnedIntents: [], recentInputs: [], sentiment: {}, codeIndex: [],
	conversationSummaries: [], sessions: [], facts: [], goals: [], preferences: {},
	searches: [], lastContext: [], updatedAt: null, episodes: [], semanticConcepts: {},
	personality: { current: 'narrador', confidence: 0, history: [] }, corrections: [],
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
  worldClockTimer = window.setInterval(() => {
	if (window.__lifeSave?.lifeStatus !== 'active') return;
	const activeSave = normalizeSave(window.__lifeSave);
	advanceWorldTime(activeSave.world, 1);
	window.__lifeSave = activeSave;
	if (!worldScreen?.classList.contains('hidden')) renderWorldPanel();
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
	if (!normalized.player.familyTree || (normalized.player.surname && normalized.player.familyTree.surnameSource !== normalized.player.surname)) normalized.player.familyTree = generateFamilyTree(normalized.player.surname || '');
	normalized.chapters = Array.isArray(normalized.chapters) ? normalized.chapters : [];
	normalized.memory = normalizeMemory(normalized.memory || createEmptyMemory());
	normalized.world = normalizeWorld(normalized.world);
  normalized.weather = normalizeWeather(normalized.weather);
	normalized.lifeStatus = normalized.lifeStatus === 'ended' ? 'ended' : 'active';
	return normalized;
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
	memory.chat = memory.chat.slice(-500);
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
	memory.personality = memory.personality || { current: 'narrador', confidence: 0, history: [] };
	memory.personality.history = Array.isArray(memory.personality.history) ? memory.personality.history.slice(-100) : [];
  memory.notes = memory.notes.map((entry) => normalizeMemoryEntry(entry));
  memory.customRules = memory.customRules.map((entry) => normalizeMemoryEntry(entry));
  memory.recentInputs = memory.recentInputs.map((entry) => normalizeMemoryEntry(entry));
  memory.chat = memory.chat.map((entry) => normalizeMemoryEntry(entry));
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
  window.__lifeSave = normalized;
  try { localStorage.setItem('lifeSaveFallback', JSON.stringify(normalized)); } catch { /* fallback opcional */ }
	return storage.set('game', 'current', normalized).catch(() => undefined).then(async () => {
	try {
	  if (window.lifeSupabase?.enabled) {
		await window.lifeSupabase.saveGame(normalized, currentLanguage);
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
	merged.chat.push(...(memory.chat || []));
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
	if (memory.personality?.current) merged.personality = memory.personality;
	Object.assign(merged.preferences, memory.preferences || {});
	Object.entries(memory.sentiment || {}).forEach(([tone, count]) => {
	  merged.sentiment[tone] = (merged.sentiment[tone] || 0) + count;
	});
  });
	merged.choices = merged.choices.slice(-500);
	merged.notes = merged.notes.slice(-200);
	merged.customRules = merged.customRules.slice(-100);
	merged.recentInputs = merged.recentInputs.slice(-200);
	merged.chat = merged.chat.slice(-500);
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

	this.memory.chat.forEach((entry) => add(entry.text, entry.role === 'user' ? 'conversation-user' : 'conversation-ai', entry.date, entry));
	this.memory.notes.forEach((note) => add(note, 'note'));
	this.memory.recentInputs.forEach((input) => add(input, 'recent-input'));
	this.memory.conversationSummaries.forEach((summary) => add(summary.text, 'summary', summary.date, summary));
	this.memory.episodes.forEach((episode) => add(episode.text, 'episode', episode.date, episode));
	this.memory.facts.forEach((fact) => add(fact.text, 'fact', fact.date, fact));
	return candidates.sort((a, b) => b.score - a.score).slice(0, this.limit);
  }

  rememberConversation(message, response, analysis) {
	const now = new Date().toISOString();
	this.memory.sessions.push({ id: `session-${Date.now()}`, intent: analysis.intent, topic: strongestTopic(this.memory.topics), lang: currentLanguage, date: now });
	this.memory.lastContext = this.retrieve(message).map((item) => item.text);
	if (this.memory.chat.length >= 20 && this.memory.chat.length % 20 === 0) {
	  this.memory.conversationSummaries.push({ text: `${currentLanguage === 'en' ? 'Conversation about' : 'Conversación sobre'} ${analysis.intent}: ${message.slice(0, 160)}. ${currentLanguage === 'en' ? 'Response' : 'Respuesta'}: ${response.slice(0, 160)}`, intent: analysis.intent, lang: currentLanguage, date: now });
	}
	return this.memory.lastContext;
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
	playerState.reputation = Number.isFinite(Number(playerState.reputation)) ? Number(playerState.reputation) : 0;
	playerState.mood = playerState.mood || 'estable';
	playerState.occupation = playerState.occupation || '';
	playerState.inventory = Array.isArray(playerState.inventory) ? playerState.inventory : [];
	playerState.skills = playerState.skills || {};
	playerState.relationships = playerState.relationships || {};
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

  processChat(text, memory) {
	return { analysis: this.analyze(text, memory), effects: [] };
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
	if (!negated && foundItem) {
	  const probability = itemFindProbability(foundItem, playerState.location || '');
	  if (Math.random() <= probability) {
		const entry = addFoundItem(playerState, foundItem, playerState.location || '');
		effects.push(currentLanguage === 'en' ? `found: ${foundItem.names.en} x${entry.quantity}` : `encontrado: ${foundItem.names.es} x${entry.quantity}`);
	  } else {
		effects.push(currentLanguage === 'en' ? `the find was unlikely here (${Math.round(probability * 100)}%)` : `el hallazgo era poco probable aquí (${Math.round(probability * 100)}%)`);
	  }
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
	if (!negated && /enfermo|enferma|dolor|lesion|lesión|accidente|hospital|sick|ill|pain|injury|accident/.test(words)) {
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
  communication: ['decir', 'contar', 'explicar', 'preguntar', 'responder', 'escuchar', 'mensaje', 'llamar', 'escribir', 'hablar', 'say', 'tell', 'explain', 'ask', 'answer', 'listen', 'message', 'call', 'write', 'speak'],
  routine: ['mañana', 'tarde', 'noche', 'despertar', 'levantarse', 'bañarse', 'vestirse', 'salir', 'volver', 'rutina', 'morning', 'afternoon', 'night', 'wake', 'get up', 'shower', 'dress', 'leave', 'return', 'routine'],
  family: ['madre', 'padre', 'mama', 'mamá', 'papa', 'papá', 'hijo', 'hija', 'hermano', 'hermana', 'abuelo', 'abuela', 'mother', 'father', 'mom', 'dad', 'son', 'daughter', 'brother', 'sister', 'grandparent'],
  conflict: ['discusión', 'discusion', 'pelea', 'problema', 'enemigo', 'conflicto', 'discutir', 'perdonar', 'mentira', 'discute', 'argument', 'fight', 'problem', 'enemy', 'conflict', 'argue', 'forgive', 'lie'],
  achievement: ['logro', 'éxito', 'exito', 'ganar', 'victoria', 'mejorar', 'conseguir', 'terminar', 'completar', 'achievement', 'success', 'win', 'victory', 'improve', 'achieve', 'finish', 'complete'],
  failure: ['fallar', 'fracasar', 'fracaso', 'perder', 'perdí', 'error', 'equivocarse', 'fall', 'failure', 'lose', 'lost', 'mistake', 'wrong'],
	nature: ['clima', 'lluvia', 'llover', 'frio', 'frío', 'calor', 'caluroso', 'niebla', 'sol', 'viento', 'tormenta', 'nieve', 'primavera', 'verano', 'otoño', 'otono', 'invierno', 'estacion', 'estación', 'weather', 'rain', 'cold', 'hot', 'fog', 'sun', 'wind', 'storm', 'snow', 'spring', 'summer', 'autumn', 'fall', 'winter', 'season'],
	objects: ['coche', 'auto', 'casa', 'llave', 'teléfono', 'telefono', 'computadora', 'ordenador', 'portatil', 'portátil', 'libro', 'mesa', 'arma', 'regalo', 'objeto', 'mochila', 'billetera', 'moneda', 'documento', 'herramienta', 'car', 'key', 'phone', 'computer', 'laptop', 'book', 'table', 'weapon', 'gift', 'object', 'backpack', 'wallet', 'coin', 'document', 'tool'],
  questions: ['quien', 'quién', 'que', 'qué', 'cuando', 'cuándo', 'donde', 'dónde', 'como', 'cómo', 'por que', 'por qué', 'who', 'what', 'when', 'where', 'how', 'why'],
  quantity: ['uno', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'diez', 'cien', 'hora', 'día', 'dia', 'semana', 'mes', 'año', 'ano', 'one', 'two', 'three', 'four', 'five', 'ten', 'hundred', 'hour', 'day', 'week', 'month', 'year']
};

const commonWordAliases = {
	travajo: 'trabajo', trabjo: 'trabajo', trbajo: 'trabajo', trabjar: 'trabajar', laburo: 'trabajo', laburar: 'trabajar',
  estduiar: 'estudiar', estudar: 'estudiar', aprnder: 'aprender', apender: 'aprender', estudiando: 'estudiar',
  biaje: 'viaje', viage: 'viaje', viajr: 'viajar', vacasiones: 'vacaciones', amgo: 'amigo', famlia: 'familia',
  relasion: 'relacion', relacione: 'relaciones', felis: 'feliz', felz: 'feliz',
  trsite: 'triste', preoupado: 'preocupado', ansieda: 'ansiedad', enojdo: 'enojado',
  cansdo: 'cansado', enerjia: 'energia', dinaro: 'dinero', plta: 'plata',
  ahorar: 'ahorrar', comprr: 'comprar', vendr: 'vender', descasar: 'descansar',
  dormr: 'dormir', ejercico: 'ejercicio', salu: 'salud', medco: 'medico',
  cresi: 'creci', creci: 'creci', cumpli: 'cumpli', anio: 'ano', anyo: 'ano',
  maniana: 'manana', demas: 'despues', despues: 'despues', kiero: 'quiero', qiero: 'quiero',
  nesesito: 'necesito', ncesito: 'necesito', xq: 'porque', porke: 'porque',
	tmb: 'tambien', tambn: 'tambien', ai: 'ahi', llendo: 'yendo', aciendo: 'haciendo', q: 'que', xfa: 'por favor',
	pls: 'please', plz: 'please', dont: 'do not', cant: 'cannot', wont: 'will not', im: 'i am', ive: 'i have'
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
  const confidence = Math.min(.98, Math.max(.12, .35 + best[1] * .15 - (second > 0 ? .05 : 0)));
	const negated = /\b(no|nunca|jamas|jamás|sin|not|never|without)\b/.test(normalized);
	const question = /\?|^(?:que|qué|como|cómo|por que|por qué|what|how|why|when|where)\b/.test(normalized);
	const firstPerson = /\b(?:yo|vos|tu|tú|me|mi|mis|tengo|quiero|voy|vivo|soy|estoy|decido|hago|aprendo|trabajo|i|i'm|ive|i've|my|me|we|our)\b/.test(normalized);
	const actionVerb = /\b(?:quiero|decido|decidir|hago|hacer|voy|viajo|viajar|me mudo|vivo|trabajo|trabajar|laburo|laburar|aprendo|aprender|estudio|estudiar|duermo|dormir|descanso|descansar|compro|comprar|pago|pagar|ahorro|ahorrar|crezco|cumplo|cambio|aumento|pierdo|gano|conozco|ayudo|exploro|i want|i choose|i decide|i do|i go|i travel|i live|i work|i learn|i study|i sleep|i rest|i buy|i pay|i save|i grow|i turn|i change|i increase|i lose|i earn|i meet|i help|i explore)\b/.test(normalized);
	const explicitDeclaration = /\b(?:tengo|mi edad es|mi nombre es|me llamo|mi apellido es|mi dinero es|vivo en|me mudo a|viajo a|my name is|my surname is|my last name is|my money is|i am|i'm|i live in|i move to|i travel to|i have)\b/.test(normalized);
	const subjectIsOther = context.subject === 'other';
	const mutationAllowed = !question && !negated && !subjectIsOther && (explicitDeclaration || firstPerson || actionVerb);
	const mutationConfidence = Math.min(1, confidence + (explicitDeclaration ? .25 : 0) + (firstPerson ? .12 : 0) - (question ? .35 : 0) - (negated ? .35 : 0) - (subjectIsOther ? .3 : 0));
	const urgency = /\bahora|urgente|necesito|ya|today|urgent|need|now\b/.test(normalized) ? 'high' : /\bpronto|soon|mañana|tomorrow\b/.test(normalized) ? 'medium' : 'low';
  const sentiment = /\b feliz|alegre|amor|éxito|happy|glad|love|success\b/.test(` ${normalized}`) ? 'positive' : /\b triste|miedo|ansiedad|problema|sad|fear|anxiety|problem\b/.test(` ${normalized}`) ? 'negative' : 'neutral';
	const closeAlternatives = ranked.filter(([, score]) => score > 0 && best[1] - score <= .8).slice(1, 3);
  const needsClarification = !best[1] || (best[1] <= 1 && second === best[1]) || closeAlternatives.length > 1;
	return { intent: best[1] ? best[0] : 'unknown', score: best[1], confidence, entities, normalized, negated, question, firstPerson, actionVerb, explicitDeclaration, mutationAllowed, mutationConfidence, urgency, sentiment, needsClarification, alternatives: ranked.slice(1, 4), context, ambiguity: closeAlternatives };
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
  const location = extractContextualLocation(original) || extractText(original, ['me mudo a', 'vivo en', 'viajo a', 'viajo al', 'voy a', 'voy al', 'llego a', 'llego al', 'mi nueva ubicación es', 'mi nueva ubicacion es', 'encuentro un lugar llamado', 'descubro la ciudad de', 'move to', 'live in', 'travel to', 'go to', 'arrive at', 'new location is']);
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
	const personality = localizedPersonality(memory.personality?.current || 'narrador');
	const goal = memory.goals.find((item) => item.status === 'active');
	  predictionDetails.textContent = `${t('prediction')}: ${predictions.join(', ') || '—'} · ${t('personality')}: ${personality} · ${t('goal')}: ${goal ? `${goal.text} (${goal.progress}%)` : '—'}`;
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
	const initialSave = { player, chapters: [], memory: createEmptyMemory(), world: createEmptyWorld(), weather: chooseInitialWeather(), lifeStatus: 'active' };
	assignBirthDiseases(player);
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
	const previousAge = Number(savedGame.player.age) || 0;
	if (detectLifeEnding(decision)) {
	  learnFrom(decision, globalMemory);
	  await finishLife(decision, savedGame, globalMemory);
	  return;
	}
  learnFrom(decision, savedGame.memory);
  learnFrom(decision, globalMemory);
	const result = lifeEngine.processDecision(decision, savedGame.player, memory, savedGame.world);
	window.lifeSupabase?.saveEvent?.(savedGame, decision, result).catch((error) => console.warn('LIFE.AI Supabase event sync:', error));
	window.lifeSupabase?.submitLearningEvent?.(savedGame, result).catch((error) => console.warn('LIFE.AI global learning sync:', error));
	window.lifeSupabase?.saveLearningSignal?.(savedGame, result, 'decision_state').catch((error) => console.warn('LIFE.AI learning signal sync:', error));
	const diseaseDeath = result.effects.find((effect) => effect.startsWith('DEATH_CAUSE:'));
	if (diseaseDeath) {
	  const reason = diseaseDeath.replace('DEATH_CAUSE:', '').trim();
	  await finishLife(reason, savedGame, globalMemory);
	  return;
	}
	const ageGained = Math.max(0, (Number(savedGame.player.age) || 0) - previousAge);
	if (ageGained > 0) {
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
	effectsText.textContent = result.effects.length ? (currentLanguage === 'en' ? `// effects: ${result.effects.join(' · ')}` : `// efectos: ${result.effects.join(' · ')}`) : (currentLanguage === 'en' ? '// no state changes' : '// no hubo cambios de estado');
	effectsText.classList.remove('hidden');
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
	await storage.remove('game', 'current').catch(() => undefined);
	try { localStorage.removeItem('lifeSaveFallback'); } catch { /* fallback opcional */ }
	window.__lifeSave = null;
	Object.keys(player).forEach((key) => delete player[key]);
	stopWeatherCycle();
	stopWorldClock();
	resetWeatherVisuals();
	menuScreen?.classList.add('hidden');
	gameOverScreen?.classList.add('hidden');
	questionScreen?.classList.add('hidden');
	storyScreen?.classList.add('hidden');
	statsScreen?.classList.add('hidden');
	usernameScreen?.classList.add('hidden');
	welcomeScreen?.classList.remove('hidden');
	setWelcomeNavigationVisible(true);
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

listen(chatButton, 'click', () => {
	const messages = readSave().memory.chat || [];
  renderChat(messages);
  chatScreen.classList.remove('hidden');
  chatInput.focus();
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

listen(closeChatButton, 'click', () => {
	returnToMenuFromPanel(chatScreen);
});

listen(chatForm, 'submit', async (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;

	let save = readSave();
	let globalMemory = readGlobalMemory();
	save.memory = normalizeMemory(save.memory || createEmptyMemory());
	globalMemory = normalizeMemory(globalMemory || createEmptyMemory());
	const memory = mergeMemories(save.memory, globalMemory);
	let response;
	try {
	  lastAnalysis = lifeEngine.processChat(message, memory).analysis;
	  updateAnalysisView(lastAnalysis);
	  response = generateChatResponse(message, memory, [], lastAnalysis);
	} catch (error) {
	  response = currentLanguage === 'en' ? `I understand you want to talk about this: "${message}". Tell me what concerns you or what you would like to achieve.` : `Entiendo que quieres hablar de esto: "${message}". Cuéntame qué parte te preocupa o qué te gustaría conseguir.`;
	  console.error('LIFE.AI response error:', error);
	  lastAnalysis = analyzeText(message, memory);
	}

	const userEntry = { role: 'user', text: message, lang: currentLanguage, date: new Date().toISOString() };
	const aiEntry = { role: 'ai', text: response, lang: currentLanguage, date: new Date().toISOString() };
	save.memory.chat.push(userEntry, aiEntry);
	save.memory.chat = save.memory.chat.slice(-60);
	window.__lifeSave = save;
	renderChat(save.memory.chat);
	chatInput.value = '';
	chatInput.focus();

	try {
	  learnFrom(message, save.memory);
	  learnFrom(message, globalMemory);
	  new AdaptivePersonality().choose(message, lastAnalysis, save.memory);
	  new AdaptivePersonality().choose(message, lastAnalysis, globalMemory);
	  new CognitiveMemory(save.memory).record(message, lastAnalysis, [], save.player);
	  new CognitiveMemory(globalMemory).record(message, lastAnalysis, [], save.player);
	  new PlanningEngine(save.memory).detectGoal(message, lastAnalysis);
	  new PlanningEngine(globalMemory).detectGoal(message, lastAnalysis);
	  new AutonomousAgent(save.memory).execute(message, response, lastAnalysis);
	  new AutonomousAgent(globalMemory).execute(message, response, lastAnalysis);
	  await saveCurrentGame(save);
	  await saveGlobalMemory(globalMemory);
	} catch (error) {
	  console.error('LIFE.AI background learning error:', error);
	}
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
	if (currentUsername) window.lifeSupabase?.updatePresence?.(window.__lifeSave || null).catch((error) => console.warn('LIFE.AI presence heartbeat:', error));
  refreshActivePlayers();
}, 15000);

async function initializeApplication() {
	if (startButton) startButton.disabled = true;
  try {
	let storedLanguage = null;
	try { storedLanguage = localStorage.getItem('lifeLanguage'); } catch { /* idioma predeterminado */ }
	currentLanguage = storedLanguage === 'es' ? 'es' : 'en';
	applyTranslations();
	const supabaseUser = await window.lifeSupabase?.initialize?.();
	if (window.lifeSupabase?.enabled && supabaseUser) renderSupabaseStatus('online');
	else renderSupabaseStatus('offline', window.lifeSupabase?.lastError || (currentLanguage === 'en' ? 'configuration or authentication failed' : 'falló la configuración o autenticación'));
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
		renderSupabaseStatus('offline', error?.message || String(error));
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
  nameStat.textContent = `"${player.name || ''}"`;
  surnameStat.textContent = `"${player.surname || ''}"`;
  ageStat.textContent = player.age || 0;
	if (characterStat) characterStat.textContent = `"${player.name || ''}"`;
  document.querySelector('#moneyStat').textContent = player.money || 0;
  locationStat.textContent = `"${player.location || ''}"`;
  hobbyStat.textContent = `"${player.hobby || ''}"`;
	const occupation = careerById(player.occupation);
  occupationStat.textContent = `"${careerLabel(occupation)}"`;
  energyStat.textContent = player.energy ?? 100;
	  moodStat.textContent = `"${player.mood || t('stable')}"`;
  reputationStat.textContent = player.reputation ?? 0;
  renderCurrentOccupation();
}

function renderFullStats() {
	const current = readSave().player || player || {};
	const save = readSave();
  const memory = mergeMemories(save.memory || createEmptyMemory(), readGlobalMemory() || createEmptyMemory());
	const empty = t('none');
  const relationships = Object.entries(current.relationships || {}).map(([name, level]) => `${name}: ${level}`).join(' · ') || empty;
  const activeGoals = memory.goals.filter((goal) => goal.status === 'active').map((goal) => `${goal.text} (${goal.progress}%)`).join(' · ') || empty;
	const diseases = normalizeDiseases(current).filter((disease) => disease.active).map((disease) => `${diseaseLabel(disease)}${disease.controlled ? (currentLanguage === 'en' ? ' (controlled)' : ' (controlada)') : ''}`).join(', ') || empty;
	statsExtra.textContent = currentLanguage === 'en' ? `recorded events: ${(current.events || []).length} | personal goals: ${activeGoals} | diseases: ${diseases} | personality: ${localizedPersonality(memory.personality?.current || 'narrador')}` : `eventos registrados: ${(current.events || []).length} | objetivos personales: ${activeGoals} | enfermedades: ${diseases} | personalidad: ${localizedPersonality(memory.personality?.current || 'narrador')}`;
}

function addPanelSection(container, title, entries, emptyText = currentLanguage === 'en' ? 'none' : 'ninguno') {
  const section = document.createElement('section');
  section.className = 'panel-section';
  const heading = document.createElement('h3');
  heading.textContent = `[ ${title} ]`;
  section.append(heading);
  if (!entries.length) {
	const empty = document.createElement('p');
	empty.className = 'panel-empty';
	empty.textContent = `// ${emptyText}`;
	section.append(empty);
  } else {
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
	  section.append(card);
	});
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

	const career = detectCareer(decision) || careerById(savedPlayer.occupation);
	if (career || has('trabajo', 'trabajar', 'sueldo', 'contrato', 'negocio', 'work', 'job', 'salary', 'contract', 'business')) {
	  const income = career?.income || 250;
	  money += income;
	  effects.push(currentLanguage === 'en' ? `+${income} money from ${career ? career.names.en.toLowerCase() : 'work'}` : `+${income} dinero por ${career ? career.names.es.toLowerCase() : 'trabajo'}`);
  }
	if (has('comprar', 'compre', 'compra', 'gastar', 'pagar', 'buy', 'spend', 'pay')) {
	money = Math.max(0, money - 75);
	effects.push(currentLanguage === 'en' ? '-75 money spent' : '-75 dinero por gasto');
  }
	if (has('ahorrar', 'ahorro', 'guardar', 'save', 'saving')) {
	money += 50;
	effects.push(currentLanguage === 'en' ? '+50 money saved' : '+50 dinero por ahorro');
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
	{ property: 'reputation', words: ['reputacion', 'reputation', 'fama', 'respeto', 'respect'], up: ['gano', 'ganar', 'sube', 'aumento', 'mejoro', 'gain', 'increase', 'improve'], down: ['pierdo', 'baja', 'disminuye', 'pierde', 'lose', 'decrease', 'lower'], label: ['reputación', 'reputation'] },
	{ property: 'money', words: ['dinero', 'plata', 'pesos', 'money', 'cash'], up: ['gano', 'cobro', 'recibo', 'aumento', 'ingreso', 'earn', 'receive', 'increase'], down: ['pierdo', 'gasto', 'pago', 'compro', 'disminuye', 'lose', 'spend', 'pay', 'decrease'], label: ['dinero', 'money'] }
  ];
  rules.forEach((rule) => {
	if (!rule.words.some((word) => text.includes(word))) return;
	const declaration = new RegExp(`(?:tengo|ahora tengo|mi|mi actual|actualmente|i have|my|currently)\\D{0,12}(?:${rule.words.join('|')})?\\D{0,12}${number}`,'i').exec(text);
	if (declaration) {
	  const value = Math.max(0, Number(declaration[1].replace(',', '.')));
	  if (rule.property === 'energy') playerState[rule.property] = Math.min(100, value);
	  else playerState[rule.property] = value;
	  effects.push(`${currentLanguage === 'en' ? rule.label[1] : rule.label[0]}: ${playerState[rule.property]}`);
	  return;
	}
	const changePattern = new RegExp(`(?:${rule.up.join('|')}|${rule.down.join('|')})\\D{0,18}${number}`,'i');
	const change = changePattern.exec(text);
	if (!change) return;
	const isDown = rule.down.some((word) => change[0].includes(word));
	const amount = Number(change[1].replace(',', '.')) * (isDown ? -1 : 1);
	const current = Number(playerState[rule.property]) || 0;
	playerState[rule.property] = Math.max(0, rule.property === 'energy' ? Math.min(100, current + amount) : current + amount);
	effects.push(`${currentLanguage === 'en' ? rule.label[1] : rule.label[0]}: ${amount > 0 ? '+' : ''}${amount}`);
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

function generateChatResponse(message, memory, effects, analysis = analyzeText(message, memory)) {
	if (currentLanguage === 'en') return generateEnglishChatResponse(message, memory, effects, analysis);
	const contextManager = new ContextManager(memory);
  const context = contextManager.retrieve(message);
  const topic = strongestTopic(memory.topics);
	const latestNote = memory.notes.length ? (memory.notes[memory.notes.length - 1].text || memory.notes[memory.notes.length - 1]) : '';
	  const remembered = latestNote ? ` Recuerdo que me dijiste: "${latestNote.text || latestNote}".` : '';
	  const latestRuleEntry = memory.customRules && memory.customRules.length ? memory.customRules[memory.customRules.length - 1] : '';
	  const latestRule = latestRuleEntry && latestRuleEntry.text ? latestRuleEntry.text : latestRuleEntry;
	  const rule = latestRule ? ` También sigo esta regla: "${latestRule}".` : '';
  const effectText = effects.length ? ` He actualizado tu personaje: ${effects.join(', ')}.` : '';
	const entityText = Object.values(analysis.entities).flat().join(', ');
  const entities = entityText ? ` Detecté: ${entityText}.` : '';
	const contextText = context.length ? ` Encontré contexto relacionado: "${context[0].text}".` : '';
	const personality = new AdaptivePersonality().choose(message, analysis, memory);
	const recentUser = memory.chat.filter((entry) => entry.role === 'user').slice(-3).map((entry) => entry.text);
	const recentAi = memory.chat.filter((entry) => entry.role === 'ai').slice(-2).map((entry) => entry.text);
	const directQuestion = /\?$/.test(message);
	const normalized = normalizeWords(message).join(' ');
	const conversational = generateFreeLocalResponse(message, memory, analysis, context, effects);
	const raw = `${conversational}${entities}${contextText} ${remembered}${rule}${effectText}`;
	const followUps = [
	  '¿Qué parte te importa más ahora?',
	  '¿Quieres que lo analicemos con calma o prefieres pasar a una acción concreta?',
	  '¿Esto viene de algo que ocurrió hoy o es una preocupación que arrastras desde hace tiempo?',
	  '¿Qué te gustaría que entendiera mejor?'
	];
	const followUp = directQuestion || analysis.intent === 'unknown' ? ` ${followUps[(recentUser.length + recentAi.length) % followUps.length]}` : ` ${followUps[(recentUser.length + 1) % followUps.length]}`;
	return new AdaptivePersonality().style(`${raw}${followUp}`, personality);
}

function generateEnglishChatResponse(message, memory, effects, analysis) {
	const context = new ContextManager(memory).retrieve(message);
  const generated = generateFreeLocalResponse(message, memory, analysis, context, effects);
  const entityText = Object.values(analysis.entities).flat().join(', ');
  return `${generated}${entityText ? ` I detected: ${entityText}.` : ''} What would you like to explore next?`;
}

function renderChat(messages) {
	chatMessages.replaceChildren();
	if (!messages.length) {
		const empty = document.createElement('p');
		empty.className = 'chat-ai';
		const label = document.createElement('span');
		label.textContent = '[ LIFE.AI ] ';
		empty.append(label, document.createTextNode(currentLanguage === 'en' ? 'Memory clear. Tell me something to start learning.' : 'Memoria limpia. Cuéntame algo para empezar a aprender.'));
		chatMessages.append(empty);
	} else messages.forEach((message) => {
	const item = document.createElement('p');
	item.className = message.role === 'user' ? 'chat-user' : 'chat-ai';
	const prefix = message.role === 'user' ? '[ TÚ ] ' : '[ LIFE.AI ] ';
	const label = document.createElement('span');
	label.textContent = prefix;
	item.append(label, document.createTextNode(message.text));
	chatMessages.append(item);
	});
  chatMessages.scrollTop = chatMessages.scrollHeight;
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

function normalizeWords(text) {
	const normalized = String(text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	const aliases = {
	cresko: 'crezco', cresi: 'creci', kiero: 'quiero', qiero: 'quiero', keria: 'queria',
	ai: 'ahi', anio: 'ano', anyo: 'ano', enerjia: 'energia', reputasion: 'reputacion',
	felis: 'feliz', travajo: 'trabajo', bibo: 'vivo', bivi: 'vivi', laburo: 'trabajo',
	trabajando: 'trabajar', estudiando: 'estudiar', viajando: 'viajar', comprando: 'comprar',
	durmiendo: 'dormir', descansando: 'descansar', haciendo: 'hacer', diciendo: 'decir',
	quiero: 'quiero', quisiera: 'quiero'
  };
	return (normalized.match(/[a-z0-9]+/g) || []).map((word) => commonWordAliases[word] || aliases[word] || word);
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
