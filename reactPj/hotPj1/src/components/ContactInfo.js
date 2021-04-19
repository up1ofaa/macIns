import React from 'react';
//
export default class ContactInfo extends React.Component{
    render(){
        return(
            <div><h4>{this.props.contact.name}  {this.props.contact.phone}</h4></div>
        );
    } 
}