import React, {Component} from "react";
//import React from "react";

export default class Users extends Component {

    state = {


        age : 15,
        _name : 'simon',
        surname : 'Thobejane',
        location: 'madisha ditoro'

        /* arrlist : [["surname","_name","age","location"],
         [prompt('enter surname',''),prompt('enter name','')
         ,prompt('enter age',''),prompt('enter location','')]] */


    }

    

    render(){

        return (
            <div classInfor = "simon">
                <h1>{this.state.age } {this.state.surname } {this.state._name } {this.state.location } {this.getSurname.message}</h1>
                <h3>{ this.getSurname.message}</h3>
            
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