// AboutUs.js
import React from 'react';
import { Box, Container, Grid, Typography, Avatar } from '@mui/material';
import useStyles from '../styles/about.module.css';

const AboutUs = () => {
  return (
    <div>
    <Container maxWidth="lg" className={useStyles.container}>
      {/* Add your logo image here */}
      <img src="/path/to/your-logo.png" alt="Your Company Logo" className={useStyles.logo} />
      <Typography variant="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Add Person 1 image here */}
            <Avatar alt="Person 1" src="/path/to/person1-image.jpg" className={useStyles.avatar} />
            <Typography variant="h5">Person 1</Typography>
            <Typography variant="subtitle1">Role 1</Typography>
            <Typography variant="body1">
              Description about Person 1 and their role in the company.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Add Person 2 image here */}
            <Avatar alt="Person 2" src="/path/to/person2-image.jpg" className={useStyles.avatar} />
            <Typography variant="h5">Person 2</Typography>
            <Typography variant="subtitle1">Role 2</Typography>
            <Typography variant="body1">
              Description about Person 2 and their role in the company.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Add Person 3 image here */}
            <Avatar alt="Person 3" src="/path/to/person3-image.jpg" className={useStyles.avatar} />
            <Typography variant="h5">Person 3</Typography>
            <Typography variant="subtitle1">Role 3</Typography>
            <Typography variant="body1">
              Description about Person 3 and their role in the company.
            </Typography>
          </Box>
        </Grid>
        {/* Person 4 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Add Person 5 image here */}
            <Avatar alt="Person 3" src="/path/to/person3-image.jpg" className={useStyles.avatar} />
            <Typography variant="h5">Person 4</Typography>
            <Typography variant="subtitle1">Role 4</Typography>
            <Typography variant="body1">
              Description about Person 4 and their role in the company.
            </Typography>
          </Box>
        </Grid>
        {/* Person 5 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Add Person 5 image here */}
            <Avatar alt="Person 3" src="/path/to/person3-image.jpg" className={useStyles.avatar} />
            <Typography variant="h5">Person 5</Typography>
            <Typography variant="subtitle1">Role 5</Typography>
            <Typography variant="body1">
              Description about Person 5 and their role in the company.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      </Container>


      <Box mt={4} p={4} bgcolor="#f5f5f5">
        <Typography variant="h4" align="center" gutterBottom>
          About Company
        </Typography>
        <Typography variant="body1">
          Description about your company and what it offers. You can provide information about your company's history,
          mission, values, achievements, and any other relevant details.
        </Typography>
      </Box>
    </div>
  );
  
};

export default AboutUs;
