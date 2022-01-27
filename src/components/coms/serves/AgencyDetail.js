


import { Button, Container, Grid } from '@mui/material';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
// import Navigation from '../Navigation/Navigation';
// import ProductModal from '../ProductModal/ProductModal';
import './AgencyDetail.css'
const AgencyDetail = () => {
const {Productid}=useParams()
    const [products,setProducts]=useState({})
    // const [open, setOpen] = useState(false);
    // const [ProductSuccess, setProductSuccess] = useState(false);
    // const handleProductOpen = () => setOpen(true);
    // const handleProductClose  = () => setOpen(false);
    useEffect(() => {
       fetch(`https://still-waters-64451.herokuapp.com/products/${Productid}`)
       .then(res=>res.json())
       .then(data=>setProducts(data))
    }, [Productid]);
    return (
        <>
   
          <Navigation></Navigation>
        <div>
            <div className="Product__home">
                <img src={products.image} alt="" />
                <h4>{products.title}</h4>
            </div>
            <Container fixed sx={{ mt: 15 }}>
            <Grid container spacing={3}>
                
                <Grid item xs={12} md={5}>
                <img src={products.image} alt="" />
                </Grid>
                <Grid item xs={12} md={7}>
                <h4 className="title__p">Location:{products.location}</h4>
                <h4 className="title__p">{products.title}</h4>
                <h6 className="title__pri">Travels Cost:$ {products.cost}</h6>
                <p className="title__des">{products.description}</p>
                <Link to={`/dashboard/`}style={{textTransform:'uppercase',textDecoration:'none',}}><Button type="button" className="btn btn-outline-info hover-5-title m-3 mt-3" style={{backgroundColor:"rgb(217 79 121)",color:'rgb(255 255 255)'}}>share experience </Button></Link>
         
                </Grid>
                </Grid>

        

            </Container>
            
            </div>
            <Footer></Footer>
        </>
    );
};

export default AgencyDetail;