import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../../context/ThemeContext";
import { Tooltip, useTheme } from "@mui/material";

const ThemeToggleButton: React.FC = () => {
    const { toggleColorMode } = useColorMode();
    const theme = useTheme();

    return (
        <Tooltip title={theme.palette.mode === "dark" ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}>

            <IconButton onClick={toggleColorMode} style={{ color: "#fff" }}>
                {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggleButton;
