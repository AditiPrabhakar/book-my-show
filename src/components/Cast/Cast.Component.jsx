import React from "react";

const Cast = (props) => {
  // console.log(props.castName);
  // console.log(props)
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <img
            src={`https://image.tmdb.org/t/p/original${props.image}`}
            alt="cast and crew"
            className="w-full h-full rounded-full object-center object-cover"
          />
          {/* <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.castName}</h3> */}
        </div>
        <h1 className="text-xl text-gray-800">{props.castName}</h1>
        <h5 className="text-sm text-gray-500">{props.role}</h5>
      </div>
    </div>
  );
};
export default Cast;