import React from 'react'
import SectionHeader from './SectionHeader';
import homeStyles from "@/style/home.module.css"
import Img from '@/public/updated-images/check_dark.png'
import Image from 'next/image';

const ChooseUs = () => {

    const reasons = [
        {
          id:1,
          title: 'Skilled Craftsmanship',
          desc: 'From painting to false ceiling installations, rely on our skilled craftsmen for precision and quality, transforming your space with attention to detail'
        },
        {
          id:2,
          title: 'Expert HVAC Maintenance',
          desc: "Trust our experienced technicians for reliable HVAC solutions, ensuring optimal comfort and peace of mind for your home's climate control needs"
        },
        {
          id:3,
          title: 'Comprehensive Renovation Solutions',
          desc: 'Enjoy stress-free renovations tailored to your vision and budget, from planning to construction, with stunning results that exceed expectations'
        },
        {
          id:4,
          title: 'Professional Plumbing Services',
          desc: 'Experience prompt and efficient plumbing solutions from our skilled plumbers, ensuring reliable service and lasting results for all your needs'
        },
        {
          id:5,
          title: 'Quality Carpentry Work',
          desc: 'EElevate your space with premium carpentry services, delivering exceptional quality and craftsmanship for custom furniture and intricate woodwork'
        },
        {
          id:6,
          title: 'Reliable Electrical Services',
          desc: "Count on our certified electricians for all your electrical requirements, prioritizing safety and efficiency to keep your home powered and protected"
        },
        {
          id:7,
          title: 'Professional Cleaning',
          desc: 'Spotless, hygienic spaces. Eco-friendly products. From regular to deep cleaning, we make your home inviting'
        },
        {
          id:8,
          title: 'Expert Tiling',
          desc: 'Transform floors and walls. Skilled craftsmen for installation, repair, and replacement. Durable, beautiful results'
        },
        {
          id:9,
          title: 'Appliance Repair',
          desc: "Prompt, reliable service. From refrigerators to washing machines, we keep your household running smoothly"
        }
      ];

  return (
    <div className={homeStyles.choose_cont}>
          <SectionHeader 
              subtitle={'Main Highlights'} 
              title={'Why Choose Us'} 
              desc={"Discover why we're the preferred choice for all your needs. From exceptional quality to unparalleled service, we're committed to exceeding your expectations."} 
              bg={'dark'}
            />
          <div className={homeStyles.reasons_wrapper}>
          {reasons.map((reason, id) => (
            <div key={id} className={homeStyles.reason}>
              <div className={homeStyles.reason_img}>
                <Image src={Img} alt='Check Icon' layout='fill' />
              </div>
              <div className={homeStyles.reason_text}>
                <h5 className={homeStyles.reason_title}>{reason.title}</h5>
                <p className={homeStyles.reason_desc}>{reason.desc}</p>
              </div>
            </div>
          ))}
          </div>  
    </div>
  )
}

export default ChooseUs