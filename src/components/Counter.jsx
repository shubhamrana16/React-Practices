import React, { Component } from 'react'


//under the setState methods

  class Counter extends Component {

        constructor(props) { // snippet is rconst 
            super(props)
        
            this.state = {
                count : 0
                 
            }
        }
        
         increament(){

//              this.setState(
//                  {
//                      count : this.state.count + 1

// //whenever you want to excute the code afetr the state is change 
   //  you mast be pass an 
// // argument (call back function) as a second parameter of setState().

//                  }, () => {console.log("call back function", this.state.count)});
//==================================================================================

//According to the React docs "React may batch multiple setState() calls into a single update for performance. Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state."

//"To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument"

            this.setState(prevState => ({
                ...prevState,
                count : prevState.count +1
            }) , console.log("Hi"))

            console.log(this.state.count);
//always make use of setState and never modify the state directly

// when you have to update state based on the previous state value , pass in the function
//as an argument instead of the regular object.


         }   
    render() {
        return (
            <div>
                 <div>count -{this.state.count} </div>  
                 <button onClick = {()=> this.increament()}>increament</button>
            </div>
        )
    }
}

export default Counter
