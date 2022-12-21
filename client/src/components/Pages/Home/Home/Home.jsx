import React from 'react';
import { Helmet } from 'react-helmet';
import Advertise from '../Advertise/Advertise';
import Categories from '../Categories/Categories';
import ResellProcess from '../ResellProcess/ResellProcess';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <>
    <Helmet><title>Home page</title></Helmet>
        
        <Slider></Slider>

        <Categories></Categories>

        <Advertise></Advertise>

        <ResellProcess></ResellProcess>
        </>
    );
};

export default Home;