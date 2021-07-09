import React, { Component } from 'react'

  class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "Shubham"
        }

        console.warn("LifeCycleB Constructor");
    }


    static getDrivedStateFromProps(props, state){
        console.log("LifeCycleB  getDrivedStateFromProps");

        return null;
    }

    
    // componentDidMount(){
    //     console.log("LifeCycleB componentDidMount")
    // }

//========================================================================================

    shouldComponentUpdate(){
        console.warn("LifeCycleB shouldComponentUpdate")

        return true;
    }

    getSnapshotBeforeUpdate(prevPorps, prevState){
        console.log("LifeCycleB getSnapshotBeforeUpdate");
            return null;

    }


    componentDidUpdate(){

        console.log("LifeCycleB componentDidUpdate");

    }
    
    render() {

        console.log("LifeCycleB Render Method")

        return (
            <div>
                 
            </div>
        )
    }
}

export default LifeCycleB
