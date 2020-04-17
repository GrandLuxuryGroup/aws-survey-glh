import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Logo from '../images/GL-Group-BLACK-RVB.png';



const useStyles = makeStyles((theme) => ({
    color :{
        backgroundColor : '#f57c00',
    },
    root: {
      flexGrow: 1,
      alignContent:'center'
      
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
      textAlign : 'center',
      marginRight : '20px',
      color : 'black'
    },
  }));

export default function FinalStep (props) {
     
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={Logo} alt="GLH Logo" style={{height:'200px',display: 'block', margin:'auto', marginBottom:'30px'}}></img>
            <Typography variant="h5" className={classes.title}>
                { props.message }
            </Typography>
        </div>
   )
};
