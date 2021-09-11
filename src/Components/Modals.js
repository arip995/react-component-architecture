import React from 'react';
import {useState,useEffect } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import SnackBars from './SnackBars';

const Modals = ({confirmDelete,isOpen}) => {
    const [open, setOpen] = useState(isOpen);
    const [deleted, setDeleted] = useState(false);
    const [a,setA] = useState(true);
    useEffect(() => {
        
    }, [])
    const Delete = (i) =>{
        setDeleted(i);
        setA('ture');
    }
    
    return (
        
        <div>
            <Modal
            closeIcon
            open={open}
            // trigger={<Button>Show Modal</Button>}
            onClose={() => {setOpen(false);confirmDelete(1);}}
            onOpen={() => setOpen(true)}
            >
            <Header icon='archive' content='Confirm Delete' />
            <Modal.Content>
                <p>
                    Do you really want to delete this user
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => {setOpen(false);confirmDelete(1);Delete(false)}}>
                <Icon name='remove' /> No
                </Button>
                <Button color='green' onClick={() => {setOpen(false);confirmDelete(0);Delete(false)}}>
                <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
            </Modal>
        </div>
        
    )
}

export default Modals
