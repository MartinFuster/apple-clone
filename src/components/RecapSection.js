import React, { useState } from "react";
import Video from "../images/apple-video.mp4";
import play from "../images/play.svg";
import stop from "../images/stop.svg";

function RecapSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  function handlePlayClick() {
    let video = document.getElementById("video");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <section className="recap">
      <div className="video-container">
        <video id="video" autoPlay muted loop className="video">
          <source src={Video} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div className="text-container">
        <h1 className="recap-h1">Time for a recap.</h1>
        <h4 className="recap-h4">
          Introducing Apple Watch Series 6, Apple Watch SE, Apple Fitness+, the
          new iPad Air and iPad, and Apple One — the all‑new Apple services
          bundle.
        </h4>
        <div className="button-container">
          <button className="btn btn-blue">Watch the event</button>
          <img
            src={isPlaying ? stop : play}
            alt="Stop"
            className="play-button"
            onClick={() => handlePlayClick()}
          />
        </div>
      </div>
    </section>
  );
}

export default RecapSection;
