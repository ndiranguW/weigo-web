import React from "react";

const Modal = ({ showModal, setShowModal }) => {
  return (
    showModal && (
      <div className="modal-popup">
        <div className="modal-box">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 p-2">
              <h3 className="font-bold text-center">Join The Waitlist</h3>
              <p>Please fill out this form to join our product waitlist.</p>
              <p>Our team will get back to you in a short while.</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <form>
                <label htmlFor="name">Name </label>
                <div className="input-group mb-3 input-group-sm">
                  <input
                    type={"text"}
                    name="name"
                    className="form-control"
                    placeholder="John Doe"
                    required
                    // value={}
                    // onChange={}
                  />
                </div>
                <label htmlFor="email">Email </label>
                <div className="input-group input-group-sm mb-3">
                  <input
                    type={"email"}
                    name="email"
                    className="form-control"
                    placeholder="john@example.com"
                    required
                  ></input>
                </div>

                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <label htmlFor="title">Job Title </label>
                    <div className="input-group mb-3 input-group-sm">
                      <input
                        type={"text"}
                        name="title"
                        className="form-control"
                        placeholder="e.g; Project Manager"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <label htmlFor="company">Company Name </label>
                    <div className="input-group input-group-sm mb-3">
                      <input
                        type={"text"}
                        name="company"
                        className="form-control"
                        placeholder="WeiGo"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-outline-secondary btn-sm m-1"
                    onClick={() => setShowModal(false)}
                  >
                    close
                  </button>
                  <button type="submit" className="btn btn-sm btn-primary">
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
