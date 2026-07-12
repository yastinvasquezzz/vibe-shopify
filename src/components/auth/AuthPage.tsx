import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';

type AuthTab = 'login' | 'register';

interface ValidationErrors {
  email?: string;
  password?: string;
  name?: string;
  confirmPassword?: string;
}

export const AuthPage = () => {
  const { isLoggedIn, login, logout, user, updateUser, setActiveView } = useStore();

  const [activeTab, setActiveTab] = useState<AuthTab>('login');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirm, setRegConfirm] = useState('');

  const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: ValidationErrors = {};

    if (!validateEmail(loginEmail)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
    }
    if (loginPassword.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const isAdmin = loginEmail.toLowerCase().includes('admin');
    updateUser({
      ...user,
      fullName: isAdmin ? 'Administrador Vibe' : 'Javier Vasquez',
      email: loginEmail,
      role: isAdmin ? 'admin' : 'customer'
    });
    login();
    setActiveView('home');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: ValidationErrors = {};

    if (!regName.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    if (!validateEmail(regEmail)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
    }
    if (regPassword.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    if (regPassword !== regConfirm) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const isAdmin = regEmail.toLowerCase().includes('admin');
    updateUser({
      ...user,
      fullName: regName,
      email: regEmail,
      role: isAdmin ? 'admin' : 'customer'
    });
    login();
    setActiveView('home');
  };

  const tabVariants = {
    hidden: { opacity: 0, x: activeTab === 'login' ? -20 : 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
    exit: { opacity: 0, x: activeTab === 'login' ? 20 : -20, transition: { duration: 0.2 } },
  };

  {/* --- SECTION: LOGGED_IN_VIEW --- */}
  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#030303] flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="glass max-w-md w-full mx-auto rounded-2xl p-8 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-500/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <h2 className="text-xl font-extrabold text-white tracking-tight mb-1">
            {user.fullName || 'Usuario'}
          </h2>
          <p className="text-sm text-zinc-400 mb-8">{user.email || 'sin correo'}</p>

          <div className="space-y-3 mb-8 text-left">
            <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-zinc-900/60 border border-zinc-800/50">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Nombre</span>
              <span className="text-sm text-white font-bold">{user.fullName || '—'}</span>
            </div>
            <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-zinc-900/60 border border-zinc-800/50">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Correo</span>
              <span className="text-sm text-white font-bold">{user.email || '—'}</span>
            </div>
          </div>

          <button
            onClick={logout}
            className="w-full py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-sm hover:bg-red-500/20 transition-all duration-200"
          >
            Cerrar Sesión
          </button>
        </motion.div>
      </div>
    );
  }

  {/* --- SECTION: AUTH_FORMS --- */}
  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="glass max-w-md w-full mx-auto rounded-2xl p-8"
      >
        {/* --- SECTION: LOGO --- */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent-500/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <rect x="9" y="10" width="6" height="6" rx="1" />
              <path d="M12 10V8" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            VIBE<span className="text-accent-400">.shop</span>
          </h1>
        </div>

        {/* --- SECTION: TABS --- */}
        <div className="relative flex mb-8 bg-zinc-900 rounded-xl p-1">
          {(['login', 'register'] as AuthTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setErrors({}); }}
              className={`relative z-10 flex-1 py-2.5 text-sm font-bold transition-colors duration-200 rounded-lg ${
                activeTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
              {activeTab === tab && (
                <motion.div
                  layoutId="auth-tab-indicator"
                  className="absolute inset-0 bg-accent-500/20 border border-accent-500/30 rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* --- SECTION: FORM_CONTENT --- */}
        <AnimatePresence mode="wait">
          {activeTab === 'login' ? (
            <motion.form
              key="login"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleLogin}
              className="space-y-5"
            >
              {/* --- SECTION: LOGIN_EMAIL --- */}
              <div>
                <label htmlFor="login-email" className="checkout-label">
                  Correo Electrónico
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="checkout-input"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 font-bold">{errors.email}</p>
                )}
              </div>

              {/* --- SECTION: LOGIN_PASSWORD --- */}
              <div>
                <label htmlFor="login-password" className="checkout-label">
                  Contraseña
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="checkout-input"
                />
                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-400 font-bold">{errors.password}</p>
                )}
              </div>

              {/* --- SECTION: REMEMBER --- */}
              <label htmlFor="remember-check" className="flex items-center gap-2.5 cursor-pointer group">
                <div className="relative">
                  <input
                    id="remember-check"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 peer-checked:bg-accent-500 peer-checked:border-accent-500 transition-all duration-200 flex items-center justify-center">
                    {remember && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  Recordar sesión
                </span>
              </label>

              {/* --- SECTION: LOGIN_SUBMIT --- */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm tracking-tight transition-all duration-200 hover:shadow-lg hover:shadow-accent-500/25"
              >
                Iniciar Sesión
              </button>

              <div className="pt-4 border-t border-zinc-900 text-center">
                <p className="text-[10px] text-zinc-500 leading-relaxed font-semibold uppercase tracking-wider">
                  💡 Tip: Usa el correo <span className="text-accent-400 font-mono">admin@vibe.shop</span> para iniciar sesión con privilegios de Administrador.
                </p>
              </div>
            </motion.form>
          ) : (
            <motion.form
              key="register"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleRegister}
              className="space-y-5"
            >
              {/* --- SECTION: REG_NAME --- */}
              <div>
                <label htmlFor="reg-name" className="checkout-label">
                  Nombre Completo
                </label>
                <input
                  id="reg-name"
                  type="text"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  placeholder="Tu nombre completo"
                  className="checkout-input"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 font-bold">{errors.name}</p>
                )}
              </div>

              {/* --- SECTION: REG_EMAIL --- */}
              <div>
                <label htmlFor="reg-email" className="checkout-label">
                  Correo Electrónico
                </label>
                <input
                  id="reg-email"
                  type="email"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="checkout-input"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 font-bold">{errors.email}</p>
                )}
              </div>

              {/* --- SECTION: REG_PASSWORD --- */}
              <div>
                <label htmlFor="reg-password" className="checkout-label">
                  Contraseña
                </label>
                <input
                  id="reg-password"
                  type="password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="checkout-input"
                />
                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-400 font-bold">{errors.password}</p>
                )}
              </div>

              {/* --- SECTION: REG_CONFIRM --- */}
              <div>
                <label htmlFor="reg-confirm" className="checkout-label">
                  Confirmar Contraseña
                </label>
                <input
                  id="reg-confirm"
                  type="password"
                  value={regConfirm}
                  onChange={(e) => setRegConfirm(e.target.value)}
                  placeholder="Repite tu contraseña"
                  className="checkout-input"
                />
                {errors.confirmPassword && (
                  <p className="mt-1.5 text-xs text-red-400 font-bold">{errors.confirmPassword}</p>
                )}
              </div>

              {/* --- SECTION: REG_SUBMIT --- */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm tracking-tight transition-all duration-200 hover:shadow-lg hover:shadow-accent-500/25"
              >
                Crear Cuenta
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AuthPage;
