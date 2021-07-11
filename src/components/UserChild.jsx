import {myContext} from "./ContextExample"

 

import React, { Component } from 'react'

export class UserChild extends Component {

    const 
    render() {
        return (
            <div>

                    <myContext.Consumer >
                         {data =>  <h4>  This context api call {data} </h4> }
                      </myContext.Consumer>
                
            </div>
        )
    }
}

export default UserChild
