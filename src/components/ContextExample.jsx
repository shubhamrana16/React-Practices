import React, { Component } from 'react'
 import User from "./User"

 export const myContext = React.createContext("suraj");


  class ContextExample extends Component {


     state = {
        name : "shubham rana",
        add : "patna"
    };

    render() {
        return (
            <div >
                <myContext.Provider value = {this.state.name} >
                <User />
                </myContext.Provider>
                 
            </div>
        );
    }
}

export default ContextExample
