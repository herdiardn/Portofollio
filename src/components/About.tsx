import React from 'react';
import { Download, Award, Briefcase, ChevronDown, Code, Sparkles } from 'lucide-react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, Chip } from '@mui/material';
import { about } from '../data/portfolioData';

const About: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Herdi Ardana.pdf';
    link.download = 'CV_Herdi Ardana.pdf';
    link.click();
};


  const scrollToPortofolio = () => {
    const portofolioSection = document.getElementById('portfolio');
    if (portofolioSection) {
      portofolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#111827'
      }}
    >
      {/* Background Decorations */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '80px',
            right: '40px',
            width: '256px',
            height: '256px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
            borderRadius: '50%',
            filter: 'blur(48px)'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '80px',
            left: '40px',
            width: '256px',
            height: '256px',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
            borderRadius: '50%',
            filter: 'blur(48px)'
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', mb: 2 }}>
            <Sparkles size={32} color="#2563eb" style={{ marginRight: '12px', animation: 'pulse 2s ease-in-out infinite' }} />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem' },
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #2563eb, #8b5cf6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              About Me
            </Typography>
            <Sparkles size={32} color="#8b5cf6" style={{ marginLeft: '12px', animation: 'pulse 2s ease-in-out infinite', animationDelay: '0.5s' }} />
          </Box>
          <Box
            sx={{
              width: '96px',
              height: '4px',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              mx: 'auto',
              borderRadius: '9999px'
            }}
          />
        </Box>

        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    left: '-16px',
                    top: 0,
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)',
                    borderRadius: '9999px'
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1.125rem',
                    color: '#9ca3af',
                    lineHeight: 1.6,
                    pl: 4
                  }}
                >
                  {about.description}
                </Typography>
              </Box>

              <Box sx={{ pl: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Code size={24} color="#2563eb" style={{ marginRight: '12px' }} />
                  Core Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {about.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      sx={{
                        px: 2,
                        py: 1,
                        bgcolor: 'rgba(37, 99, 235, 0.3)',
                        color: '#93c5fd',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        border: '1px solid rgba(29, 78, 216, 0.5)',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ pl: 4, display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Button
                  onClick={handleDownloadCV}
                  sx={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 4,
                    py: 2,
                    background: 'linear-gradient(to right, #374151, #111827)',
                    color: 'white',
                    fontWeight: 600,
                    borderRadius: '12px',
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
                      background: 'linear-gradient(to right, #2563eb, #8b5cf6)',
                      opacity: 0,
                      transition: 'opacity 0.3s'
                    }
                  }}
                >
                  <Download size={20} style={{ marginRight: '12px', position: 'relative', zIndex: 1 }} />
                  <Typography component="span" sx={{ position: 'relative', zIndex: 1 }}>
                    Download CV
                  </Typography>
                </Button>

                <Button
                  onClick={scrollToPortofolio}
                  sx={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 5,
                    py: 2,
                    background: 'linear-gradient(to right, #2563eb, #8b5cf6, #ec4899)',
                    color: 'white',
                    fontWeight: 600,
                    borderRadius: '12px',
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
                    View Project
                  </Typography>
                  <ChevronDown size={20} style={{ marginLeft: '12px', position: 'relative', zIndex: 1, animation: 'bounce 1s infinite' }} />
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {about.stats.map((stat, index) => {
                const icons = [Code, Briefcase, Award];
                const Icon = icons[index];
                const gradients = [
                  'linear-gradient(to right, #3b82f6, #06b6d4)',
                  'linear-gradient(to right, #8b5cf6, #ec4899)',
                  'linear-gradient(to right, #f97316, #ef4444)'
                ];
                
                return (
                  <Card
                    key={index}
                    sx={{
                      position: 'relative',
                      bgcolor: 'rgba(31, 41, 55, 0.8)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '16px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(75, 85, 99, 0.5)',
                      transition: 'all 0.3s',
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
                        background: 'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(139, 92, 246, 0.2))',
                        borderRadius: '16px',
                        opacity: 0,
                        transition: 'opacity 0.3s'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                        <Box
                          sx={{
                            p: 2,
                            background: gradients[index],
                            borderRadius: '12px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            mr: 3,
                            transition: 'transform 0.3s',
                            '&:hover': {
                              transform: 'scale(1.1)'
                            }
                          }}
                        >
                          <Icon size={32} color="white" />
                        </Box>
                        <Box>
                          <Typography
                            variant="h3"
                            sx={{
                              fontSize: '2.25rem',
                              fontWeight: 'bold',
                              background: 'linear-gradient(to right, #ffffff, #d1d5db)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              color: 'transparent'
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: '#9ca3af',
                              fontWeight: 500,
                              fontSize: '1.125rem'
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;