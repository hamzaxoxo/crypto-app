import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const MaximizeIcon = (props: SvgProps) => (
    <Svg
        fill="#fff"
        viewBox="0 0 24 24"
        id="maximize"
        data-name="Flat Line"
        {...props}
    >
        <Path
            id="primary"
            d="M10,14,3.29,20.71M20.71,3.29,14,10"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        />
        <Path
            id="primary-2"
            data-name="primary"
            d="M14,3h6a1,1,0,0,1,1,1v6"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        />
        <Path
            id="primary-3"
            data-name="primary"
            d="M3,14v6a1,1,0,0,0,1,1h6"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        />
    </Svg>
);
export default MaximizeIcon;
