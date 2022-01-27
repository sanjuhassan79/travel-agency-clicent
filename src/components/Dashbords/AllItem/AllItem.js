

import React, { useState,useEffect } from 'react';
import { Table,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllItem = () => {
const [costomer,setcostomer]=useState([])
const [isDelete, setisDelete]=useState(null)


useEffect(() => {
    fetch('https://still-waters-64451.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setcostomer(data))
}, [isDelete,costomer]);
// console.log(costomer);
const handleDelete=(id)=>{

  fetch(`https://still-waters-64451.herokuapp.com/products/${id}`,{
      method:'DELETE'
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data);
      if(data.acknowledged === true){
          alert('Deleted succesfully')
           setisDelete(true)
           const remainingUser= costomer.filter(addEvent=>addEvent._id !==id)
           setcostomer(remainingUser)
         
      }else{
           setisDelete(false)  
       }


})




}

const handleStatus=(id)=>{
 
  fetch(`https://still-waters-64451.herokuapp.com/products/${id}`,{
  
  method:"PUT",
  headers:{"content-type":"application/json"},
  body:JSON.stringify(
     {
  status:"approve"
 }
  
  )
  })
  
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  })
  
  
  
  }

    return (
        <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            
            <th>travel Name</th>
            <th>travel travelerinfo </th>
            <th>Category</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Cancel</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
         {costomer.map(costomer=>
         <tr key={costomer._id}>
         
         <td>{costomer.title}</td>
         <td>{costomer.travelerinfo}</td>
         <td>{costomer.category }</td>
         <td>{costomer.cost }</td>
         
         
         <td>
        
    
             
             <Button onClick={()=>handleStatus(costomer._id)} variant="outline-danger">{costomer.status}</Button> 
         
         
         
         </td>
         <td><Button onClick={()=>handleDelete(costomer._id)} variant="outline-danger">Cancel</Button></td>
         <td><Link to={`/Update/${costomer._id}`}>
         <Button variant="outline-danger">update</Button>
         </Link></td>
       </tr>
         )
         
         
         
         }
          
        </tbody>
      </Table>
    );
};

export default AllItem;