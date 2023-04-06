// contacct banner form
import React, { useState } from "react";
import Modal from "../modal";

const Contact = () => {
  // set states to interact with waitlist Modal.
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container p-5">
      <div className="row p-2 rounded contact-form">
        <h3 className="text-center text-light fs-4 font-bold">Join Waitlist</h3>
        <p></p>
        <div className="mt-2 text-center">
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Join Waitlist
          </button>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Contact;
