import React from 'react';
import App from '../App';
import { useHistory } from 'react-router-dom';

const User = (props) => {
    const history = useHistory();
    const onHandleSubmit = () => {
      history.push('/profile')
    }
    return (
        <div>
            <button onClick={onHandleSubmit}>yooo boy</button>
        </div>
    )
}

export default User;
