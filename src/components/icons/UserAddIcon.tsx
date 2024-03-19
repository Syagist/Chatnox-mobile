import React from 'react';
import Svg, {Circle, Ellipse, Path} from 'react-native-svg';

const PhoneIcon = ({color}: IconProps) => {
    return (
        <Svg viewBox="0 0 20 20" fill="none" >
            <Ellipse cx="8" cy="15.5" rx="7" ry="3.5" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
            <Circle cx="8" cy="5" r="4" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
            <Path d="M19 9H15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            <Path d="M17 7L17 11" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        </Svg>
    );
};

export default PhoneIcon;