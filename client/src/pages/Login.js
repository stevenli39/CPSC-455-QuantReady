import * as React from "react";
import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";


function Login() {
    const link = `${process.env.REACT_APP_API_ENDPOINT}/auth/google`;
    const loginState = useSelector(state => state.auth);
    const isLoggedIn = (loginState && loginState.user);

    if (!isLoggedIn) {
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
    } else {
        return (
            <Navigate to="/questions" />
        );
    }
}

export default Login;