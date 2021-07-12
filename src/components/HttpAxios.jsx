import axios from 'axios'
import React, { Component } from 'react'

  class HttpAxios extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            statements : [],
            errormessage :""
             
        }
    }


    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({statements : response.data})
        })
        .catch(error =>{
            this.setState({errormessage : "getting Error to fetch your data"})
        } )

    }
    



    render() {
        const {statements, errormessage} = this.state
        return (
            <div>
            {
                statements.length ? 
                statements.map(i => <div key = {i.id} > {i.body} </div> ) :null
            }
            {errormessage ? <div> {errormessage} </div> :null }
                
            </div>
        )
    }
}

export default HttpAxios
