import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../images/GL-Group-Horizontal-BLACK-RVB.png';
import {
  isMobile
} from "react-device-detect";



const useStyles = makeStyles((theme) => ({
    color :{
        backgroundColor : '#f57c00',
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    button : {
      marginLeft : 'auto'
    },
    title: {
      flexGrow: 1,
      textAlign : 'right',
      marginRight : '20px',
      color : 'black'
    },
  }));

export default function Navbar ({user,handleSignOut}) {
     
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.color} >
                <Toolbar >
                <img src={Logo} alt="GLH Logo" style={{height:'80px',display: 'block'}}></img>
                <Typography variant="h7" className={classes.title}>
                      {(!isMobile)? (<span> Hello, {user.username}</span> ):""}
                </Typography>
                    
                    <Button  className={classes.button} variant="contained" onClick={handleSignOut} disableElevation>Sign Out</Button>
                </Toolbar>
            </AppBar>
        </div>
   )
};

