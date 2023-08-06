import React, { useEffect } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import SpinningCircle from '../components/SpinningCircle.js';
import SideImage from '../components/SideImage.js';

import hero from '../images/hero.jpg'; 
import graphic1 from '../images/graphic1.png'; 
import graphic2 from '../images/graphic2.png'; 
import graphic3 from '../images/graphic3.png'; 
import service1 from '../images/service1.png';
import service2 from '../images/service2.png';


function AnimatedSection({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return (
    <div className={`animated-section ${trigger ? 'fade-in' : ''}`}>
      {children}
    </div>
  );
}


function HomePage() {

  return (
   
    <Box>
      {/* Hero Section */}
      
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="#f1efe9"
        padding="2rem"
        className="navy-net"
      >
        <Container maxWidth="xl">
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <img
                src={hero}
                alt="Hero"
                style={{ width: '100%', maxWidth: '100%', marginRight: '1rem' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" sx={{ color: 'navy', marginBottom: '1rem' }}>
                QuantReady
              </Typography>
              <Typography variant="body1">
                Your platform for quantitative learning and more.
              </Typography>
              <Button
                variant="outlined"
                component={Link}
                to="/about"
                sx={{
                  marginTop: '1rem',
                  color: 'white',
                  borderColor: 'navy',
                  backgroundColor: 'navy',
                  '&:hover': {
                    borderColor: 'navy',
                    backgroundColor: '#f1efe9',
                    color: 'navy',
                  },
                }}
              >
                Learn More
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/login"
                sx={{
                  marginTop: '1rem',
                  marginLeft: '1rem',
                  color: 'white',
                  borderColor: 'navy',
                  backgroundColor: 'rgb(138, 29, 1)',
                  '&:hover': {
                    borderColor: 'navy',
                    backgroundColor: '#f1efe9',
                    color: 'navy',
                  },
                }}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      

      {/* Services Section */}
      <AnimatedSection>
      <Box bgcolor="white" padding="6rem" textAlign="center">
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ color: 'navy', marginBottom: '5rem' }}>
            Our Services
          </Typography>
          <Grid container spacing={30}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={service1}
                  alt="Service 1"
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'navy' }}>
                    Questions Bank
                  </Typography>
                  <Typography variant="body2">
                    Find plenty of practice questions to help you prepare for your next interview.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={service2}
                  alt="Service 2"
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'navy' }}>
                    External Resources
                  </Typography>
                  <Typography variant="body2">
                    Carefully curated external resources created by exprets in the field.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      </AnimatedSection>

      {/* Find what works for you! Section */}
      <AnimatedSection>
      <Box
        bgcolor="white"
      
        textAlign="center"
        position="relative"
        marginBottom="8rem"
      >
        <Typography
          variant="h3"
          sx={{ color: 'navy', marginBottom: '8rem' }}
        >
          Find what works for you!
        </Typography>

          
        {/* Navy Banners */}
        <Box
          className="navy-banner banner1"
          sx={{
            position: 'relative',
            backgroundColor: 'navy',
            height: '150px',
            animation: 'slide-right-to-left 10s infinite alternate',
            marginBottom: '8rem',
            width: '1200px',
            borderRadius: '200px'
          }}
        >
          <CardMedia
            component="img"
            src={graphic1}
            alt="Graphic 1"
            sx={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              marginTop: '1rem',
              width: '300px', // Adjust the size of the graphic
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', marginLeft: '6rem' }}>
              Beginner
            </Typography>
            <Typography variant="body1" sx={{ color: 'white',  marginLeft: '6rem' }}>
              Get started with basic interview resources to get oriented with the topics.
            </Typography>
          </Box>
        </Box>
        <Box
          className="navy-banner banner2"
          sx={{
            position: 'relative',
            backgroundColor: 'navy',
            height: '150px',
            marginBottom: '8rem',
            width: '1200px',
            left: '40rem',
            borderRadius: '200px'
          }}
        >
          <CardMedia
            component="img"
            src={graphic2}
            alt="Graphic 2"
            sx={{
              position: 'absolute',
              left: '0',
              top: '50%',
              marginTop: '1.5rem',
              transform: 'translateY(-50%)',
              width: '300px', 

            
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', marginLeft: '6rem' }}>
              Intermediate
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', marginLeft: '6rem' }}>
              Kick up the difficulty and test your knowledge with more challenging questions.
            </Typography>
          </Box>
        </Box>
        <Box
          className="navy-banner banner3"
          sx={{
            position: 'relative',
            backgroundColor: 'navy',
            height: '150px',
            marginBottom: '1rem',
            width: '1200px',
            borderRadius: '200px'
          }}
        >
          <CardMedia
            component="img"
            src={graphic3}
            alt="Graphic 3"
            sx={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              marginTop: '0.5rem',
              width: '300px', 
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', marginLeft: '6rem' }}>
              Advanced
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', marginLeft: '6rem' }}>
              Test your skills with the most difficult questions and see how you stack up.
            </Typography>
          </Box>
        </Box>
      </Box>
      </AnimatedSection>

      <div style={{  position: 'relative' }}>
            {/* SpinningCircle component */}
            <SpinningCircle />
            {/* SideImage component */}
            <SideImage />
      </div>
      
    </Box>
   
  );
}

export default HomePage;
