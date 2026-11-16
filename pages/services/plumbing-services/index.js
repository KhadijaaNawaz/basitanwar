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


function PlumbingService() {
  return (
   <div>
     <AboutHeroSection head_title={'Plumbing & Sanitary in dubai Installation & Maintenance'} heading={'Installation & Maintenance'} imageurl={"/updated-images/service.png"}/>

      <ServiceSignature />

      <div className={`${styles.main_div} ${detail.page} ${detail.plumbing}`}>
      <ServiceComponent/>

      <section  className={styles.services_detail}>
      <div className={styles.main_container}>
        <div className={styles.cont1}>
         <div className={styles.cont2}>
            <div className="">
              <div className={styles.cont3}>
                <h1 className={styles.h1}>
                  Plumbing & Sanitary in dubai Installation & Maintenance
                </h1>
              </div>
            </div>
          </div>

          <div className={styles.content_aligning}>
          <p className={styles.paragraph}>
            Plumbing and Sanitary services are essential in any building or
            home, ensuring the smooth functioning of pipes and drains. Dubai is
            a rapidly growing city, and as a result, the demand for plumbing and
            sanitary services is increasing.
          </p>
         <h2 className={styles.h2}>
            Installation Services
          </h2>
          <p className={styles.paragraph}>
            When it comes to plumbing and sanitary installation services, it is
            crucial to hire a professional company with experience in the field.
            This ensures that the installation is done correctly, which reduces
            the likelihood of future issues. Professional installation services
            include the installation of pipes, fittings, and fixtures, such as
            toilets, sinks, and showers. Additionally, installation services may
            also include the installation of water heaters and water filtration
            systems.
          </p>
         <h2 className={styles.h2}>
            Maintenance Services
          </h2>
          <p className={styles.paragraph}>
            Plumbing and sanitary maintenance services are crucial for the
            prevention of any major issues in the future. Regular maintenance
            can help detect minor issues before they escalate into more
            significant problems. Maintenance services may include drain
            cleaning, leak detection, and repair services, as well as regular
            inspections to ensure everything is functioning correctly.
            Professional maintenance services can help prevent costly repairs
            and ensure the longevity of your plumbing and sanitary systems.
          </p>
       
          <h2 className={styles.h2}>
            Conclusion:
          </h2>
          <p className={styles.paragraph}>
            In conclusion, plumbing and sanitary services are crucial for the
            smooth functioning of any building or home. In Dubai, professional
            installation and maintenance services are available to
          </p>
          <h2 className={styles.h2}>
            Contact Us Today:
          </h2>
          <p className={styles.paragraph}>
            If you're looking for a reliable plumbing company in Dubai, look no
            further than our team at plumbing and sanitary Services in Dubai.
            Contact us today to schedule a free consultation and let us bring
            your vision to life!
          </p>
        </div>
        </div>
        <div className={styles.image_cont}>
          <Image src="/images/plumbing_service.webp" alt="contact image 5" width={4104} height={2736} sizes="(max-width: 1199px) 92vw, 21rem" />

        </div>
      </div>
      
    </section>
    </div>
    <ServiceFaq items={[
          { question: "Can I perform plumbing and sanitary services myself?", answer: "While some minor repairs may be possible to perform on your own, it is always recommended to hire a professional company to handle any plumbing or sanitary issues. Attempting to fix the issue yourself may lead to further damage, which can result in costly repairs." },
          { question: "How often should I schedule maintenance services?", answer: "It is recommended to schedule maintenance services at least once a year, depending on the age and condition of your plumbing and sanitary systems. Regular maintenance can help detect minor issues before they escalate into more significant problems." },
          { question: "How long does an installation service take?", answer: "The duration of an installation service depends on the complexity of the project. However, professional plumbing and sanitary companies should provide you with a timeline for the completion of the project." }
        ]} />
    <ServiceExtras />
    <BottomSection footerheading={'Plumbing & Sanitary in dubai Installation & Maintenance'}/>
    </div>
  );
}


export default PlumbingService;