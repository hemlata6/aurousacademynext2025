import { AppBar, Box, Button, Card, Chip, Divider, Stack, Tab, Tabs, Typography, useMediaQuery, Container, Fade } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
// import Class11thCourses from './Class11thCourses';
// import Class12thCourses from './Class12thCourses';
// import Class12thDropperCourses from './Class12thDropper';
import CheckIcon from '@mui/icons-material/Check';
import Class8thFoundationCourses from './Class8thCourses';
import Class9thFoundationCourses from './Class9thCourses';
import Class10thFoundationCourses from './Class10thCourses';
import Class7thFoundationCourses from './Class7thCourses';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const FoundationSection1 = () => {

  const isMobile = useMediaQuery("(max-width:768px)");
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState('Class 7th');

  const courseButtons = [
    {
      id: 'Class 7th',
      label: 'Class 7th',
      icon: <SchoolIcon />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      hoverGradient: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
    },
    {
      id: 'Class 8th',
      label: 'Class 8th',
      icon: <SchoolIcon />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      hoverGradient: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
    },
    {
      id: 'Class 9th',
      label: 'Class 9th',
      icon: <MenuBookIcon />,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      hoverGradient: 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)'
    },
    {
      id: 'Class 10th',
      label: 'Class 10th',
      icon: <AutoStoriesIcon />,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      hoverGradient: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)'
    }
  ];

  const handleChange = (event, newValue) => {
    setSelectedCourse(newValue);
  };

  const renderComponent = () => {
    switch (selectedCourse) {
      case "Class 7th":
        return <Class7thFoundationCourses />;
      case "Class 8th":
        return <Class8thFoundationCourses />;
      case "Class 9th":
        return <Class9thFoundationCourses />;
      case "Class 10th":
        return <Class10thFoundationCourses />;
      default:
        return <Class7thFoundationCourses />;
    }
  };

  const handleSelectCourse = (e, item) => {
    setSelectedCourse(item);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        py: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 30%, rgba(103, 126, 234, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.1) 0%, transparent 50%)`,
          pointerEvents: 'none',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 4,
            opacity: 0.8,
          }}
        >
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <HomeIcon sx={{ color: '#667eea', fontSize: 20 }} />
          </a>
          <ChevronRightIcon sx={{ color: '#667eea', fontSize: 16 }} />
          <Typography variant="body2" sx={{ color: '#667eea', fontWeight: 500 }}>
            Foundation
          </Typography>
        </Box>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Foundation
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 400,
            }}
          >
            To build a strong academic base early, Aurous Academy offers Foundation Batches for Classes 7, 8, 9, and 10, focusing on strengthening core concepts and problem-solving skills while preparing students for future competitive exams like JEE, NEET, and Olympiads.
          </Typography>
        </Box>

        {/* Course Selection Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 3 },
              p: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            {courseButtons.map((course) => (
              <Button
                key={course.id}
                onClick={(e) => handleChange(e, course.id)}
                sx={{
                  minWidth: { xs: '280px', sm: '180px' },
                  height: '60px',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: selectedCourse === course.id
                    ? course.gradient
                    : 'rgba(255, 255, 255, 0.8)',
                  color: selectedCourse === course.id ? 'white' : '#475569',
                  border: 'none',
                  boxShadow: selectedCourse === course.id
                    ? '0 8px 25px rgba(0, 0, 0, 0.15)'
                    : '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transform: selectedCourse === course.id ? 'translateY(-2px)' : 'translateY(0)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    background: selectedCourse === course.id
                      ? course.hoverGradient
                      : 'rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transition: 'left 0.5s',
                  },
                  '&:hover::before': {
                    left: '100%',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: selectedCourse === course.id
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(103, 126, 234, 0.1)',
                    color: selectedCourse === course.id ? 'white' : '#667eea',
                    fontSize: '1.2rem',
                  }}
                >
                  {course.icon}
                </Box>
                {course.label}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Course Content */}
        <Fade in timeout={800}>
          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: courseButtons.find(c => c.id === selectedCourse)?.gradient || courseButtons[0].gradient,
              },
            }}
          >
            <Box sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant="h4"
                sx={{
                  color: '#1e293b',
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2rem' },
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
                    background: courseButtons.find(c => c.id === selectedCourse)?.gradient || courseButtons[0].gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  {courseButtons.find(c => c.id === selectedCourse)?.icon || courseButtons[0].icon}
                </Box>
                {selectedCourse} Courses
              </Typography>
              {renderComponent()}
            </Box>
          </Card>
        </Fade>
      </Container>
    </Box>
  );
};

export default FoundationSection1;


