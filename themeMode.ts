/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme } from "@mui/material";

const getDesignTokens = (mode: any) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          primary: {
            main: "#2196F3",
            dark: "#1E88E5",
            light: "#EEF2F6",
            200: "#90CAF9",
            800: "#1565C0",
          },
          secondary: {
            main: "#FF6F00",
            dark: "#E65100",
            light: "#FFCC80",
            200: "#FFAB40",
            800: "#FF8F00",
          },
          success: {
            main: "#00E676",
            dark: "#00C853",
            light: "#B9F6CA",
            200: "#69F0AE",
          },
          error: {
            main: "#F44336",
            dark: "#C62828",
            light: "#EF9A9A",
          },
          warning: {
            main: "#FFE57F",
            dark: "#FFC107",
            light: "#FFF8E1",
          },
          info: {
            main: "#D1C4E9", // purple 9575CD
            dark: "#512DA8", // dark purple
            light: "#9575CD", // light purple
          },
          grey: {
            50: "#FFFFFF",
            100: "#EEF2F6",
            200: "#EEEEEE",
            300: "#E0E0E0",
            500: "#697586",
            600: "#121926",
            700: "#364152",
            900: "#121926",
          },
          background: {
            default: "#EEF2F6",
            paper: "#FFFFFF",
            card: '#FFFFFF'

          },
          }
        : {
          primary: {
            main: "#90CAF9", // light blue
            dark: "#1A237E", // dark blue
            light: "#E3F2FD", // very light blue
            200: "#64B5F6",
            800: "#0D47A1",
          },
          secondary: {
            main: "#FF8F00", // orange
            dark: "#E65100", // dark orange
            light: "#FFE57F", // light orange
            200: "#FFAB40",
            800: "#FF6F00",
          },
          success: {
            main: "#00E676",
            dark: "#00C853",
            light: "#B9F6CA",
            200: "#69F0AE",
          },
          error: {
            main: "#E57373",
            dark: "#D32F2F",
            light: "#FFCDD2",
          },
          warning: {
            main: "#FFB74D",
            dark: "#F57C00",
            light: "#FFE0B2",
          },
          info: {
            main: "#9575CD", // purple
            dark: "#512DA8", // dark purple
            light: "#D1C4E9", // light purple
          },
          grey: {
            50: "#1D1D1D",
            100: "#242424",
            200: "#333333",
            300: "#4F4F4F",
            500: "#B0B0B0",
            600: "#8B8B8B",
            700: "#707070",
            900: "#FFFFFF",
          },
          background: {
            default: "#121212",
            paper: "#1D1D1D",
            card: '#292929'
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#B0B0B0",
          },
          }),
    },
  });
  
  export const themeMode = (mode: any) => createTheme(getDesignTokens(mode));