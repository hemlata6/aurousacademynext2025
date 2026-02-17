'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Button, Card, CardContent, Chip, Container, Dialog, Divider, Stack, Tab, Tabs, Typography, useMediaQuery, Fade, Zoom } from '@mui/material';
import Grid from '@mui/material/Grid2';
import images from '@/lib/images';
import CheckIcon from '@mui/icons-material/Check';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ContactUs from '@/components/CommonSections/ContactUs';
import { useCourse } from '@/context/CourseContext';

const CourseDetail = () => {
  const { selectedCourse } = useCourse();
  const isMobile = useMediaQuery("(min-width:600px)");
  const [isVisible, setIsVisible] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!selectedCourse) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h5" color="error" align="center">
          Please select a course from the programs page
        </Typography>
      </Container>
    );
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const TabPanel = ({ children, value, index }) => (
    <div hidden={value !== index} style={{ width: '100%' }}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <div id="homePageCss">
      <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid xs={12} md={6}>
              <Fade in={isVisible} timeout={800}>
                <Box>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'white', 
                      mb: 2,
                      fontSize: { xs: '1.8rem', md: '2.5rem' }
                    }}
                  >
                    {selectedCourse.name}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: '1.1rem',
                      mb: 3
                    }}
                  >
                    {selectedCourse.description1}
                  </Typography>
                </Box>
              </Fade>
            </Grid>
            <Grid xs={12} md={6}>
              <Zoom in={isVisible} timeout={1000}>
                <Box
                  component="img"
                  src={selectedCourse.img}
                  alt={selectedCourse.name}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  }}
                />
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            mb: 4
          }}
        >
          <Tab label="Overview" icon={<MenuBookIcon />} iconPosition="start" />
          <Tab label="Program Plan" icon={<ScheduleIcon />} iconPosition="start" />
          <Tab label="Mock Tests" icon={<QuizIcon />} iconPosition="start" />
          <Tab label="Subjects" icon={<SchoolIcon />} iconPosition="start" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Program Details
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {selectedCourse.description2}
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  {selectedCourse.description3}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Key Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <SchoolIcon sx={{ color: '#667eea', fontSize: 28 }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#64748b' }}>
                          Class
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {selectedCourse.class}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckIcon sx={{ color: '#22c55e', fontSize: 28 }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#64748b' }}>
                          Target Year
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {selectedCourse.targetYear}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Stack>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Program Planning Schedule
            </Typography>
            {selectedCourse.programPlanner?.map((item, index) => (
              <Card key={item.id} sx={{ display: 'flex', gap: 2, p: 2 }}>
                <Box
                  component="img"
                  src={item.img}
                  alt={item.des}
                  sx={{ width: 60, height: 60, borderRadius: '8px', objectFit: 'cover' }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {item.des}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Stack>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Assessment & Tests
            </Typography>
            {selectedCourse.mocktest?.map((item) => (
              <Card key={item.id} sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <QuizIcon sx={{ color: '#f093fb', fontSize: 28 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {item.des}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Stack>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Subjects Covered
            </Typography>
            {selectedCourse.subjects?.map((item) => (
              <Card key={item.id} sx={{ p: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {item.des}
                </Typography>
              </Card>
            ))}
          </Stack>
        </TabPanel>

        <Box sx={{ mt: 8 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => setOpenDialog(true)}
            sx={{
              background: 'linear-gradient(135deg, #FFCA08 0%, #FF8C42 100%)',
              color: '#000',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              fontSize: '1.1rem',
            }}
          >
            Enroll Now
          </Button>
        </Box>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
          <ContactUs onClose={() => setOpenDialog(false)} />
        </Dialog>
      </Container>
    </div>
  );
};

export default CourseDetail;
