import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';

import { useForm } from "react-hook-form";
const Experience = () => {

    const { register, handleSubmit, } = useForm();
	const [success,setSuccess]=useState(false)
    const onSubmit = data => {
		const dataup = {
			...data,
			status: 'pending'
		}
		fetch('https://still-waters-64451.herokuapp.com/products',{
			method:'POST',
			headers:{'content-type':'application/json'},
			body:JSON.stringify(dataup)
		})
		.then(res=>res.json())
		.then(data=>{
		if(data.modifiedCount){
			
			setSuccess(true)
			console.log(data);
		}
		
		
		})
      console.log(data.email)
  
      
  
  
  
  
  }
    return (
        <Grid container spacing={1} className='admin__item' maxWidth="md">
		
		<Grid item xs={12} md={7} >
			<h2>share experience ..</h2>
		<form  onSubmit={handleSubmit(onSubmit)}>
							
							  <TextField 
							  sx={{ width: '90%', mx:1}}
							  required
							  id="standard-basic" 
							  label="Image" 
							  {...register("image")}
							  variant="standard" />

							  <TextField 
							  sx={{ width: '90%', mx:1}}
							  required
							  id="standard-basic" 
							  label="Title" 
							  {...register("title")}
							  variant="standard" />
                              
				  
							  <TextField 
							  sx={{ width: '90%', mx:1}}
							  required
							  id="standard-basic" 
							  label="travelerinfo" 
							  {...register("travelerinfo")}
							  variant="standard" />
							  <TextField 
							  sx={{ width: '90%', mx:1}}
							  required
							  id="standard-basic" 
							  label="Description" 
							  {...register("description")}
							  variant="standard" />
							  <TextField 
							  sx={{ width: '90%', mx:1}}
							  required
							  id="standard-basic" 
							  label="Category " 
							  {...register("category")}
							  variant="standard" />
							  <TextField 
							  sx={{ width: '90%', mx:1}}
							  required
							  id="standard-basic" 
							  label="Cost " 
							  {...register("cost")}
							  variant="standard" />
							  <TextField 
							  sx={{ width: '90%', mx:1}}
							  required
							  id="standard-basic" 
							  label="Location" 
							  {...register("location")}
							  variant="standard" />
							  <TextField 
							  sx={{ width: '90%', mx:1}}
							  required
							  id="standard-basic" 
							  label="Rating" 
							  {...register("Rating")}
							  variant="standard" />

				  
				 <Button type="submit" style={{backgroundColor:'#6a2b36',marginTop:'20px',marginLeft:'5px'}} variant="contained"> Submit</Button>
				
				 </form>
				 {success &&  <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
  
  <p className="text-sm">Your product added as Successfully</p>
</div> }
		</Grid>
		
	  </Grid>
    );
};

export default Experience;