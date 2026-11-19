/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "../../../styles/blog.module.css";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";
import ServiceComponent from "@/components/updated-themes/layout/service-component";
import detail from "@/style/service-detail.module.css";
import ServiceExtras from "@/components/services/ServiceExtras";
import ServiceSignature from "@/components/services/ServiceSignature";
import ServiceWork from "@/components/services/ServiceWork";
import ServiceFaq from "@/components/services/ServiceFaq";
import BottomSection from "@/components/updated-themes/layout/bottomSection";

function ElectricianService() {
  return (
    <>

<AboutHeroSection head_title={'Electrical Fixture in dubai (Installation & Repairing)'} heading={'Installation & Repairing'} imageurl={"/updated-images/service.png"}/>
    <ServiceSignature />
    <div className={`${styles.main_div} ${detail.page} ${detail.electric}`}>
      <ServiceComponent/>
      <section className={styles.services_detail}>
        <div className={styles.main_container}>
          <div className={styles.cont1}>
          <div className={styles.cont2}>
              <div className="">
                <div className={styles.cont3}>
                  <h1 className={styles.h1}>
                    Electrical Fixture in dubai (Installation & Repairing)
                  </h1>
                </div>
              </div>
            </div>

            <div className={styles.content_aligning}>
            <p className={styles.paragraph}>
              Welcome to our website dedicated to electrical fixture installation
              and repairing services in Dubai. Our team of experienced
              electricians provides reliable and efficient services to ensure that
              your electrical fixtures are installed and repaired correctly. Here
              is all you need to know about our services.
            </p>
          <h2 className={styles.h2}>
              Electrical Fixture Installation in Dubai
            </h2>
            <p className={styles.paragraph}>
              We provide electrical fixture installation services for both
              residential and commercial buildings. Our team of electricians has
              the experience and expertise to install all types of electrical
              fixtures, including light fixtures, ceiling fans, chandeliers, and
              more. We understand that the installation process can be
              complicated, and it requires careful planning to ensure that
              everything is installed correctly. That's why we take our time to
              assess your electrical needs, understand your preferences, and
              provide customized solutions that suit your specific requirements
            </p>
          <h2 className={styles.h2}>
              Electrical Fixture Repairing in Dubai
            </h2>
            <p className={styles.paragraph}>
              Our electrical fixture repairing services in Dubai are designed to
              help you maintain your electrical fixtures in top working condition.
              Our electricians are trained to identify and fix any electrical
              issues you may have, ensuring that your electrical fixtures are safe
              to use. Our repairing services cover a wide range of electrical
              fixtures, including light fixtures, switches, sockets, and more. We
              use only high-quality replacement parts to ensure that your
              electrical fixtures work efficiently and safely.
            </p>
            <br></br>
        
            <h2 className={styles.h2}>
              Conclusion:
            </h2>
            <p className={styles.paragraph}>
              At our company, we are committed to providing top-quality electrical
              fixture installation and repairing services in Dubai. Our team of
              electricians is experienced, reliable, and efficient, ensuring that
              your electrical fixtures are installed and repaired correctly.
              Contact us today for all your electrical fixture installation and
              repairing needs.
            </p>
            <h2 className={styles.h2}>
              Contact Us Today:
            </h2>
            <p className={styles.paragraph}>
              If you're looking for a reliable Electrical Fixture Installation
              company in Dubai, look no further than our team at Electrical
              Fixture Installation in Dubai. Contact us today to schedule a free
              consultation and let us bring your vision to life!
            </p>
          </div>
          </div>
          <div className={styles.image_cont}>
            <Image src="/images/electrician_service.jpg" alt="contact image 2" width={1800} height={1308} sizes="(max-width: 1199px) 92vw, 21rem" />
            <h2 className={styles.h2}>FAQs</h2>
            <h2 className={styles.h2}>
              Customer Satisfaction:
            </h2>
            <p className={styles.paragraph}>
              We are committed to ensuring our clients are 100% satisfied with our
              services.
            </p>
          </div>
        </div>
      </section>
      </div>
      <ServiceWork />
    <ServiceFaq items={[
          { question: "How much does it cost to install or repair electrical fixtures in Dubai?", answer: "The cost of electrical fixture installation or repair depends on the type of fixture and the complexity of the installation or repair work. Contact us for a free estimate." },
          { question: "Do you provide emergency electrical fixture repairing services in Dubai?", answer: "Yes, we do. Our team is available 24/7 to handle emergency electrical fixture repairing services in Dubai." },
          { question: "Can you install electrical fixtures in high-ceiling areas?", answer: "Yes, we can. Our team has the necessary equipment and expertise to install electrical fixtures in high-ceiling areas safely." }
        ]} />
      <ServiceExtras />
      <BottomSection footerheading={'Electrical Fixture in dubai (Installation & Repairing)'}/>
    </>
  );
}

export default ElectricianService;