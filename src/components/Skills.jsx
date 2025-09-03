import React from 'react';
import { Container, Typography, Grid, Box, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Storage, Build, Cloud } from '@mui/icons-material';

const Skills = () => {
  const skills = [
    { name: 'React.js', level: 85, icon: <Code />, category: 'Frontend' },
    { name: 'JavaScript', level: 80, icon: <Code />, category: 'Frontend' },
    { name: 'Redux (RTK)', level: 75, icon: <Storage />, category: 'State Management' },
    { name: 'HTML5/CSS3', level: 90, icon: <Code />, category: 'Frontend' },
    { name: 'Node.js', level: 70, icon: <Build />, category: 'Backend' },
    { name: 'Express.js', level: 65, icon: <Build />, category: 'Backend' },
    { name: 'MongoDB', level: 60, icon: <Storage />, category: 'Database' },
    { name: 'AWS', level: 50, icon: <Cloud />, category: 'DevOps' },
    { name: 'Git/GitHub', level: 80, icon: <Build />, category: 'Tools' },
    { name: 'Material UI', level: 85, icon: <Build />, category: 'UI Framework' },
    { name: 'Bootstrap', level: 75, icon: <Build />, category: 'UI Framework' },
    { name: 'CI/CD', level: 60, icon: <Build />, category: 'DevOps' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

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
    <Container id="skills" sx={{ py: 8, scrollMarginTop: '70px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Skills & Technologies
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" paragraph>
          Here are the technologies I work with to create amazing web applications.
        </Typography>
      </motion.div>

      {categories.map((category, index) => (
        <Box key={category}
          sx={{
            mt:4,
            p:2,
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Typography variant="h5" gutterBottom sx={{ borderBottom: '2px solid', borderColor: 'primary.main', pb: 1, mb: 2 }}>
              {category}
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {skills.filter(skill => skill.category === category).map((skill, skillIndex) => (
              <Grid item xs={12} sm={6} md={4} key={skill.name}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ color: 'primary.main', mr: 1 }}>{skill.icon}</Box>
                    <Typography variant="h6">{skill.name}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'grey.800',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
                            borderRadius: 4,
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="textSecondary">{`${skill.level}%`}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default Skills;