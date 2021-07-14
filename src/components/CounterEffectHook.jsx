import React, {useState} from 'react'

function CounterEffectHook() {

    const [counter, setcounter] = useState( 0);

  const  increamenthandle = () =>{
      console.log("object");
            setcounter(counter+1);
    }

    return (
        <div>
            <button onClick = {increamenthandle} >Counter {counter}</button>
        </div>
    )
}

export default CounterEffectHook
