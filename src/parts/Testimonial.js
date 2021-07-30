import React from "react";

import testimonialFrame from "assets/images/hero/image-testimonial-frame.png";

import Star from "components/Star";
import Button from "components/Button";

const Testimonial = ({ data }) => {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
          <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
            <img
              src={data.imageUrl}
              alt="testimonial"
              className="position-absolute"
              style={{
                zIndex: 1,
              }}
            />
            <img
              src={testimonialFrame}
              alt="testimonial frame"
              className="position-absolute"
              style={{
                margin: `-30px 0 0 -30px`,
              }}
            />
          </div>
        </div>
        <div className="col-md-7">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4}></Star>
          <h5
            className="h2 font-weight-normal line-height-2"
            style={{ marginTop: 20 }}
          >
            {data.content}
          </h5>
          <span className="text-gray-500">{`${data.familyName}, ${data.familyOccupation}`}</span>
          <div>
            <Button
              className="btn px-5"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
