 import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderComp'

  class MouseOver extends Component {


    constructor(props) {
        super()
     
    }
    
    render() {

        const {counter, handleChange} = this.props
        return (
            
                <div>
                 <h3 onMouseOver = {handleChange} > scroll here {counter} </h3>
                    
                </div>
                    
            
        )
    }
}

export default UpdatedComponent(MouseOver, 2);
