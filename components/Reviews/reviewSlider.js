import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components/ReviewSlider.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import reviewsData from "@/public/reviesDataa/reviewsData"
import styles from "@/styles/ReviewSlider.module.css";
import SectionHeader from '../updated-components/SectionHeader';
import Image from 'next/image';

const ReviewSlider = () => {

        const sliderSettings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
           
            responsive: [
              {
                breakpoint: 1224,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 950,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          };


  return (

    <>

    <div className={styles.review_header}>
      <SectionHeader
      subtitle={'Feedback'}
      bg={'blue'}
      title={'Our Happy Customers'}
      desc={'Discover the experiences of our valued clients. Read their stories and see why they choose us for exceptional service.'}
      />
    </div>
    <Slider {...sliderSettings} className="sliderset">
      {reviewsData.map((review, index) => (
        <div key={index} className={styles.reviewItem}>
          <div className={styles.customSlide}>
          <div className={styles.quote_cont}>
       <Image width={30} height={20} src='/updated-images/quotation-mark.png' alt='Quotation mark' className={styles.quotation}/>
       </div>
            <div className={`${styles.avatar} ${styles[`user${index + 1}`]}`}>
              {review.userName.charAt(0)}
            </div>
            <div className={styles.userNameTimeAgo}>
              <h4>{review.userName}</h4>
              <p>{review.timeAgo}</p>
            </div>
          {/* </div> */}
        
          <p className={styles.comment}>"
              {review.comment.length > 200
                ? review.comment.slice(0, 190) + '...'
                : review.comment}"
            </p>

            <div className={styles.ratingStars}>
            {Array.from({ length: review.rating }, (_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className={styles.starIcon} />
            ))}
          </div>

          <a href={review.reviewLink} target="_blank" rel="noopener noreferrer" aria-label='true' className={styles.links}>
            Read more on Google
          </a>
        </div>
        </div>
      ))}
    </Slider>
    </>
  );
};

export default ReviewSlider;
