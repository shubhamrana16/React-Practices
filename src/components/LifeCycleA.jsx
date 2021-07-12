import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

  class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "Shubham"
        }

        console.warn("LifeCycleA Constructor");
    }

    //its excute after the constructor. and before the render method.

     
  static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA  getDerivedStateFromProps");

        return null;
    }

    //Invoked Immediately after the component (Render method) and its Children component have been
    //rendered to the dom.
    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }
    


    shouldComponentUpdate(){
        console.warn("LifeCycleA shouldComponentUpdate")

        return true;
    }

    getSnapshotBeforeUpdate(prevPorps, prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null;

    }


    componentDidUpdate(){

        console.log("LifeCycleA componentDidUpdate");

    }


    changeState = () =>{
        this.setState ({
            name : "update methods check"
        })

    }

    render() {

        console.log("LifeCycleA Render Method")

        return (
            <div>
               <p> Hello shubham, learn lifecycle of metods.</p>
                <button onClick = {this.changeState} >Test life Cycle update methods</button>
               <LifeCycleB /> 
            </div>
        )
    }
}

export default LifeCycleA
