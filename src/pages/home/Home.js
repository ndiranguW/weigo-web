import React, { useEffect, useState } from "react";
import "../styles.css";
import sanityClient from "../client";

export default function Home() {
  const [homeContent, setHomeContent] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'home']{
          welcome,
        description,
      }`
      )
      .then((response) => {
        setHomeContent(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid home">
      <div className="container">
        {homeContent.map((item, index) => (
          <div key={index} className="row">
            <div className="col p-5">
              <span className="weigo__welcome-text ">
                <h2 className="mb-4">{item.welcome}</h2>
              </span>
              <span className="weigo__welcome-desc">{item.description}</span>
              <div className="mt-5">
                <button className="btn btn-outline-primary btn-sm ">
                  Explore..
                </button>
              </div>
            </div>
            <div className="col bg-info rounded p-5">
              <p>rhsfjuilkeashj</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
