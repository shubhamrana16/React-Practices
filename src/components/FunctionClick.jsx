//Event Handller concept

import React from 'react'


//rfce -> snippet for function component
function FunctionClick() {

    function clickHandler(){
        alert("button click");
    }   

    return (
        <div>
        {/* onClick has accept function only not function Call */}
            <button onClick = {clickHandler} >Click Me</button>
        </div>
    )
}

export default FunctionClick
