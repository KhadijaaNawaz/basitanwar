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

function CarpentryWork() {
  return (
    <>
    <AboutHeroSection head_title={'Carpentry Work in dubai (Wood Flooring)'} heading={'Carpentry Work'} imageurl={"/updated-images/service.png"}/>

    <ServiceSignature />

    <div className={`${styles.main_div} ${detail.page} ${detail.carpentry}`}>
       <ServiceComponent/>
      <section className={styles.services_detail}>
          <div className={styles.main_container}>
            <div className={styles.cont1}>
            <div className={styles.cont2}>
                <div className="">
                  <div className={styles.cont3}>
                    <h1 className={styles.h1}>
                      Carpentry Work in dubai (Wood Flooring)
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles.content_aligning}>
              <p className={styles.paragraph}>
                Welcome to our Carpentry Work in Dubai page, where we specialize in
                providing high-quality wood flooring services for residential and
                commercial properties. Our team of expert carpenters has the skills
                and experience to deliver exceptional results that exceed our
                clients' expectations.
              </p>
            <h2 className={styles.h2}>
                Wood Flooring Services
              </h2>
              <p className={styles.paragraph}>
                We understand that choosing the right flooring for your property is
                a crucial decision. That's why we offer a wide range of wood
                flooring options to suit every taste and budget. Our wood flooring
                services include:
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Consultation:</b>
                Our team of experts will work with you to understand your
                preferences, budget, and requirements, and recommend the best wood
                flooring options for your property.
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Installation:</b>
                We use the latest tools and techniques to install your wood flooring
                with precision and care, ensuring a flawless finish.
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Maintenance:</b>
                We also offer regular maintenance services to keep your wood
                flooring looking beautiful and pristine for years to come.
              </p>
              <br></br>
            <h2 className={styles.h2}>
                Types of Wood Flooring
              </h2>
              <p className={styles.paragraph}>
                We offer a wide range of wood flooring options, including:
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Hardwood Flooring:</b>
                Hardwood flooring is a popular choice for its durability, beauty,
                and timelessness. We offer a wide range of hardwood options,
                including oak, maple, and cherry, among others.
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Engineered Wood Flooring:</b>
                Engineered wood flooring is a cost-effective alternative to hardwood
                flooring. It's made by bonding layers of wood together, making it
                more resistant to moisture and humidity.
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Laminate Flooring:</b>
                Laminate flooring is a highly durable and affordable option that
                mimics the look of hardwood flooring. It's made by layering a
                high-resolution image of wood onto a fiberboard base, making it an
                excellent option for high-traffic areas.
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Parquet Flooring:</b>
                Parquet flooring is a highly decorative option that features
                intricate geometric patterns. It's made by arranging small pieces of
                wood in different designs, making it a highly customizable option
                for homeowners and commercial properties alike.
              </p>
         
            </div>
            </div>
            <div className={styles.image_cont}>
              <Image src="/images/work/dubai-wardrobe-after.jpg" alt="A finished fitted wardrobe, Downtown Dubai" width={1002} height={708} sizes="(max-width: 1199px) 92vw, 21rem" />
              <h2 className={styles.h2}>
                Why Choose Our Wood Flooring Services?
              </h2>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Quality Materials:</b>
                We use only the highest quality materials to ensure a flawless
                finish and long-lasting durability.
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Skilled Craftsmanship:</b>
                Our team of expert carpenters has the skills and experience to
                deliver exceptional results that exceed our clients' expectations.
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Competitive Pricing:</b>
                We offer competitive pricing without compromising on the quality of
                our work.
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Eco-Friendly Approach:</b>
                We use eco-friendly materials and techniques to minimize our impact
                on the environment.
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Customer Satisfaction:</b>
                We are committed to ensuring our clients are 100% satisfied with our
                services.Licensed and Insured: Our team of carpenters is licensed
                and insured, giving our clients peace of mind knowing that their
                property is in safe hands.
              </p>
              <h2 className="purpleClr text-3xl md:text-[17px] my-0">
                Contact Us:
              </h2>
              <p className="text-sm grayClr  md:leading-[27px]">
                If you're looking for top-quality wood flooring services in Dubai,
                look no further than Carpentry Work in Dubai. Contact us today to
                schedule a free consultation and let us bring your vision to life!
              </p>
            </div>
          </div>
      </section>
      </div>
      <ServiceWork />
      <ServiceExtras />
      <BottomSection footerheading={'Carpentry Work in dubai (Wood Flooring)'}/>
    </>
  );
}


export default CarpentryWork;