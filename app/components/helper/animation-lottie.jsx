"use client"

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

// Dynamically import lottie-react only on the client to avoid SSR DOM errors
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = useMemo(() => ({
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  }), [animationPath]);

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;