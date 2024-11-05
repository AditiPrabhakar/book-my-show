import React, { useState } from 'react'
import HeroSlider from 'react-slick'

const HeroCarousel = () => {
  const [images, setImages] = useState([]); //& Using an array as there are multiple images
  return (
    <>
    <div className='lg:hidden'>
      <HeroSlider />
      {
        images.map((image) => {
          <div className='w-full h-56 md:h-80 py-3'>
            <img src="" alt="Hero Banner" className='w-full h-full rounded-md object-cover' />

          </div>
        })
      }

    </div>
    <div className='hidden lg:block'></div>
    </>
  )
}

export default HeroCarousel

// lg:hidden => only visible on small and medium screen sizes
// hidden lg:block => for large screen sizes