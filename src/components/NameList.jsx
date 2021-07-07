import React from 'react'
import Persons from './Persons'
function NameList() {

    const  persons = [{

        name: 'shubham',
        age: '24',
        hometown:'patna'
    },

    {
        name: 'debdeep',
        age: '26',
        hometown:'kolkata'

    },
    {
        name: 'shreejit',
        age: '25',
        hometown:'rajashthan'
    }
]
    //here person is represent the object of the list

    // recommanded way to create the seperate file for jsx. 

    //here i am import persons component <person person = {props} />

    //this component is only responsible to redering the element in web
    const namelist = persons.map(props  =>  <Persons person = {props} /> )
    //<Persons person = {props} -> in rough u can say that call the Persons componenet in this component

    

    return (
        <div>
           {namelist}
       
            
        </div>
    )
}

export default NameList
