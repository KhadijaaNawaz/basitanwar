/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "../../../styles/blog.module.css";
import ServiceComponent from "@/components/updated-themes/layout/service-component";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";
import detail from "@/style/service-detail.module.css";
import ServiceExtras from "@/components/services/ServiceExtras";
import ServiceSignature from "@/components/services/ServiceSignature";
import ServiceWork from "@/components/services/ServiceWork";
import ServiceFaq from "@/components/services/ServiceFaq";
import BottomSection from "@/components/updated-themes/layout/bottomSection";

function HomeApplianceService() {
  return (
    <>
      <AboutHeroSection head_title={'Home Appliances & Repairing Services in dubai'} heading={'Repairing Services'} imageurl={"/updated-images/service.png"}/>
      <ServiceSignature />
      <div className={`${styles.main_div} ${detail.page} ${detail.appliance}`}>
       <ServiceComponent/>
      <section  className={styles.services_detail}>
      <div className={styles.main_container}>
        <div className={styles.cont1}>
         <div className={styles.cont2}>
            <div className="">
              <div className={styles.cont3}>
                <h1 className={styles.h1}>
                  Home Appliances & Repairing Services in dubai
                </h1>
              </div>
            </div>
          </div>

          <div className={styles.content_aligning}>
          <p className={styles.paragraph}>
            Welcome to our website dedicated to home appliances and repairing
            services in Dubai. We understand the importance of having functional
            appliances at home, and the inconvenience caused when they break
            down. That's why we provide a wide range of services to help you
            keep your appliances running smoothly. Our team of experts is here
            to assist you with installation, repair, and maintenance services.
            We offer services for a variety of appliances, including
            refrigerators, washing machines, dishwashers, ovens, and more. Our
            team is highly skilled and experienced, ensuring that we can
            diagnose and fix any issue you may have with your appliance. We are
            committed to providing our clients with reliable, cost-effective
            solutions to their appliance problems.
          </p>
         <h2 className={styles.h2}>Conclusion</h2>
          <p className={styles.paragraph}>
            At our home appliances and repairing services in Dubai, we
            understand the importance of having fully functional appliances at
            home. That's why we offer a range of services to help you keep your
            appliances running smoothly. Our team of experts is highly skilled
            and experienced, ensuring that we can diagnose and fix any issue you
            may have with your appliance. We are committed to providing our
            clients with reliable, cost-effective solutions to their appliance
            problems. We believe in providing exceptional customer service, and
            our team is always happy to assist you with any questions or
            concerns you may have. We take pride in our work and strive to
            provide the best possible service to our clients. So, if you're
            looking for home appliance repair services in Dubai, don't hesitate
            to contact us. We're here to help!
          </p>
        
          <h2 className={styles.paragraph}>
            Contact Us Today:
          </h2>
          <p className={styles.paragraph}>
            If you're looking for a reliable Home Appliance & Repairing company
            in Dubai, look no further than our team in Dubai. Contact us today
            to schedule a free consultation and let us bring your vision to
            life!
          </p>
        </div>
        </div>
        <div className={styles.image_cont}>
          <Image src="/images/work/appliance-after.jpg" alt="A technician testing a home appliance with a multimeter" width={1800} height={1200} sizes="(max-width: 1199px) 92vw, 21rem" />
          <h2 className={styles.h2}>
            Why Choose basatanwertech
          </h2>

          <p className={styles.paragraph}>
            If you're looking for home appliance repair services in Dubai, you
            may be wondering why you should choose Basatanwertech. Here are a
            few reasons why we believe we're the best choice for all your home
            appliance needs:
          </p>
          <p className={styles.paragraph}>
            <b className="text-sm purpleClr">Experienced and skilled team:</b>
            Our team of experts is highly skilled and experienced, ensuring that
            we can diagnose and fix any issue you may have with your appliance.
            We take pride in our work, and our team is committed to providing
            reliable, cost-effective solutions to your appliance problems.
          </p>
          <p className={styles.paragraph}>
            <b className="text-sm purpleClr">Fast and efficient service:</b>
            We understand the inconvenience caused by a broken appliance, and
            that's why we strive to provide fast and efficient services to
            minimize the downtime. In most cases, we aim to complete repairs
            within 24-48 hours, depending on the availability of spare parts.
          </p>

          <p className={styles.paragraph}>
            <b className="text-sm purpleClr">Quality spare parts:</b>
            We use only high-quality spare parts in our repairs, ensuring that
            your appliance runs smoothly for years to come. We work with trusted
            suppliers to source the best spare parts, and our team is trained to
            identify counterfeit parts to ensure the quality and safety of our
            repairs.
          </p>
          <p className={styles.paragraph}>
            <b className="text-sm purpleClr">Warranty on repairs:</b>
            We provide a warranty on all repairs we undertake. Our warranty
            covers both the spare parts and labor used in the repair. In the
            unlikely event of a problem with the repair, please contact us, and
            we'll do our best to resolve the issue.
          </p>
          <p className={styles.paragraph}>
            <b className="text-sm purpleClr">Installation services:</b>We offer
            installation services for a wide range of appliances. Our team of
            experts can help you with the installation of your new appliance,
            ensuring that it is set up correctly and safely. We can also provide
            advice on the best location for your appliance and any additional
            accessories you may need.
          </p>
          <p className={styles.paragraph}>
            <b className="text-sm purpleClr">Excellent customer service:</b> We
            believe in providing exceptional customer service, and our team is
            always happy to assist you with any questions or concerns you may
            have. We take pride in our work and strive to provide the best
            possible service to our clients.
          </p>
          <h2 className={styles.h2}>
            Conclusion:
          </h2>
          <p className={styles.paragraph}>
            In conclusion, if you're looking for reliable, cost-effective, and
            efficient home appliance repair services in Dubai, look no further
            than Basatanwertech. Our experienced and skilled team, use of
            quality spare parts, warranty on repairs, and excellent customer
            service set us apart from our competitors. Contact us today to learn
            more about how we can help you keep your appliances running
            smoothly.
          </p>
        </div>
      </div>
      </section>
      </div>

      <ServiceWork />
    <ServiceFaq items={[
          { question: "What kind of appliances do you repair?", answer: "We provide repair services for a variety of appliances, including refrigerators, washing machines, dishwashers, ovens, and more. If you're unsure whether we can repair your appliance, please contact us, and we'll be happy to discuss your needs." },
          { question: "How long does it take to repair an appliance?", answer: "The duration of the repair depends on the extent of the damage and the type of appliance. In most cases, we aim to complete repairs within 24-48 hours, depending on the availability of spare parts. We understand the inconvenience caused by a broken appliance and strive to provide fast and efficient services to minimize the downtime." },
          { question: "Do you provide warranty on your repairs?", answer: "Yes, we provide a warranty on all repairs we undertake. Our warranty covers both the spare parts and labor used in the repair. In the unlikely event of a problem with the repair, please contact us, and we'll do our best to resolve the issue." },
          { question: "Do you provide installation services?", answer: "Yes, we offer installation services for a wide range of appliances. Our team of experts can help you with the installation of your new appliance, ensuring that it is set up correctly and safely. We can also provide advice on the best location for your appliance and any additional accessories you may need." }
        ]} />

      <ServiceExtras />

      <BottomSection footerheading={'Home Appliances & Repairing Services in dubai'}/>
    </>
  );
}

export default HomeApplianceService;