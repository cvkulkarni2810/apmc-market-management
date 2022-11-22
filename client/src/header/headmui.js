import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@material-ui/core/styles";
import headerBackground from "../img/header.png";
const useStyles = makeStyles((theme) => ({
  header: {
    backgroundImage: `url(${headerBackground})`,
  },
  typography: {
    flexGrow: 1,
        align: "left"
      }
    
}));

export default function ButtonAppBar() {
    const classes=useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.header} position="static" >
      <Typography className={classes.typography} variant="h6" >
            News
      </Typography>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
         
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}