import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <AppBar 
            position="sticky" 
            sx={{ 
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'transparent',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                py: 0.5
            }}
        >
            <Toolbar>
                <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                        flexGrow: 1,
                        fontWeight: 700,
                        background: 'linear-gradient(45deg, #ccccd6ff 0%, #faedf4ff 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        fontSize: '1.5rem'
                    }}
                >
                    Keshav Tomar
                </Typography>
                
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                    {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                        <motion.div
                            key={item}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button 
                                color="inherit" 
                                href={`#${item.toLowerCase()}`}
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    px: 2,
                                    // py: 1,
                                    // borderRadius: 2,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                                        color: 'primary.main',
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                {item}
                            </Button>
                        </motion.div>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;