import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from 'shared/styles';

export const ArrowLeft = () => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <Path
        fill={COLORS.dark_000}
        d="M12.26 18.35a1 1 0 01-1.52 1.3l1.52-1.3zm-1.52-14a1 1 0 011.52 1.3l-1.52-1.3zM5.5 12l-.76.65a1 1 0 010-1.3l.76.65zm5.24 7.65l-6-7 1.52-1.3 6 7-1.52 1.3zm-6-8.3l6-7 1.52 1.3-6 7-1.52-1.3z"
      />
      <Path
        stroke={COLORS.dark_000}
        strokeLinecap="round"
        strokeWidth="2"
        d="M5.5 12H19"
      />
    </Svg>
  );
};
