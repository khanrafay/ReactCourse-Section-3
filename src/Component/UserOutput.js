import React, { Component } from 'react';
import UserInput from './UserInput';

const UserOutput = (props) => {
    const style ={
        backgroundColor: 'green',
        textAlign:'center'
    }
    return (
        <div>
            <UserInput
                changeName={props.changeName}
                currentValue={props.username} />
            <p style={style}>Hello {props.username}</p>
        </div>
    )
}
export default UserOutput