 import axios from 'axios';
import React, { useState,useEffect } from 'react'
 

function DataFetchHook() {

    const [post, setpost] = useState([]);


    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {

            setpost(res.data)
            console.log(res.data);
        })
        .catch(error => console.log("error"))
    }, [])

    return (
        <div>
          {  post.map(i => {
              return ( <li key = {i.id} > {i.title} </li>)
          })
        }
        </div>
    )
}

export default DataFetchHook
