import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
import { useParams } from "react-router-dom";
import imageBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { format } from "date-fns";

export default function Post() {
  const builder = imageBuilder(sanityClient);
  const [postContent, setPostContent] = useState(null);
  const { slug } = useParams();

  function urlFor(source) {
    if (!source) {
      return "";
    }
    return builder.image(source).url();
  }
  // define query to sanity
  useEffect(() => {
    const query = `*[slug.current == $slug]{
      title,
      slug,
      "author": author->name,
      "authorimg": author->image,
      publishedAt,
      mainImage,
      "content" : body[].children[].text,
      body,
    }`;

    sanityClient
      .fetch(query, { slug })
      .then((postData) => {
        setPostContent(postData[0]);
      })
      .catch((error) => console.log(error));
  }, [slug]);

  return (
    <div className="container-fluid mb-4">
      <div className="container blog">
        <div className="blog-post-page">
          <div className="row h-100 mt-5 p-1">
            {postContent && (
              <div
                key={postContent.slug.current}
                className="blog-post col-sm-12 col-md-10 col-lg-9 mx-auto"
              >
                <div className="card-body text-center">
                  <h2 className="post-title">{postContent.title}</h2>
                  <div className="mb-3">
                    <img
                      src={urlFor(postContent.authorimg)}
                      alt={postContent.slug}
                      className="post-author-img"
                    />
                    <span className="post-meta">
                      {postContent.author} &nbsp; &#9679; &nbsp;
                      {format(new Date(postContent.publishedAt), "dd/MM/yyyy")}
                    </span>
                  </div>
                  <img
                    src={urlFor(postContent.mainImage)}
                    alt={postContent.slug}
                    className="post-image mx-auto card-img-top"
                  />
                </div>
                <div className="post-content w-75 mx-auto">
                  <BlockContent blocks={postContent.body} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
