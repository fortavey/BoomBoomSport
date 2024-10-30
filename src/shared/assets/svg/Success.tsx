import * as React from 'react';

import Svg, {Circle, Path} from 'react-native-svg';

export const SuccessIcon = () => {
  return (
    <Svg width={250} height={230} viewBox="0 0 785 786" fill="none">
      <Circle cx={392.5} cy={393} r={392.5} fill="#fff" fillOpacity={0.1} />
      <Circle
        cx={392.5}
        cy={393.001}
        r={286.587}
        fill="#fff"
        fillOpacity={0.1}
      />
      <Circle cx={392.501} cy={393} r={166.657} fill="#fff" fillOpacity={0.1} />
      <Circle
        cx={392.799}
        cy={393.299}
        r={160.641}
        stroke="#FE7E3E"
        strokeWidth={4.65627}
      />
      <Path
        d="M343.55 404.634l35.57 25.737 73.852-74.501"
        stroke="#FE7E3E"
        strokeWidth={6.98441}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={221.322} cy={238.299} r={8.14848} fill="#FE7E3E" />
      <Circle cx={216.666} cy={396.613} r={3.49221} fill="#FE7E3E" />
      <Circle cx={591.496} cy={180.096} r={8.14848} fill="#FE7E3E" />
      <Circle cx={508.847} cy={225.494} r={4.65627} fill="#FE7E3E" />
      <Circle cx={551.918} cy={287.19} r={8.14848} fill="#FE7E3E" />
      <Circle cx={386.62} cy={194.064} r={5.82034} fill="#FE7E3E" />
      <Circle cx={174.76} cy={333.752} r={5.82034} fill="#FE7E3E" />
    </Svg>
  );
};
