import axios from 'axios';
import React, { useState,useEffect } from 'react'
 

function DataFetchHookById() {

    const [post, setpost] = useState({});

    const [id, setid] = useState(1);

    const [IdForButton, setIdForButton] = useState( 1);


  const  handleClick = () => {
        setIdForButton(id);
    }


    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${IdForButton}`)
        .then(res => {

            setpost(res.data)
            console.log(res.data);
        })
        .catch(error => {
           
        } )
    }, [ IdForButton])

    

    return (
        <div>
        <button type = "button" onClick = {handleClick} >search</button>
        <input type = "text" value = {id} onChange = {e => setid(e.target.value) } />
       
 
        <div>{post.title}</div>
       

        

        {/**
         *  {  post.map(i => {
              return ( <li key = {i.id} > {i.title} </li>)
          })
        }
         */}
         
        </div>
    )
}

export default DataFetchHookById;
