import React, {useContext} from 'react'
import {userName, userAdd} from '../App';
function ContextHookC() {


   const name = useContext(userName)
   const addres = useContext(userAdd)

    return (
        <div>
                my name is {name} namd my addres is {addres}
             
        </div>
    )
}

export default ContextHookC
