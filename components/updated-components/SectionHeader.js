import React from 'react'
import styles from '../../style/shared.module.css'
import Subtitle from './Subtitle'

const SectionHeader = ({subtitle, title, desc, bg}) => {
  return (
    <div className={styles.section_wrapper}>
        <Subtitle subtitle={subtitle} bg={bg} />
        <div className={styles.section_title}>
            <h2>{title}</h2>
        </div>
        <div className={styles.section_description}>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default SectionHeader