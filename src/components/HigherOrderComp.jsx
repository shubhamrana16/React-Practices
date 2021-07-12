 import React, { Component } from 'react'
 
 const UpdatedComponent = (OriginalComponent, demand) => {
     class NewComponent extends Component{

            constructor(props) {
                super(props)
            
                this.state = {
                     counter : 0
                }
            }
            

        handleChange = () =>{
            this.setState(prevState => {
                return {counter :prevState.counter +demand}
            })
        }

        render(){
            return <OriginalComponent counter = {this.state.counter} 
                    handleChange = {this.handleChange}
                     
                     {...this.props}
              />
        }
    }

     return NewComponent;
 }

 export default UpdatedComponent