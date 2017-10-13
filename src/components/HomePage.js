import React from 'react';
import { Link } from 'react-router';
import BannerVideo from './BannerVideo'
import News from './News';
import Programmings from './Programmings';
import Gallery from './Gallery'
// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
    <section>
        <BannerVideo />
        <News />
        <Programmings />
        <Gallery />


    </section>
);

export default HomePage;