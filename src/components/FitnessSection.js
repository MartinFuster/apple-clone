import React from "react";

function FitnessSection() {
  return (
    <section className="fitness">
      <div className="series-6-container">
        <div className="series-content fitness-content">
          <h4 className="series-6-text text-black u-margin-bottom-sm title-small">
            Coming late 2020
          </h4>
          <figure className="fitness-text-img"></figure>
          <h4 className="series-6-text text-black">
            A new fitness experience powered by Apple Watch. Try world-class
            workouts on your iPhone, iPad, and Apple TV.
          </h4>
          <div className="button-container">
            <button className="btn btn-black">Learn More</button>
          </div>
        </div>
        <div className="fitness-img">
          <figure className="fitness-bg-img"></figure>
        </div>
      </div>
    </section>
  );
}

export default FitnessSection;
