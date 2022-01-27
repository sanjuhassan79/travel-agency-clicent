import React from 'react';
import Carousel from '../coms/Carousel';
import Servers from '../coms/serves/Servers';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Carousel></Carousel>
            <Servers></Servers>
            <Footer></Footer>
        </div>
    );
};

export default Home;