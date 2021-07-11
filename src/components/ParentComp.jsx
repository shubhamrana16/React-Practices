import React, { Component } from 'react'
import PureComp from './PureComp'
import RegulComp from './RegulComp'
import MemoDemo from './MemoDemo'


export class ParentComp extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             name : "Shubham Rana"
        }
    }


    componentDidMount(){
        setInterval(() => {
            this.setState({
               // name : "Suraj"

                  name : "Shubham Rana"
            })
        }, 2000)
    }
    
    render() {
        console.log("==============it's parent component===============")
        return (
            <div>
                 Parent Component.

                 <MemoDemo name = {this.state.name} />

                 {/*
                    
                     <RegulComp name = {this.state.name} />
                      <PureComp name = {this.state.name} />
                  * 
                  */}
                 
                
            </div>
        )
    }
}

export default ParentComp
