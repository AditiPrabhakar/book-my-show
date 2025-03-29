import React from 'react';
import DefaultLayoutHoc from '../layouts/Default.layout';
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";

// Play Data Array
const playsData = [
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMSBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00436897-uufamlluuz-portrait.jpg",
        href: "https://in.bookmyshow.com/plays/the-woman-on-trial-a-play-in-english/ET00436897",
        title: "The Woman On Trial",
        subtitle: "Akshara Theatre: Delhi",
        lang: "English"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyOSBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00433522-mtalttveax-portrait.jpg",
        href: "https://in.bookmyshow.com/plays/the-patient/ET00433522",
        title: "THE PATIENT",
        subtitle: "Akshara Theatre: Delhi",
        lang: "Hindi"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA1IEFwcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00439418-sfvfakddta-portrait.jpg",
        href: "https://in.bookmyshow.com/plays/the-will/ET00439418",
        title: "The Will",
        subtitle: "Samarth Theatre Group",
        lang: "English/Hindi"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA0IEFwcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415315-vsaxstxeht-portrait.jpg",
        href: "https://in.bookmyshow.com/plays/the-exorcism/ET00415315",
        title: "The Exorcism",
        subtitle: "Little Theatre Group (LTG)",
        lang: "English/Hindi"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzIE1heQ%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00439283-cnaestcyzz-portrait.jpg",
        href: "https://in.bookmyshow.com/plays/little-women/ET00439283",
        title: "Little Women",
        subtitle: "Shree Ram Centre: Delhi",
        lang: "English/Hindi"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAxNCBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00343791-dnqfvjdlcy-portrait.jpg",
        href: "https://in.bookmyshow.com/plays/meera-beyond-devotion/ET00343791",
        title:"MEERA: Beyond Devotion",
        subtitle: "Akshara Theatre: Delhi",
        lang: "English/Hindi"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMCBNYXIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00383604-zrjtekhvbe-portrait.jpg", 
        href: "https://in.bookmyshow.com/plays/unmask-winter-theatre-festival/ET00383604",
        title: "Unmask Theatre Festival",
        subtitle: "Multiple Venues",
        lang: "Hindi"
    },
    {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00439944-qglgjtwngu-portrait.jpg", 
        href: "https://in.bookmyshow.com/plays/abhivyakti-story-night/ET00439944",
        title: "Abhivyakti Story Night", 
        subtitle: "Samay Yaan: Delhi",
        lang: "English/Hindi" 
    }
];

const PlayPage = () => {
    return (
        <div className='container mx-4 px-4 my-10 grid grid-cols-1 lg:grid-cols-4 gap-6 bg-zinc-200'>

            {/* Left Section - Filters */}
            <div className='lg:col-span-1 p-4 -ml-3 rounded '>
                <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                <PlayFilters title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                <PlayFilters title="Language" tags={["English", "Hindi", "Punjabi", "Kannada"]} />
                <PlayFilters title="Categories" tags={["Theatre", "Story Telling", "Experiment", "Improv Theatre"]} />
                <PlayFilters title="Genres" tags={["Drama", "Comedy", "Musical", "Romantic", "Historical", "Classic", "Thriller", "Adaptation", "Psychological", "Mystery", "Mythological", "Contemporary", "Horror", "Suspense", "Tragedy", "Tribute", "Adventure", "Biography", "Fantasy", "Period"]} />
                <PlayFilters title="More Filters" tags={["Outdoor Events", "Fast Filling", "Offers for you", "Must Attend"]} />
                <PlayFilters title="Price" tags={["Free", "0 - 500", "501 - 2000", "Above 2000"]} />
            </div>

            {/* Right Section - Plays */}
            <div className='lg:col-span-3 ml-6'>
                <h2 className='text-3xl font-bold ml-2 mb-4'>Plays in Jalandhar</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {playsData.map((play, index) => (
                        <Poster key={index} isPlay={true} {...play} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DefaultLayoutHoc(PlayPage);
