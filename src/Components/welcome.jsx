import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

function Welcome() {
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
    <div class="flex items-center justify-center flex-col h-screen  p-8">
      <h2 ref={headingRef} className="text-white text-7xl pb-4 font-dm-sans text-shadow-lg/30">
        Welcome to my portfolio!
      </h2>
      <p ref={paragraphRef} className="text-white text-2xl max-w-2xl text-center">
        I’m a web developer passionate about creating interactive experiences.
      </p>
    </div>
  );
}

export default Welcome;
