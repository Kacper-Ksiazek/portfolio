// Tools
import { useContext } from "react";
import { SnackbarContext } from "@/layout/global/SnackbarContext";
// Types
import type { AddSnackbarParams } from "@/@types/SnackbarContext";

interface UseSnackbarResult {
    displaySnackbar: (params: AddSnackbarParams) => void;
}

export const useSnackbar = (): UseSnackbarResult => {
    const context = useContext(SnackbarContext);

    return {
        displaySnackbar: context.addSnackbar,
    };
};
