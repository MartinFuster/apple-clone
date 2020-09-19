import React from "react";

function OneSection() {
  return (
    <section className="one-section">
      <div className="series-6-container">
        <div className="series-content one-content">
          <h4 className="series-6-text text-black u-margin-bottom-sm title-small">
            Coming this fall
          </h4>
          <figure className="one-text-img"></figure>
          <h4 className="series-6-text text-black">
            Bundle up to six Apple services into one easy subscription. Plans
            for you and your family. And private access to each service, across
            everyone's devices.
          </h4>
          <div className="button-container">
            <button className="btn btn-black">Learn More</button>
          </div>
        </div>
        <div className="series-6-img">
          <figure className="one-section-bg-img"></figure>
        </div>
      </div>
    </section>
  );
}

export default OneSection;
