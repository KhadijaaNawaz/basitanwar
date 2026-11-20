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

function PaintingService() {
  return (
    <>
     <AboutHeroSection head_title={'Painting Services (Interior & Exterior)'} heading={'Interior & Exterior'} imageurl={"/updated-images/service.png"}/>
      <ServiceSignature />
      <div className={`${styles.main_div} ${detail.page} ${detail.painting}`}>
       <ServiceComponent/>
      <section  className={styles.services_detail}>
      <div className={styles.main_container}>
        <div className={styles.cont1}>
         <div className={styles.cont2}>
            <div className="">
              <div className={styles.cont3}>
                <h1 className={styles.h1}>
                  Painting Services (Interior & Exterior)
                </h1>
              </div>
            </div>
          </div>

          <div className={styles.content_aligning}>
          <p className={styles.paragraph}>
            Greetings and welcome to our Painting Services in Dubai! Our team of
            skilled painters is committed to delivering high-quality painting
            services to both residential and commercial clients throughout
            Dubai. We specialize in both interior and exterior painting, and we
            are proud to achieve exceptional results that surpass the
            expectations of our valued clients.
          </p>
         <h2 className={styles.h2}>
            Interior Painting Services
          </h2>
          <p className={styles.paragraph}>
            At our Painting Services, we offer exceptional interior painting
            services that are tailored to enhance the appearance and atmosphere
            of your home or business. Whether you desire to revitalize a single
            room or overhaul your entire space, we have got you fully covered.
            Our team of experts employs solely the finest quality paints and
            materials to guarantee a seamless and impeccable finish each time.
          </p>
         <h2 className={styles.h2}>
            Our interior painting services include:
          </h2>
          <p className={styles.paragraph}>
            <b className="text-sm purpleClr">Surface preparation:</b> We start
            by preparing the surfaces to be painted, including cleaning,
            sanding, and filling in any cracks or holes.
            <br></br>
            <b className="text-sm purpleClr">Color consultation:</b> f you need
            help choosing the right colors for your space, our team of experts
            can provide professional guidance.<br></br>
            <b className="text-sm purpleClr">Painting:</b> We use the latest
            techniques and tools to ensure a smooth, even coat of paint every
            time.
            <br></br>
            <b className="text-sm purpleClr">Clean-up:</b> We take care of
            cleaning up our work area and leaving your space spotless once the
            job is complete. <br></br>
          </p>
         <h2 className={styles.h2}>
            Exterior Painting Services
          </h2>
          <p className={styles.paragraph}>
            When it comes to exterior painting, we understand the importance of
            protecting your property from the elements while also enhancing its
            curb appeal. Our team has extensive experience in painting all types
            of exterior surfaces, from wood and stucco to brick and concrete.
          </p>
         <h2 className={styles.h2}>
            Our Exterior painting services include:
          </h2>
          <p className={styles.paragraph}>
            <b className="text-sm purpleClr">Surface preparation:</b> Our
            painting process commences with meticulous surface preparation,
            which involves cleaning, sanding, and patching any cracks or holes
            to ensure a smooth and flawless paint finish.
            <br></br>
            <b className="text-sm purpleClr">Color consultation:</b> If you
            require assistance in selecting the appropriate colors for your
            area, our team of specialists is always available to offer
            professional advice and guidance.<br></br>
            <b className="text-sm purpleClr">Painting:</b> We use the latest
            techniques and tools to ensure a smooth, even coat of paint every
            time.
            <br></br>
            <b className="text-sm purpleClr">Clean-up:</b> We take care of
            cleaning up our work area and leaving your space spotless once the
            job is complete. <br></br>
          </p>
       
          <h2 className={styles.h2}>
            Contact Us Today:
          </h2>
          <p className={styles.paragraph}>
            If you're looking for a reliable painting company in Dubai, look no
            further than our team at Painting Services in Dubai. Contact us
            today to schedule a free consultation and let us bring your vision
            to life!
          </p>
        </div>
        </div>
        <div className={styles.image_cont}>
          <Image src="/images/work/dubai-wall-after.jpg" alt="A freshly painted wall, Downtown Dubai" width={1799} height={1199} sizes="(max-width: 1199px) 92vw, 21rem" />
          <h2 className={styles.h2}>
            Why Choose Our Painting Services?
          </h2>
          <p className={styles.paragraph}>
            <b className="text-sm purpleClr">Experienced and Professional:</b>
            Our team of painters has years of experience and are trained to
            deliver exceptional results.<br></br>
            <b className="text-sm purpleClr">Quality Materials:</b>We use only
            the highest quality paints and materials to ensure a long-lasting
            finish.<br></br>
            <b className="text-sm purpleClr">Competitive Pricing:</b>We offer
            competitive pricing without compromising on the quality of our work.
            <br></br>
            <b className="text-sm purpleClr">On-time Delivery:</b>We understand
            the importance of deadlines and strive to complete our projects on
            time.
          </p>
          <h2 className={styles.h2}>
            Customer Satisfaction:
          </h2>
          <p className={styles.paragraph}>
            We are committed to ensuring our clients are 100% satisfied with our
            services.
          </p>
          <h2 className={styles.h2}>
            Conclusion:
          </h2>
          <p className={styles.paragraph}>
            To sum up, Basat Anwer Technical Services LLC Painting Services in
            Dubai is your premier destination for top-notch interior and
            exterior painting services for both residential and commercial
            properties. Our skilled and experienced team of painters is
            committed to surpassing your expectations and delivering outstanding
            results every time. We only use premium quality paints and materials
            to guarantee a flawless finish. You can rest assured knowing that we
            offer competitive pricing, on-time delivery, customer satisfaction
            guarantee, eco-friendly approach, and full licensing and insurance.
            Don't hesitate to contact us today to schedule a free consultation
            and let us bring your vision to reality!
          </p>
        </div>
      </div>
      </section>
      </div>
      <ServiceWork />
      <ServiceExtras />
      <BottomSection footerheading={'Painting Services (Interior & Exterior)'}/>
    </>
  );
}

export default PaintingService;