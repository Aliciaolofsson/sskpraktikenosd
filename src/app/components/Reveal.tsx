import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, width = 'fit-content' }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
        mainControls.start('visable')
    }
  }, [isInView, mainControls]);

  return (
    <div  style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visable: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
