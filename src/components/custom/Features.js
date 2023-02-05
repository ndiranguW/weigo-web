import React, { useEffect, useState } from "react";
import sanityClient from "../../client";

const Features = () => {
  const [featureContent, setFeatureContent] = useState([]);

  // query sanity

  useEffect(() => {
    const query = `*[_type == 'features']{
          name,
        about,
        image{
          asset->{url}
        },
      }`;

    sanityClient
      .fetch(query)
      .then((response) => setFeatureContent(response))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="features-container p-2">
      <div className="container mt-5">
        <div className="feature-page-text col-sm-12 col-lg-6 mx-auto">
          <h2 className="text-center">
            The all-in-one platform to manage your construction.
          </h2>
          <p className="text-center text-secondary">
            lorem ipsum dolor amet!lorem ipsum dolor amet! lorem ipsum dolor
            amet! lorem ipsum dolor amet!
          </p>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          {featureContent.map((feature, index) => (
            <div key={index} className="col-sm-12 col-md-8 col-lg-3 mb-1">
              <div className="card text-center">
                <img
                  src={feature.image.asset.url}
                  alt="card icon"
                  className="feature-card__img mx-auto"
                />
                <div className="card-body">
                  <h5 className="card-title"> {feature.name}</h5>
                  <p className="card-text">{feature.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
