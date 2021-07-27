import { group } from "console";
import { element } from "prop-types";
import React, {Component} from "react";
//import React from "react";

export default class Users extends Component {

    state = {

        
        age : 15,
        _name : 'simon',
        surname : 'Thobejane',
        location: 'madisha ditoro',
        group: 'A'

        /* arrlist : [["surname","_name","age","location"],
         [prompt('enter surname',''),prompt('enter name','')
         ,prompt('enter age',''),prompt('enter location','')]] */


    }

    

    render(){

        return (
            <div classInfor = "simon">
                <h1>Information </h1>
                <h1> {this.state.surname }   </h1>
                <h1>{this.state.age }</h1>
                <h1>{this.state.group}</h1>
                <h1>{this.state._name }</h1>
                <h1>{this.state.location }</h1>
                <h1>{this.getSurname(element.message)}</h1>
                <h3>{ this.getSurname().message}</h3>
                <h2>
                    {this.state.age}
                </h2>
            
            </div>
        )
    }

    getSurname()
    {
      
         let message = '';

        if (this.state.age >= 18) {

           return message = "You are old enough to code"
           
            
        }
        else{
           return message = "You are not old enough to code"
        }

    }
        


            

    
}