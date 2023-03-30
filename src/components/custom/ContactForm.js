import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  // event handler for form interaction.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, title, message } = formData;

    // check all fields are filled.
    if (!name || !email || !title || !message) {
      setError("Please fill out all fields.");
      return;
    }

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
          setFeedback("✅ Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setError("🤔 Oops, something went wrong. Please try again.");
        }
      );

    // clear form fields
    setFormData({
      name: "",
      email: "",
      title: "",
      message: "",
    });

    // clear error msg after submit.
    setError("");
  };

  return (
    <div className="msg-form">
      {/* footer contact form */}
      <h3 style={{ color: "#fd7e14" }}>Feedback.</h3>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="status-alert">
          {error && (
            <div
              className="alert alert-danger d-flex align-items-center alert-dismissible fade show"
              role="alert"
            >
              <div>{error}</div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}

          {feedback && (
            <div
              class="alert alert-success d-flex align-items-center alert-dismissible fade show"
              role="alert"
            >
              <div>{feedback}</div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
        </div>
        <div className="form__group">
          <div className="mb-2">
            <input
              type={"text"}
              name="name"
              placeholder="Your Name"
              className="form__field"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <input
              type={"text"}
              name="title"
              placeholder="Title & Company name"
              className="form__field"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type={"email"}
              name={"email"}
              placeholder="Your Email"
              className="form__field"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <textarea
              className="form__field"
              name="message"
              maxLength={200}
              placeholder="Your comments or feedback"
              rows={"1"}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <button className="demo-btn w-100" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
