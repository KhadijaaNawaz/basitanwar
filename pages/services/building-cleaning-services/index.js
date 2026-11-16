/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "../../../styles/blog.module.css";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";
import ServiceComponent from "@/components/updated-themes/layout/service-component";
import detail from "@/style/service-detail.module.css";
import ServiceExtras from "@/components/services/ServiceExtras";
import ServiceSignature from "@/components/services/ServiceSignature";
import ServiceFaq from "@/components/services/ServiceFaq";
import BottomSection from "@/components/updated-themes/layout/bottomSection";

function PlumbingService() {
  return (
    <>
     <AboutHeroSection head_title={'Buildings Cleaning Services in dubai'} heading={'cleaning services'} imageurl={"/updated-images/service.png"}/>

      <ServiceSignature />

      <div className={`${styles.main_div} ${detail.page} ${detail.cleaning}`}>
      <ServiceComponent/>
        <section className={styles.services_detail}>
          <div className={styles.main_container}>
            <div className={styles.cont1}>
              <div className={styles.cont2}>
                <div className="">
                  <div className={styles.cont3}>
                    <h1 className={styles.h1}>
                      Buildings Cleaning Services in dubai
                    </h1>
                  </div>
                </div>
              </div>

              <div className={styles.content_aligning}>
                <p className={styles.paragraph}>
                  Welcome to our Buildings Cleaning Services page, where we
                  provide top-quality cleaning services for residential and
                  commercial properties in Dubai. Our team of highly skilled and
                  experienced professionals ensures that your buildings are
                  always clean and well-maintained. We understand the importance
                  of a clean and hygienic environment, and we strive to deliver
                  excellent services to meet our clients' needs.
                </p>
                <h2 className={styles.h2}>Conclusion:</h2>
                <p className={styles.paragraph}>
                  At Buildings Cleaning Services, we are committed to providing
                  exceptional cleaning services to our clients in Dubai. Our
                  team of experts is dedicated to ensuring that your buildings
                  are always clean, healthy, and well-maintained. We use only
                  the best cleaning products and equipment to deliver
                  outstanding results. Whether you need a one-time cleaning
                  service or a regular maintenance plan, we are here to help.
                  Contact us today for a free consultation and let us take care
                  of your cleaning needs.
                </p>
               
              </div>
            </div>
            <div className={styles.image_cont}>
              <Image src="/images/cleaning_service.jpg" alt="cleaning image" width={1800} height={1200} sizes="(max-width: 1199px) 92vw, 21rem" />
              <h2 className={styles.h2}>Why Choose US</h2>
            <p className={styles.paragraph}>
              At Buildings Cleaning Services, we strive to provide our clients
              with the best cleaning services in Dubai. Here are some reasons
              why you should choose us for your cleaning needs:
            </p>
            <h2 className={styles.h2}>Experienced and Professional Team:</h2>
            <p className={styles.paragraph}>
              Our team consists of highly trained and experienced professionals
              who are dedicated to delivering excellent results. We have the
              knowledge, skills, and expertise to handle any type of cleaning
              task, no matter how big or small.
            </p>
            <h2 className={styles.h2}>
              Environmentally Friendly Cleaning Products:
            </h2>
            <p className={styles.paragraph}>
              We use only non-toxic and environmentally friendly cleaning
              products to ensure that your buildings are safe and healthy for
              your occupants. Our cleaning products are highly effective in
              removing dirt, grime, and stains from all surfaces.
            </p>
            <h2 className={styles.h2}>Customized Cleaning Plans:</h2>
            <p className={styles.paragraph}>
              We understand that each building has unique cleaning needs, and we
              tailor our services to meet those specific requirements. We work
              with you to create a customized cleaning plan that fits your
              schedule and budget.
            </p>
            <h2 className={styles.h2}>Competitive Pricing:</h2>
            <p className={styles.paragraph}>
              We offer competitive pricing for our cleaning services without
              compromising on quality. We provide a free consultation to assess
              your cleaning needs and provide a quote based on those
              requirements.
            </p>
            <h2 className={styles.h2}>Customer Satisfaction Guaranteed:</h2>
            <p className={styles.paragraph}>
              We are committed to ensuring that our clients are completely
              satisfied with our services. We stand behind our work and will do
              everything we can to make sure you are happy with the results.
              Choose Buildings Cleaning Services for all your cleaning needs in
              Dubai. Contact us today for a free consultation and let us take
              care of your cleaning needs.
            </p>
            </div>
          </div>
        </section>
      </div>
      <ServiceFaq items={[
          { question: "What kind of buildings do you clean?", answer: "We offer cleaning services for a variety of buildings, including residential buildings, commercial buildings, industrial buildings, schools, hospitals, and more. Our team is trained to handle any type of cleaning task, no matter the size or complexity of the building." },
          { question: "Do you provide specialized cleaning services for specific industries?", answer: "Yes, we provide specialized cleaning services for specific industries, including healthcare, hospitality, retail, and more. We understand that each industry has unique cleaning requirements, and we tailor our services to meet those specific needs." },
          { question: "What cleaning products do you use?", answer: "We use only environmentally friendly and non-toxic cleaning products to ensure that your buildings are safe and healthy for your occupants. Our cleaning products are also highly effective in removing dirt, grime, and stains from all surfaces." },
          { question: "What is your pricing structure?", answer: "Our pricing structure depends on the size of the building, the type of cleaning services required, and the frequency of cleaning. We provide a free consultation to assess your cleaning needs and provide a quote based on those requirements." },
          { question: "How often do you recommend cleaning a building?", answer: "We recommend regular cleaning to maintain a clean and hygienic environment. The frequency of cleaning depends on the type of building and its usage. We can recommend a cleaning schedule based on your specific needs." }
        ]} />
      <ServiceExtras />
      <BottomSection footerheading={"Buildings Cleaning Services in dubai"}/>
    </>
  );
}

export default PlumbingService;
