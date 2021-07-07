import React from 'react';
 //import { Component } from 'react';
 

class Hello extends React.Component{
    render(){

    const {address , age } = this.props
    //const {state1, state2} = this.state    


        return (<h1>{address} {age} </h1>
                 
            );
    }
}

export default Hello;