import React from 'react'

import styles  from '../../style/shared.module.css'

const Subtitle = ({subtitle, bg}) => {
  return (
    
    <div className={`${bg === 'light' ? styles.section_subtitle_light : styles.section_subtitle_dark}`}>
        <span>{subtitle}</span>
    </div>
  )
}

export default Subtitle