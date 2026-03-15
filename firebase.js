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
apiKey: "AIzaSyBftPck1xyz4ZIiyNxWaiNBpDeEoSv91sg",
  authDomain: "agenda-online-hn.firebaseapp.com",
  projectId: "agenda-online-hn",
  storageBucket: "agenda-online-hn.firebasestorage.app",
  messagingSenderId: "848852820918",
  appId: "1:848852820918:web:fd37176261c19ac740d717",
  measurementId: "G-L2R944HQ68"

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
