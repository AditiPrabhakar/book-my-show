import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component'

const DefaultLayoutHoc = (Component) => ({...props}) => {
  return (
    <div>
        <Navbar />
        <Component {...props} /> 
        <div className="w-full bg-gray-800 overflow-x-hidden text-white text-center py-4">Footer</div>
    </div>
  )
}

export default DefaultLayoutHoc