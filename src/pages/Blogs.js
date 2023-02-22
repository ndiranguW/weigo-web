import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../components/custom/Loader";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    const blogsQuery = `*[_type == 'blog']{
      title,
      slug,
      "author": author->name,
      publishedAt,
      "image":mainImage.asset->url,
      "content" : body[].children[].text,
      body,
    }`;

    // query all blog posts
    sanityClient
      .fetch(blogsQuery)
      .then((response) => {
        setBlogPosts(response);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!blogPosts) {
    return <Loader />;
  }

  return (
    <div className="container-fluid mb-4">
      <div className="container blog">
        <div className="blogs-page">
          <h1 className="text-center">Blogs</h1>

          {/* All blogs */}
          <div className="row h-100 mt-5 p-1">
            {blogPosts &&
              blogPosts.map((post, index) => (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-2">
                  <div className="card border">
                    <div className="card-header">
                      <img
                        src={post.image}
                        alt={post.slug}
                        className="blog-post-image card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <div>
                        <p className="fw-semibold fs-3">{post.title}</p>
                        <em className="mb-1 text-secondary">
                          {format(new Date(post.publishedAt), "dd/MM/yyyy")}
                        </em>
                      </div>
                      <div className="text-truncate-container">
                        <p className="body-text">{post.content}...</p>
                      </div>
                      <span>
                        <Link to={"/blog/" + post.slug.current} key={post.slug}>
                          Learn more
                          <FontAwesomeIcon icon={faArrowRightLong} />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
