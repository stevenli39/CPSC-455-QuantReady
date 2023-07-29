import * as React from "react";
import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { Typography } from "@mui/material";

function Login() {
    const link = process.env.REACT_APP_NODE_ENV === "Development" ? "http://localhost:5000/auth/google" : "https://quantready.onrender.com/auth/google";

    return (
        <Container maxWidth="xl" sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <h1>Sign in with Google</h1>
            <p>New users can sign up for QuantReady with Google. Existing users will be logged in.</p>
            <a href={link}>
                <Button variant="outlined" fontSize="large" startIcon={<GoogleIcon sx={{ color: "white" }} />} 
                        sx={{ backgroundColor:"#1976D2", '&:hover': {backgroundColor: "#1976D2", transform: 'scale(1.05)'} // Maintain the background color on hover 
                    }}>
                    <Typography sx={{color:"white", textTransform: "none"}}>
                        Sign-In/Login with Google
                    </Typography>
                </Button>
            </a>
        </Container>
    );
}

export default Login;