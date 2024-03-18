import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const ShowIcon = ({color = "#CACACA"}) => {
    return (
        <Svg viewBox="0 0 24 24" fill="none">
            <Path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke={color} strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <Path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke={color} strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <Circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"/>
        </Svg>

    );
};

export default ShowIcon;