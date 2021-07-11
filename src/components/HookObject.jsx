import React, {useState} from 'react'

function HookObject() {

    const [info, setInfo] = useState({name: "", add : ""});


    return (
        <div>
        <form>
            
             <label>Name</label>
            <input type = "text"  value = {info.name} 
             onChange = {e => setInfo({...info, name : e.target.value}) } />    
             
            <label>Name</label>
            <input type = "text"  value = {info.add} 
             onChange = {e => setInfo({...info, add : e.target.value}) } /> 
             
         </form>

             <h4>your name is {info.name}
             </h4>
              
             <h4>your  address is {info.add}</h4>
            
         </div>
    )
}

export default HookObject
