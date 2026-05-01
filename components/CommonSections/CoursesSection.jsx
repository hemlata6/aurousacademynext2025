'use client';

import { AppBar, Box, Button, Card, CardContent, Chip, Dialog, Divider, Stack, Tab, Tabs, Typography, useMediaQuery, Container, Fade, Zoom } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react'
import Grid from '@mui/material/Grid2';
import images from '@/lib/images';
import CheckIcon from '@mui/icons-material/Check';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ContactUs from './ContactUs';
import { useCourse } from '@/context/CourseContext';

const CoursesSection = () => {

  const { selectedCourse: item, isLoading } = useCourse();
  const isMobile = useMediaQuery("(min-width:600px)");
  const [isVisible, setIsVisible] = useState(false);
  const mockTestRef = useRef(null);
  const courseDescriptionRef = useRef(null);
  const plannerRef = useRef(null);
  const subjectRef = useRef(null);
  const ClassroomRef = useRef(null);
  const [openContactUs, setOpenContactUs] = React.useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to scroll to the respective section
  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOpenContactUs = (event) => {
    setOpenContactUs(true);
    event.stopPropagation();
  };

  if (isLoading) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h5" color="textSecondary" align="center">
          Loading course details...
        </Typography>
      </Container>
    );
  }

  if (!item) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h5" color="error" align="center">
          Please select a course from the programs page
        </Typography>
      </Container>
    );
  }

  const planner = images.plannerIcon;
  const mockImg = images.mock;
  const subject = images.subjects;
  const schedule = images.schedule;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 }, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Fade in={isVisible} timeout={800}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' },
                    fontWeight: 700,
                    mb: 2,
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    lineHeight: 1.2,
                  }}
                >
                  {item?.name}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    fontWeight: 400,
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.6,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {item?.description1}
                </Typography>
              </Box>
            </Fade>
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box
              sx={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '24px',
                p: { xs: 2, md: 3 },
                mb: 4,
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: { xs: 2, md: 1 },
                  flexWrap: 'nowrap',
                  width: '100%',
                  alignItems: { xs: 'center', md: 'stretch' },
                  justifyContent: { xs: 'center', md: 'space-between' }
                }}
              >
                {/* Course Description Button */}
                <Fade in={isVisible} timeout={600}>
                  <Box
                    onClick={() => handleScroll(courseDescriptionRef)}
                    sx={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '16px',
                      p: { xs: 1.5, md: 1 },
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', md: 'center' },
                      flexDirection: { xs: 'row', md: 'column' },
                      gap: { xs: 1.5, md: 0.5 },
                      minHeight: { xs: '60px', md: '70px' },
                      width: { xs: 'calc(100% - 32px)', md: '20%' },
                      maxWidth: { xs: '300px', md: 'none' },
                      flex: { md: '1' },
                      textAlign: 'center',
                      margin: { xs: '0 auto', md: '0' },
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        '& .nav-icon': { color: 'white' },
                        '& .nav-text': { color: 'white' }
                      }
                    }}
                  >
                    <MenuBookIcon className="nav-icon" sx={{
                      fontSize: { xs: 20, md: 14 },
                      color: '#667eea',
                      transition: 'color 0.3s ease',
                      flexShrink: 0
                    }} />
                    <Typography
                      className="nav-text"
                      sx={{
                        color: '#1e293b',
                        fontSize: { xs: '0.9rem', md: '0.75rem' },
                        fontWeight: 600,
                        transition: 'color 0.3s ease',
                        lineHeight: { xs: 1.3, md: 1.1 },
                        textAlign: { xs: 'left', md: 'center' },
                        whiteSpace: { xs: 'nowrap', md: 'normal' },
                        overflow: { xs: 'hidden', md: 'visible' },
                        textOverflow: { xs: 'ellipsis', md: 'initial' },
                      }}
                    >
                      Course Description
                    </Typography>
                  </Box>
                </Fade>

                {/* Program Planner Button */}
                <Fade in={isVisible} timeout={700}>
                  <Box
                    onClick={() => handleScroll(plannerRef)}
                    sx={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '16px',
                      p: { xs: 1.5, md: 1 },
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', md: 'center' },
                      flexDirection: { xs: 'row', md: 'column' },
                      gap: { xs: 1.5, md: 0.5 },
                      minHeight: { xs: '60px', md: '70px' },
                      width: { xs: 'calc(100% - 32px)', md: '20%' },
                      maxWidth: { xs: '300px', md: 'none' },
                      flex: { md: '1' },
                      textAlign: 'center',
                      margin: { xs: '0 auto', md: '0' },
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        '& .nav-icon': { color: 'white' },
                        '& .nav-text': { color: 'white' }
                      }
                    }}
                  >
                    <SchoolIcon className="nav-icon" sx={{
                      fontSize: { xs: 20, md: 14 },
                      color: '#f093fb',
                      transition: 'color 0.3s ease',
                      flexShrink: 0
                    }} />
                    <Typography
                      className="nav-text"
                      sx={{
                        color: '#1e293b',
                        fontSize: { xs: '0.9rem', md: '0.75rem' },
                        fontWeight: 600,
                        transition: 'color 0.3s ease',
                        lineHeight: { xs: 1.3, md: 1.1 },
                        textAlign: { xs: 'left', md: 'center' },
                        whiteSpace: { xs: 'nowrap', md: 'normal' },
                        overflow: { xs: 'hidden', md: 'visible' },
                        textOverflow: { xs: 'ellipsis', md: 'initial' },
                      }}
                    >
                      Program Planner
                    </Typography>
                  </Box>
                </Fade>

                {/* Mock Test Button */}
                <Fade in={isVisible} timeout={800}>
                  <Box
                    onClick={() => handleScroll(mockTestRef)}
                    sx={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '16px',
                      p: { xs: 1.5, md: 1 },
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', md: 'center' },
                      flexDirection: { xs: 'row', md: 'column' },
                      gap: { xs: 1.5, md: 0.5 },
                      minHeight: { xs: '60px', md: '70px' },
                      width: { xs: 'calc(100% - 32px)', md: '20%' },
                      maxWidth: { xs: '300px', md: 'none' },
                      flex: { md: '1' },
                      textAlign: 'center',
                      margin: { xs: '0 auto', md: '0' },
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        '& .nav-icon': { color: 'white' },
                        '& .nav-text': { color: 'white' }
                      }
                    }}
                  >
                    <QuizIcon className="nav-icon" sx={{
                      fontSize: { xs: 20, md: 14 },
                      color: '#4facfe',
                      transition: 'color 0.3s ease',
                      flexShrink: 0
                    }} />
                    <Typography
                      className="nav-text"
                      sx={{
                        color: '#1e293b',
                        fontSize: { xs: '0.9rem', md: '0.75rem' },
                        fontWeight: 600,
                        transition: 'color 0.3s ease',
                        lineHeight: { xs: 1.3, md: 1.1 },
                        textAlign: { xs: 'left', md: 'center' },
                        whiteSpace: { xs: 'nowrap', md: 'normal' },
                        overflow: { xs: 'hidden', md: 'visible' },
                        textOverflow: { xs: 'ellipsis', md: 'initial' },
                      }}
                    >
                      Mock Test & Practice Papers
                    </Typography>
                  </Box>
                </Fade>

                {/* Subjects Button */}
                <Fade in={isVisible} timeout={900}>
                  <Box
                    onClick={() => handleScroll(subjectRef)}
                    sx={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '16px',
                      p: { xs: 1.5, md: 1 },
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', md: 'center' },
                      flexDirection: { xs: 'row', md: 'column' },
                      gap: { xs: 1.5, md: 0.5 },
                      minHeight: { xs: '60px', md: '70px' },
                      width: { xs: 'calc(100% - 32px)', md: '20%' },
                      maxWidth: { xs: '300px', md: 'none' },
                      flex: { md: '1' },
                      textAlign: 'center',
                      margin: { xs: '0 auto', md: '0' },
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        '& .nav-icon': { color: 'white' },
                        '& .nav-text': { color: 'white' }
                      }
                    }}
                  >
                    <MenuBookIcon className="nav-icon" sx={{
                      fontSize: { xs: 20, md: 14 },
                      color: '#43e97b',
                      transition: 'color 0.3s ease',
                      flexShrink: 0
                    }} />
                    <Typography
                      className="nav-text"
                      sx={{
                        color: '#1e293b',
                        fontSize: { xs: '0.9rem', md: '0.75rem' },
                        fontWeight: 600,
                        transition: 'color 0.3s ease',
                        lineHeight: { xs: 1.3, md: 1.1 },
                        textAlign: { xs: 'left', md: 'center' },
                        whiteSpace: { xs: 'nowrap', md: 'normal' },
                        overflow: { xs: 'hidden', md: 'visible' },
                        textOverflow: { xs: 'ellipsis', md: 'initial' },
                      }}
                    >
                      Subjects
                    </Typography>
                  </Box>
                </Fade>

                {/* Class Schedule Button */}
                <Fade in={isVisible} timeout={1000}>
                  <Box
                    onClick={() => handleScroll(ClassroomRef)}
                    sx={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '16px',
                      p: { xs: 1.5, md: 1 },
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', md: 'center' },
                      flexDirection: { xs: 'row', md: 'column' },
                      gap: { xs: 1.5, md: 0.5 },
                      minHeight: { xs: '60px', md: '70px' },
                      width: { xs: 'calc(100% - 32px)', md: '20%' },
                      maxWidth: { xs: '300px', md: 'none' },
                      flex: { md: '1' },
                      textAlign: 'center',
                      margin: { xs: '0 auto', md: '0' },
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        '& .nav-icon': { color: 'white' },
                        '& .nav-text': { color: 'white' }
                      }
                    }}
                  >
                    <ScheduleIcon className="nav-icon" sx={{
                      fontSize: { xs: 20, md: 14 },
                      color: '#fa709a',
                      transition: 'color 0.3s ease',
                      flexShrink: 0
                    }} />
                    <Typography
                      className="nav-text"
                      sx={{
                        color: '#1e293b',
                        fontSize: { xs: '0.9rem', md: '0.75rem' },
                        fontWeight: 600,
                        transition: 'color 0.3s ease',
                        lineHeight: { xs: 1.3, md: 1.1 },
                        textAlign: { xs: 'left', md: 'center' },
                        whiteSpace: { xs: 'nowrap', md: 'normal' },
                        overflow: { xs: 'hidden', md: 'visible' },
                        textOverflow: { xs: 'ellipsis', md: 'initial' },
                      }}
                    >
                      Class Schedule
                    </Typography>
                  </Box>
                </Fade>
              </Box>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            ref={courseDescriptionRef}
          >
            <Fade in={isVisible} timeout={1200}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '24px',
                  p: { xs: 3, md: 4 },
                  mb: 4,
                }}
              >
                <Typography
                  component="div"
                  sx={{
                    color: '#1e293b',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 700,
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    <MenuBookIcon />
                  </Box>
                  Course Description
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Typography
                    sx={{
                      color: '#475569',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.8,
                      textAlign: 'justify',
                    }}
                  >
                    {item?.description2}
                  </Typography>

                  {item?.description3 && (
                    <Typography
                      sx={{
                        color: '#475569',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.8,
                        textAlign: 'justify',
                      }}
                    >
                      {item?.description3}
                    </Typography>
                  )}

                  {item?.description4 && (
                    <Typography
                      sx={{
                        color: '#475569',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.8,
                        textAlign: 'justify',
                      }}
                    >
                      {item?.description4}
                    </Typography>
                  )}

                  {item?.description5 && (
                    <Typography
                      sx={{
                        color: '#475569',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.8,
                        textAlign: 'justify',
                      }}
                    >
                      {item?.description5}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Fade>
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            ref={plannerRef}
          >
            <Fade in={isVisible} timeout={1400}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  p: { xs: 3, md: 4 },
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    borderRadius: '20px',
                    p: 2,
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    width: 'fit-content',
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img alt='Program planner icon' style={{ width: '20px', height: '20px' }} src={planner} />
                  </Box>
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: { xs: '1.2rem', md: '1.4rem' },
                      fontWeight: 700,
                    }}
                  >
                    Program Planner
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {item?.programPlanner?.map((planItem, i) => (
                    <Fade key={i} in={isVisible} timeout={1600 + (i * 200)}>
                      <Box
                        sx={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '16px',
                          p: 3,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 3,
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(10px)',
                          }
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 50, md: 60 },
                            height: { xs: 50, md: 60 },
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <img
                            alt={`Program planner step: ${planItem?.des || 'Course milestone'}`}
                            style={{
                              width: planItem?.id === 32 ? '30px' : '35px',
                              height: planItem?.id === 32 ? '30px' : '35px',
                              filter: 'brightness(0) invert(1)'
                            }}
                            src={planItem?.img}
                          />
                        </Box>
                        <Typography
                          sx={{
                            color: 'white',
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            fontWeight: 500,
                            lineHeight: 1.6,
                          }}
                        >
                          {planItem?.des}
                        </Typography>
                      </Box>
                    </Fade>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            ref={mockTestRef}
          >
            <Fade in={isVisible} timeout={1800}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  p: { xs: 3, md: 4 },
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    borderRadius: '20px',
                    p: 2,
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    width: 'fit-content',
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img alt='Mock test icon' style={{ width: '20px', height: '20px' }} src={mockImg} />
                  </Box>
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: { xs: '1.2rem', md: '1.4rem' },
                      fontWeight: 700,
                    }}
                  >
                    Mock Test & Practice Papers
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {item?.mocktest?.map((mockItem, i) => (
                    <Fade key={i} in={isVisible} timeout={2000 + (i * 150)}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 2,
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(10px)',
                          }
                        }}
                      >
                        <CheckIcon
                          sx={{
                            color: '#4ade80',
                            fontSize: { xs: 20, md: 24 },
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            color: 'white',
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            lineHeight: 1.6,
                          }}
                        >
                          {mockItem?.des}
                        </Typography>
                      </Box>
                    </Fade>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Grid>

          <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            ref={subjectRef}
          >
            <Fade in={isVisible} timeout={2200}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  p: { xs: 3, md: 4 },
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                    borderRadius: '20px',
                    p: 2,
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    width: 'fit-content',
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img alt='Subjects icon' style={{ width: '20px', height: '20px' }} src={subject} />
                  </Box>
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: { xs: '1.2rem', md: '1.4rem' },
                      fontWeight: 700,
                    }}
                  >
                    Subjects
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {item?.subjects?.map((subjectItem, i) => (
                    <Fade key={i} in={isVisible} timeout={2400 + (i * 150)}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 2,
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(10px)',
                          }
                        }}
                      >
                        <CheckIcon
                          sx={{
                            color: '#4ade80',
                            fontSize: { xs: 20, md: 24 },
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            color: 'white',
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            lineHeight: 1.6,
                          }}
                        >
                          {subjectItem?.des}
                        </Typography>
                      </Box>
                    </Fade>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Grid>
          {
            item?.classSchedule?.length > 0 && (
              <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                ref={ClassroomRef}
              >
                <Fade in={isVisible} timeout={2600}>
                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '24px',
                      p: { xs: 3, md: 4 },
                      mb: 4,
                    }}
                  >
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                        borderRadius: '20px',
                        p: 2,
                        mb: 4,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        width: 'fit-content',
                      }}
                    >
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img alt='Class schedule icon' style={{ width: '20px', height: '20px' }} src={schedule} />
                      </Box>
                      <Typography
                        sx={{
                          color: 'white',
                          fontSize: { xs: '1.2rem', md: '1.4rem' },
                          fontWeight: 700,
                        }}
                      >
                        Class Schedule
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {item?.classSchedule?.map((scheduleItem, i) => (
                        <Fade key={i} in={isVisible} timeout={2800 + (i * 150)}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              p: 2,
                              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                              borderRadius: '12px',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              transition: 'transform 0.3s ease',
                              '&:hover': {
                                transform: 'translateX(10px)',
                              }
                            }}
                          >
                            <CheckIcon
                              sx={{
                                color: '#4ade80',
                                fontSize: { xs: 20, md: 24 },
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              sx={{
                                color: 'white',
                                fontSize: { xs: '0.95rem', md: '1.1rem' },
                                lineHeight: 1.6,
                              }}
                            >
                              {scheduleItem?.des}
                            </Typography>
                          </Box>
                        </Fade>
                      ))}
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            )
          }

          <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }} py={2}
            display={'flex'}
            justifyContent={'center'}
          >
            <Zoom in={isVisible} timeout={3000}>
              <Button
                onClick={() => handleOpenContactUs()}
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  px: { xs: 4, md: 6 },
                  py: { xs: 1.5, md: 2 },
                  borderRadius: '50px',
                  minWidth: { xs: '200px', md: '250px' },
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                  },
                }}
              >
                Enquiry Now
              </Button>
            </Zoom>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={openContactUs}
        onClose={(e) => setOpenContactUs(false)}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "400px",
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            },
          },
          "& .MuiBackdrop-root": {
            backdropFilter: 'blur(5px)',
          }
        }}
      >
        <ContactUs handleClose={(e) => setOpenContactUs(false)} />
      </Dialog>
    </Box>
  )
}

export default CoursesSection


