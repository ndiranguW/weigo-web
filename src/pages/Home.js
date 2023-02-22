import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import "../styles/pages.css";
import Features from "../components/custom/Features";
import Purpose from "../components/custom/Purpose";
import { Contact } from "../components";

export default function Home() {
  const [homeContent, setHomeContent] = useState([]);

  useEffect(() => {
    const query = `*[_type == 'home']{
          welcome,
        description,
        image{ 
          asset->{url}
        },
      }`;

    sanityClient
      .fetch(query)
      .then((response) => {
        setHomeContent(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="main-page">
      <div className="container-fluid home-container ">
        <div className="row h-100">
          {homeContent.map((item, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-12 col-lg-6 d-flex align-items-center mx-auto "
            >
              <div className="home-section__child py-5 text-center">
                <span className="home__welcome-text ">
                  <h2 className="mb-4">{item.welcome}</h2>
                </span>
                <p className="home__welcome-desc">{item.description}</p>
                <div className="home-action__btns mt-5">
                  <button type="button" className="btns home-explore__btn me-2">
                    Explore
                  </button>
                  <button type="button" className="btns d-none" disabled>
                    Download App
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Features />
      <Purpose />
      <Contact />
    </div>
  );
}
