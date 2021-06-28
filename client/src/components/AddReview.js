import React from "react";

const AddReview = () => {
  return (
    <div className="mb-2">
      <form>
        <div className="row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="name"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              name="rating"
              id="rating"
              className="custom-select form-select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
