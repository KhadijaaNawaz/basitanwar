import React from 'react'
import style from '../../style/aboutpage.module.css'
import Subtitle from './Subtitle'

const AboutShared = ({subtitle, title, desc, bg}) => {
  return (
    <div className={style.section_wrapper}>
        <Subtitle subtitle={subtitle} bg={bg} />
        <div className={style.section_title}>
            <h2>{title}</h2>
        </div>
        <div className={style.section_description}>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default AboutShared