import React, { Component } from 'react'

 class RegulComp extends Component {
    render() {

        console.log("it's regular component")
        return (
            <div>
               Regular Component. 

               {this.props.name}
            </div>
        )
    }
}

export default RegulComp
