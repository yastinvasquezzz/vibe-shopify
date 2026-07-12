import { Component, type ErrorInfo, type ReactNode } from 'react';
import { ShieldAlert } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 mb-6">
            <ShieldAlert size={28} />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight mb-2">Algo salió mal</h1>
          <p className="text-zinc-550 text-sm max-w-sm mb-6">
            Ocurrió un error inesperado al procesar la interfaz. Por favor, refresca la página o regresa al catálogo.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white transition-all shadow-lg"
          >
            Refrescar Página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
