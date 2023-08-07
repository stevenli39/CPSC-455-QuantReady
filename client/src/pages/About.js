import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Fade } from 'react-reveal'; // Import from react-reveal
import steven from '../images/steven.jpeg';
import annie from '../images/annie.jpeg';
import yasser from '../images/yasser.jpeg';
import angad from '../images/angad.jpeg';
import armaghan from '../images/armaghan.jpeg';

function AboutUsPage() {
  return (
    <Box>
      {/* About Us Section */}
      <Box
        bgcolor="rgba(0, 0, 128)" // Faded navy background
        color="white"
        padding="4rem"
        textAlign="center"
      >
        <Typography variant="h2" sx={{ marginBottom: '2rem' }}>
          About Us
        </Typography>
        <Typography variant="body1">
        QuantReady is more than a website; it's your dedicated partner on the path to conquering quantitative interviews. 
        Founded with a shared passion for education and a deep understanding of the challenges these interviews pose, 
        our team of experts is committed to equipping you with the knowledge and confidence needed to excel. 
        Through meticulously curated content, interactive learning, and a supportive community, QuantReady is here to guide you, step by step, 
        towards mastering the intricacies of quantitative interviews and achieving your professional aspirations.
        </Typography>
      </Box>

      {/* Our Team Section */}
      <Box bgcolor="white" padding="4rem" textAlign="center">
        <Typography variant="h2" sx={{ marginBottom: '2rem' }}>
          Our Team
        </Typography>
        <Grid container spacing={3}>
          {/* Top Row */}
          <Grid container item spacing={3} justifyContent="center">
            {/* Card 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Fade bottom>
                <Card sx={{ border: '2px solid #000080' }}>
                  <CardMedia
                    component="img"
                    height={500}
                    image={angad}
                    alt="Team Member 1"
                  />
                  <CardContent>
                    <Typography variant="h6">Angad Sudarsan</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
            {/* Card 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Fade bottom>
                <Card sx={{ border: '2px solid #000080' }}>
                  <CardMedia
                    component="img"
                    height={500}
                    image={annie}
                    alt="Team Member 2"
                  />
                  <CardContent>
                    <Typography variant="h6">Annie Liu</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          </Grid>

          {/* Bottom Row */}
          <Grid container item spacing={3} justifyContent="center" marginTop="2rem">
            {/* Card 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Fade bottom>
                <Card sx={{ border: '2px solid #000080' }}>
                  <CardMedia
                    component="img"
                    height={500}
                    image={armaghan}
                    alt="Team Member 3"
                  />
                  <CardContent>
                    <Typography variant="h6">Armaghan Naveed</Typography>
                    <Typography variant="body2">
                    Armaghan is a fourth-year Business and Computer Science student. He's interested in the field of Quant Trading and is amused by the growth of quantitative methods in traditional finance. Armaghan is looking forward to developing a one-stop shop for all students who are looking to get into the field of quantitative finance. In his free time, he enjoys playing soccer and watching movies.
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
            {/* Card 4 */}
            <Grid item xs={12} sm={6} md={4}>
              <Fade bottom>
                <Card sx={{ border: '2px solid #000080' }}>
                  <CardMedia
                    component="img"
                    height={500}
                    image={steven}
                    alt="Team Member 4"
                  />
                  <CardContent>
                    <Typography variant="h6">Steven Li</Typography>
                    <Typography variant="body2">
                    Steven is a fourth year Business and Computer science student. He's interested in Cloud infrastructure development and is  intrigued by the multitude of intriguing problems that demand creative thinking and technical expertise to overcome. Steven is excited on working on this full-stack application to help individuals better prepare for their quantitative interview. 
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
            {/* Card 5 */}
            <Grid item xs={12} sm={6} md={4}>
              <Fade bottom>
                <Card sx={{ border: '2px solid #000080' }}>
                  <CardMedia
                    component="img"
                    height={500}
                    image={yasser}
                    alt="Team Member 5"
                  />
                  <CardContent>
                    <Typography variant="h6">Yasser Sanobar</Typography>
                    <Typography variant="body2">
                      Yasser is a fourth year Computer Scinece student. He's interested in fullstack development and the development life cycle. He enjoys and creating new products that can help people. Yasser is excited to work on this project to help students prepare for their quantitative interviews.
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* ... rest of the component ... */}
    </Box>
  );
}

export default AboutUsPage;
