import React from 'react';
import { Container, Typography, Button, Box, styled } from '@mui/material';
import { Download } from '@mui/icons-material';
import { motion } from 'framer-motion';
import AnimatedTypography from './AnimatedTypography';

const Hero = () => {

    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
                },
            }}
        >
            <Container sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <AnimatedTypography />
                    <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                        sx={{ fontWeight: 400 }}
                    >
                        Full Stack Developer
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: '600px',
                            margin: '0 auto',
                            my: 3,
                            fontSize: '1.1rem',
                            color: 'text.secondary'
                        }}
                    >
                        Experienced React.js Developer with 1.5+ years of hands-on expertise in creating responsive
                        and high-performance web applications. Committed to delivering clean, user-centered solutions.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<Download />}
                            sx={{
                                mr: 2,
                                background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #4F46E5 30%, #DB2777 90%)',
                                }
                            }}
                            href="https://drive.google.com/uc?export=download&id=1V8pezig6HMGDGI_ERlMtJyEnRCnWJU7h"
                        >
                            Download Resume
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            href="#projects"
                            sx={{
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                '&:hover': {
                                    borderColor: 'primary.light',
                                    backgroundColor: 'rgba(99, 102, 241, 0.08)'
                                }
                            }}
                        >
                            View Projects
                        </Button>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Hero;