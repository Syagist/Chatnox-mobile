    import React from 'react';
    import Svg, { Path } from 'react-native-svg';


    const HomeIcon = ({ color = "#CACACA" }) => {
        return (
            <Svg width="24" height="24" viewBox="0 0 24 24">
                <Path d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z"
                      fill={color}/>
            </Svg>
        );
    };

    export default HomeIcon;