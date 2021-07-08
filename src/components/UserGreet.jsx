import React, { Component } from 'react'


//if else concept in React
//we can not apply the if else inside jsx.
  class UserGreet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoginIn :  false
        }
    }
    render() {

        let message;

        if(this.state.isLoginIn){
            message = <div>Hello Shubham</div>
        }
            else{
            message = <div>Hello Rana</div>
            }
        
        return (


            <div>
                {message}
            </div>
        )
    }
}

export default UserGreet
