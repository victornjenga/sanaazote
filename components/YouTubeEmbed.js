// components/YouTubeEmbed.js

import React from 'react';

const getYouTubeVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
  };
  
const YouTubeEmbed = ({ url, title }) => {
    const videoId = getYouTubeVideoId(url);

    if (!videoId) {
      return <div>Error: Invalid YouTube URL</div>;
    }
  
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
  return (
    <div className=" shadow-md px-2 rounded-sm shadow-gray-200 pb-6">

    <div className="rounded-xl block w-full  space-x-10 ">
     
      <iframe
        className='px-2 w-full'
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      ></iframe>
       <h2 className='text-center py-1 text-xl'>{title}</h2>
    </div>
    </div>
  );
};

export default YouTubeEmbed;
