/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../../styles/blog.module.css";
import ServiceComponent from "@/components/updated-themes/layout/service-component";
import AboutHeroSection from "@/components/updated-themes/heroSection/about-herosection";
import detail from "@/style/service-detail.module.css";
import ServiceWork from "@/components/services/ServiceWork";
import ServiceExtras from "@/components/services/ServiceExtras";
import ServiceSignature from "@/components/services/ServiceSignature";
import BottomSection from "@/components/updated-themes/layout/bottomSection";

function PlumbingService() {
  return (
   <div>
      <AboutHeroSection head_title={'Renovation Services by Basat Anwer Technical Services LLC'} heading={'Renovation Services'} imageurl={"/updated-images/service.png"}/>
      <ServiceSignature />
      <div className={`${styles.main_div} ${detail.page} ${detail.renovation}`}>
        <ServiceComponent/>
      <section  className={styles.services_detail}>
      <div className={styles.main_container}>
        <div className={styles.cont1}>
         <div className={styles.cont2}>
            <div className="">
              <div className={styles.cont3}>
                <h1 className={styles.h1}>
                   Renovation Services by Basat Anwer Technical Services LLC
                </h1>
              </div>
            </div>
          </div>

          <div className={styles.content_aligning}>
          <p className={styles.paragraph}>
             Welcome to Basat Anwer Technical Services LLC, your trusted partner in transforming your living spaces into 
             your dream home. With our expert team of professionals and years of experience in the industry, we specialize 
             in providing top-notch renovation services tailored to your needs. Whether it's a complete bathroom renovation, 
             house remodeling, villa refurbishment, kitchen upgrades, or flat renovations, we are here to turn your vision into reality.
          </p>
         <h2 className={styles.h2}>About Us</h2>
          <p className={styles.paragraph}>
            Basat Anwer Technical Services LLC has been in the renovation industry for over 10 years, serving clients with excellence and dedication. We take pride in our commitment to delivering high-quality craftsmanship, attention to detail, and exceptional customer service. Our mission is to exceed your expectations and create spaces that reflect your style and personality.
          </p>
          <h1 className={styles.h1}>
             Our Services
          </h1>
            <div className={styles.paragraph}>
            <h2 className={styles.h2}> 1.  Bathroom Complete Renovation</h2>
              Transform your bathroom into a luxurious oasis with our complete renovation services. From design conceptualization to installation, our team handles every aspect of the project with precision and expertise. We offer:
              <ol>
                <li>
                    <b className="text-sm purpleClr">Customized Design:</b>
                    Work with our talented designers to create a bathroom layout that maximizes space and functionality while reflecting your aesthetic preferences 
                </li>
                <li>
                    <b className="text-sm purpleClr">High-Quality Materials:</b>
                    Work with our talented designers to create a bathroom layout that maximizes space and functionality while reflecting your aesthetic preferences
                </li>
                <li>
                    <b className="text-sm purpleClr">Professional Installation:</b>
                    Our skilled craftsmen execute the renovation with meticulous attention to detail, ensuring flawless results.                
                </li>
                <li>
                    <b className="text-sm purpleClr">Timely Completion:</b>
                    We understand the importance of timelines, and we strive to complete your bathroom renovation efficiently without compromising quality.                
                </li>
              </ol>
            </div>
            <div className={styles.paragraph}>
            <h2 className={styles.h2}>2.  House Renovation</h2>
               Revitalize your entire home with our comprehensive house renovation services. Whether you're looking to update your interiors, enhance curb appeal, or improve energy efficiency, we've got you covered. Our services include:.
               <ol>
                <li>
                    <b className="text-sm purpleClr">Interior Remodeling:</b>
                    From kitchen and bathroom upgrades to basement finishing and room additions, we transform every corner of your home to meet your needs and preferences                </li>
                <li>
                    <b className="text-sm purpleClr">Exterior Renovation:</b>
                    Boost your home's curb appeal and functionality with exterior upgrades such as siding replacement, window installation, roofing, and landscaping                </li>
                <li>
                    <b className="text-sm purpleClr">Energy-Efficient Solutions::</b>
                    We offer energy-efficient upgrades such as insulation, HVAC systems, and smart home technology to enhance comfort and reduce utility costs                </li>
                <li>
                    <b className="text-sm purpleClr">Project Management:</b>
                    Our dedicated project managers oversee every aspect of the renovation process, ensuring seamless coordination and communication from start to finish                </li>
              </ol>
            </div>
            <div className={styles.paragraph}>
            <h2 className={styles.h2}>
             3.  Villa Renovation
            </h2>
               Elevate the elegance and charm of your villa with our specialized renovation services. Whether it's restoring historical features or modernizing living spaces, we bring expertise and creativity to every project. Our villa renovation services include:
               <ol>
                <li>
                    <b className="text-sm purpleClr">Historic Restoration</b>
                    Preserve the character and heritage of your villa with careful restoration of architectural elements, such as moldings, flooring, and facades                </li>
                <li>
                    <b className="text-sm purpleClr">Luxury Upgrades:</b>
                    Enhance the comfort and sophistication of your villa with luxurious amenities, custom millwork, and premium finishes.                </li>
                <li>
                    <b className="text-sm purpleClr">Outdoor Living Spaces:</b>
                    Create beautiful outdoor retreats with landscaping, hardscaping, pool renovation, and patio design tailored to your lifestyle.                </li>
                <li>
                    <b className="text-sm purpleClr">Smart Home Integration:</b>
                    Incorporate state-of-the-art technology for convenience, security, and energy efficiency, seamlessly integrated into your villa's design.                </li>
              </ol>
            </div>
            <div className={styles.paragraph}>
            <h2 className={styles.h2}>
             4.  kitchen Renovations
            </h2>
               Upgrade your kitchen with our innovative renovation solutions designed to enhance functionality, style, and value. Whether you're a culinary enthusiast or a busy family, we'll create a kitchen that meets your needs. Our kitchen renovation services include:
               <ol>
                <li>
                    <b className="text-sm purpleClr">Custom Cabinetry:</b>
                    Maximize storage and organization with custom-built cabinets crafted to fit your space and lifestyle.                </li>
                <li>
                    <b className="text-sm purpleClr">Countertop Selection:</b>
                    Choose from a wide range of premium countertop materials, including granite, quartz, marble, and butcher block, for durability and aesthetics.
                </li>
                <li>
                    <b className="text-sm purpleClr">Appliance Upgrades:</b>
                    Update your kitchen with energy-efficient appliances, smart technology, and chef-inspired features for a modern culinary experience.                </li>
                <li>
                    <b className="text-sm purpleClr">Lighting Design: </b>
                    Illuminate your kitchen with task lighting, ambient lighting, and decorative fixtures to create a warm and inviting atmosphere.                </li>
              </ol>
            </div>
            <div className={styles.paragraph}>
            <h2 className={styles.h2}>
             5.  Flat Renovation
            </h2>
              Transform your flat into a stylish and functional living space with our flat renovation services. Whether you're a first-time buyer, empty nester, or investor, we'll help you maximize the potential of your property. Our flat renovation services include:
              <ol>
                <li>
                    <b className="text-sm purpleClr">Open Concept Design:</b>
                    Create an open and airy layout that maximizes space and natural light, perfect for modern living and entertaining.                </li>
                <li>
                    <b className="text-sm purpleClr">Space-Saving Solutions:</b>
                    We specialize in innovative storage solutions, multi-functional furniture, and space-saving design techniques to optimize small spaces.                </li>
                <li>
                    <b className="text-sm purpleClr">Contemporary Finishes:</b>
                    Choose from a variety of contemporary finishes, fixtures, and materials to personalize your flat and express your unique style.                </li>
                <li>
                    <b className="text-sm purpleClr">Efficient Layout:</b>
                    Our designers will work with you to design a functional layout that meets your lifestyle needs, whether it's a studio apartment, loft, or penthouse.                </li>
              </ol>
            </div>
            <h2 className={styles.h2}>
              Benefits of Choosing Basat Anwer Technical Services LLC
              </h2>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Expertise:</b>
                With years of experience in the renovation industry, Basat Anwer Technical Services LLC brings expertise, creativity, and attention to detail to every project.
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Quality Craftsmanship:</b>
                 We take pride in our workmanship and use only the highest quality materials and techniques to ensure long-lasting results.              
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Customized Solutions:</b>
                Every renovation project is unique, and we tailor our services to meet your specific needs, preferences, and budget.              
             </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Professional Team:</b>
                Our team of designers, craftsmen, and project managers is dedicated to providing exceptional service, communication, and support throughout the renovation process.              
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Customer Satisfaction:</b>
                At Basat Anwer Technical Services LLC, customer satisfaction is our top priority. We strive to exceed your expectations and deliver results that you'll love for years to come.              
            </p>
            <h2 className={styles.h2}>
            How It Works
              </h2>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Consultation:</b>
                Schedule a consultation with our team to discuss your renovation goals, preferences, and budget.              
            </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Design:</b>
                Work with our designers to create a custom design that meets your needs and reflects your personal style.
              </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr">Construction:</b>
                Sit back and relax as our skilled craftsmen bring your vision to life with precision and expertise             
            </p>
              <p className={styles.paragraph}>
                <b className="text-sm purpleClr"> Completion:</b>
                Enjoy your newly renovated space and experience the difference that quality craftsmanship and attention to detail can make.
            </p>
          <h2 className={styles.h2}>
          Call to Action
          </h2>
          <p className={styles.paragraph}>
          Ready to transform your living spaces? Schedule a consultation with Basat Anwer Technical Services LLC today and take the first step towards your dream home.
          </p>
          <h2 className={styles.h2}>
          Contact us now to get started!

          </h2>
        </div>
        </div>
      </div>
      </section>
    </div>
    <ServiceWork />
      <ServiceExtras />
    <BottomSection footerheading={'Renovation Services by Basat Anwer Technical Services LLC'}/>
    </div>
  );
}


export default PlumbingService;