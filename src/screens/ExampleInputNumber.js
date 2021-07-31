import React, { useState } from "react";

import InputNumber from "components/Form/InputNumber";

const ExampleInputNumber = () => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-auto">
          <InputNumber
            max={30}
            onChange={handleChange}
            name="value"
            value={value}
            suffix=" night"
            isSuffixPlural
          />
        </div>
      </div>
    </div>
  );
};

export default ExampleInputNumber;
