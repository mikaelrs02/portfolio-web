import { useState, useEffect } from 'react';
import Header from './components/Header/header';
import './global.scss';

export default function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);  // Mantém o estado de carregamento

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);  // Limpa o intervalo quando atingir 100%
            return 100;
          }
          return prev + 2;  
        });
      }, 120);  // Acelera o progresso
    }

    // Quando o progresso atingir 100%, define o estado de carregamento como false
    if (progress === 100) {
      setTimeout(() => {
        setLoading(false);  // Finaliza o carregamento após o progresso chegar a 100%
      }, 500);  // Um pequeno atraso antes de mudar para o conteúdo real
    }
  }, [progress]);  // Atualiza sempre que o progresso muda

  if (loading) {
    return (
      <div className="loading-container">
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}  // Controla a largura da barra
          ></div>
        </div>
        <p className="loading-text">Carregando... {progress}%</p>
      </div>
    );
  }

  return (
    <>
      <Header />
    </>
  );
}
