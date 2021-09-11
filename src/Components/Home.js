import React from 'react';
import { useState,useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from './User';
const axios = require('axios');


const useStyles = makeStyles((theme) => ({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    grow: {
      flexGrow: 1,
    },
    header:{
      textAlign: 'center',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));

const Home = () => {
    const history = useHistory();
  //Api call on component mount
  // const [users,setUsers] = useState([]);
  // const [userTodos,setUserTodos] = useState([]);
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then((response) =>{
  //     console.log(response);
  //     setUsers(response.data)
  //   })
  //   .catch((error) =>console.error(error));

  //   axios.get('https://jsonplaceholder.typicode.com/todos')
  //   .then((response) =>{
  //     console.log(response);
  //     setUserTodos(response.data)
  //   })
  //   .catch((error) =>console.error(error));
  // },[])

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['User'].map((text, index) => (
          <ListItem onClick={() =>{history.push('/user')}} button key={text}>
            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider />
        {['User Todos'].map((text, index) => (
          <ListItem onClick={() =>{history.push('/userTodos')}} button key={text}>
            <ListItemIcon><ListAltOutlinedIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider />
        {['User Address'].map((text, index) => (
          <ListItem onClick={() =>{history.push('/userAddress')}} button key={text}>
            <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
    return (
        <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            
            {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
          </IconButton>
          <div style={{marginLeft:"800px"}}>
            <Typography variant="h4" noWrap>
              Welcome to the project
            </Typography>
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
        <h1>Click the side menu to go through the user details</h1>
    </div>
    )
}

export default Home
