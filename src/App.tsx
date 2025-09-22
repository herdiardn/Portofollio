import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as CustomThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

// Create MUI dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#8b5cf6',
    },
    background: {
      default: '#111827',
      paper: '#1f2937',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomThemeProvider>
        <div className="App transition-colors duration-300">
          <Header />
          <main>
            <Home />
            <About />
            <Skills />
            <Experience />
            <Portfolio />
            <Contact />
          </main>
          
          {/* Footer */}
          <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Herdi Ardana
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  © 2025 Herdi Ardana. Built with React & TypeScript. Designed with passion.
                </p>
                <div className="flex justify-center items-center space-x-2 text-sm text-gray-400">
                  <span>Made with</span>
                  <span className="text-red-400 animate-pulse">❤️</span>
                  <span>and lots of</span>
                  <span className="text-yellow-400">☕</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </CustomThemeProvider>
    </ThemeProvider>
  );
}

export default App;