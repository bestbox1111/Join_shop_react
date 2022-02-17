

import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';


const customers = [
  {
  'id':1,
  'image':"https://placeimg.com/64/64/3",
  'name':"홍길동",
  'birthday':"810414",
  'gender':"남자",
  'job':"대학생"
},
{
  'id':2,
  'image':"https://placeimg.com/64/64/4",
  'name':"박준형",
  'birthday':"123456",
  'gender':"남자",
  'job':"중학생"
},
{
  'id':3,
  'image':"https://placeimg.com/64/64/5",
  'name':"정말자",
  'birthday':"330414",
  'gender':"여자",
  'job':"직장인"
}

]


class App extends Component{
  render(){
    return(
    
      <div>
        {
          customers.map(c=>{
            return(
              
            <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
        })
        }

      </div>

    );
  }
}

export default App;
