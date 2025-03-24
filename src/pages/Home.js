import React from "react";
import videoBg from "../assets/background-video.mp4"; // шлях до твого відео


function Home({ language }) {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">
        {language === "uk"
          ? "Закарпаття. Інвестиції та можливості"
          : "Zakarpattia. Investments & Opportunities"}
      </h1>
      <p>This is the homepage of our investment website.</p>
      {/* <div className="relative w-full h-screen overflow-hidden text-white"> */}
      {/* Фонове відео */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
