import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import style from "@/style/aboutpage.module.css"

const LazyCountUp = ({ start, end, duration }) => {
  const [counted, setCounted] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={style.counter_size}>
      {inView && !counted && (
        <CountUp
          start={start}
          end={end}
          duration={duration}
          onEnd={() => setCounted(true)}
        />
      )}
      {counted && <span>{end}</span>}
    </div>
  );
};

export default LazyCountUp;