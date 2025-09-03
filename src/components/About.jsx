import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { School, Language, Interests } from '@mui/icons-material';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Container id="about" sx={{ py: 8, scrollMarginTop: '70px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" paragraph sx={{ maxWidth: '700px', margin: '0 auto' }}>
          Get to know more about my background, education, and interests beyond coding.
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card sx={{ p: 3, height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <School sx={{ fontSize: 30, mr: 2, color: 'primary.main' }} />
                  <Typography variant="h5">Education</Typography>
                </Box>

                <motion.div variants={itemVariants}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      MCA (Master In Computer Application)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Dr. A. P. J. Abdul Kalam Technical University, Lucknow
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      07/2023 - 06/2025
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      BCA (Bachelor In Computer Application)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Chaudhary Charan Singh University Meerut
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      06/2019 - 03/2022
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      12th Standard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Sun Rise Public Senior Secondary School Siyana (BSR)
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      04/2018 - 05/2019
                    </Typography>
                  </Box>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card sx={{ p: 3, height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Language sx={{ fontSize: 30, mr: 2, color: 'primary.main' }} />
                  <Typography variant="h5">Languages</Typography>
                </Box>

                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ width: 24, height: 24, mr: 2, bgcolor: 'primary.main', fontSize: '14px' }}>EN</Avatar>
                    <Box>
                      <Typography variant="body1">English</Typography>
                      <Typography variant="body2" color="textSecondary">Professional Proficiency</Typography>
                    </Box>
                  </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ width: 24, height: 24, mr: 2, bgcolor: 'primary.main', fontSize: '14px' }}>HI</Avatar>
                    <Box>
                      <Typography variant="body1">Hindi</Typography>
                      <Typography variant="body2" color="textSecondary">Native Proficiency</Typography>
                    </Box>
                  </Box>
                </motion.div>
              </CardContent>
            </Card>

            <Card sx={{ p: 3, mt: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Interests sx={{ fontSize: 30, mr: 2, color: 'primary.main' }} />
                  <Typography variant="h5">Interests</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['Online Games', 'Web Trends', 'Traveling', 'Technology', 'Problem Solving'].map((interest, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Avatar
                        variant="rounded"
                        sx={{
                          bgcolor: 'primary.main',
                          width: 'auto',
                          px: 2,
                          py: 1,
                          fontSize: '0.875rem',
                          cursor: 'pointer',
                          '&:hover': {
                            bgcolor: 'primary.dark'
                          }
                        }}
                      >
                        {interest}
                      </Avatar>
                    </motion.div>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;