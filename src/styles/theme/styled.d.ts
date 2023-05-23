import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      light: string;
      dark: string;
    };

    fonts: {
      primary: string;
    };

    fontSizes: {
      medium: string;
    };

    spacing: {
      medium: string;
    };
  }
}

export default DefaultTheme;
