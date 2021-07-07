import React from 'react';

//understand destructuring props and state

// const Greet = (props)=>{


//     return ( 
//         <div>
        
//             <h1>{props.name}</h1>
//                 {props.children}
//             </div>

//         );
// }

const Greet = ({fname, lname})=>{

//we can also pass the props object 

//const {fname, lname } = props;

    return ( 
        <div>
        
            <h1>Hello  {fname} {lname} </h1>
                
            </div>

        );
}

export default Greet;