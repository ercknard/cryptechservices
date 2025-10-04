import { PaletteMode, PaletteOptions, createTheme } from "@mui/material";
import localFont from "next/font/local";

const vetregMono = localFont({
  src: "../fonts/Ubuntu_Sans/UbuntuSans-VariableFont_wdth,wght.ttf",
  variable: "--font-test-mono",
  weight: "100 900",
});
const ka1Mono = localFont({
  src: "../fonts/Sora/Sora-VariableFont_wght.ttf",
  variable: "--font-ka1-mono",
  weight: "100 900",
});
const ka1MonoTitle = localFont({
  src: "../fonts/Ethnocentric Rg.otf",
  variable: "--font-ka1-monotitle",
  weight: "100 900",
});

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    pageTitle: true;
    sectionTitle: true;
    title: true;
    display1: true;
    highlight: true;
    highlightMuted: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      mainColor: string;
      //colored
      primaryBackground: string;
      secondaryBackground: string;
      primaryComponents: string;
      secondaryComponents: string;
      tertiaryComponents: string;
      primaryBorders: string;
      secondaryBorders: string;
      tertiaryBorders: string;
      primarySolidColors: string;
      secondarySolidColors: string;
      primaryText: string;
      secondaryText: string;
      //gray
      primaryBackgroundGrayed: string;
      secondaryBackgroundGrayed: string;
      primaryComponentsGrayed: string;
      secondaryComponentsGrayed: string;
      tertiaryComponentsGrayed: string;
      primaryBordersGrayed: string;
      secondaryBordersGrayed: string;
      tertiaryBordersGrayed: string;
      primarySolidColorsGrayed: string;
      secondarySolidColorsGrayed: string;
      primaryTextGrayed: string;
      secondaryTextGrayed: string;
    };
    gradients: {
      brand: string;
      brandInverted: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      mainColor?: string;
      primaryBackground?: string;
      secondaryBackground?: string;
      primaryComponents?: string;
      secondaryComponents?: string;
      tertiaryComponents?: string;
      primaryBorders?: string;
      secondaryBorders?: string;
      tertiaryBorders?: string;
      primarySolidColors?: string;
      secondarySolidColors?: string;
      primaryText?: string;
      secondaryText?: string;
      primaryBackgroundGrayed?: string;
      secondaryBackgroundGrayed?: string;
      primaryComponentsGrayed?: string;
      secondaryComponentsGrayed?: string;
      tertiaryComponentsGrayed?: string;
      primaryBordersGrayed?: string;
      secondaryBordersGrayed?: string;
      tertiaryBordersGrayed?: string;
      primarySolidColorsGrayed?: string;
      secondarySolidColorsGrayed?: string;
      primaryTextGrayed?: string;
      secondaryTextGrayed?: string;
    };
    gradients?: {
      brand?: string;
      brandInverted?: string;
    };
  }
}

// const FONT = vetregMono.style.fontFamily;
const SECONDARY_FONT = ka1MonoTitle.style.fontFamily;
const FONT = vetregMono.style.fontFamily;

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1440,
    xxl: 1920,
  },
};

const colorPalette = (mode: PaletteMode, setId: number) => {
  const getColor = (darkColor: string, lightColor: string) => {
    return mode === "light" ? darkColor : lightColor;
  };

  const colorSets = {
    set1: {
      //blue
      mainColor: getColor("#6169cf", "#6169cf"),
      //colored
      primaryBackground: getColor("#fdfdff", "#0f111b"),
      secondaryBackground: getColor("#f7f9fe", "#141624"),
      primaryComponents: getColor("#eff2fd", "#202345"),
      secondaryComponents: getColor("#e4e8fe", "#282c5f"),
      tertiaryComponents: getColor("#d7ddfe", "#31356f"),
      primaryBorders: getColor("#c8d0fa", "#3b407c"),
      secondaryBorders: getColor("#b3bcf1", "#464d8f"),
      tertiaryBorders: getColor("#97a2e6", "#545caa"),
      primarySolidColors: getColor("#6169cf", "#6169cf"),
      secondarySolidColors: getColor("#565dbb", "#5860af"),
      primaryText: getColor("#535ab7", "#a3afff"),
      secondaryText: getColor("#282b5b", "#dce1fc"),
      //gray
      primaryBackgroundGrayed: getColor("#fcfcfc", "#121212"),
      secondaryBackgroundGrayed: getColor("#f9f9f9", "#191919"),
      primaryComponentsGrayed: getColor("#efefef", "#232323"),
      secondaryComponentsGrayed: getColor("#e8e8e8", "#2a2a2a"),
      tertiaryComponentsGrayed: getColor("#e0e0e0", "#313131"),
      primaryBordersGrayed: getColor("#d8d8d8", "#3a3a3a"),
      secondaryBordersGrayed: getColor("#cecece", "#484848"),
      tertiaryBordersGrayed: getColor("#bbbbbb", "#606060"),
      primarySolidColorsGrayed: getColor("#8d8d8d", "#6e6e6e"),
      secondarySolidColorsGrayed: getColor("#838383", "#7c7c7c"),
      primaryTextGrayed: getColor("#646464", "#b4b4b4"),
      secondaryTextGrayed: getColor("#202020", "#eeeeee"),
    },
    set2: {
      //green
      mainColor: getColor("#456545", "#456545"),
      //colored
      primaryBackground: getColor("#fbfdfb", "#0f130f"),
      secondaryBackground: getColor("#f6fbf6", "#151a15"),
      primaryComponents: getColor("#e9f5e9", "#1e291e"),
      secondaryComponents: getColor("#ddeedd", "#263826"),
      tertiaryComponents: getColor("#d1e7d1", "#2f452f"),
      primaryBorders: getColor("#c4dec3", "#395439"),
      secondaryBorders: getColor("#b3d1b2", "#436344"),
      tertiaryBorders: getColor("#99be98", "#4f754f"),
      primarySolidColors: getColor("#456545", "#456545"),
      secondarySolidColors: getColor("#375637", "#3a553a"),
      primaryText: getColor("#4e6e4e", "#a3cda2"),
      secondaryText: getColor("#1f2f1f", "#cdf0cd"),
      //gray
      primaryBackgroundGrayed: getColor("#fcfcfc", "#121212"),
      secondaryBackgroundGrayed: getColor("#f9f9f9", "#191919"),
      primaryComponentsGrayed: getColor("#efefef", "#232323"),
      secondaryComponentsGrayed: getColor("#e8e8e8", "#2a2a2a"),
      tertiaryComponentsGrayed: getColor("#e0e0e0", "#313131"),
      primaryBordersGrayed: getColor("#d8d8d8", "#3a3a3a"),
      secondaryBordersGrayed: getColor("#cecece", "#484848"),
      tertiaryBordersGrayed: getColor("#bbbbbb", "#606060"),
      primarySolidColorsGrayed: getColor("#8d8d8d", "#6e6e6e"),
      secondarySolidColorsGrayed: getColor("#838383", "#7c7c7c"),
      primaryTextGrayed: getColor("#646464", "#b4b4b4"),
      secondaryTextGrayed: getColor("#202020", "#eeeeee"),
    },
    set3: {
      //yellow
      mainColor: getColor("#868645", "#868645"),
      //colored
      primaryBackground: getColor("#fdfdfb", "#12120d"),
      secondaryBackground: getColor("#fafaf3", "#191912"),
      primaryComponents: getColor("#f2f3db", "#242411"),
      secondaryComponents: getColor("#eaebc5", "#2d2d0e"),
      tertiaryComponents: getColor("#e0e1b0", "#38370e"),
      primaryBorders: getColor("#d4d59a", "#444417"),
      secondaryBorders: getColor("#c4c580", "#565523"),
      tertiaryBorders: getColor("#afaf58", "#6d6d2b"),
      primarySolidColors: getColor("#868645", "#868645"),
      secondarySolidColors: getColor("#797938", "#797938"),
      primaryText: getColor("#6f6f2d", "#d0d18e"),
      secondaryText: getColor("#3a3a21", "#eaebba"),
      //gray
      primaryBackgroundGrayed: getColor("#fcfcfc", "#121212"),
      secondaryBackgroundGrayed: getColor("#f9f9f9", "#191919"),
      primaryComponentsGrayed: getColor("#efefef", "#232323"),
      secondaryComponentsGrayed: getColor("#e8e8e8", "#2a2a2a"),
      tertiaryComponentsGrayed: getColor("#e0e0e0", "#313131"),
      primaryBordersGrayed: getColor("#d8d8d8", "#3a3a3a"),
      secondaryBordersGrayed: getColor("#cecece", "#484848"),
      tertiaryBordersGrayed: getColor("#bbbbbb", "#606060"),
      primarySolidColorsGrayed: getColor("#8d8d8d", "#6e6e6e"),
      secondarySolidColorsGrayed: getColor("#838383", "#7c7c7c"),
      primaryTextGrayed: getColor("#646464", "#b4b4b4"),
      secondaryTextGrayed: getColor("#202020", "#eeeeee"),
    },
    set4: {
      //orange
      mainColor: getColor("#a16c4f", "#a16c4f"),
      //colored
      primaryBackground: getColor("#fefdfc", "#15110f"),
      secondaryBackground: getColor("#fef8f6", "#1d1714"),
      primaryComponents: getColor("#faede7", "#2e1f17"),
      secondaryComponents: getColor("#f6e3d8", "#3e2416"),
      tertiaryComponents: getColor("#f2d7c9", "#4c2c1b"),
      primaryBorders: getColor("#eccab9", "#5b3825"),
      secondaryBorders: getColor("#e3b8a2", "#704832"),
      tertiaryBorders: getColor("#d69f81", "#905c3f"),
      primarySolidColors: getColor("#a16c4f", "#a16c4f"),
      secondarySolidColors: getColor("#8d624b", "#935f43"),
      primaryText: getColor("#875c45", "#e8af90"),
      secondaryText: getColor("#3f332d", "#fddece"),
      //gray
      primaryBackgroundGrayed: getColor("#fcfcfc", "#121212"),
      secondaryBackgroundGrayed: getColor("#f9f9f9", "#191919"),
      primaryComponentsGrayed: getColor("#efefef", "#232323"),
      secondaryComponentsGrayed: getColor("#e8e8e8", "#2a2a2a"),
      tertiaryComponentsGrayed: getColor("#e0e0e0", "#313131"),
      primaryBordersGrayed: getColor("#d8d8d8", "#3a3a3a"),
      secondaryBordersGrayed: getColor("#cecece", "#484848"),
      tertiaryBordersGrayed: getColor("#bbbbbb", "#606060"),
      primarySolidColorsGrayed: getColor("#8d8d8d", "#6e6e6e"),
      secondarySolidColorsGrayed: getColor("#838383", "#7c7c7c"),
      primaryTextGrayed: getColor("#646464", "#b4b4b4"),
      secondaryTextGrayed: getColor("#202020", "#eeeeee"),
    },
    set5: {
      //pink
      mainColor: getColor("#b770ad", "#b770ad"),
      //colored
      primaryBackground: getColor("#fefcfe", "#151014"),
      secondaryBackground: getColor("#fcf8fb", "#1d141c"),
      primaryComponents: getColor("#f8ecf5", "#301d2e"),
      secondaryComponents: getColor("#f2e1ef", "#40233c"),
      tertiaryComponents: getColor("#ebd5e7", "#4b2b47"),
      primaryBorders: getColor("#e2c7dd", "#593754"),
      secondaryBorders: getColor("#d6b4d0", "#6f4869"),
      tertiaryBorders: getColor("#c89dc0", "#8d5d86"),
      primarySolidColors: getColor("#b770ad", "#b770ad"),
      secondarySolidColors: getColor("#a965a0", "#aa64a0"),
      primaryText: getColor("#94538b", "#e1a1d7"),
      secondaryText: getColor("#4f284a", "#efd8eb"),
      //gray
      primaryBackgroundGrayed: getColor("#fcfcfc", "#121212"),
      secondaryBackgroundGrayed: getColor("#f9f9f9", "#191919"),
      primaryComponentsGrayed: getColor("#efefef", "#232323"),
      secondaryComponentsGrayed: getColor("#e8e8e8", "#2a2a2a"),
      tertiaryComponentsGrayed: getColor("#e0e0e0", "#313131"),
      primaryBordersGrayed: getColor("#d8d8d8", "#3a3a3a"),
      secondaryBordersGrayed: getColor("#cecece", "#484848"),
      tertiaryBordersGrayed: getColor("#bbbbbb", "#606060"),
      primarySolidColorsGrayed: getColor("#8d8d8d", "#6e6e6e"),
      secondarySolidColorsGrayed: getColor("#838383", "#7c7c7c"),
      primaryTextGrayed: getColor("#646464", "#b4b4b4"),
      secondaryTextGrayed: getColor("#202020", "#eeeeee"),
    },
    set6: {
      //monochrome
      mainColor: getColor("#b4b4b4", "#b4b4b4"),
      //colored
      primaryBackground: getColor("#121212", "#121212"),
      secondaryBackground: getColor("#171717", "#171717"),
      primaryComponents: getColor("#1f1f1f", "#1f1f1f"),
      secondaryComponents: getColor("#282828", "#282828"),
      tertiaryComponents: getColor("#303030", "#303030"),
      primaryBorders: getColor("#3a3a3a", "#3a3a3a"),
      secondaryBorders: getColor("#484848", "#484848"),
      tertiaryBorders: getColor("#5f5f5f", "#5f5f5f"),
      primarySolidColors: getColor("#eeeeee", "#eeeeee"),
      secondarySolidColors: getColor("#e5e5e5", "#e5e5e5"),
      primaryText: getColor("#ffffff", "#ffffff"),
      secondaryText: getColor("#cccccc", "#cccccc"),
      //gray
      primaryBackgroundGrayed: getColor("#121212", "#121212"),
      secondaryBackgroundGrayed: getColor("#191919", "#191919"),
      primaryComponentsGrayed: getColor("#232323", "#232323"),
      secondaryComponentsGrayed: getColor("#2a2a2a", "#2a2a2a"),
      tertiaryComponentsGrayed: getColor("#313131", "#313131"),
      primaryBordersGrayed: getColor("#3a3a3a", "#3a3a3a"),
      secondaryBordersGrayed: getColor("#c484848", "#484848"),
      tertiaryBordersGrayed: getColor("#606060", "#606060"),
      primarySolidColorsGrayed: getColor("#6e6e6e", "#6e6e6e"),
      secondarySolidColorsGrayed: getColor("#7c7c7c", "#7c7c7c"),
      primaryTextGrayed: getColor("#b4b4b4", "#b4b4b4"),
      secondaryTextGrayed: getColor("#cccccc", "#cccccc"),
    },
  };

  // Assert the key as one of the valid keys
  const selectedSet = colorSets[`set${setId}` as keyof typeof colorSets];

  return {
    palette: {
      mode,
      text: {
        primary: selectedSet.secondaryTextGrayed,
        secondary: selectedSet.secondaryTextGrayed,
      },
      primary: {
        main: selectedSet.mainColor,
      },
      secondary: {
        main: selectedSet.mainColor,
      },
      success: {
        main: selectedSet.mainColor,
      },
      info: {
        main: selectedSet.mainColor,
      },
      warning: {
        main: selectedSet.mainColor,
      },
      error: {
        main: selectedSet.mainColor,
      },
      gradients: {
        brand: `linear-gradient(to right, #0FCAD5, ${selectedSet.mainColor})`,
        brandInverted: `linear-gradient(to right, ${selectedSet.mainColor}, #0FCAD5)`,
      },
      background: {
        default: getColor(
          `${selectedSet.secondaryBackground}`,
          `${selectedSet.secondaryBackground}`
        ),
        paper: getColor(
          `${selectedSet.primaryBackground}`,
          `${selectedSet.primaryBackground}`
        ),
      },
      custom: {
        mainColor: selectedSet.mainColor,
        //colored
        primaryBackground: selectedSet.primaryBackground,
        secondaryBackground: selectedSet.secondaryBackground,
        primaryComponents: selectedSet.primaryComponents,
        secondaryComponents: selectedSet.secondaryComponents,
        tertiaryComponents: selectedSet.tertiaryComponents,
        primaryBorders: selectedSet.primaryBorders,
        secondaryBorders: selectedSet.secondaryBorders,
        tertiaryBorders: selectedSet.tertiaryBorders,
        primarySolidColors: selectedSet.primarySolidColors,
        secondarySolidColors: selectedSet.secondarySolidColors,
        primaryText: selectedSet.primaryText,
        secondaryText: selectedSet.secondaryText,
        //gray
        primaryBackgroundGrayed: selectedSet.primaryBackgroundGrayed,
        secondaryBackgroundGrayed: selectedSet.secondaryBackgroundGrayed,
        primaryComponentsGrayed: selectedSet.primaryComponentsGrayed,
        secondaryComponentsGrayed: selectedSet.secondaryComponentsGrayed,
        tertiaryComponentsGrayed: selectedSet.tertiaryComponentsGrayed,
        primaryBordersGrayed: selectedSet.primaryBordersGrayed,
        secondaryBordersGrayed: selectedSet.secondaryBordersGrayed,
        tertiaryBordersGrayed: selectedSet.tertiaryBordersGrayed,
        primarySolidColorsGrayed: selectedSet.primarySolidColorsGrayed,
        secondarySolidColorsGrayed: selectedSet.secondarySolidColorsGrayed,
        primaryTextGrayed: selectedSet.primaryTextGrayed,
        secondaryTextGrayed: selectedSet.secondaryTextGrayed,
      },
      divider: getColor("#ebebef14", "#cccccc"),
    },
  };
};

// Define your theme options
const typographyOptions = (palette: PaletteOptions) => {
  return {
    fontFamily: FONT,
    fontSize: 12,
    htmlFontSize: 16,
    title: {
      fontWeight: 500,
      color: palette.text?.primary,
      fontFamily: SECONDARY_FONT,
    },
    // h1: {
    //   fontFamily: FONT,
    //   // [breakpoints.values.sm]: { fontSize: "2.5rem" },
    //   // [breakpoints.values.xs]: { fontSize: "2rem" },
    // },
    // h2: {
    //   fontFamily: FONT,
    // },
    // h3: {
    //   fontFamily: FONT,
    // },
    // h4: {
    //   fontFamily: FONT,
    // },
    // h5: {
    //   fontFamily: FONT,
    // },
    // h6: {
    //   fontFamily: FONT,
    // },
    // body1: {
    //   fontSize: "2rem",
    //   fontWeight: 400,
    //   color: palette.text?.primary,
    // },
    // display1: {
    //   fontSize: "2.5rem",
    //   fontWeight: 600,
    //   color: palette.text?.primary,
    // },
    // caption: {
    //   fontSize: "1.5rem",
    //   color: palette.text?.secondary,
    // },
    // pageTitle: {
    //   fontSize: "5rem",
    //   fontWeight: 500,
    //   color: palette.text?.primary,
    // },
    // sectionTitle: {
    //   fontSize: "3.5rem",
    //   fontWeight: 600,
    //   color: palette.text?.primary,
    // },
    // title: {
    //   fontSize: "3rem",
    //   fontWeight: 500,
    //   color: palette.text?.primary,
    // },
    // h6: {
    //   fontSize: "1.5rem",
    //   fontWeight: 600,
    //   color: palette.text?.primary,
    // },
    // highlight: {
    //   fontSize: "1.85rem",
    //   fontWeight: 600,
    //   color: palette.text?.primary,
    //   lineHeight: 1.2,
    // },
    // highlightMuted: {
    //   fontSize: "1.75rem",
    //   fontWeight: 500,
    //   color: palette.text?.secondary,
    //   lineHeight: 1.2,
    // },
    // h1: undefined,
    // h2: undefined,
    // h3: undefined,
    // h4: undefined,
    // h5: undefined,
    // subtitle1: undefined,
    // subtitle2: undefined,
    // body2: undefined,
    // overline: undefined,
  };
};

const customComponents = (palette: PaletteOptions) => {
  return {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
            },
            "&::-webkit-scrollbar-track": {
              background: palette.custom?.secondaryBackground,
            },
            "&::-webkit-scrollbar-thumb": {
              background: palette.custom?.secondarySolidColors,
              borderRadius: "6px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: palette.custom?.mainColor,
            },
          },
          "*": {
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
            },
            "&::-webkit-scrollbar-track": {
              background: palette.custom?.secondaryBackground,
            },
            "&::-webkit-scrollbar-thumb": {
              background: palette.custom?.secondarySolidColors,
              borderRadius: "6px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: palette.custom?.mainColor,
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: palette.background?.paper,
            borderRadius: 20,
            backgroundImage: "none",
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontFamily: "Roboto, sans-serif", // Change font for all TextField components
            color: "#ffffff",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontFamily: "Roboto, sans-serif", // Change font for all TextField components
            color: "#ffffff",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: palette.background?.paper,
            backgroundImage: "none",
          },
        },
      },
    },
  };
};

export const scTheme = (mode: PaletteMode, setId: number) => {
  const customPalette = colorPalette(mode, setId);

  const theme = createTheme({
    direction: "ltr",
    breakpoints: breakpoints,
    typography: typographyOptions(customPalette.palette),
    ...customPalette,
    ...customComponents(customPalette.palette),
  });

  return theme;
};
