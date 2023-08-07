import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { Edit, Save } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/authActions";

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

{ /* For later implementation */ }
// const ChooseFileButton = styled('label')(({ theme }) => ({
//   display: 'inline-block',
//   padding: theme.spacing(1),
//   backgroundColor: 'black',
//   color: 'white',
//   borderRadius: theme.shape.borderRadius,
//   cursor: 'pointer',
//   transition: 'background-color 0.3s',
//   '&:hover': {
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//   },
// }));

const ProfilePage = () => {
  const loginState = useSelector(state => state.auth);
  const isLoggedIn = (loginState && loginState.user);
  const user = isLoggedIn ? loginState.user : null;
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    dispatch(updateUser(user._id, {...user, firstName, lastName, email, role}));
  };

  { /* For later implementation */ }
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   // Perform actions like uploading the image to the server and updating the image state here
  //   setImage(URL.createObjectURL(file));
  // };

  if (isLoggedIn) {
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
                    label="First Name"
                    value={firstName}
                    disabled={!isEditing}
                    fullWidth
                    onChange={handleFirstNameChange}
                  />
                  <StyledInput
                    label="Last Name"
                    value={lastName}
                    disabled={!isEditing}
                    fullWidth
                    onChange={handleLastNameChange}
                  />
                  <StyledInput
                    label="Email"
                    value={email}
                    disabled={!isEditing}
                    fullWidth
                    onChange={handleEmailChange}
                  />
                  <FormControl fullWidth>
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                      labelId="role-label"
                      value={role}
                      disabled={!isEditing}
                      onChange={handleRoleChange}
                    >
                      <MenuItem value="Trader">Trader</MenuItem>
                      <MenuItem value="Researcher">Researcher</MenuItem>
                      <MenuItem value="Developer">Developer</MenuItem>
                    </Select>
                  </FormControl>
                  <ActionsContainer>
                    {!isEditing ? (
                      <IconButton onClick={handleEdit}>
                        <Edit />
                      </IconButton>
                    ) : (
                      <IconButton onClick={handleSave}>
                        <Save />
                      </IconButton>
                    )}
                  </ActionsContainer>
                </StyledForm>
                { /* For later implementation */ }
                {/* <ChooseFileButton>
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </ChooseFileButton> */}
              </CardContent>
            </Card>
          </InfoContainer>
        </RootContainer>
      </ThemeProvider>
    );
  } else {
    return (
      <div>
        <h1>Please log in to view this page.</h1>
      </div>
    );
  }
};

export default ProfilePage;
