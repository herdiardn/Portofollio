import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Instagram, ChevronDown, Sparkles } from 'lucide-react';
import { Box, Typography, Button, IconButton, Container } from '@mui/material';
import { personalInfo } from '../data/portfolioData';
import ProfileImage from '../assets/Profile.png';


const Home: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = ['Software Engineer', 'Full-Stack Developer', 'UI/UX Designer'];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentRoleIndex, roles]);

  const socialLinks = [
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: '#ef4444' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#2563eb' },
    { icon: Github, href: personalInfo.github, label: 'GitHub', color: '#ffffff' },
    { icon: Instagram, href: personalInfo.instagram, label: 'Instagram', color: '#ec4899' }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Static particles array to prevent re-rendering
  const particles = React.useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    })), []
  );

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #111827 0%, #1e3a8a 50%, #581c87 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '-160px',
            right: '-160px',
            width: '320px',
            height: '320px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
            borderRadius: '50%',
            filter: 'blur(48px)',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-160px',
            left: '-160px',
            width: '320px',
            height: '320px',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))',
            borderRadius: '50%',
            filter: 'blur(48px)',
            animation: 'pulse 2s ease-in-out infinite',
            animationDelay: '1s'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '384px',
            height: '384px',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: '50%',
            filter: 'blur(48px)',
            animation: 'pulse 2s ease-in-out infinite',
            animationDelay: '0.5s'
          }}
        />
      </Box>

      {/* Floating Particles - Fixed to prevent re-rendering */}
      <Box sx={{ position: 'absolute', inset: 0 }}>
        {particles.map((particle) => (
          <Box
            key={particle.id}
            sx={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              bgcolor: 'rgba(147, 197, 253, 0.3)',
              borderRadius: '50%',
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: 'float 6s ease-in-out infinite',
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 10, mt: 12 }}>
        <Box sx={{ animation: 'fadeInUp 1s ease-out' }}>
          <Box sx={{ mb: 4 }}>
            {/* Profile Avatar with Glow Effect */}
            <Box sx={{ position: 'relative', width: '160px', height: '160px', mx: 'auto', mb: 2 }}>
              <Box
                sx={{
                  position: 'absolute',
                  borderRadius: '50%',
                }}
              />
              <Box
                component="img"
                src={ProfileImage}
                alt="Profile"
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              />

              <Box sx={{ position: 'absolute', top: '-8px', right: '-8px' }}>
                <Sparkles size={32} color="#fbbf24" style={{ animation: 'spin 3s linear infinite' }} />
              </Box>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.75rem', lg: '3.5rem' },
                fontWeight: 'bold',
                mb: 2,
                background: 'linear-gradient(to right, #2563eb, #8b5cf6, #ec4899)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              {personalInfo.name}
            </Typography>
            
            <Box sx={{ position: 'relative', mb: 3 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.875rem' },
                  fontWeight: 600,
                  color: '#d1d5db',
                  mb: 1
                }}
              >
                I'm a{' '}
                <Box component="span" sx={{ position: 'relative' }}>
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(to right, #2563eb, #8b5cf6)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      minHeight: '1.2em',
                      display: 'inline-block'
                    }}
                  >
                    {displayedText}
                    <Box component="span" sx={{ animation: 'pulse 1s ease-in-out infinite' }}>|</Box>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(to right, #2563eb, #8b5cf6)',
                      borderRadius: '9999px'
                    }}
                  />
                </Box>
              </Typography>
            </Box>
            
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.125rem', sm: '1.25rem' },
                color: '#9ca3af',
                maxWidth: '1000px',
                mx: 'auto',
                lineHeight: 1.6,
                mb: 4
              }}
            >
              {personalInfo.description}
            </Typography>
          </Box>

          {/* Social Links with Enhanced Design */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 6 }}>
            {socialLinks.map((link, index) => (
              <IconButton
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                sx={{
                  p: 2,
                  bgcolor: 'rgba(31, 41, 55, 0.8)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1) translateY(-8px)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    color: link.color,
                    '&::before': {
                      opacity: 1
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(139, 92, 246, 0.2))',
                    borderRadius: '16px',
                    opacity: 0,
                    transition: 'opacity 0.3s'
                  },
                  '& svg': {
                    position: 'relative',
                    zIndex: 1,
                    color: '#9ca3af',
                    transition: 'color 0.3s'
                  }
                }}
              >
                <link.icon size={28} />
              </IconButton>
            ))}
          </Box>

          {/* CTA Button with Enhanced Design */}
          <Button
            onClick={scrollToAbout}
            sx={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              px: 5,
              py: 2,
              mb: 5,
              background: 'linear-gradient(to right, #2563eb, #8b5cf6, #ec4899)',
              color: 'white',
              fontWeight: 600,
              borderRadius: '9999px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              transition: 'all 0.3s',
              overflow: 'hidden',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                '&::before': {
                  opacity: 1
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, #1d4ed8, #7c3aed, #db2777)',
                opacity: 0,
                transition: 'opacity 0.3s'
              }
            }}
          >
            <Typography component="span" sx={{ position: 'relative', zIndex: 1 }}>
              Let's Connect
            </Typography>
            <ChevronDown size={20} style={{ marginLeft: '12px', position: 'relative', zIndex: 1, animation: 'bounce 1s infinite' }} />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;