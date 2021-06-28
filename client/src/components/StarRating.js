import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i className="fas fa-star"></i>);
    } else if (i > rating && i - 1 < rating) {
      stars.push(<i className="fas fa-star-half-alt"></i>);
    } else {
      stars.push(<i className="far fa-star"></i>);
    }
  }
  return (
    <>
      <p className="text-warning">
        {stars.map((star, i) => (
          <span key={i}>{star}</span>
        ))}
      </p>
    </>
  );
};

export default StarRating;
