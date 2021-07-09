import React from 'react'

function Column() {


    //we will get warning here that <td>  element can not be a child of div
    //In this scenario we have to use React fragments.
    // return (
    //     <div>
    //          <td>shubham</td>
    //          <td> Rana</td>
    //     </div>
    // )
//========================================================================================
//React Fragment
    return (
        <React.Fragment>
        <td>shubham</td>
        <td> Rana</td>
           
        </React.Fragment>
    )



}

export default Column
