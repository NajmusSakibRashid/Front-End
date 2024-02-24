import React, { useState } from "react";

const CommunityCard = ({ title, image, description }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="card card-compact w-64 bg-base-100 shadow-xl border max-h-100 mb-2">
        <figure className="w-full h-auto max-w-full max-h-36">
          <img src={image} alt="image" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{showMore ? description : description.slice(0, 100)}</p>
          {description.length > 100 && (
            <button
              onClick={toggleShowMore}
              className="text-blue-500 hover:underline"
            >
              {showMore ? "See Less" : "See More"}
            </button>
          )}
          <br />
          <div className="card-actions justify-center">
            <button className="btn btn-primary italic">
              Visit this Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
