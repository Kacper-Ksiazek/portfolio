import { useContext } from "react";
import { editModeContext } from "../context/editModeContext";

export function useEditModeContext() {
    return useContext(editModeContext);
}
