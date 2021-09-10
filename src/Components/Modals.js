import React from 'react';
import {useState,useEffect } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const Modals = () => {
    const [open, setOpen] = useState(false);
    return (
        
        <div>
            <Modal
            closeIcon
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            >
            <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
                <p>
                Your inbox is getting full, would you like us to enable automatic
                archiving of old messages?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                <Icon name='remove' /> No
                </Button>
                <Button color='green' onClick={() => setOpen(false)}>
                <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
            </Modal>
        </div>
    )
}

export default Modals
