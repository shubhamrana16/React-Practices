import React, { Component } from 'react'

//rce -> snippet for class component
  class ClassClick extends Component {

    clickHandler(){
        alert("class component button clicked");
    }


    render() {

        //In class component method call by the this keyword.
        return (
            <div>
              <button  onClick = {this.clickHandler} > Class Click button</button>
                
            </div>
        )
    }
}

export default ClassClick;
