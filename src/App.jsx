import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedium,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";

import CameraIcon from "@mui/icons-material/PhotoCamera";
import { ThemeProvider } from "@mui/material/styles";

const theme = ThemeProvider((theme) => ({}));

const App = () => {
  const classes = theme();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon />
          <Typography variant="h6"> Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone This is a photo album and i'm trying to make this
              sentences as long as possible so we can see how does it look like
              on the screen
            </Typography>
            <div>
              <Grid container spacing={3} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
