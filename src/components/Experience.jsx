import React from 'react';
import { Container, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Work, CalendarToday, LocationOn } from '@mui/icons-material';
import CardWrapper from './AnimatedCard'
const Experience = () => {
  const experiences = [
    {
      company: "Ascorp Technologies Pvt Ltd",
      position: "React JS Developer",
      duration: "11/2023 - 12/2024",
      location: "Ghaziabad",
      description: "Ascorp Technologies builds exceptional mobile and web experiences making the best use of technology and innovation.",
      achievements: [
        "Development of web-based open source projects.",
        "Developed SPA with React, HTML, CSS, JavaScript, Bootstrap, Material UI, TypeScript, Hooks.",
        "Translated designs & wireframes into high-quality code and wrote application interface code via JavaScript following React.js workflows."
      ],
      technologies: ["React", "JavaScript", "TypeScript", "Bootstrap", "Material UI", "Redux", "Apex Charts"]
    },
    {
      company: "SOV Technologies Pvt Ltd",
      position: "React JS Developer",
      duration: "11/2022 - 05/2023",
      location: "Noida",
      description: "Contributed as React developer to the product development.",
      achievements: [
        "Responsible for understanding client requirements, daily standup meetings, and developing solutions.",
        "Developed code that deals with large data sets by rendering components on UI.",
        "Styled screen pages and Dashboard with Material UI and integrated multiple APIs."
      ],
      technologies: ["React", "Redux Toolkit", "Material UI", "Thunk"]
    }
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <Container id="experience" sx={{ py: 8, scrollMarginTop: '70px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Work Experience
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            My professional journey and contributions to the companies I've worked with.
          </Typography>
        </motion.div>

        <Box sx={{ mt: 6 }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <CardWrapper sx={{ mb: 4, p: 3, backgroundColor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h5" gutterBottom>
                        {exp.position}
                      </Typography>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {exp.company}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, mt: { xs: 2, md: 0 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CalendarToday sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2" color="textSecondary">
                          {exp.duration}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOn sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2" color="textSecondary">
                          {exp.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Typography variant="body1" paragraph>
                    {exp.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Key Achievements:
                  </Typography>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                          {achievement}
                        </Typography>
                      </motion.li>
                    ))}
                  </ul>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Technologies Used:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <Chip
                            label={tech}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </CardWrapper>
            </motion.div>
          ))}
        </Box>
    </Container>
  );
};

export default Experience;