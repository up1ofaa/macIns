import React from 'react';
import Contact from './Contact';
 
class App extends React.Component{  


    render(){
            return (
                <div>      
                    <h1>나와라</h1>        
                    <h1><Contact/></h1>   
                </div>
            );
    }  
} 

//
export default App;//이 클래스를 다른 데서도 사용할수 있게  export
//module.export=App; //동일한 문법
//
