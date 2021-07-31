import React from "react";
import Fade from "react-reveal/Fade";

import Button from "components/Button";

const Categories = ({ data }) => {
  return data.map((category, indexCategory) => {
    return (
      <section className="container" key={`category-${indexCategory}`}>
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              category.items.map((item, indexItem) => {
                return (
                  <div
                    className="item column-3 row-1"
                    key={`category-${indexCategory}-item-${indexItem}`}
                  >
                    <Fade bottom delay={300 * indexItem}>
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular{" "}
                            <span className="font-weight-light">Choice</span>
                          </div>
                        )}
                        <figure className="img-wrapper" style={{ height: 157 }}>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="img-cover"
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <Button
                            className="streched-link d-block text-gray-900"
                            type="link"
                            href={`/properties/${item._id}`}
                          >
                            <h5 className="h4">{item.name}</h5>
                          </Button>
                          <span className="text-gray-500">
                            {`${item.city}, ${item.country}`}
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });
};

export default Categories;
