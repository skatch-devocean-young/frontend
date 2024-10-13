import styled from "styled-components/native";
import { defaultColor } from "../constant/colors";
import { defaultFontSize, defaultFontFamily } from "../constant/fonts";

const Text = styled.Text`
  color: ${defaultColor};
  font-family: ${defaultFontFamily};
  font-size: ${defaultFontSize}px;
  line-height: 22px;
`;
export default Text;
