import { ColorValue } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";
interface IProps {
  color: ColorValue,
  icon: string,
  size: number,
}
const Hamburger = (props: SvgProps) => (
  <Svg
    width={14}
    height={18}
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13 17V7"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 17V1"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1 17V11"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Hamburger;
