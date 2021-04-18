import React from 'react';
import { render } from 'react-dom';
import ContactInfo from './ContactInfo';
//
export default class Contact extends React.Component{
    constructor(props){
    super(props);
    this.state ={
            keyword:'',
            contactData:[
               { name :'abet',
                 phone:'010-0000-0001'
               },
               { name :'betty',
                 phone:'010-0000-0002'
                },
                { name :'charlie',
                 phone:'010-0000-0003'
                },
                { name :'rira',
                phone:'010-0000-0004'
               }
            ]
        };
       
        this.handleChnage=this.handleChnage.bind(this);
    }

    handleChnage(e){
        this.setState({
            keyword: e.target.value
        });
    }

    render(){
        const mapToComponents =(data)=>{
            data.sort();
            data=data.filter(
                (contact) => {
                    return contact.name.toLowerCase()
                    .indexOf(this.state.keyword)>-1;
                    }
                );
            return data.map((contact,i)=>{
                return(<ContactInfo contact={contact} key={i}/>);
            });
        }; 


        return (
            <div>
                <h1>Contacts</h1>
                <input  name="keyword" 
                        placeholder="search"
                        value={this.state.keyword}
                        onChange ={this.handleChnage}
                        ></input>
                <div>{mapToComponents(this.state.contactData)}</div>
            </div>
        );
    }

}