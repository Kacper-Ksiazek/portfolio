// Tools
import { SnackbarContext } from "@/layout/SnackbarContext";
import { useCallback, useState, useEffect, useContext } from "react";
// Types
import type { Snackbar } from "@/@types/SnackbarContext";

interface DisplaySnackbarParams extends Omit<Snackbar, "display" | "hideAfter"> {
    hideAfter?: number;
}
interface UseSnackbarResult {}

export const useSnackbar = (): UseSnackbarResult => {
    //
};
