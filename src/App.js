
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';



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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>


          <TableBody>
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
          </TableBody>
        </Table>
      </div>

    );
  }
}

export default App;
