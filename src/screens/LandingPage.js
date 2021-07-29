import React, { useRef } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";

import landingPage from "json/landingPage.json";

const LandingPage = (props) => {
  const refMostPicked = useRef();
  return (
    <>
      <Header {...props} />
      <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />
    </>
  );
};

export default LandingPage;
