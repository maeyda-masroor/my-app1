// components/HoverConfetti.tsx
import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface HoverConfettiProps {
  run: boolean;
}

const HoverConfetti: React.FC<HoverConfettiProps> = ({ run }) => {
  const { width, height } = useWindowSize();
  return run ? <Confetti width={width} height={height} numberOfPieces={200} /> : null;
};

export default HoverConfetti;
