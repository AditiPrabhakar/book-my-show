import React from 'react'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../HeroCarousel/Arrows.Component';

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="w-full h-full px-2"> {/* Added padding between cards */}
        <img
          className="w-full h-full rounded-lg object-cover shadow-md" 
          src={props.src} 
          alt="entertainment"
        />
      </div>
    </>
  );
}

const EntertainmentCardSlider = () => {
   const EntertainmentImage = [
    "https://in.bmscdn.com/discovery-catalog/collections/workshops-collection-202007231330.png",
  "https://in.bmscdn.com/discovery-catalog/collections/fitness-collection-2020081150.png",
  "https://in.bmscdn.com/discovery-catalog/collections/kids-collection-202007220710.png",
  "https://in.bmscdn.com/discovery-catalog/collections/comedy-shows-collection-202007220710.png",
  "https://in.bmscdn.com/discovery-catalog/collections/music-shows-collection-202007220710.png",
  "https://in.bmscdn.com/discovery-catalog/collections/esports-collection-202011150107.png",
  "https://in.bmscdn.com/discovery-catalog/collections/self-improvement-collection-202007220710.png",
  "https://in.bmscdn.com/discovery-catalog/collections/cooking-collection-202007222211.png",
  "https://in.bmscdn.com/discovery-catalog/collections/interactive-games-collection-202012041129.png",
  "https://in.bmscdn.com/discovery-catalog/collections/art-and-crafts-collection-202007220710.png",
  "https://in.bmscdn.com/discovery-catalog/collections/theatre-shows-collection-202012041128.png",
  "https://in.bmscdn.com/discovery-catalog/collections/adventure-collection-202010140844.png"
];

  // React Slick -> Responsive -> the complete layout is same 
  const settings = {
    infinte: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow style={{ right: "10px" }} />,
    prevArrow: <PrevArrow />,
    responsive: [ //no need to write for small, md, lg screen sizes separately now
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
    ]
  };

  return <>
  <Slider {...settings}>
        {EntertainmentImage.map((image, index) => (
          <EntertainmentCard src={image} key={index} />
        ))}
    </Slider>
  </>
}

export default EntertainmentCardSlider