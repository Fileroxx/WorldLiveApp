import React, { FormEvent } from 'react'
import RoomIcon from '@material-ui/icons/Room';
import { Button, Modal } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styles from './styles.module.css';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '0px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3, 4, 3),
      borderRadius: '10px',
    },

    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
 
  }),
);



export default function Location(){

    const classes = useStyles(); 
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);

    }

    const handleClose = () => {
        setOpen(false);
    }


    function handleClick(e: FormEvent){

      e.preventDefault();
      return('');
  
    }


    return(
        <div className={styles.location}>

           
            <Button
                startIcon={<RoomIcon className={styles.icone} />}
                variant="outlined"
                style={{border:'0'}}
                endIcon={<ExpandMoreIcon />}
                onClick={handleOpen}
            >
               São Paulo
            </Button>

        

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        id={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
           
           <h5>Localização</h5>

           <br/>

       
        <form onClick={handleClick}>
          <Paper component="form" className={classes.root}>
      
          <InputBase
            className={classes.input}
            placeholder="Onde?"
            inputProps={{ 'aria-label': 'onde?' }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
    
          </Paper>
        </form>
        


      <div className={styles.atualLocalizacao}>

        <Button
        className={styles.atual}
        startIcon={<GpsFixedIcon className={styles.gpsicon} />}
        >

          Minha localização atual

        </Button>

        </div>

           

    <br/>

        
      
        <Button
        startIcon={<RoomIcon className={styles.iconeProcurar} />}
        className={styles.botaoProcurar}
        >

          Qualquer Lugar

        </Button>

        <br/><br/>




          </div>


        </Fade>


      </Modal>

    
    </div>
    
    
    );


}