// SmoothScrollWrapper.jsx
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScrollWrapper = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1.2,
      class: 'is-inview',
    });

    // Recalculate on load
    setTimeout(() => {
      scroll.update();
    }, 1000);

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      id="smooth-scroll-container"
      data-scroll-container
      ref={containerRef}
      className="min-h-screen"
    >
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;
