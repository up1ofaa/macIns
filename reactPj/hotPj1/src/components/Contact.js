import React from 'react';
import { render } from 'react-dom';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
//
export default class Contact extends React.Component{
    constructor(props){
    super(props);
    this.state ={
            selectedKey:-1,
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
               },
               { name :'kelly',
                phone:'010-0000-0005'
               }
            ]
        };
       
        //임의 메소드를 만들때는 반드시  this와 bind를 해줘야한다
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleChange(e){//이벤트 객체
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key){
        this.setState({
            selectedKey: key
        });
    }

    render(){
        const mapToComponents =(data)=>{
            data.sort();//유니코드를 비교하여 정렬
            data=data.filter(
                (contact) => {
                    return contact.name.toLowerCase()
                    .indexOf(this.state.keyword.toLowerCase())>-1;
                    }
                );
            return data.map((contact,i)=>{//배열.map(매개변수,인덱스)> 매개변수는 배열의 특정 요소값
                return(<ContactInfo contact={contact} 
                                    key={i}
                                    onClick={()=> this.handleClick(i)} //여기 onClick이벤트는 컴포넌트에서 사용못함, 단지 컴포넌트 props 역할임
                                  //  onClick={this.handleClick(i)} //이런식으로 컴포넌트의 메소드() 구현할수 없음
                                  // 2-4. state강좌에서 메소드()는 랜더링될때마다 무한으로 실행하기 때문임
                                    />);
            });
        }; 


        return (
            <div>
                <h1>Contacts</h1>
                <input  name="ipt_search" 
                        placeholder="search"
                        value={this.state.keyword}
                        onChange ={this.handleChange}
                        ></input>
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails isSelected={this.state.selectedKey!=-1}
                                contact={this.state.contactData[this.state.selectedKey]}
                    />
            </div>
        );
    }

}

/*arr.sort(compareFunction(a,b))

function return값이 0보다 낮은경우, a를 b보다 낮은 색인정렬, a가 우선
0을 반환하면 위치변경없음
0보다 큰경우  b를 ㅂ다 낮은 인덱스로 소트

*/

/* arr.filter(callback(element[,index[,array]])[,thisArg])
callback :각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버립니다. 
element :처리할 현재요소
index : 처리할 현재요소의 인덱스
array : filter를 호출한 배열
thisArg : callback 을 실행할 때 this로 사용하는값

*/

/*
검색조건에 따른 배열 필터링
function filterItems(query){
    return fruits.filter(function(el){
        return el.toLowerCase().indexOf(query.toLowerCase()) >-1;
    })
}
*/

/*
props : 변하지 않은 컴포넌트 요소로 설정, 객체전달가능
state : 로직에의해 초기값과 달리 변할수 있음 setState 사용
class내의 메소드 : 임의의 메소드 안에서 this를 사용할 경우, constructor 안에서 this가 무엇인지 설정하는 행위(bind해줘야함)

*/ 