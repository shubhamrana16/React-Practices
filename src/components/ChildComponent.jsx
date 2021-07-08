import React from 'react'



//call the parent class component method in this component.
//pass the parameter from child comp to parent then the simplest way to do this is to define the 
//arrow function 
  function ChildComponent(props) {
    return (
        <div>
            <button onClick = {() => props.greetHandler("child")} >Click me to call the parent Comp.</button>
            
        </div>
    )
    
}

export default ChildComponent;