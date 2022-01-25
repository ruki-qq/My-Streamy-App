import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { STREAM_LIST } from "./links";

const Navbar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: "flex" }}
          >
            STREAMY
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Button
                component={Link}
                to={STREAM_LIST}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Streams
              </Button>
              <GoogleAuth />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;