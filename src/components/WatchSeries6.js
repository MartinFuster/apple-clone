import React from "react";
import series6 from "../images/watch_series_6_logo_large.png";

function WatchSeries6() {
  return (
    <section className="series-6">
      <div className="series-6-container">
        <div className="series-content">
          <figure className="series-6-text-img"></figure>
          <h4 onselectstart="return false" className="series-6-text">
            Measure your blood oxygen level. Take an ECG anytime, anywhere.
            Easily see your fitness metrics on the enhanced Always‑On Retina
            display.
          </h4>
          <div className="button-container">
            <button className="btn btn-white u-margin-right-sm">
              Learn More
            </button>
            <button className="btn btn-white">Buy</button>
          </div>
        </div>
        <div className="series-6-img">
          <figure className="series-6-bg-img"></figure>
        </div>
      </div>
    </section>
  );
}

export default WatchSeries6;
