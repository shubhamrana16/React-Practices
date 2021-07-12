import React, { Component } from 'react'

export class HttpAxiosPost extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId : "",
             title :"",
             body : ""
        }
    }

    changeEvent = (event) =>{
        this.setState({[event.target.name]: event.target.value })
    }
    
    submitHandler = (e)=>{
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit = {this.submitHandler} >
                    <div>
                        
                        <input type = "text" name = "userId" value = {userId} 
                         onChange = {this.changeEvent} />
                         <label> User Id</label>
                        </div>
                        <div>
                         
                        <input type = "text" name = "title" value = {title} 
                         onChange = {this.changeEvent} />
                         <label> title</label>
                        </div>

                        <div>
                        
                         <input type = "text" name = "body" value = {body} 
                          onChange = {this.changeEvent} />
                          <label> write Message </label>

                    </div>
                    <button type = "submit">submit</button>
                </form>
                
            </div>
        )
    }
}

export default HttpAxiosPost
