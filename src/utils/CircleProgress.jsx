
import { useEffect, useState, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CircleProgress = () => {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    AOS.init();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setProgress((prev) => {
              if (prev < 100) {
                return prev + 1;
              } else {
                clearInterval(interval);
                return 100;
              }
            });
          }, 10);
        }
      });
    });

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative flex items-center justify-center w-32 h-32"
      data-aos="fade-up"
      ref={circleRef}
    >
      <svg className="w-full h-full">
        <circle
          className="text-light"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r="48"
          cx="50%"
          cy="50%"
        />
        <circle
          className="text-theme"
          strokeWidth="4"
          strokeDasharray="301.44" // 2 * Math.PI * 48
          strokeDashoffset={301.44 - (301.44 * progress) / 100}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="48"
          cx="50%"
          cy="50%"
          style={{ transition: 'stroke-dashoffset 0.3s' }}
        />
      </svg>
      <span className="absolute text-2xl text-theme font-semibold">
        {progress}%
      </span>
    </div>
  );
};

export default CircleProgress;