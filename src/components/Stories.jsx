import React from "react";
import { useGlobalContext } from "./Context";

function Stories() {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }

  return (
    <>
      <h2 className="text-5xl text-center font-bold mt-10 ">
        My tech news post.
      </h2>
      {hits.map((curPost) => {
        const { title, author, objectID, url, num_comments } = curPost;

        // console.log(objectID);
        return (
          <React.Fragment key={objectID}>
            <div className="flex justify-center">
              <div className="card">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="mt-7">
                  By <span>{author}</span> |{" "}
                  <span>{num_comments} comments</span>
                </p>
                <div className="card-button">
                  <a href={url} target="_blank">
                    Read More
                  </a>
                  <a href="#" onClick={() => removePost(objectID)}>
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Stories;
