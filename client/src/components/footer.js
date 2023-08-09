import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box bgcolor="#f1efe9" color="navy" textAlign="center" padding="2rem">
      <Grid container spacing={3}>
        {/* Social Media Icons */}
        <Grid item xs={12} sm={4}>
          <IconButton
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Grid>
        
        {/* Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="body2">
            <Link href="/about" color="inherit">
              About Us
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/contact" color="inherit">
              Contact Us
            </Link>
          </Typography>
        </Grid>
        
        {/* Empty Grid for Spacing */}
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
      
      <Typography variant="body2" sx={{ marginTop: '1rem' }}>
        &copy; {new Date().getFullYear()} QuantReady. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
