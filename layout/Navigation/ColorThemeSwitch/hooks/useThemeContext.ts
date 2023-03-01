// Tools
import { useContext } from "react";
import { MUIContext } from "@/material/MuiThemeProvider";

export const useThemeContext = () => useContext(MUIContext);
