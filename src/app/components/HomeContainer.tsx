'use client';

import Splash from '@/app/components/Splash';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

function HomeContainer() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(t);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">{show && <Splash />}</AnimatePresence>
    </>
  );
}

export default HomeContainer;
