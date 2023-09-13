// Tools
import { useContext } from "react";
import { labelsUpdatersContext } from "../context/LabelsContext/Updaters";

export function useLabelsUpdatersContext() {
    return useContext(labelsUpdatersContext);
}
