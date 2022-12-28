import React from "react";
import {
  Typography,
  AppBar,
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

const App = () => {
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
        <div>
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
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
