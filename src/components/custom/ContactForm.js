import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  // const [successMsg, setSuccessMsg] = useState("");

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
    setFormData({
      name: "",
      email: "",
      title: "",
      message: "",
    });

    // show feedback message
  };

  return (
    <div className="">
      {/* footer contact form */}
      <h3 style={{ color: "#fd7e14" }}>Feedback.</h3>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form__group">
          <div className="mb-2">
            <input
              type={"text"}
              name="name"
              placeholder="Your Name"
              className="form__field"
              required
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
              required
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
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <button className="demo-btn w-100">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
