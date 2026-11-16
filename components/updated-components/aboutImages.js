import React from 'react'
import LazyCountUp from '../Layout/LazyCountUp'
import style from "@/style/aboutpage.module.css"
import Image from 'next/image'

const AboutImages = () => {
  return (
    <div>
        <div className={style.about_images_cont}>
            <div className={style.abt_left_cont}>
            <Image width={250} height={270} src="/images/ceilingblog.jpg" alt='About Us' className={style.img}/>
            <div className={style.abt_counter}>
                <span className={style.percentage}>
                <LazyCountUp start={0} end={100} duration={5} className={style.counter_text}/>
                %
                </span>
                <p>Customer Satisfication</p>
            </div>
            </div>

            <div  className={style.abt_right_cont}>
            <div  className={style.abt_counter}>
            <span className={style.percentage}>
                <LazyCountUp start={0} end={50} duration={3}/>
                +
                </span>
                <p>Projects Completed</p>
                
            </div>
            <Image width={250} height={270} src='/images/row-bgimage-10.webp' alt='About-Us' className={style.img}/> 
            </div>
        </div>
    </div>
  )
}

export default AboutImages