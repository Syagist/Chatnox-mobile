import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchIcon = ({color}: IconProps) => {
    return (
        <Svg viewBox="0 0 20 20" fill="none">
            <Path
                d="M15.9583 15.9583L19.1666 19.1667M18.2499 9.54168C18.2499 4.7322 14.3511 0.833344 9.54158 0.833344C4.73211 0.833344 0.833252 4.7322 0.833252 9.54168C0.833252 14.3512 4.73211 18.25 9.54158 18.25C14.3511 18.25 18.2499 14.3512 18.2499 9.54168Z"
                stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>


    );
};

export default SearchIcon;