import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Chip,
  Box,
  IconButton
} from '@mui/material';
import { 
  OpenInNew, 
  GitHub,
  Visibility 
} from '@mui/icons-material';
import { motion } from 'framer-motion';

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

const Projects = () => {
  const projects = [
    {
      title: "Blu Flughafen (Cab Booking)",
      description: "Developed a comprehensive cab booking system with React and Redux Toolkit, implementing efficient data handling for large datasets.",
      technologies: ["React", "Redux Toolkit", "Material UI", "Thunk"],
      role: "Styled Rider panel and Dashboard, API integration",
      link: "#", // Add your project link
      github: "#" // Add GitHub link if available
    },
    {
      title: "Foxboro Oil and Gas (Admin Panel)",
      description: "Admin dashboard for oil and gas management system with data visualization and real-time monitoring capabilities.",
      technologies: ["React", "RTK with Thunk", "Graph integration", "ApexCharts"],
      role: "Dashboard styling and API integration",
      link: "https://ongc.rtms.foxboro.in",
      github: "#"
    },
    {
      title: "AUTH CYCLE",
      description: "Secure two-way authentication system with OTP verification via Email and SMS using Twilio and Node.js.",
      technologies: ["MERN Stack", "Twilio", "SMTP", "JWT"],
      role: "Full-stack development",
      link: "#",
      github: "#"
    },
    {
      title: "Online Slot Book Car Parking",
      description: "Car parking reservation system with CRUD operations, user authentication, and payment integration.",
      technologies: ["HTML", "CSS", "Node.js", "MongoDB"],
      role: "Full-stack development",
      link: "#",
      github: "#"
    }
  ];

  return (
    <Container id="projects" sx={{ py: 10, scrollMarginTop: '80px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <Typography  variant="h2" align="center" gutterBottom >
          Featured Projects
        </Typography>
        <Typography 
          variant="h6" 
          align="center" 
          color="textSecondary" 
          paragraph 
          sx={{ maxWidth: '600px', mx: 'auto', mb: 6 }}
        >
          Here are some of my recent projects that showcase my skills and experience
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div variants={itemVariants}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    background: 'linear-gradient(145deg, #1E293B 0%, #0F172A 100%)',
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(99, 102, 241, 0.2)',
                      borderColor: 'rgba(99, 102, 241, 0.3)',
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 2
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="textSecondary" 
                      paragraph 
                      sx={{ mb: 2, lineHeight: 1.6 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
                      >
                        My Role:
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {project.role}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
                      >
                        Technologies Used:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, i) => (
                          <Chip 
                            key={i} 
                            label={tech} 
                            size="small" 
                            sx={{ 
                              background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.15) 30%, rgba(236, 72, 153, 0.15) 90%)',
                              color: 'primary.light',
                              fontWeight: 500,
                              '&:hover': {
                                background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.25) 30%, rgba(236, 72, 153, 0.25) 90%)',
                              }
                            }} 
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    {/* <Button 
                      size="small" 
                      endIcon={<OpenInNew />}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        '&:hover': {
                          background: 'linear-gradient(45deg, #4F46E5 30%, #DB2777 90%)',
                          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                        }
                      }}
                    >
                      Live Demo
                    </Button> */}
                    {/* {project.github && (
                      <IconButton 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: 'text.secondary',
                          '&:hover': { 
                            color: 'primary.main',
                            background: 'rgba(99, 102, 241, 0.1)'
                          }
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    )} */}
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;