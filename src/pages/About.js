import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Loader from "../components/custom/Loader";
import AboutPurpose from "../components/custom/AboutPurpose";

const About = () => {
  const builder = imageUrlBuilder(sanityClient);
  const [aboutPageContent, setAboutPageContent] = useState(null);

  // create image urls.
  function urlFor(source) {
    return builder.image(source);
  }

  //
  useEffect(() => {
    const query = `*[_type == 'about']{
      aboutus,
      "mission": [mission[].children[].text],
      "vision" : [vision[].children[].text],
      "missionimage":missionimage{asset->{url}},
      "visionimage":visionimage{asset->{url}},
    }`;

    sanityClient
      .fetch(query)
      .then((results) => setAboutPageContent(results[0]))
      .catch((error) => console.log(`About page: ${error}`));
  });

  if (!aboutPageContent) {
    return <Loader />;
  }

  return (
    <div className="container-fluid">
      <div className="container about py-3">
        <div className="about-page p-2">
          <div className="col-sm-12 col-md-12 col-lg-12 mx-auto about-page__header text-center p-3">
            <h1 className="">About Us</h1>
            <p>
              Revolutionize your construction site workflows and increase
              efficiency.
            </p>
          </div>
          <div className="row mt-5 p-1">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <p className="text-center">{aboutPageContent.aboutus}</p>
            </div>
          </div>
          <div>
            <AboutPurpose />
          </div>
        </div>

        <div className="row mt-5 mission h-100 d-flex ">
          <div className="mission-board row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-8 ">
              <p>{aboutPageContent.mission}</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 p-2">
              <img
                src={urlFor(aboutPageContent.missionimage).url()}
                alt="mission"
                className="about__img"
              />
            </div>
          </div>
          <div className="row mt-5 vision-board align-items-center p-2">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <img
                src={urlFor(aboutPageContent.visionimage).url()}
                alt="mission"
                className="about__img"
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-8">
              <p>{aboutPageContent.vision}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
