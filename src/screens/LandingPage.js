import React from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";

import landingPage from "json/landingPage.json";

const LandingPage = (props) => {
  return (
    <>
      <Header {...props} />
      <Hero data={landingPage.hero} />
    </>
  );
};

export default LandingPage;
