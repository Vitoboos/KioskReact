// ScaleContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';

interface ScaleContextType {
  dpr: number;
  scale: number;     
  cssWidth: number;   
  cssHeight: number;
  physicalWidth: number;
  physicalHeight: number;
}

const ScaleContext = createContext<ScaleContextType>({
  dpr: 1,
  scale: 1,
  cssWidth: 1920,
  cssHeight: 1080,
  physicalWidth: 1920,
  physicalHeight: 1080,
});

export function ScaleProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ScaleContextType>(() => {
    const dpr = window.devicePixelRatio || 1;
    return {
      dpr,
      scale: 1 / dpr,
      cssWidth: window.innerWidth,
      cssHeight: window.innerHeight,
      physicalWidth: window.innerWidth * dpr,
      physicalHeight: window.innerHeight * dpr,
    };
  });

  
  useEffect(() => {
    const update = () => {
      const dpr = window.devicePixelRatio || 1;
      setState({
        dpr,
        scale: 1 / dpr,
        cssWidth: window.innerWidth,
        cssHeight: window.innerHeight,
        physicalWidth: window.innerWidth * dpr,
        physicalHeight: window.innerHeight * dpr,
      });
    };

    window.addEventListener('resize', update);
    const mq = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    mq.addEventListener('change', update);

    return () => {
      window.removeEventListener('resize', update);
      mq.removeEventListener('change', update);
    };
  }, []);

  return (
    <ScaleContext.Provider value={state}>
      {children}
    </ScaleContext.Provider>
  );
}

export const useScale = () => useContext(ScaleContext);
