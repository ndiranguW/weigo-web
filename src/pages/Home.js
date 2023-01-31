import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import "../styles/pages/pages.css";
import Features from "../components/custom/Features";

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
    <div>
      <div className="container-fluid home-container">
        {homeContent.map((item, index) => (
          <div key={index} className="text-center home-section">
            <div className="home-section__child px-5">
              <div>
                <span className="home__welcome-text ">
                  <h2 className="mb-4">{item.welcome}</h2>
                </span>
                <p className="home__welcome-desc">{item.description}</p>
                <div className="home__action-btns">
                  <button type="button" className="home-explore__btn">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Features />
    </div>
  );
}
