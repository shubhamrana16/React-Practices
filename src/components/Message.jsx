import React from 'react';
 //import { Component } from 'react';
 

class Message extends React.Component{

    constructor(){
        super(); //required, we import the React Component class  and has to made to be the base 
                 // class component.
        this.state = {  //state is nothing but an object that is  privately maitained within componenet  
          message : "Welcome Visitor "
        }
        
    }


    changemassage(){
// passing an empty string as a value and,  to update the state of meaasg
//  we have to call setState(). actually, i am  passing the
// object into  the setState methods.
// to change the satate of message when the event handller click 
         this.setState(    
             {
                 message :  "Thank YOu For Subscribe:"
              }

             );
    }

    render(){
        return (
            <div> 
                 <h1>{this.state.message}</h1>
                <button onClick = {() => this.changemassage()} >Subscribe</button>
            </div>
            );
    }
}

export default Message;