import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedTypography = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
        >
            <Typography
                variant="h1"
                gutterBottom
                sx={{
                    background: 'linear-gradient(45deg, #6366F1 0%, #EC4899 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 800,
                    fontSize: '3.5rem',
                    letterSpacing: '-0.5px',
                    textAlign: 'left',
                    py: 1,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        background: 'linear-gradient(45deg, #EC4899 0%, #6366F1 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        filter: 'brightness(1.1)',
                    }
                }}
            >
                Keshav Tomar
            </Typography>
        </motion.div>
    );
};

export default AnimatedTypography;