import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    // Always set dark theme as default
    setIsDark(true);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // Keep dark theme only - no toggle functionality
    setIsDark(true);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};