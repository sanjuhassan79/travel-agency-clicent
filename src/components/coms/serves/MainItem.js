




import {Button, Container, Grid, Typography } from '@mui/material';
import React, { useState,useEffect } from 'react';


import SingleItem from './SingleItem';

const MainItem = () => {
    const [product,setProduct]=useState([])
    const [page,setpage]=useState(0)
    const [pageCount,setpageCount]=useState(0)
    const size=5
useEffect(() => {
    fetch(`https://still-waters-64451.herokuapp.com/product/approve?page=${page}&&size=${size}`)
    .then(res=>res.json())
    .then(data=>{

      setProduct(data.result)
      const count=data.count;
      const pageNumber=Math.ceil(count/size)
      setpageCount(pageNumber)
    })
 }, [page]);

 console.log(product);
    return (
        <>
      
        <Container fixed >

<Typography variant="h6" component="h2"sx={{ textAlign: 'center',py:2,fontWeight: 'light',mt:7 }}>
SEE ALL COLORS
</Typography>
<Typography variant="h3" component="h2"sx={{ textAlign: 'center' ,pb:5,color:'#6a2b36',textTransform:"uppercase", mt:3}}>
travel agency experience 
</Typography>

<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {product?.map((product, index) => (
    <Grid item xs={12} sm={12} md={4} key={index}>
  <SingleItem
  key={index}
  product={product}
  
  ></SingleItem>

    </Grid>
  ))}

 
</Grid>
<div className='pagination'>
{
  [...Array(pageCount).keys()].map(number=><Button
  
  key={number}
  onClick={()=>setpage(number)}
  variant="outlined" color="error">{number}</Button>)
}

  </div>
        </Container>
        </>
    );
};

export default MainItem;