import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowIcon = ({color = "#CACACA"}) => {
    return (
        <Svg  viewBox="0 0 14 10" fill="none">
            <Path d="M5 1L1 5M1 5L5 9M1 5L13 5" stroke={color} stroke-width="1.5" stroke-linecap="round"
                  strokeLinejoin="round"/>
        </Svg>

    );
};

export default ArrowIcon;