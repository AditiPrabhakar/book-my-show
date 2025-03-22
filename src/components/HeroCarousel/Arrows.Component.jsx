import React from 'react';

export function NextArrow(props) {
  return (
    <div
      className={`${props.className} bg-gray-500 text-white rounded-full p-3`}
      style={{ 
        right: "5px", 
        zIndex: 2,
        fontSize: "30px", // Increase arrow size
        width: "45px", // Increase size of the arrow container
        height: "43px", // Increase size of the arrow container
        display: "flex", // Center the arrow inside the div
        alignItems: "center", 
        justifyContent: "center",
        opacity: 0.8, // Slightly transparent for a better look
        background: "gray",
      }}
      onClick={props.onClick}
    >
    </div>
  );
}

export function PrevArrow(props) {
  return (
    <div
      className={`${props.className} bg-gray-500 text-black rounded-full`}
      style={{ 
        left: "5px", 
        zIndex: 2,
        fontSize: "50px", // Increase arrow size
        width: "45px", // Increase size of the arrow container
        height: "43px", // Increase size of the arrow container
        display: "flex", // Center the arrow inside the div
        alignItems: "center", 
        justifyContent: "center",
        opacity: 0.8, // Slightly transparent for a better look
        background: "gray",
      }}
      onClick={props.onClick}
    >
    </div>
  );
}
