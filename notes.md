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

[Headless UI](https://headlessui.com/) -> can be used in react and vue js not in angular (for pop ups)

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

 [RazorPay](https://razorpay.com/)


 ## DevOps
 Dev -> Development Team -> Builds + Creates Projects
 Ops -> Operation Team -> Deploys project to client, gets clients feedback

 DevOps and CICD (Docker and Kubernetes)
 - hosting a server online is not free

 Dev ----------------------> Ops
 write code + share code --> Testing, scaling, bug fixing

 Developer Team -> Operation Team -> Teating Team

 Time to build appln depends on complexity of application 
 more complex will take more time

 ### Virtulization
 By virtualization a person can run Virtual OS on his/her local OS.
 you can have any number of Virtual OS on top of your OS.

#### Some other basic concepts:
 RAM (Random Access Memory) -> a running application should be present on the RAM.
 ROM (Read Only Memory) -> to store the application for the longest time, it is a permanent storage.
 GPU (Graphical Processing Unit) -> to add graphics

### Basic Architecture:
 windows(RAM, ROM, GPU) / Virtual OS
 ------------------------------------
 OS                     / Local OS

 ### Containerization
 A form of virtuaThey provide resizable computing capacity, meaning you can scale up or down your resources as needed, and only pay for what you use. lization where applications run in isolated user spaces, called containers, while sharing the same operating system (OS). 
 - Done with the help of **Docker**.
 A container encapsulates everything an application needs to run, including its code, libraries, runtime, and configuration files -> *Internal resource sharing*.

 Docker -> EC2 Instance

 **EC2 Instance** - a virtual server within *Amazon's Elastic Compute Cloud (EC2)*, a scalable compute platform, allowing users to run applications on the AWS cloud. They provide resizable computing capacity, meaning you can scale up or down your resources as needed, and only pay for what you use. 
 like a container for storing certain resources (images etc). (Client + Server + Kubernetes)

 ### Kubernetes (Orchestra)
 An open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It groups containers into logical units for easy management and discovery, and is used to manage and scale applications running in containers. 

 **Nodes**:
 - Master Node (A person holding the stick in the orchestra / Lead).
 - Child Node (A group of people who will be following the lead's/master's guidance).

 #### Docker
 >> Image
 >> Containers

```
 Image (Parent)
 Container (Child) || server
```

 Client server Architecture

 **Kubernetes**
 - Docker Deamon -> Server (Intialization)
 - Docker Client -> Client
 - Docker Swarm -> Orchestera (Master | Main Node | Configuration)

```
 > Master Node
 > Child Node
        > POD (Container)
        > Development (Where it keeps close eye on Pod)
```

 * Kubernetes is just an advance extention for Docker. (just as javascript (Docker) and node.js (Kubernetes)).

 Example: if we want to run server in docker with 3 containers 

```
 - Docker 
   >> Image
        >> Container 1
        >> Container 2
        >> Container 3

 - Kubernetes
  >> Master Node
            >> Child Node | POD 1  
            >> Child Node | POD 2 
            >> Child Node | POD 3

 Master Node 
    Child Node-1          Child Node-2          Child Node-3        Development
```

Development is to handle exception cases like server failures (Additonal feature of kubernetes), it monitors, analyze and maintain every child node/POD/Servers/Containers internally.

 ### NGINX (Light weight Server)
 A powerful, open-source web server, reverse proxy, load balancer, and HTTP cache that is known for its high performance and low resource utilization, making it a popular choice for various web applications and infrastructure needs. 

 - **Reverse Proxy** - It can act as a reverse proxy, caching web content and improving performance by offloading requests from backend servers. 
 - **Load Balancing** - NGINX can distribute traffic across multiple servers, ensuring high availability and performance. 
