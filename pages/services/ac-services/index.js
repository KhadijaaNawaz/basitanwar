/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "../../../styles/blog.module.css";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";
import ServiceComponent from "@/components/updated-themes/layout/service-component";
import detail from "@/style/service-detail.module.css";
import ServiceWork from "@/components/services/ServiceWork";
import ServiceExtras from "@/components/services/ServiceExtras";
import ServiceSignature from "@/components/services/ServiceSignature";
import BottomSection from "@/components/updated-themes/layout/bottomSection";

function AcService() {
  return (
    <>
     <AboutHeroSection head_title={'AC(Air Conditionier)'} heading={'Installation & Maintenance'} imageurl={"/updated-images/service.png"}/>
      <ServiceSignature />
      <div className={`${styles.main_div} ${detail.page} ${detail.ac}`}>
       <ServiceComponent/>
        <section className={styles.services_detail}>
          <div className={styles.main_container}>
            <div className={styles.cont1}>
              <div className={styles.cont2}>
                <div className="">
                  <div className={styles.cont3}>
                    <h1 className={styles.h1}>AC(Air Conditionier)</h1>
                    <h2 className={styles.h2}>Installation & Maintenance</h2>
                  </div>
                </div>
              </div>

              <div className={styles.content_aligning}>
                <p className={styles.paragraph}>
                  Are you in Dubai and in need of an air conditioner
                  installation or maintenance service? Look no further than our
                  professional AC services. We are experts in AC installation
                  and maintenance, with years of experience serving customers
                  throughout Dubai. In this article, we will discuss the
                  importance of proper AC installation and maintenance, as well
                  as the benefits of choosing our services
                </p>
                <h2 className={styles.h2}>Importance of AC Installation</h2>
                <p className={styles.paragraph}>
                  Proper AC installation is crucial for ensuring the efficient
                  and effective operation of your air conditioner. Improper
                  installation can lead to a variety of issues, including
                  reduced efficiency, increased energy costs, and even damage to
                  your AC unit. Our team of skilled technicians has the
                  knowledge and expertise necessary to perform a flawless
                  installation, ensuring that your AC unit operates at peak
                  performance.
                </p>
                <h2 className={styles.h2}>Benefits of Proper AC Maintenance</h2>
                <p className={styles.paragraph}>
                  Regular AC maintenance is essential for keeping your AC unit
                  in top condition. Our maintenance services can help you avoid
                  costly repairs and extend the lifespan of your AC unit. We
                  offer a range of maintenance services, including filter
                  replacement, coil cleaning, and refrigerant level checks,
                  among others. Our team will work with you to develop a
                  customized maintenance plan that meets your unique needs and
                  budget.
                </p>

                <h2 className={styles.h2}>Contact Us Today:</h2>
                <p className={styles.paragraph}>
                  For top-quality AC installation or maintenance services in
                  Dubai, our professional AC services are here to cater to all
                  of your AC needs. Our team of highly trained technicians is
                  well-equipped and ready to assist you with any AC-related
                  requirements. Contact us today to schedule an appointment or
                  to learn more about the range of services we offer.
                </p>
              </div>
            </div>
            <div className={styles.image_cont}>
              <Image src="/images/ac_service.jpg" alt="ac image" width={1800} height={1200} sizes="(max-width: 1199px) 92vw, 21rem" />
              <h2 className={styles.h2}>
                Why Should You Choose Our AC Services?
              </h2>
              <p className={styles.paragraph}>
                There are many reasons to choose our AC services for your
                installation and maintenance needs. Here are just a few:
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Expertise:</b>
                <br />
                Our team of technicians is highly trained and experienced, with
                a deep understanding of all aspects of AC installation and
                maintenance.
                <br></br>
                <b className="text-sm purpleClr ">Quality:</b>
                <br /> We use only the highest-quality parts and equipment,
                ensuring that your AC unit is reliable and efficient.<br></br>
                <b className="text-sm purpleClr">Customization:</b>
                <br /> We understand that every customer is unique, and we work
                with you to develop a customized solution that meets your
                specific needs and budget.
                <br></br>
                <b className="text-sm purpleClr">Convenience:</b>
                <br /> We offer flexible scheduling options, so you can get the
                service you need at a time that works for you.<br></br>
                <b className="text-sm purpleClr">Competitive Pricing:</b>
                <br />
                We offer competitive pricing for all of our services, without
                sacrificing quality or expertise.
              </p>
            </div>
          </div>
        </section>
      </div>
      <ServiceWork />
      <ServiceExtras />
      <BottomSection footerheading={"AC(Air Conditionier)"}/>
    </>
  );
}

export default AcService;
