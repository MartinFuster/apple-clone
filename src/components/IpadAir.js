import React from "react";

function IpadAir() {
  return (
    <section className="ipad-air">
      <div className="text-container">
        <figure className="apple-text-img"></figure>
        <div className="series-6-img">
          <figure className="ipad-bg-img"></figure>
        </div>
        <h4 className="series-6-text text-black u-margin-bottom-sm title-small">
          Available in October
        </h4>
        <h4 className="recap-h4 text-black air-text unselectable-text">
          iPad Air features an all-screen design with 10.9-inch Liquid Retina
          display. The new A14 bionic chip. And support for Apple Pencil and
          Magic Keyboard. Available in five finishes.
        </h4>
        <div className="button-container">
          <button className="btn btn-black u-margin-right-sm">
            Learn More
          </button>
          <button className="btn btn-black">View Pricing</button>
        </div>
      </div>
    </section>
  );
}

export default IpadAir;
