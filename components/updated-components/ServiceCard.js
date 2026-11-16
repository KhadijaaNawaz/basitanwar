// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../../style/services.module.css'

const ServiceCard = ({image, alt, title, desc , link, className}) => {
  return (
    <div className={className}>
      <div className={styles.card_img}>
        <Image src={image} alt={alt} width={470} height={300} />
      </div>
      <div className={styles.card_content}>
          <h5>{title}</h5>
          <p>{desc}</p>
          <div className={styles.service_btn}>
              <Link href={link}>View Services</Link>
          </div>
      </div>
    </div>
  )
}

export default ServiceCard
