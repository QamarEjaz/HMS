import React, {useState,useEffect} from "react";
import TableRow from "./ContactTableRow";
import TableHeadItem from "./ContactTableHead";
import {TableStyle} from "../UserTable/Table";

const Table = ({theadData}) => {

  const [user, setUser] = useState([]);
  var axios = require('axios');
var data = JSON.stringify({
  "name": "patient1update",
  "email": "patient4@gmail.com",
  "password": "123456886788787879000",
  "phone": "057678878878787789348",
  "department": "patients1",
  "address": "lahore2jhjhkjk",
  "gender": "male",
  "birthday": "2-2-1999",
  "age": "23",
  " bloodgroup": "A+"
});

var config = {
  method: 'get',
  url: 'http://localhost:5000/api/v1/doctors',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};
const fetchData = () => {
axios(config)
.then(function (response) {
  setUser(response.data);
  console.log(user)
})
.catch(function (error) {
  console.log(error);
});
}
   
  // let userToken = localStorage.getItem("token");
  // let config = {
  //   headers: {
  //     "x-auth-token": userToken,
  //   },
  // };
  // console.log("working")
  // useEffect(() => {
  //   fetchData();
  // }, [newSearch]);
  // const fetchData =() => {
    // const res=await axios.get('http://localhost:5000/api/v1/doctors')
    // console.log(res.data)
    // setUser(res.data)
  //   axios.get('http://localhost:5000/api/v1/doctors')
  //    .then((response) => {
       
  //      setUser( response.data)
  //    })
  //   .catch((error)=>{
  //      console.log(error);
  //   });
    
  // };
  
  useEffect(()=>{
    fetchData()
    console.log("user data")
    console.log("useeffect data"   +  user)
  },[data])
  // console.log("not working")
  
  return (
    <TableStyle>
      <thead>
        <tr>
          {theadData.map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        <TableRow data={user} />
      </tbody>
    </TableStyle>
  );
};

export default Table;
