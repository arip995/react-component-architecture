import React from 'react';
import { useState,useEffect } from 'react';
import App from '../App';
import TableScrollbar from 'react-table-scrollbar';
import DeleteIcon from '@material-ui/icons/Delete';
import AppBar from '@material-ui/core/AppBar';
import TableCell from '@material-ui/core/TableCell';
import {alpha, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import InputBase from '@material-ui/core/InputBase';
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from 'react-router-dom';
import Modals from './Modals';


const useStyles = makeStyles((theme) =>({
    table: {
      marginTop:65,
      minWidth: 650
    },
    grow: {
      flexGrow: 1,
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

const UserTodos = (props) => {

  const [user,setUser] = useState([]);
  const [d,setDelete] = useState(true);
  const [open,setOpen] = useState(false);
  const [userId,setUserId] = useState(1);
    
    const history = useHistory();
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('userTodos'));
      console.log(data);
        setUser(data);
    }, []);
    const handleDelete = (id) =>{
      setUser(user.filter(item=>item.id !==id));
    };
    const handleOpen = () =>{
      setOpen(true);
    }
    const handleClose = () =>{
      setOpen(false);
    }
    const handleId = (id) =>{
      setUserId(id);
    }
    const handleUpdate = (i) =>{
      if (i===0){
        handleDelete(userId);
        handleClose();
      }
      else{
        handleClose();
      }
    }
    return (
        <div>
            
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontSize:25,fontFamily:'inherit',fontStyle:'oblique'}}>title</TableCell>
                            <TableCell style={{fontSize:25,fontFamily:'inherit',fontStyle:'oblique'}}>Completed</TableCell>
                            <TableCell style={{fontSize:25,fontFamily:'inherit',fontStyle:'oblique'}}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user!==[] && user.map((row,index) => (
                            <TableRow key={String(row.id)}>
                                <TableCell >{row.title}</TableCell>
                                {/* <TableCell >{row.completed}</TableCell> */}
                                <TableCell >{index%2===0? "true":"false"}</TableCell>
                                <TableCell onClick={()=>{handleId(row.id);handleOpen();}} >
                                  <DeleteIcon></DeleteIcon>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
                {open && <Modals confirmDelete={(a)=>{handleUpdate(a)}} isOpen={open}/>}
        </div>
    )
}

export default UserTodos;
