// components/ContactModal.js

import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "@/style/shared.module.css";
import toast, { Toaster } from "react-hot-toast";

const ContactModal = ({ onClose }) => {
  const [contactUs, setContact] = useState({
    name: { value: "", error: "" },
    number: { value: "", error: "" },
    email: { value: "", error: "" },
    message: { value: "", error: "" },
  });

  const [loading, setLoading] = useState(false);

  const handleInputField = (e) => {
    const { name, value } = e.target;

    // Regex patterns for email and phone number validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+\d{12}$/;
    const namePattern = /^[a-zA-Z0-9\s]+$/;
    let errorMessage = "";
    switch (name) {
      case "email":
        errorMessage = emailPattern.test(value) ? "" : "Invalid email format";
        break;
      case "number":
        errorMessage = phonePattern.test(value) ? "" : "Invalid phone number";
        break;
      case "name":
        errorMessage = namePattern.test(value) ? "" : "Invalid name format";
        break;
      default:
        errorMessage = value.trim() === "" ? "Required field" : "";
        break;
    }

    setContact({
      ...contactUs,
      [name]: {
        value,
        error: errorMessage,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extracting values from the contactUs state
    const { name, number, email, message } = contactUs;
    // Checking if any field is empty or has an error
    const hasErrors = Object.values(contactUs).some(
      (field) => field.error || field.value === ""
    );
    if (hasErrors) {
      alert("Please fill in the required fields correctly.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          number: number.value,
          email: email.value,
          message: message.value,
        }),
      });

      // Handle success, e.g., show a success message to the user
      console.log("Email sent successfully");

      if (response.ok) {
        console.log("Email sent successfully!");
        toast.success("Email sent successfully!");
        // Resetting the form fields after successful submission
        setContact({
          name: { value: "", error: "" },
          number: { value: "", error: "" },
          email: { value: "", error: "" },
          message: { value: "", error: "" },
        });
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading back to false after submission
    }
  };

  // rendered into <body>: inside the navbar, its transform would make this `fixed` box relative to the bar
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Toaster />
        <div className={styles.close_cont}>
          <div className={styles.closeButton} onClick={onClose}>
            &times;
          </div>
        </div>

        <section className={styles.section_cont}>
          <div className={styles.consultion_cont}>
            <p>FREE CONSULTATION</p>
            <h2>Get a Free Quote</h2>
          </div>
          <div className={styles.form_cont}>
            <input
              type="text"
              placeholder="Full Name"
              onChange={handleInputField}
              name="name"
              value={contactUs.name.value}
              required={true}
              className={""}
            />
            {contactUs.name.error && (
              <span className={styles.error}>
                {contactUs.name.error}
              </span>
            )}

            <input
              type="email"
              name="email"
              onChange={handleInputField}
              value={contactUs.email.value}
              placeholder="Email Address"
              required={true}
              className=" "
            />
            {contactUs.email.error && (
              <span className={styles.error}>
                {contactUs.email.error}
              </span>
            )}

            <input
              type="text"
              onChange={handleInputField}
              name="number"
              value={contactUs.number.value}
              placeholder="Phone Number"
              required={true}
              className=""
            />
            {contactUs.number.error && (
              <span className={styles.error}>
                {contactUs.number.error}
              </span>
            )}

            <textarea
              name="message"
              placeholder="Your Message"
              required={true}
              value={contactUs.message.value}
              onChange={handleInputField}
              className=" "
            ></textarea>
            {contactUs.message.error && (
              <span className={styles.error}>
                {contactUs.message.error}
              </span>
            )}
          </div>

          <div className={styles.button_cont}>
            <button
              type="submit"
              disabled={loading}
              id="btn"
              onClick={handleSubmit}
              className=""
            >
              {loading ? "Submitting..." : "GET A FREE QUOTE"}
            </button>
          </div>
        </section>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
