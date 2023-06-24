import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import { Grid } from '@mui/material';
import hero from '../images/hero.jpg';


function HomePage() {
  return (
    <div>
      <div
        style={{
          height: '100vh',
          width: '100%',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              marginBottom: '1rem',
            }}
          >
            QuantReady
          </Typography>
          <Container maxWidth="xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            
            variant="contained"
            size="large"
            sx={{ backgroundColor: 'black', color: 'white' }}
            component={Link}
            to="/login"
            align="center"
    
          >
            Get Started
          </Button>
        </Container>
      </div>

      {/* Our Services Section */}
      <Container maxWidth="xl" style={{ marginTop: '7rem', marginBottom: '7rem' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '3rem' }}>
          Our Services
        </Typography>
        <Grid container spacing={20}>
          <Grid item xs={12} sm={6}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <img src={require('../images/hero.jpg')} alt="Question Bank" style={{ width: '100%', height: 'auto' }} />
              <Typography variant="h5" sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
                Question Bank
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                Find plenty of practice questions to get you prepared for your next interview
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <img src={require('../images/hero.jpg')} alt="External Resources" style={{ width: '100%', height: 'auto' }} />
              <Typography variant="h5" sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
                External Resources
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                Carefully curated resources created by experts in the field
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Find what works for you Section */}
      <Container maxWidth="xl" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '3rem' }}>
          Find what works for you
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h6">Beginner</Typography>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                Get started with basic interview resources to get oriented with the topic
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h6">Intermediate</Typography>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                Kick up the difficulty a notch and test yourself against a few tricky problem sets
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h6">Advanced</Typography>
              <Typography variant="body1" sx={{ marginBottom: '7rem' }}>
                Test yourself against a strong suite of expert questions
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Container maxWidth="xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            
            variant="contained"
            size="large"
            sx={{ backgroundColor: 'black', color: 'white', width: '500px', marginBottom: '3rem' }}
            component={Link}
            to="/login"
            align="center"
    
          >
            Get Started
          </Button>
        </Container>
          </Container>

          {/* Footer */}
      <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <footer>
          <Typography variant="subtitle1" align="center" fontWeight="bold">
            QuantReady
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <Typography variant="subtitle2" component={Link} to="/about" sx={{ marginRight: '1rem' }}>
              About
            </Typography>
            <Typography variant="subtitle2" component={Link} to="/contact" sx={{ marginRight: '1rem' }}>
              Contact
            </Typography>
            <Typography variant="subtitle2" component={Link} to="/follow">
              Follow
            </Typography>
          </Box>
        </footer>
      </Box>

    </div>
  );
}

export default HomePage;
