import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Box, Typography, Button, IconButton, Drawer, List, ListItem } from '@mui/material';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bgcolor: 'rgba(17, 24, 39, 0.8)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        zIndex: 50,
        borderBottom: '1px solid rgba(75, 85, 99, 0.2)'
      }}
    >
      <Box sx={{ maxWidth: '1280px', mx: 'auto', px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #2563eb, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Herdi Ardana
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.3s',
                  ...(activeSection === item.id
                    ? {
                        color: 'white',
                        background: 'linear-gradient(to right, #2563eb, #8b5cf6)',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                      }
                    : {
                        color: '#d1d5db',
                        '&:hover': {
                          color: '#60a5fa',
                          bgcolor: 'rgba(31, 41, 55, 1)'
                        }
                      })
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile menu button */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              sx={{
                color: '#d1d5db',
                '&:hover': {
                  color: '#60a5fa',
                  bgcolor: 'rgba(31, 41, 55, 1)'
                }
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="top"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            bgcolor: 'rgba(17, 24, 39, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(75, 85, 99, 0.2)',
            mt: '72px'
          }
        }}
      >
        <List sx={{ py: 1 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} sx={{ px: 2 }}>
              <Button
                onClick={() => scrollToSection(item.id)}
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  transition: 'all 0.3s',
                  ...(activeSection === item.id
                    ? {
                        color: 'white',
                        background: 'linear-gradient(to right, #2563eb, #8b5cf6)'
                      }
                    : {
                        color: '#d1d5db',
                        '&:hover': {
                          color: '#60a5fa',
                          bgcolor: 'rgba(31, 41, 55, 1)'
                        }
                      })
                }}
              >
                {item.label}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;