import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

import { useForm } from "react-hook-form";
const Update = () => {

    let { id } = useParams();

    const { register, handleSubmit, } = useForm();
	const [success,setSuccess]=useState(false)

const [updata, setupdata] = useState([]);

useEffect(() => {
    fetch(`https://still-waters-64451.herokuapp.com/products/${id}`)
    .then(res=>res.json())
    .then(data=>setupdata(data))
}, [id]);

// console.log(updata);

    const onSubmit = data => {
		const dataup = {
			...data,
			status: 'pending'
		}
        console.log(dataup);
		fetch(`https://still-waters-64451.herokuapp.com/products/${id}`,{
			method:'PUT',
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
      
  
      
  
  
  
  
  }




    return (
        <Grid container spacing={1} className='admin__item' maxWidth="md">
		
		<Grid item xs={12} md={7} >
			<h2>Update...</h2>
		<form  onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username"> id </label>
        <input
        className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
      type="text"
      name="image"
      value={updata._id}
      {...register("_id")}
     
    />
        <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username"> Image </label>
        <input
        className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
      type="text"
      name="image"
      defaultValue={updata.image}
      {...register("image")}
     
    />





        <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username"> Title </label>
        <input
        className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
      type="text"
      name="email"
      defaultValue={updata.title}
      {...register("title")}
     
    />
        
        <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username"> Travelerinfo </label>
        <input
        className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
      type="text"
      name="email"
      defaultValue={updata.travelerinfo}
      {...register("travelerinfo")}
     
    />
        <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username"> Description </label>
        <input
        className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
      type="text"
      name="email"
      defaultValue={updata.description} 
      {...register("description")}
     
    />
        <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username"> Description </label>
        <input
        className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
      type="text"
      name="email"
      defaultValue={updata.category} 
      {...register("category")}
     
    />
        <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username"> Description </label>
        <input
        className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
      type="text"
      name="email"
      defaultValue={updata.cost}  
      {...register("cost")}
     
    />
        <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username"> Location </label>
        <input
        className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
      type="text"
      name="email"
      defaultValue={updata.location} 
      {...register("location")}
     
    />
        <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username"> Rating </label>
        <input
        className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
      type="text"
      name="email"
      defaultValue={updata.Rating}
      {...register("Rating")}
     
    />
        
							

							  
                              
				  
						
							  
							 
							 
							  
							 
							

				  
				 <Button type="submit" style={{backgroundColor:'#6a2b36',marginTop:'20px',marginLeft:'5px'}} variant="contained"> Submit</Button>
				
				 </form>
				 {success &&  <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
  
  <p className="text-sm">Your product added as Successfully</p>
</div> }
		</Grid>
		
	  </Grid>
    );
};

export default Update;
