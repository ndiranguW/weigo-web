import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Modal = ({ showModal, setShowModal }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // send email
    emailjs
      .sendForm(
        "service_uwfbixm",
        "template_plcokqf",
        form.current,
        "0__zkVvPljLTU0O0A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );

    // clear form fields
    setFormData({ name: "", email: "", message: "", company: "" });
    // close form after submit
    setShowModal(false);
  };

  return (
    showModal && (
      <div className="modal-popup">
        <div className="modal-box">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 p-0">
              <p className="p-4 text-center">Improve the rate of procuring </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 p-4">
              <form ref={form} onSubmit={handleSubmit}>
                <label htmlFor="name">Name* </label>
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
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <label htmlFor="email">Email* </label>{" "}
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
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <label htmlFor="company">Company Name* </label>{" "}
                    <div className="input-group input-group-sm mb-3">
                      <input
                        type={"text"}
                        name="company"
                        className="form-control"
                        placeholder="WeiGo"
                        required
                        value={formData.company}
                        onChange={handleChange}
                      ></input>
                    </div>
                  </div>
                </div>

                <label htmlFor="message">Message 'or' Questions </label>
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
        </div>
      </div>
    )
  );
};

export default Modal;
