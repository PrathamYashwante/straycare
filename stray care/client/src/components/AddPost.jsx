import React from "react";

const addpost = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-col">
          <div className="col">
            <input
              type="text"
              placeholder="Description"
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Contact Number"
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Location"
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Animal Type"
              className="form-control"
            />
          </div>

          <button className="btn btn-primary">Post</button>
        </div>
      </form>
    </div>
  );
};

export default addpost;
