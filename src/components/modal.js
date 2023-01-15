import React, { useState } from "react";

import "../pages/styles.css";

const Modal = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    
    // clear form fields
    setFormData({ name: "", email: "", message: "" });
    // close form after submit
    setShowModal(false);
  };

  return (
    showModal && (
      <div className="modal-popup">
        <div className="modal-box w-25">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <div className="input-group mb-3 input-group-sm">
              <input
                type={"text"}
                name="name"
                className="form-control"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
              ></input>
            </div>
            <label htmlFor="email">Email: </label>{" "}
            <div className="input-group input-group-sm mb-3">
              <input
                type={"email"}
                name="email"
                className="form-control"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              ></input>
            </div>
            <label htmlFor="message">Message: </label>
            <div className="input-group input-group-sm mb-3">
              <textarea
                type={"text"}
                name="message"
                className="form-control"
                placeholder="Type message..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-outline-secondary btn-sm m-1"
                onClick={() => setShowModal(false)}
              >
                close
              </button>
              <button type="submit" className="btn btn-sm btn-success">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
