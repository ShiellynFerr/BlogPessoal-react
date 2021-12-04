import React from "react";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import "./Home.css";

function Home() {
  return (
    <>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="background "
        >
          <Grid alignItems="center" item xs={6}>
            <Box paddingX={20}>
              <Typography
                variant="h3"
                gutterBottom
                component="h3"
                align="center"
                className="titulo"
              >
                Seja bem vindo(a)!
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="h5"
                align="center"
                className="titulo"
              >
                Ao Blog Power Girls, um blog dedicado a personagens femininas do
                universo dos heróis, séries e filmes
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}></Box>
              <Button variant="outlined" color="primary" className="botão">
                Saiba mais
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/973/891/680/the-avengers-avengers-endgame-avengers-endgame-gamora-zoe-saldana-hd-wallpaper-preview.jpg"
              alt=""
              width="675px"
              // height="400px"
            />
          </Grid>
          <Grid xs={12} className="background-branco"></Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Home;
