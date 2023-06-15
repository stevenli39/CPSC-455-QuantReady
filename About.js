// AboutUs.js
import React from 'react';
import { Box, Container, Grid, Typography, Avatar } from '@mui/material';
import useStyles from '../styles/about.module.css';
import armaghanImage from '../images/armaghan.jpeg'
import stevenImage from '../images/steven.jpeg'
import yaseerImage from '../images/yasser.jpeg'
import angadImage from '../images/angad.jpeg'
import annieImage from '../images/annie.jpeg'

const AboutUs = () => {
  return (
    <div>
      <Container maxWidth="lg" className={useStyles.container}>
        {/* Add your logo image here */}
        <img src="/path/to/your-logo.png" alt="Your Company Logo" className={useStyles.logo} />
        <Typography variant="h2" align="center" gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={4} justifyContent="center" >
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center" >
            {/* Add Person 1 image here */}
            <Avatar alt="Armaghan Naveed" src={armaghanImage} className={useStyles.avatar} />
            <Typography variant="h5">Armaghan Naveed</Typography>
            <Typography variant="subtitle1">Quant guy</Typography>
            <Typography variant="body1">
              Description about Person 1 and their role in the company.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Add Person 2 image here */}
            <Avatar alt="Steven Li" src={stevenImage} className={useStyles.avatar} />
            <Typography variant="h5">Steven Li</Typography>
            <Typography variant="subtitle1">Role 2</Typography>
            <Typography variant="body1">
              Description about Person 2 and their role in the company.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Add Person 3 image here */}
            <Avatar alt="Yaseer" src={yaseerImage} className={useStyles.avatar} />
            <Typography variant="h5">Yaseer</Typography>
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
            <Avatar alt="Annie" src={annieImage} className={useStyles.avatar} />
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
            <Avatar alt="Person 3" src={angadImage} className={useStyles.avatar} />
            <Typography variant="h5">Angad Sudarsan</Typography>
            <Typography variant="subtitle1">Team Member</Typography>
            <Typography variant="body1">
            My goal is  to bring diverse perspectives together to create exciting new opportunities for our team to explore. 
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
        Quantready.com will be an interview preparation platform designed to assist students in preparing for quantitative finance interviews. Our platform will provide mock interviews that replicate the experience of a real-world quantitative finance interview. It’ll contain user data, question banks and external interview resources. We’ll be using interview question banks created by the UBC Trading Group & our team. Some additional functionality that we can add/remove include advanced search and filtering of questions, social sharing and collaboration and integration with Online Learning Platform.
        </Typography>
      </Box>
    </div>
  );
  
};

export default AboutUs;