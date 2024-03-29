import React from 'react';
import Svg, {Path} from "react-native-svg";

const DeleteIcon = ({color = "#CACACA"}) => {
    return (
        <Svg  viewBox="0 0 18 20" fill="none">
            <Path
                d="M15.4167 7.25065L14.7604 15.7819C14.6135 17.6922 13.0205 19.1673 11.1046 19.1673H6.89545C4.97948 19.1673 3.38653 17.6922 3.23958 15.7819L2.58333 7.25065M17.25 5.41732C14.8686 4.2568 12.0375 3.58398 9 3.58398C5.96249 3.58398 3.13142 4.2568 0.75 5.41732M7.16667 3.58398V2.66732C7.16667 1.6548 7.98748 0.833984 9 0.833984C10.0125 0.833984 10.8333 1.6548 10.8333 2.66732V3.58398M7.16667 9.08398V14.584M10.8333 9.08398V14.584"
                stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        </Svg>

    );
};

export default DeleteIcon;