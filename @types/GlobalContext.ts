// Types
import type { Dispatch, SetStateAction } from "react";

export interface Snackbar {
    msg: string;
    severity: "success" | "error" | "warning" | "info";
    hideAfter: number;
    display: boolean;
}

export interface GlobalContext {
    snackbar: Snackbar | null;
    setSnackbar: Dispatch<SetStateAction<Snackbar | null>>;
}
