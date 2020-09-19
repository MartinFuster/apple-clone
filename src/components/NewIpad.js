import React from "react";

function NewIpad() {
  return (
    <section className="new-ipad">
      <div className="series-6-container">
        <div className="series-content new-ipad-content">
          <h4 className="series-6-text title-strong-text">The new</h4>
          <figure className="new-ipad-text-img"></figure>
          <h4 className="series-6-text text-black">
            The new iPad is more capable than ever. Now with the faster A12
            Bionic chip, support for Apple Pencil, and the amazing features of
            iPadOS 14.
          </h4>
          <div className="button-container">
            <button className="btn btn-black u-margin-right-sm">
              Learn More
            </button>
            <button className="btn btn-black">Buy</button>
          </div>
        </div>
        <div className="series-6-img">
          <div className="new-ipad-bg-img"></div>
        </div>
      </div>
    </section>
  );
}

export default NewIpad;
