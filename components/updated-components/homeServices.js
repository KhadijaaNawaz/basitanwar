import React from 'react'
import styles from '@/style/services.module.css'
import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'

const HomeServices = () => {

    const services = [
        {
          id:1,
          image: '/images/renovation.webp',
          alt: 'service_img',
          title: 'Renovation',
          desc: 'Trust us to deliver reliable solutions, exceptional service, and peace of mind for all your HVAC needs.',
          link: '/services/renovation-services',
        },
        {
          id:2,
          image: '/images/plumbing001.png',
          alt: 'service_img',
          title: 'Plumbing',
          desc: 'Regular maintenance is key to extending the life of your HVAC system.',
          link: '/services/plumbing-services',
        },
        {
          id:3,
          image: '/images/plumbing_service.webp',
          alt: 'service_img',
          title: 'Repair',
          desc: 'Our expert technicians are here to fix any issues with your HVAC system.',
          link: '/services/home-appliance-services',
        }
      ]

      
  const backgrounds = ['light', 'medium', 'dark'];
    

  return (
    <div>   <div className={styles.services_section}>
    <div className={styles.services_wrapper}>
        <SectionHeader 
          subtitle={'All-Inclusive Solutions'} 
          title={'Our Services'} 
          desc={'Explore our range of specialized services designed to elevate your livings and exceed your expectations.'} 
          bg={'light'}
        />
        <div className={styles.service_cards_wrapper}>
            {services.map((card, id) => (
              <ServiceCard
                key={id}
                image={card.image}
                alt={card.alt}
                title={card.title}
                desc={card.desc}
                link={card.link}
                className={`${styles.service_card} ${backgrounds[id] === 'light' ? styles.service_card : backgrounds[id] === 'medium' ? styles.service_card_medium : styles.service_card_dark}`}
              />
            ))}
        </div>
    </div>
  </div>
</div>
  )
}

export default HomeServices