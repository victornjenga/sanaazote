// pages/index.js

import React from 'react';
import YouTubeEmbed from '../components/YouTubeEmbed';
import styles from "../styles/style";
import Partners from "../components/Partners";

const Projects = () => {
  // Define the JSON data within the component
  const videos = [
    { url: "https://youtu.be/90pYaWVhpXw?si=hYVr9ByKTMm0simS", title: "Netflix and Chill" },
    { url: "https://youtu.be/zUTUA0TKvfQ?si=XTgnZZU7fzqnyfmM", title: "Man U FA Cup Finals" },
    { url: "https://youtu.be/WW9SoVpVZSI?si=9whf8llGl6gdXSbV", title: "Billionare" }
  ];

  return (
    <div className={`${styles.paddings} relative pt-20 z-1 mx-auto w-[100%] md:w-[85%]`}>
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="font-bold md:text-[54px] py-4 text-[40px]">
          Our{" "}
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-orange-600  to-orange-900">
            Projects
          </span>
        </h2>
        <p className=" font-normal sm:text-[20px] text-[16px]  ">
          Take a look at some of our more recent client projects.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 md:mt-8 w-full  items-center gap-10  h-full">
      {videos.map((video, index) => (
        <YouTubeEmbed key={index} url={video.url} title={video.title} />
      ))}
      </div>
      <Partners />

    </div>
  );
};

export default Projects;
