'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

const RevealObserverContext = createContext<IntersectionObserver | null>(null);

export const RevealObserverProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.dispatchEvent(new CustomEvent('reveal-visible'));
        }
      });
    });
    setObserver(obs);
    return () => obs.disconnect();
  }, []);
  return (
    <RevealObserverContext.Provider  value={observer}>
      {children}
    </RevealObserverContext.Provider>
  );
};

export const useRevealObserver = () => useContext(RevealObserverContext);