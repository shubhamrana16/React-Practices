import React from 'react'

function Persons({person}) {

    //here this component is responsible to rendering each html code
    return (
        <div>
            <h1> {person.name} ,{person.age}, {person.hometown} </h1>
        </div>
    )
}

export default Persons
