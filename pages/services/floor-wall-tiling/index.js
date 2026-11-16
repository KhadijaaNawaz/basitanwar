/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "../../../styles/blog.module.css";
import ServiceComponent from "@/components/updated-themes/layout/service-component";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";
import detail from "@/style/service-detail.module.css";
import ServiceExtras from "@/components/services/ServiceExtras";
import ServiceSignature from "@/components/services/ServiceSignature";
import ServiceFaq from "@/components/services/ServiceFaq";
import BottomSection from "@/components/updated-themes/layout/bottomSection";

function FloorWallTilingService() {
  return (
    <>
    <AboutHeroSection head_title={'Trusted and Reliable Tile Fixing Services'} heading={'Tile Fixing Services'} imageurl={"/updated-images/service.png"}/>
     <ServiceSignature />
     <div className={`${styles.main_div} ${detail.page} ${detail.tiling}`}>
      <ServiceComponent/>
      <section  className={styles.services_detail}>
      <div className={styles.main_container}>
        <div className={styles.cont1}>
        <div className={styles.cont2}>
            <div className="">
              <div className={styles.cont3}>
                <h1 className={styles.h1}>
                  Trusted and Reliable Tile Fixing Services
                </h1>
              </div>
            </div>
          </div>

          <div className={styles.content_aligning}>
            <p className={styles.paragraph}>
              Welcome to Basat Anwer Technical Services, your trusted partner
              for impeccable tile fixing solutions in Dubai. With a reputation
              built on excellence, we take pride in providing top-tier tile
              installation services for both residential and commercial spaces.
              Our dedicated team of experts combines skill, precision, and
              quality materials to ensure a flawless finish every time.
            </p>
          <h2 className={styles.h2}>
              Our Specialized Tile Fixing Services
            </h2>

          <h3 className={styles.h3}>
              Home Tile Fixing Dubai
            </h3>
            <p className={styles.paragraph}>
              Transform your living spaces with our expert home tile fixing
              services. Whether you're renovating a bathroom, kitchen, or any
              other area in your home, we have the expertise to handle it all.
            </p>

          <h3 className={styles.h3}>
              Commercial Tile Fixing Dubai
            </h3>
            <p className={styles.paragraph}>
              For businesses, we offer seamless tile installation services
              designed to elevate your commercial space. Our skilled technicians
              are equipped to handle large-scale projects, ensuring a
              professional and lasting finish.
            </p>

          <h3 className={styles.h3}>
              Ceramic Tiles Installation Dubai
            </h3>
            <p className={styles.paragraph}>
              Ceramic tiles are a classic choice for their durability and
              aesthetic appeal. Our experts excel in precise ceramic tile
              installation, guaranteeing a polished look for your space.
            </p>

          <h3 className={styles.h3}>
              Porcelain Tiles Installation in Dubai
            </h3>
            <p className={styles.paragraph}>
              Porcelain tiles are renowned for their strength and versatility.
              Our team is adept at handling the intricacies of porcelain tile
              installation, ensuring a robust and elegant finish.
            </p>

          <h3 className={styles.h3}>
              SPC and PVC Tiles Installation Dubai
            </h3>
            <p className={styles.paragraph}>
              Explore modern flooring options with SPC and PVC tiles. Our
              specialists are well-versed in the installation of these
              innovative materials, providing you with a contemporary and
              resilient flooring solution.
            </p>

          <h3 className={styles.h3}>
              Cement Tiles Installation Dubai
            </h3>
            <p className={styles.paragraph}>
              Cement tiles add character and style to any space. Our craftsmen
              are experienced in the art of cement tile installation, delivering
              a unique and enduring look for your floors and walls.
            </p>

          <h3 className={styles.h3}>
              Marble and Granite Installation Dubai
            </h3>
            <p className={styles.paragraph}>
              Elevate your space with the timeless elegance of marble and
              granite. Our skilled technicians expertly install these luxurious
              materials, creating a sophisticated ambiance in your home or
              business.
            </p>

          <h3 className={styles.h3}>
              Backsplash Tile Installation
            </h3>
            <p className={styles.paragraph}>
              Enhance your kitchen or bathroom with a stunning backsplash. Our
              team excels in precise installation, ensuring that your backsplash
              is both functional and visually appealing.
            </p>

          <h2 className={styles.h2}>
              Why Choose Basat Anwer Technical Services?
            </h2>

          <h3 className={styles.h3}>
              Unparalleled Expertise
            </h3>
            <p className={styles.paragraph}>
              With years of experience in the industry, we bring a wealth of
              knowledge and skill to every project. Our technicians are highly
              trained and dedicated to achieving excellence in every detail.
            </p>

          <h3 className={styles.h3}>
              Quality Materials
            </h3>
            <p className={styles.paragraph}>
              We understand the importance of using high-quality materials for
              lasting results. We source our tiles and installation materials
              from trusted suppliers, ensuring that your project stands the test
              of time.
            </p>

          <h3 className={styles.h3}>
              Customer-Centric Approach
            </h3>
            <p className={styles.paragraph}>
              At Basat Anwer Technical Services, customer satisfaction is our
              priority. We work closely with our clients, providing personalized
              solutions that cater to their specific needs and preferences.
            </p>

            <br />
           
          </div>
        </div>
        <div className={styles.image_cont}>
          <Image src="/images/tile12 (2).jpg" alt="tile image" width={612} height={436} sizes="(max-width: 1199px) 92vw, 21rem" />

            <h2 className={styles.h3}>
              Advantages of Choosing Basat Anwer Technical Services
            </h2>
            <br />
            <p className={styles.paragraph}>
              <b className="purpleClr">Proven Excellence:</b> Our track record
              of successful projects and satisfied clients speaks volumes about
              our commitment to quality and craftsmanship.
              <br />
              <b className="purpleClr">Timely Completion:</b> We understand the
              importance of sticking to timelines. Our efficient work process
              ensures that projects are completed on schedule.
              <br />
              <b className="purpleClr">Competitive Pricing:</b> We offer
              competitive rates without compromising on the quality of our
              materials or workmanship.
              <br />
              <b className="purpleClr">Dedicated Customer Support:</b> Our team
              is readily available to address any queries or concerns throughout
              the duration of your project.
              <br />
              <b className="purpleClr">
                Choose Basat Anwer Technical Services
              </b>{" "}
              for impeccable tile fixing services in Dubai. Contact us today to
              schedule a consultation and take the first step towards
              transforming your space with precision and excellence.
            </p>

            <h2 className={styles.h2}>
              <a href="https://basatanwertech.com/contact-us">
                Transform Your Space Today! Contact Us for a Consultation.
              </a>
            </h2>
        </div>
      </div>
      </section>
      </div>

      <ServiceFaq items={[
          { question: "How long does a typical tile installation project take?", answer: "The timeline for a tile installation project varies depending on the scope and complexity. A thorough timeline will be given to you by our staff during the initial meeting." },
          { question: "Do you offer a warranty on your tile installation services?", answer: "Yes, we do give a warranty on the quality of our tile installation work, giving you confidence in the reliability of our solutions." },
          { question: "Can you assist in tile selection and design?", answer: "Absolutely. Our team is knowledgeable about a wide range of tile options and can offer guidance in selecting the best tiles for your project. We also provide design recommendations to ensure a cohesive and aesthetically pleasing result." }
        ]} />

      <ServiceExtras />

      <BottomSection footerheading={'Trusted and Reliable Tile Fixing Services'}/>
    </>
  );
}

export default FloorWallTilingService;

