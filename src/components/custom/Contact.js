// contacct banner form
import React from "react";

const Contact = () => {
  return (
    <div className="container p-5">
      <div className="row p-2 rounded contact-form">
        <h3 className="text-center text-light fs-4">Subscribe to our newsletter.</h3>
        <div className="col-sm-12 col-lg-6 mx-auto ">
          <form>
            <div className="input-group input-group-md m-2">
              <input
                type={"email"}
                className="form-control"
                placeholder="doe@example.com"
              />
              <button
                type="submit"
                value={"submit"}
                className="btn btn-primary"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
