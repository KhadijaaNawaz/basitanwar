import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/style/shared.module.css"
import calm from "@/style/bottom-calm.module.css"

/**
 * Closing band above the footer.
 * The Home page keeps the original gold bar. Every inner page gets a quieter version in the
 * site's cream/ink system (the heavy gold bar fought with the rest of the redesigned pages).
 */
const BottomSection = ({footerheading}) => {
  const { pathname } = useRouter()
  if (pathname !== '/') {
    return (
      <section className={calm.band} aria-label="Schedule a visit">
        <div className={calm.inner}>
          <span className={calm.kicker}>Ready when you are</span>
          <h3>{footerheading}</h3>
          <Link href="/contact-us" className={calm.btn}>Schedule Now</Link>
        </div>
      </section>
    )
  }
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
