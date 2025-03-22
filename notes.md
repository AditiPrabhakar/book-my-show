# Pages:
    >> Home.Page.jsx (Default.Hoc.jsx)
    >> Movie.Page.jsx (Movie.Hoc.jsx)
    >> Play.Page.jsx (Default.Hoc.jsx)

# HOCs / Layouts:
    >> Default.Hoc.jsx
    >> Movie.Hoc.jsx

# Components:
    >> Cast                Cast.Component.jsx
    >> Entertainment       EntertainmentCard.Component.jsx
    >> HeroCarousel     1. HeroCarousel.Component.jsx
                        2. Arrows.Component.jsx

    >> MovieHero        1. MovieHero.Component.jsx
                        2. MovieInfo.Component.jsx

    >> NavBar           1. Navbar.Component.jsx
                        2. MovieNavbar.Component.jsx

    >> PaymentModal        Payment.Component.jsx
    >> PlayFilters         Filters.Component.jsx
    >> Poster              Poster.Component.jsx
    >> PosterSlider        PosterSlider.Component.jsx

index.js -> app.js -> home page 
layout -> navbar -> components (herocarousel) -> footer

npx create-react-app .

[Tailwind](https://tailwindcss.com/docs/installation)

[For carousels (React Slick)](https://react-slick.neostack.com/)

<!--& Axios is for connecting front-end and back-end (connect to APIs)  -->
[Axios (install)](https://www.npmjs.com/package/axios)

[Axios Documentation](https://axios-http.com/docs/intro)

[Headless UI](https://headlessui.com/)

npm install @headlessui/react

<!--^ React icons: -->
npm i react-icons

npm i react-router-dom

## rafce
shortcut for the initial structure of the page

[Tailwind Shades](https://www.tailwindshades.com/)


for API integration: 
used: [TMDB API](https://www.themoviedb.org/settings/api)
profile -> settings -> api -> get the api key
url used: https://api.themoviedb.org/3/movie/550?api_key=b4a7ff0b7f1a527f9940279c07620586

for searching various types of links (top movies, favorite movies etc): [DevelopeTMDB Doc](https://developer.themoviedb.org/docs/getting-started)

 ## Context API
 We can store/edit/update data from any component & then can access it in any of the component