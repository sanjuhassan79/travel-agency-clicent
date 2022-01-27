
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';

import { useForm } from "react-hook-form";
import './MakeAdmin.css'
import { useState } from 'react';


const MakeAdmin = () => {
	const [success,setSuccess]=useState(false)
	const { register, handleSubmit, } = useForm();
  const onSubmit = data => {
	
	fetch('https://still-waters-64451.herokuapp.com/users/admin',{
		method:'PUT',
		headers:{'content-type':'application/json'},
		body:JSON.stringify(data)
	})
	.then(res=>res.json())
	.then(data=>{
	if(data.modifiedCount){
		
		setSuccess(true)
		console.log(data);
	}
	
	
	})
	console.log(data)

	




}




	return (
	
		<Grid container spacing={1} className='admin__item' maxWidth="md">
		<Grid item xs={12} md={5}>
		  <img className='admin__img' src="https://image.shutterstock.com/image-vector/business-technology-storage-cloud-computing-260nw-1913649118.jpg" alt="" />
		</Grid>
		<Grid item xs={12} md={7} >
			<h2>MakeAdmin ..</h2>
		<form  onSubmit={handleSubmit(onSubmit)}>
							
							  <TextField 
							  sx={{ width: '90%', mx:1}}
							  required
							  id="standard-basic" 
							  label="Your Email" 
							  {...register("email")}
							  variant="standard" />
				  
				  <input className="bg-indigo-500 hover:bg-indigo-600 shadow-lg text-white font-semibold text-sm py-3 mt-6 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all" type="submit" />
				
				 </form>
				 {success &&  <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
  
  <p className="text-sm">Your admin as Successfully</p>
</div> }
		</Grid>
		
	  </Grid>
	
		);
};

export default MakeAdmin;