/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./../../styles/blog.module.css"
import legal from "@/style/legal-page.module.css";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";

function PaintingService() {
  return (
   <div className={styles.parent_container}>
    <AboutHeroSection head_title={'Privacy Policy'} heading={'Terms and Conditions'} imageurl={"/updated-images/engineer.png"}/>
      <div className={`${styles.main_container} ${legal.page}`}>
        <div className={styles.cont1}>
          <div className={styles.content_aligning}>
            <p className="grayClr text-sm md:text-[17px] my-5 ">
              We at Basat Anwer Technical Service LLC (also known as "the
              Company," "we," "us," or "our") are dedicated to maintaining the
              security of your personal information and safeguarding your
              privacy. When you interact with our website, services, and other
              Basat Anwer Technical Service LLC-related activities (collectively
              referred to as the "Services"), we collect, use, disclose, and
              secure your personal information in accordance with the terms of
              this Privacy Policy. You agree to the collection, use, and
              disclosure of your personal information as set forth in this
              Privacy Policy by accessing or using our Services.
            </p>
           <h2 className={styles.h2}>
              1. Information We Collect:
            </h2>
            <p className={styles.paragraph}>
              <b className="text-sm purpleClr">Personal Information: </b>We may
              collect personal information that you voluntarily provide to us
              when you interact with our Services, such as your name, contact
              details, email address, postal address, and any other information
              necessary to provide you with our construction services.
              <br></br>
              <b className="text-sm purpleClr">
                Employee and Contractor Information:
              </b>{" "}
              In the course of our business operations, we may collect personal
              information from our employees, contractors, and job applicants.
              This may include contact details, resumes, employment history,
              educational background, and other relevant information required
              for employment or contractual relationships.<br></br>
              <b className="text-sm purpleClr">
                Project and Site Information:
              </b>{" "}
              When engaging in construction projects, we may collect information
              related to the project or construction site, such as location
              data, project specifications, architectural plans, and relevant
              documentation necessary for project management and compliance.
              <br></br>
              <b className="text-sm purpleClr">Usage Data: </b> We may collect
              non-personal information about your interactions with our
              Services, including but not limited to your IP address, device
              information, browser type, operating system, and browsing
              behavior. We may also collect information about your use of our
              Services, such as the pages you visit, the features you access,
              and the actions you take.
              <br></br>
              <b className="text-sm purpleClr">
                Cookies and Similar Technologies:{" "}
              </b>{" "}
              We use cookies and similar technologies to enhance your experience
              on our website and improve our Services. These technologies may
              collect information about your browsing behavior and preferences.
              You can adjust your browser settings to refuse cookies or alert
              you when cookies are being sent, but please note that some parts
              of our Services may not function properly without cookies.
              <br></br>
            </p>
           <h2 className={styles.h2}>
              2. Use of Information:
            </h2>
            <p className={styles.paragraph}>
              <b>
                {" "}
                We may use the information we collect for the following
                purposes:
              </b>{" "}
              <br />- Providing and delivering our construction services to you;{" "}
              <br />
              - Communicating with you regarding your projects, requests, and
              inquiries; <br />
              - Managing and administering our contractual and employment
              relationships; <br />
              - Responding to your questions, comments, and feedback; <br />
              - Improving and enhancing our Services; <br />
              - Complying with legal obligations, regulatory requirements, and
              industry standards;
              <br />
              - Protecting our legal rights and preventing fraud.
              <br />
            </p>
           <h2 className={styles.h2}>
              3. Sharing of Information:
            </h2>
            <p className={styles.paragraph}>
              <b>
                {" "}
                We may share your personal information in the following
                circumstances:{" "}
              </b>
              <br />
              - With your consent or as otherwise disclosed at the time of
              collection; <br />
              - With contractors, subcontractors, suppliers, and other entities
              involved in the construction projects to
              <br/>  &nbsp; &nbsp; fulfill our contractual
              obligations; <br />
              - With service providers and partners who assist us in providing
              the Services, such as IT support,
              <br/>  &nbsp; &nbsp; payment processing, and
              marketing services; <br />
              - In connection with a merger, acquisition, or sale of all or a
              portion of our assets, where your personal 
              <br/>  &nbsp; &nbsp; information may be
              transferred to the acquiring entity; <br />
              - When required by law, court order, or government request; <br />
              - To protect our rights, property, or safety, and that of our
              users, employees, or others. <br />
            </p>
           <h2 className={styles.h2}>
              4. Data Retention and Security:
            </h2>
            <p className={styles.paragraph}>
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy unless a
              longer retention period is required by law. We implement
              appropriate technical and organizational measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction.
            </p>
          </div>
        </div>
        <div className={styles.image_cont}>
          <Image src="/images/privacy.avif" alt="privacy image" width={1200} height={800} sizes="(max-width: 1199px) 92vw, 21rem" />
        </div>
      </div>
    </div>
  );
}


export default PaintingService;