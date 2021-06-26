import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form className="container">
        <div className="row align-items-center">
          <div className="col">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              defaultValue={"default"}
              className="custom-select form-select"
            >
              <option value="default" disabled>
                Price Range
              </option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="btn btn-primary col-auto">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
