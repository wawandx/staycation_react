import React, { useState } from "react";

import Breadcrumb from "components/Breadcrumb";

const ExampleBreadcrumb = () => {
  const breadcrumb = [
    {
      pageTitle: "Home",
      pageHref: "",
    },
    {
      pageTitle: "House Details",
      pageHref: "",
    },
  ];

  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-auto">
          <Breadcrumb data={breadcrumb} />
        </div>
      </div>
    </div>
  );
};

export default ExampleBreadcrumb;
