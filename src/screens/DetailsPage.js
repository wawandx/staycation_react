import React, { useEffect } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";

import ItemDetails from "json/itemDetails.json";

const DetailsPage = (props) => {
  useEffect(() => {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }, []);

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];
  return (
    <>
      <Header {...props} />
      <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
      <FeaturedImage data={ItemDetails.imageUrls} />
    </>
  );
};

export default DetailsPage;
