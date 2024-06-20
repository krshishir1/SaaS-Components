import { createTheme } from "@mui/material";
import { lime, grey } from "@mui/material/colors";


export const primaryColor = {
  "100": "#C8BFFF",
  "200": "#A192FF",
  "300": "#7C67FA",
  "400": "#5F48F0",
  "500": "#5039E2",
  "600": "#230BB8",
  "700": "#150099",
  "800": "#0F006E",
  "900": "#09003D",
};

export const errorColor = {
  '100' : "#FFC7BF",
  '500' : "#E24D39",
  '600' : "#B81F0B",
}

export const warningColor = {
  '100' : "#FFEFBF",
  '300' : "#FAD567",
  '400' : "#F0C648",
}

export const infoColor = {
  '100' : "#BFDFFF",
  '500' : "#398DE2",
  '600' : "#0B61B8",
}

export const successColor = {
  '100' : "#BFFFCF",
  '500' : "#39E263",
  '600' : "#0BB836",
}

export const neutralColor = {
  "100": "#DCDAE5",
  "200": "#C4C4D9",
  "300": "#B1ADCC",
  "400": "#6D6A80",
  "500": "#555266",
  "600": "#413F4D",
  "700": "#2C2B33",
  "800": "#1C1C1F",
  "900": "#0B0A0D",
};

export const typoSize = {
    "h1": "28.38px",
    "h2": "25.23px",
    "h3": "22.43px",
    "h4": "19.93px",
    "h5": "17.72px",
    "h6": "15.75px",
    "base": "14px",
    "small": "12.44px",
    "xs": "11.06px"
}

export default createTheme({
  typography: {
    base: {
      fontSize: typoSize["base"]
    },
    small: {
      fontSize: typoSize["small"]
    },
    h1: {
      fontSize: typoSize["h1"],
      fontWeight: "bold"
    },
    h2: {
      fontSize: typoSize["h2"],
      fontWeight: "bold"
    },
    h3: {
      fontSize: typoSize["h3"],
      fontWeight: "bold"
    },
    h4: {
      fontSize: typoSize["h4"],
    },
    h5: {
      fontSize: typoSize["h5"],
    },
    h6: {
      fontSize: typoSize["h6"],
    }
  },
  palette: {
    primary: {
      lightest: primaryColor['100'],
      lighter: primaryColor['200'],
      light: primaryColor['300'],
      mild: primaryColor['400'],
      main: primaryColor['500'],
      medium: primaryColor['600'],
      dark: primaryColor['700'],
      darker: primaryColor['800'],
      darkest: primaryColor['900']
    },
    info: {
      main: infoColor['500'],
      light: infoColor['100'],
      dark: infoColor['600']
    },
    success: {
      main: successColor['500'],
      light: successColor['100'],
      dark: successColor['600']
    },
    error: {
      main: errorColor['500'],
      light: errorColor['100'],
      dark: errorColor['600']
    },
    warning: {
      main: warningColor['300'],
      light: warningColor['100'],
      dark: warningColor['400']
    },
    neutral: {
      lightest: neutralColor['100'],
      lighter: neutralColor['200'],
      light: neutralColor['300'],
      mild: neutralColor['400'],
      main: neutralColor['500'],
      medium: neutralColor['600'],
      dark: neutralColor['700'],
      darker: neutralColor['800'],
      darkest: neutralColor['900']
    }
    text: {
      main: lime[50],
      mild: grey[200],
      dark: neutralColor['900'] 
    }
  }
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    base: React.CSSProperties;
    small: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    base?: React.CSSProperties;
    small?: React.CSSProperties
  }

  interface PaletteColor {
    lighter ?:  String;
    lightest ?: String;
    mild ?: String;
    medium ?: String;
    darker ?: String;
    darkest ?: String;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    base: true;
    small: true;
  }
}