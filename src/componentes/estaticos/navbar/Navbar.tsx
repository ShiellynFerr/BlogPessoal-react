import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Gradient } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static" className="background">
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              Blog Power Girls
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginX="auto"
          >
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            <Link to="/Login" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  login
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
