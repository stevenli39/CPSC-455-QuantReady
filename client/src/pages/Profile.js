import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
} from '@mui/material';
import { Edit, Save } from '@mui/icons-material';

const theme = createTheme();

const RootContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const StyledAvatar = styled(Avatar)({
  width: 150,
  height: 150,
});

const InfoContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(2),
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ActionsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(2),
}));

const ChooseFileButton = styled('label')(({ theme }) => ({
  display: 'inline-block',
  padding: theme.spacing(1),
  backgroundColor: 'black',
  color: 'white',
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
}));

const ProfilePage = () => {
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [phone, setPhone] = useState('123-456-7890');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    // Fetch current user data here
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = () => {
    // Make API call to fetch current user data
    // Replace the API endpoint with your actual endpoint
    fetch('/api/current_user')
      .then(response => response.json())
      .then(data => {
        // Update name and email state with fetched data
        setName(data.firstName + " " + data.lastName);
        setEmail(data.email);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleNameChange = (event) => {
    if (isEditingPhone) {
      setName(event.target.value);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEditPhone = () => {
    setIsEditingPhone(true);
  };

  const handleSavePhone = () => {
    setIsEditingPhone(false);
    // Save the phone number to the server or perform other actions here
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Perform actions like uploading the image to the server and updating the image state here
    setImage(URL.createObjectURL(file));
  };

  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <StyledAvatar alt="Profile Picture" src={image} />
        <InfoContainer>
          <Card>
            <CardHeader title="Profile Information" />
            <CardContent>
              <StyledForm>
                <StyledInput
                  label="Full Name"
                  value={name}
                  disabled={!isEditingPhone}
                  fullWidth
                  onChange={handleNameChange}
                />
                <StyledInput
                  label="Email"
                  value={email}
                  disabled={!isEditingPhone}
                  fullWidth
                  onChange={handleEmailChange}
                />
                <StyledInput
                  label="Phone"
                  value={phone}
                  disabled={!isEditingPhone}
                  fullWidth
                  onChange={handlePhoneChange}
                />
                <ActionsContainer>
                  {!isEditingPhone ? (
                    <IconButton onClick={handleEditPhone}>
                      <Edit />
                    </IconButton>
                  ) : (
                    <IconButton onClick={handleSavePhone}>
                      <Save />
                    </IconButton>
                  )}
                </ActionsContainer>
              </StyledForm>
              <ChooseFileButton>
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </ChooseFileButton>
            </CardContent>
          </Card>
        </InfoContainer>
      </RootContainer>
    </ThemeProvider>
  );
};

export default ProfilePage;
