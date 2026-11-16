import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/style/shared.module.css"

const BottomSection = ({footerheading}) => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_wrapper}>
         <div className={styles.footer_top}>
            <div className={styles.top_wrapper}>
              <div className={styles.top_left}>
                <div className={styles.top_left_icon}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h3>{footerheading}</h3>
              </div>
              <div className={styles.top_right}>
                <Link href={"/contact-us"}>Schedule Now</Link>
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default BottomSection