import React, { useState } from "react";
import "../Style/AddDetails.css";
import axios from "axios";
function AddDetails() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    performance: "",
    yoj: "",
  });

  let handleChange = ({target:{name,value}}) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    await axios.post('http://localhost:3000/addData',formData);
  };
  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <h1>Add Details</h1>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
            //   value={formData.name}
              placeholder="Enter the name"
            />
          </div>
          <div>
            <label htmlFor="department">Department:</label>
            <input
              onChange={handleChange}
              type="text"
              id="department"
              name="department"
            //   value={formData.department}
              placeholder="Enter the department"
            />
          </div>
          <div>
            <label htmlFor="performance">Performance:</label>
            <input
              onChange={handleChange}
              type="text"
              id="performance"
              name="performance"
            //   value={formData.performance}
              placeholder="Enter the Perfomance"
            />
          </div>
          <div>
            <label htmlFor="yoj">YOJ:</label>
            <input
              onChange={handleChange}
              type="text"
              id="yoj"
              name="yoj"
            //   value={formData.yoj}
              placeholder="Enter the your of joining"
            />
          </div>
          <div>
            <button className="button-64" role="button">
              <span className="text">Submit</span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddDetails;
