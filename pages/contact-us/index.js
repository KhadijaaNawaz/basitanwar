import React, { useState } from "react";
import Head from "next/head";
import toast from "react-hot-toast";
import { useRouter } from 'next/router';

import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import css from "@/style/contact-page.module.css";
import home from "@/style/home.module.css";
import useScene, { reveal } from "@/components/home/useScene";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";

export default function Index() {
  const router = useRouter();
  const [contactUs, setContact] = useState({
    name: { value: "", error: "" },
    number: { value: "", error: "" },
    email: { value: "", error: "" },
    venue: { value: "", error: "" },
    message: { value: "", error: "" },
  });

  const [loading, setLoading] = useState(false);
  const root = useScene(({ gsap, root: el }) => reveal({ gsap, root: el }, "[data-r]"));
  const handleInputField = (e) => {
    const { name, value } = e.target;

    // Regex patterns for email and phone number validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+\d{12}$/;

    // Validation and error message handling
    let errorMessage = "";
    switch (name) {
      case "email":
        errorMessage = emailPattern.test(value) ? "" : "Invalid email format";
        break;
      case "number":
        errorMessage = phonePattern.test(value) ? "" : "Invalid phone number";
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
    const { name, number, email, venue, message } = contactUs;

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
          venue: venue.value,
          message: message.value,
        }),
      });
      // await sendEmail(contactUs);

      // Handle success, e.g., show a success message to the user
      console.log("Email sent successfully");

      if (response.ok) {
        console.log("Email sent successfully!");
        toast.success("Email sent successfully!");
        // Resetting the form fields after successful submission

        router.push('/thank-you');
        setContact({
          name: { value: "", error: "" },
          number: { value: "", error: "" },
          email: { value: "", error: "" },
          venue: { value: "", error: "" },
          message: { value: "", error: "" },
        });
        
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const field = (name, label, type = "text", placeholder = " ") => (
    <label className={css.field}>
      <input
        type={type}
        name={name}
        value={contactUs[name].value}
        placeholder={placeholder}
        onChange={handleInputField}
        required
      />
      <span>{label}</span>
      {contactUs[name].error && <em className={css.err}>{contactUs[name].error}</em>}
    </label>
  );

  return (
    <>
      <AboutHeroSection head_title={"Contact Us"} heading={"Get in touch"} />

      <section ref={root} className={css.sec}>
        <div className={home.container}>
          <div className={css.grid}>
            <div className={css.info}>
              <span className={home.eyebrow} data-r>Let&apos;s talk</span>
              <h2 className={css.title} data-r>Tell us what needs doing.</h2>
              <p data-r>
                We are a team of professional and skilled engineers in all domestic areas. Send the details and we will reply with a clear scope and an itemised price. No obligation.
              </p>

              <ul className={css.cards}>
                <li data-r>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>
                    <small>Visit</small>
                    Office No G/010 Al Fahad Building, Hor Al Anz, Deira, Dubai, United Arab Emirates
                  </span>
                </li>
                <li data-r>
                  <FontAwesomeIcon icon={faPhone} />
                  <span>
                    <small>Call, 24 hours</small>
                    <Link href="tel:+971524052485">+971 52 405 2485</Link>
                  </span>
                </li>
                <li data-r>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>
                    <small>Email</small>
                    <Link href="mailto:info@basatanwertech.com">info@basatanwertech.com</Link>
                  </span>
                </li>
                <li data-r>
                  <FontAwesomeIcon icon={faClock} />
                  <span>
                    <small>Office hours</small>
                    Mon to Sun, 08:00 to 18:00
                  </span>
                </li>
              </ul>

              <div className={css.social} data-r>
                {[
                  ["https://www.facebook.com/basatanwertech", faFacebookF, "Facebook"],
                  ["https://www.tiktok.com/@basat.anwer.tech?is_from_webapp=1&sender_device=pc", faTiktok, "TikTok"],
                  ["https://instagram.com/basatanwertech?igshid=ZDdkNTZiNTM=", faInstagram, "Instagram"],
                  ["https://www.linkedin.com/company/basat-anwer-technical-services-llc/", faLinkedin, "LinkedIn"],
                ].map(([href, icon, label]) => (
                  <Link key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} />
                  </Link>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className={css.form} data-r>
              <h3>Request a quote</h3>
              <div className={css.two}>
                {field("name", "Your name")}
                {field("number", "Phone (+971…)")}
              </div>
              <div className={css.two}>
                {field("email", "Email", "email")}
                {field("venue", "Venue / area")}
              </div>
              <label className={css.field}>
                <textarea
                  name="message"
                  value={contactUs.message.value}
                  placeholder=" "
                  onChange={handleInputField}
                  required
                  rows={5}
                />
                <span>How can we help?</span>
                {contactUs.message.error && <em className={css.err}>{contactUs.message.error}</em>}
              </label>
              <button type="submit" disabled={loading} className={css.submit}>
                {loading ? "Submitting..." : "Send message"}
              </button>
              <p className={css.note}>We reply the same day. For emergencies, please call.</p>
            </form>
          </div>
        </div>
      </section>

      <section className={css.map}>
        <div className={home.container}>
          <iframe
            title="Basat Anwer Technical Services on the map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14431.026764066815!2d55.330788!3d25.278769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d402192dbe3%3A0xc16dd8ef0f8006a7!2sBasat%20Anwer%20Technical%20Services%20L.L.C!5e0!3m2!1sen!2s!4v1688467728519!5m2!1sen!2s"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
