import React, { useState } from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddCourse() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    //const [image, setImage] = useState('');
    function addcourse() {
        Axios.post("http://localhost:9000/add/course", {
            name: name,
            description: description,
            image: "hhhh"
        }).then((res) => {
            if(res.data.message === "success"){
                alert("successfully added!")
            }
        }).catch(error =>{
            console.log("server error" + error)
        })
    }
    function handleName(e) {
        setName(e.target.value)
    }
    function handleDescription(e) {
        setDescription(e.target.value)
    }
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            onChange={ handleName }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Course Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
          onChange={ handleDescription }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            type="description"
            id="description"
            autoComplete="description"
          />
          <Button
            onClick={addcourse}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Course
          </Button>
          <Grid container>
          </Grid>
        </form>
      </div>
    </Container>
  );
}