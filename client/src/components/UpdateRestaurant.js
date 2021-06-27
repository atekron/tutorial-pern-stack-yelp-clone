import React from "react";
import { useParams } from "react-router-dom";

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <form>
        <div className="form-group mb-4">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" className="form-control" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="price_range">Price Range</label>
          <select
            id="price_range"
            className="custom-select form-select"
            // value="default"
            // onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
