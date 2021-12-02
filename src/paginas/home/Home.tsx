import React from "react";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import "./Home.css";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      className='cor-home'
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              className='titulo'
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              align="center"
              className='titulo'
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button
              variant="outlined"
              color="primary"
              className='botão'
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/623/406/502/movie-black-widow-marvel-comics-scarlett-johansson-hd-wallpaper-preview.jpg"
            alt=""
            width="675px"
            // height="400px"
          />
        </Grid>
        <Grid xs={12} className='background-branco'></Grid>
      </Grid>
    </>
  );
}
export default Home;
