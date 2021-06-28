import React from "react";
import StarRating from "./StarRating";

const Reviews = () => {
  return (
    <div className="row row-cols-3 mb-2">
      <div
        className="card text-white bg-primary m-2"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Alynosa</span>
          <span>
            <StarRating rating={2.6} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant is awesome</p>
        </div>
      </div>

      <div
        className="card text-white bg-primary m-2"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Alynosa</span>
          <span>
            <StarRating rating={2.6} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant is awesome</p>
        </div>
      </div>

      <div
        className="card text-white bg-primary m-2"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Alynosa</span>
          <span>
            <StarRating rating={2.6} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant is awesome</p>
        </div>
      </div>

      <div
        className="card text-white bg-primary m-2"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Alynosa</span>
          <span>
            <StarRating rating={2.6} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant is awesome</p>
        </div>
      </div>

      <div
        className="card text-white bg-primary m-2"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Alynosa</span>
          <span>
            <StarRating rating={2.6} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant is awesome</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
