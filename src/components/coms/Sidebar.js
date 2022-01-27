import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
const Sidebar = () => {
    const [product,setProduct]=useState([])
    
    useEffect(() => {
        fetch('https://still-waters-64451.herokuapp.com/product/5')
        .then(res=>res.json())
        .then(data=>setProduct(data.result))
     }, []);



    return (
      <>
       {product?.slice(1,7).map((product) => (

            <div className="row" key={product._id}>
                            <div className="left-side col-md-6">
                                <p className="pt-5 mb-0">{product.title}</p>
                                <ReactStars
                count={5}
                value={product.Rating}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
                            </div>
                            <div className="right-side col-md-6">
                                 <img className="shoe-img pl-5 pl-md-0" src={product.image} alt=''/> </div>
            </div>

))}
      </>
       
       
    );
};

export default Sidebar;