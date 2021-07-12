import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderComp'

  class ClickCounterHoc extends Component {

     constructor(props) {
         super()
        
         
     }
     
    
     
    
    render() {
        const {counter, handleChange} = this.props
        return (
            <div>
                <button onClick = { handleChange} >click to increase</button>
                 <span> {  counter} </span>
                 {this.props.name}
                 
                 <h3>Hi This is from HOC    </h3>

            </div>
        )
    }
}

export default UpdatedComponent(ClickCounterHoc, 5);
