/* ═══════════════════════════════════════════════════════════════
   firebase.js  —  ImóvelAgenda Pro
   Substitua os valores abaixo pelas suas credenciais do Firebase
═══════════════════════════════════════════════════════════════ */

// ── INSTRUÇÕES DE CONFIGURAÇÃO ──────────────────────────────
// 1. Acesse https://console.firebase.google.com
// 2. Crie um projeto (ex: "imovelAgenda")
// 3. Adicione um app Web (clique em </> na tela do projeto)
// 4. Copie o objeto firebaseConfig e substitua abaixo
// 5. Ative Firestore Database (modo de teste por 30 dias)
// 6. Ative Authentication > E-mail/senha
// ─────────────────────────────────────────────────────────────

export const FIREBASE_CONFIG = {
  apiKey:            "COLE_AQUI",
  authDomain:        "COLE_AQUI",
  projectId:         "COLE_AQUI",
  storageBucket:     "COLE_AQUI",
  messagingSenderId: "COLE_AQUI",
  appId:             "COLE_AQUI"
};

/* Firestore collection paths */
export const COLLECTIONS = {
  users:      'users',       // perfis de usuário
  imoveis:    'imoveis',
  visitas:    'visitas',
  clientes:   'clientes',
  corretores: 'corretores',
  kanban:     'kanban',
  avaliacoes: 'avaliacoes',
  notifs:     'notificacoes',
  company:    'company',     // doc único: 'config'
  chat:       'chat',
};
