import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MessageIcon = ({color}: IconProps) => {
    return (
        <Svg viewBox="0 0 22 22" fill="none">
            <Path fillRule="evenodd" clipRule="evenodd"
                  d="M19.5031 15.7623C20.2939 14.354 20.75 12.7312 20.75 11C20.75 5.61475 16.3853 1.25 11 1.25C5.61475 1.25 1.25 5.61475 1.25 11C1.25 16.3853 5.61475 20.75 11 20.75C12.7312 20.75 14.354 20.2939 15.7623 19.5031L20.75 20.75L19.5031 15.7623Z"
                  stroke={color} stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path fillRule="evenodd" clipRule="evenodd"
                  d="M10.8082 11.3499C10.9144 11.2437 11.0856 11.2437 11.1917 11.3499C11.2979 11.4561 11.2979 11.6272 11.1917 11.7334C11.0856 11.8396 10.9144 11.8396 10.8082 11.7334C10.7032 11.6272 10.7032 11.4561 10.8082 11.3499Z"
                  stroke={color} stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path fillRule="evenodd" clipRule="evenodd"
                  d="M6.47492 11.3499C6.58108 11.2437 6.75225 11.2437 6.85842 11.3499C6.96458 11.4561 6.96458 11.6272 6.85842 11.7334C6.75225 11.8396 6.58108 11.8396 6.47492 11.7334C6.36983 11.6272 6.36983 11.4561 6.47492 11.3499Z"
                  stroke={color} stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path fillRule="evenodd" clipRule="evenodd"
                  d="M15.1416 11.3499C15.2477 11.2437 15.4189 11.2437 15.5251 11.3499C15.6312 11.4561 15.6312 11.6272 15.5251 11.7334C15.4189 11.8396 15.2477 11.8396 15.1416 11.7334C15.0365 11.6272 15.0365 11.4561 15.1416 11.3499Z"
                  stroke={color} stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
};

export default MessageIcon;