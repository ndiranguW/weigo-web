// purpose is who are we building for
import React, { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../client";

const Purpose = () => {
  const [purposeContent, setPurposecontent] = useState([]);

  // query sanity
  useEffect(() => {
    const query = `*[_type == 'purpose']{
      title,
      slug,
      body,
    }`;

    sanityClient
      .fetch(query)
      .then((response) => setPurposecontent(response))
      .catch((error) => console.log(error));
  });

  return (
    <div className="purpose-container py-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6  mx-auto">
            <div className="mt-3 text-center">
              <h2 className="fw-semibold">Built for who?</h2>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mx-auto">
          {purposeContent &&
            purposeContent.map((post, index) => (
              <div key={index} className="row">
                <div className="col-lg-10 p-3 mx-auto">
                  <h4 className="fw-semibold">{post.title}</h4>
                  <div className="post-content">
                    <BlockContent blocks={post.body} />
                  </div>
                </div>
                <div className="col-lg-4"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Purpose;
