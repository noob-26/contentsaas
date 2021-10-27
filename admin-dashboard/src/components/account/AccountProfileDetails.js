/* eslint-disable linebreak-style */
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Snackbar,
  Alert
} from '@material-ui/core';

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    country: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    youtube: '',
    blog: '',
    video: '',
    bio: '',
    files: []
  });
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const sendFormData = async (e) => {
    console.log('Sending data...');
    e.preventDefault();
    e.innerText = 'SAVING..';
    const url = 'http://localhost:5000/api/v1/details';
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      console.log(data);
      setMessage(data.message);
      setColor('success');
      e.innerText = 'Save details';
      setOpen(true);
    } catch (err) {
      console.log(err.message);
      setMessage(err.message);
      setColor('error');
      setOpen(true);
    }
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <form autoComplete="off" noValidate {...props}>
        <Card>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  helperText="Add a Short Bio about Yourself"
                  label="Short Bio"
                  name="bio"
                  onChange={handleChange}
                  required
                  value={values.bio}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  helperText="Please specify the last name"
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Enter your email address"
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Enter your phone number"
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  helperText="Enter your country"
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Select your State"
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                  variant="outlined"
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  helperText="Provide your Twitter Account Link"
                  fullWidth
                  label="Twitter Link"
                  name="twitter"
                  onChange={handleChange}
                  required
                  value={values.twitter}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Provide your Linkedin Account Link"
                  label="LinkedIn Link"
                  name="linkedin"
                  onChange={handleChange}
                  required
                  value={values.linkedin}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Provide your Instagram Account Link"
                  label="Instagram Link"
                  name="instagram"
                  onChange={handleChange}
                  required
                  value={values.instagram}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Provide your Youtube Account Link"
                  label="Youtube Link"
                  name="youtube"
                  onChange={handleChange}
                  required
                  value={values.youtube}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Provide your Blog Link"
                  label="Blog Link"
                  name="blog"
                  onChange={handleChange}
                  required
                  value={values.blog}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Provide your Video Link"
                  label="Video Link"
                  name="video"
                  onChange={handleChange}
                  required
                  value={values.video}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <FilePond
                  files={files}
                  onupdatefiles={setFiles}
                  maxFiles={1}
                  name="files"
                  labelIdle='Upload files here by Drag and Drap or <span class="filepond--label-action">Browse</span>'
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            <Button onClick={sendFormData} color="primary" variant="contained">
              Save details
            </Button>
          </Box>
        </Card>
      </form>
    </>
  );
};

export default AccountProfileDetails;
