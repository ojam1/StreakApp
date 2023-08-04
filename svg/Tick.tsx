import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export default () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_1_150)">
      <Path
        d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"
        fill="#F7F7F7"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_150">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
