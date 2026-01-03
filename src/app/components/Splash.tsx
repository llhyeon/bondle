'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

function Splash() {
  return (
    <motion.div
      className="mt-60 flex flex-col items-center justify-center"
      initial={{ opacity: 0, translateY: '100px' }}
      exit={{ opacity: 0, translateY: '100px' }}
      animate={{ opacity: 1, translateY: '0px' }}
      transition={{
        duration: 0.8,
        ease: 'easeIn',
      }}
    >
      <Image src={'logo/logo.svg'} alt="logo" width={300} height={300} />
      <p className="text-primary text-2xl">동네 사람들과 함께</p>
    </motion.div>
  );
}

export default Splash;
