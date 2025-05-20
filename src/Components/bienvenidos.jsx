import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

function Bienvenidos() {
   const headingRef = useRef(null);
    const paragraphRef = useRef(null);
  
    useEffect(() => {
      let headingSplit, paragraphSplit;
  
      if (headingRef.current) {
        headingSplit = new SplitText(headingRef.current, { type: "words" });
  
        gsap.fromTo(
          headingSplit.words,
          { opacity: 0, y: -50 },
          {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      }
  
      if (paragraphRef.current) {
        paragraphSplit = new SplitText(paragraphRef.current, { type: "words" });
  
        gsap.fromTo(
          paragraphSplit.words,
          { opacity: 0, y: 50 },
          {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      }
  
      return () => {
        headingSplit?.revert();
        paragraphSplit?.revert();
      };
    }, []);

  return (
    <div>
      <h2 ref={headingRef} className="text-white text-8xl pb-4 font-dm-sans text-shadow-lg/30">
        Bienvenid@ a mi portafolio!
      </h2>
      <p ref={paragraphRef} className="text-white text-xl max-w-2xl">
        Soy un desarrollador web apasionado por crear experiencias interactivas.
      </p>
    </div>
  );
}

export default Bienvenidos;
