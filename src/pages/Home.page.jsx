import React, { useState } from 'react';

//* Layout HOC
import DefaultLayoutHoc from '../layouts/Default.layout';

//* Components
import EntertainmentCard from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]); //& Array cause there will be more than one recommended movie
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
    return <>
        <HeroCarousel />

        <div className='container mx-auto px-4 md:px-12 my-8'>
            <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The best of Entertainment</h1>
        </div>
    </>;
}

export default DefaultLayoutHoc(HomePage);