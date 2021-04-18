import React from 'react';
//var React=require('react'); //동일한 문법 
//export default class App extends React.Component{
 class App extends React.Component{  
    constructor(props){
        super(props);
        this.state ={
            name:'first'
        }
    } 

    render(){
            return (
                <div>
                <button onClick={()=>{this.setState({name:'hwayeon'});}}>clcick here</button>
                <h1>Hello!!f오예!!!d@@@@@@ggdfdfgg??사!중!!{this.state.name}</h1>
                </div>
            );
    }
}


export default App;//이 클래스를 다른 데서도 사용할수 있게  export
//module.export=App; //동일한 문법
