import React, { Component } from 'react'


//EventBinding concept
class EventBind extends Component {

    //3rd method to bind
    constructor(props){
        super(props);

        this.state = {
            message : "Hello Shubham"
        }

        //binding in constructor .
      //  this.eventBinding = this.eventBinding.bind(this);
    }


     eventBinding() {
        //  //this keyword is undefined within handler
        //  //if you try to change the text after click, it will not work.
        //  // so this is the reason that EventBinding is nessesary in class component. 
        //  // there are number of way to binding the event handler in react.


    //      this.setState ({
    //          message:"how are you shubham"
    //      })
     }

     //This approach is highly recommanded for a performance point of view.
        eventBinding =() => {
            this.setState({
                message : "how r you rana"
            }, console.log(this))
        }


    render() {

        return (
            <div>
                <div>{this.state.message}</div>
                 
               {/* <button onClick = {this.eventBinding.bind(this)} > clickBinding </button>
                   first approach is binding in render,it is not recommand because of performace point of view
                    Imp-> This keyword is undefind within the event Handler                                                               */}
                 
                {/**
                    second approach is to make the event handler call as a arrow funtion.
                      make sure here eventHandler methods mast have '()'.  
                 * <button onClick = {() => this.eventBinding()} > clickBinding </button>
                 */}

                 <button onClick = {this.eventBinding} > clickBinding </button>

            </div>
        )
    }
}

export default EventBind
