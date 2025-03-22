import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    useEffect(() => {
      const requestTopRatedMovies = async () => {
        const getTopRatedMovies = await axios.get('/movie/top_rated');
        setRecommendedMovies(getTopRatedMovies.data.results)
      }
      requestTopRatedMovies();
    }, [])

    useEffect(() => {
      const requestPopularMovies = async () => {
        const getPopularMovies = await axios.get('/movie/popular');
        setPremierMovies(getPopularMovies.data.results)
      }
      requestPopularMovies();
    }, [])

    useEffect(() => {
      const requestUpcomingMovies = async () => {
        const getUpcomingMovies = await axios.get('/movie/upcoming');
        setOnlineStreamEvents(getUpcomingMovies.data.results)
      }
      requestUpcomingMovies();
    }, [])

    return (
      <>
        <HeroCarousel />

        <div className="container mx-auto overflow-x-hidden px-4 md:px-8 my-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
            The best of Entertainment
          </h1>
          <EntertainmentCard />
        </div>

        <div className="container mx-auto overflow-x-hidden px-4 md:px-8 my-8">
          <PosterSlider
            //* Props
            title="Recommended movies"
            subtitle="List of recommended movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="bg-premier-800 py-12">
          <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src=""
                alt=""
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              title="Premiers"
              subtitle="Brand new releases every Friday"
              posters={premierMovies}
              isDark={true}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider
            title="Online Streaming Events"
            subtitle="Online Streaming Events"
            posters={onlineStreamEvents}
            isDark={false}
          />
        </div>
      </>
    );
}

export default DefaultLayoutHoc(HomePage);