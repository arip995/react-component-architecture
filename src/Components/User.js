import React from 'react';
import { useState,useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SnackBarsSuccess from './SnackBarsSuccess';
import SnackBarsWarning from './SnackBarsWarning';
import Modals from './Modals';

const User = () => {
    const [user,setUser] = useState([]);
    const [a,setA] = useState();
    const [open,setOpen] = useState(false);
    const [userId,setUserId] = useState(1);
    
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('user'));
      console.log(data);
        setUser(data);
    }, []);

    useEffect(() => {
      console.log(a);
    }, [a])
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
          setA(i);
        }
        else if(i===1){
          handleClose();
          setA(i);
        }
      }
    return (
        <div>
            
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontSize:25,fontFamily:'inherit',fontStyle:'oblique'}}>UserName</TableCell>
                            <TableCell style={{fontSize:25,fontFamily:'inherit',fontStyle:'oblique'}}>Name</TableCell>
                            <TableCell style={{fontSize:25,fontFamily:'inherit',fontStyle:'oblique'}}>Email</TableCell>
                            <TableCell style={{fontSize:25,fontFamily:'inherit',fontStyle:'oblique'}}>Phone Number</TableCell>
                            <TableCell style={{fontSize:25,fontFamily:'inherit',fontStyle:'oblique'}}>Website</TableCell>
                            <TableCell style={{fontSize:25,fontFamily:'inherit',fontStyle:'oblique'}}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user!==[] && user.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.username}
                                </TableCell>
                                <TableCell >{row.name}</TableCell>
                                <TableCell >{row.email}</TableCell>
                                <TableCell >{row.phone}</TableCell>
                                <TableCell >{row.website}</TableCell>
                                <TableCell onClick={()=>{handleId(row.id);handleOpen();}} >
                                  <DeleteIcon></DeleteIcon>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
                {open && <Modals confirmDelete={(a)=>{handleUpdate(a)}} isOpen={open}/>}
                {(!open && (a===0)) && <SnackBarsSuccess />}
                {(!open && (a===1)) && <SnackBarsWarning />}
        </div>
    )
}

export default User;
