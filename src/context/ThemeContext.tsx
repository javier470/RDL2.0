import React, { createContext, useMemo, useState, useContext, ReactNode, useEffect, useCallback } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { themeMode } from "../../themeMode";

interface ColorModeContextType {
    toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType>({ toggleColorMode: () => { } });

export const useColorMode = (): ColorModeContextType => useContext(ColorModeContext);

interface ColorModeProviderProps {
    children: ReactNode;
}

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<"light" | "dark">(() => {
        // Leer el modo del localStorage al iniciar la aplicación
        const storedMode = localStorage.getItem("mode");
        return storedMode === "dark" ? "dark" : "light";
    });

    const toggleColorMode = useCallback(() => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    }, []);

    useEffect(() => {
        localStorage.setItem("mode", mode);
        console.log(mode)
    }, [mode]);

    const colorMode = useMemo(() => ({
        toggleColorMode,
    }), [toggleColorMode]);

    const theme = useMemo(() => themeMode(mode), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
