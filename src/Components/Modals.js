import React from 'react';
import {useState,useEffect } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const Modals = ({confirmDelete,isOpen}) => {
    const [open, setOpen] = useState(isOpen);
    useEffect(() => {
        
    }, [])
    
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
                    Do you really want to delete this item
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => {setOpen(false);confirmDelete(1);}}>
                <Icon name='remove' /> No
                </Button>
                <Button color='green' onClick={() => {setOpen(false);confirmDelete(0);}}>
                <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
            </Modal>
        </div>
    )
}

export default Modals
