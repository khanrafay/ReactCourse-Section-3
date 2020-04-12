import React, { Component } from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input
                type="text"
                onChange={props.changeName}
                value={props.currentValue} />
        </div>
    )
}

export default UserInput