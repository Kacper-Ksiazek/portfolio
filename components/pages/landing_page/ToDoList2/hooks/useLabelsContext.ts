// Tools
import { useContext } from "react";
import { labelsContext } from "../context/LabelsContext";

export function useLabelsContext() {
    return useContext(labelsContext);
}
