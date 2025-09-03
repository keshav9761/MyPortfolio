import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  Link,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import { Email, GitHub, LinkedIn, LocationOn, Send } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your credentials
// You need to get these from https://www.emailjs.com/
const SERVICE_ID = 'service_3oc03xm';
const TEMPLATE_ID = 'template_uis4n9s';
const PUBLIC_KEY = '6PPsqNMKSAc4ZBfHC';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' // 'success' or 'error'
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'Keshav Tomar',
          message: formData.message,
          reply_to: formData.email
        },
        PUBLIC_KEY
      );

      // Show success message
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I will get back to you soon.',
        severity: 'success'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Failed to send message:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again or email me directly.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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
    <Container id="contact" sx={{ py: 8, scrollMarginTop: '70px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 2
          }}
        >
          Get In Touch
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph sx={{ maxWidth: '700px', margin: '0 auto' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
            <Card sx={{ 
              p: 3, 
              height: '100%',
              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <CardContent>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                  Contact Information
                </Typography>
                
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Email sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>Email</Typography>
                      <Link 
                        href="mailto:keshavtomar53@gmail.com" 
                        color="textSecondary"
                        sx={{ 
                          '&:hover': { 
                            color: 'primary.main',
                            textDecoration: 'none' 
                          } 
                        }}
                      >
                        keshavtomar53@gmail.com
                      </Link>
                    </Box>
                  </Box>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <GitHub sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>GitHub</Typography>
                      <Link 
                        href="https://github.com/keshav9761" 
                        target="_blank" 
                        color="textSecondary"
                        sx={{ 
                          '&:hover': { 
                            color: 'primary.main',
                            textDecoration: 'none' 
                          } 
                        }}
                      >
                        github.com/keshav9761
                      </Link>
                    </Box>
                  </Box>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LinkedIn sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>LinkedIn</Typography>
                      <Link 
                        href="https://www.linkedin.com/in/keshav-tomar-039b91272" 
                        target="_blank"
                        color="textSecondary"
                        sx={{ 
                          '&:hover': { 
                            color: 'primary.main',
                            textDecoration: 'none' 
                          } 
                        }}
                      >
                        linkedin.com/in/keshav-tomar
                      </Link>
                    </Box>
                  </Box>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>Location</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Ghaziabad, Delhi NCR, India
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ 
              p: 3,
              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <CardContent>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                  Send Me a Message
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                    variant="outlined"
                    sx={{ 
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                    variant="outlined"
                    sx={{ 
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{ 
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    }}
                  />
                  
                  <Box sx={{ mt: 3 }}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      size="large"
                      disabled={loading}
                      startIcon={loading ? <CircularProgress size={20} /> : <Send />}
                      sx={{ 
                        px: 4,
                        py: 1.5,
                        background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
                        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #4F46E5 30%, #DB2777 90%)',
                          boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)',
                          transform: 'translateY(-2px)'
                        },
                        '&:disabled': {
                          background: 'grey.700'
                        }
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;