import React, { FormEvent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import styles from './styles.module.css'
import { Popper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginRight: '20px'
  },
  input: {
    marginLeft: theme.spacing(2),
    paddingTop: '10px',
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },

    }),
);



export default function Search(){



    const classes = useStyles();


    async function handleSubmit(e:FormEvent){
        e.preventDefault();

    }

    return(

        <div id={styles.pesquisa}>


        <form onSubmit={handleSubmit}>

        <Paper component="form" className={classes.root}>
        
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon className={styles.botaoPesquisa}/>
        </IconButton>

        <InputBase
          
          className={classes.input}
          placeholder="Procurar eventos, shows, teatros, cursos..."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        
        </Paper>

        </form>




        </div>
    );
}