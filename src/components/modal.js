import axios from "axios";
import React, { useState } from "react";

const Modal = ({ showModal, setShowModal }) => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    company: "",
  });

  const apiUrl =
    "https://api.steinhq.com/v1/storages/64286f71eced9b09e9c7406e/Sheet1";

  // handle form changes:get input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = [
      {
        Name: formData.name,
        Email: formData.email,
        Title: formData.title,
        Company: formData.company,
      },
    ];

    // post to api with axios;
    axios
      .post(apiUrl, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setIsSubmitting(false);
        setFormData({ name: "", email: "", title: "", company: "" });
        setSuccessMsg("Response sent successfully.");
        setTimeout(() => {
          setSuccessMsg("");
          setShowModal(false);
        }, 2000);
      })
      .catch((error) => {
        setErrorMsg("Welp, That didn't go well. Please try again");
        console.log(error);
      });
  };

  return (
    showModal && (
      <div className="modal-popup" onClick={() => setShowModal(false)}>
        <div className="status-alert mx-auto">
          {successMsg && (
            <div
              className="alert alert-success d-flex align-items-center alert-dismissible fade show"
              role="alert"
            >
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
              <div>{successMsg}</div>
            </div>
          )}

          {errorMsg && (
            <div
              className="order-confirmed alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              <div className="order-alert-box">
                <div className="alert-text">{errorMsg}</div>
              </div>
            </div>
          )}
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalBox p-4"
        >
          <div className="modal-header justify-content-end ">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowModal(false)}
            ></button>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-4 py-4 my-2 border border-3 border-dark">
              <h3 className="fw-bolder">
                Join <br />
                Waitlist
              </h3>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 form__group mt-3">
              <form onSubmit={handleSubmit} className="form">
                <div className="input-group mb-3 input-group-sm">
                  <input
                    type={"text"}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form__field text-dark"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <input
                    className="form__field text-dark"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                </div>

                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="">
                      <input
                        type={"text"}
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form__field text-dark"
                        placeholder="Job Title"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className=" mb-3">
                      <input
                        type={"text"}
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form__field text-dark"
                        placeholder="Company Name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-btns">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 "
                    disabled={isSubmitting}
                  >
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
