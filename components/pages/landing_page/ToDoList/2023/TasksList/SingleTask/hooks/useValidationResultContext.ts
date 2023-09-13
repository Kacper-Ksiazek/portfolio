// Tools
import { useContext } from "react";
import { validationResultContext } from "../context/validationResultContext";

export function useValidationResultContext() {
    return useContext(validationResultContext);
}
