import React from 'react';
import './Person.css'

const Person = (props) => {
    console.log(props)
    return (

        <div className="Person">
            <h5 onClick={props.click}>Hey i am a person. My name is {props.name}  and i am {props.age} years old</h5>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person