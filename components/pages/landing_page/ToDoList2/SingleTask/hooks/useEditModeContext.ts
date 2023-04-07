import { useContext } from "react";
import { EditModeContext } from "../context/editModeContext";

export function useEditModeContext() {
    return useContext(EditModeContext);
}
