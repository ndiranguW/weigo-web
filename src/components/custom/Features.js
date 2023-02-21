import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const Features = () => {
  const builder = imageUrlBuilder(sanityClient);

  const [featureContent, setFeatureContent] = useState([]);

  function urlFor(source) {
    if (!source) {
      return "https://cdn-icons-png.flaticon.com/512/1182/1182812.png?w=826&t=st=1676278435~exp=1676279035~hmac=c719c3b548cd5d3b8d55787fdd56eb225f219302c847f14cc4656fd29d334c43";
    }
    return builder.image(source).url();
  }

  // query sanity
  useEffect(() => {
    const query = `*[_type == 'features']{
          name,
          description,
        about,
        image, 
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
            The all-in-one platform to manage your construction project.
          </h2>
          <p className="text-center text-secondary">
          </p>
        </div>

        <div className="row d-flex justify-content-center mt-4">
          {featureContent.map((feature, index) => (
            <div key={index} className="col-sm-12 col-md-8 col-lg-3 mb-1">
              <div className="card ">
                <img
                  src={urlFor(feature.image)}
                  alt="card icon"
                  className="feature-card__img mx-auto"
                />
                <div className="card-body">
                  <h5 className="card-title text-center"> {feature.name}</h5>
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
