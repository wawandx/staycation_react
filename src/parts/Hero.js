import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/hero/img-hero.jpg";
import ImageHeroFrame from "assets/images/hero/img-hero-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveller from "assets/images/icons/ic_traveller.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";

import Button from "components/Button";

import numberFormat from "utils/numberFormat";

const Hero = (props) => {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="font-weight-light line-height-1 mb-3">
              Forget the busy work,
              <br />
              <span className="bold-hero">start</span> your next{" "}
              <span className="bold-hero">vacation</span>
            </h1>
            <p
              className="font-weight-light text-gray-500"
              style={{ width: 497, lineHeight: "170%", marginBottom: "30px" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments. Your money can return but your
              time is not. What are you thinking?
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: "80px" }}>
              <div className="col-4">
                <img
                  width="32"
                  height="32"
                  src={IconTraveller}
                  alt={`${props.data.travelers} Travellers`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travellers
                  </span>
                </h6>
              </div>
              <div className="col-4">
                <img
                  width="32"
                  height="32"
                  src={IconTreasure}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
              <div className="col-4">
                <img
                  width="32"
                  height="32"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ width: "100%", height: 444, paddingTop: 30 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{
                  margin: "-30px 0 0 -30px",
                  zIndex: 1,
                  width: 515,
                  height: 401,
                }}
              />
              <img
                src={ImageHeroFrame}
                alt="Room with couches Frame"
                className="img-fluid position-absolute"
                style={{ margin: "10px 0 0 10px", width: 515, height: 401 }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
