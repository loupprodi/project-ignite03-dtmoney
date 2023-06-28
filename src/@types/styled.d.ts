import "styled-components";
import { defaultTheme } from "../styles/theme/default";

type ThemeType = typeof defaultTheme;

declare module "styled-componets" {
  export interface DefaultTheme extends ThemeType {}
}
