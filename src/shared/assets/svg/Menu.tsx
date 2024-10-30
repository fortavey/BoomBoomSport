import * as React from 'react';

import Svg, {Rect, SvgProps} from 'react-native-svg';

interface MenuProps extends Omit<SvgProps, 'fill' | 'viewBox'> {
  size?: number;
  color?: string;
}

export const Menu: React.FC<MenuProps> = ({size = 28}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 95 54" fill="none">
      <Rect width={94.595} height={8.00007} rx={4.00004} fill="#FB4B4B" />
      <Rect
        y={23}
        width={94.595}
        height={8.00007}
        rx={4.00004}
        fill="#FB4B4B"
      />
      <Rect
        y={46}
        width={94.595}
        height={8.00007}
        rx={4.00004}
        fill="#FB4B4B"
      />
    </Svg>
  );
};
