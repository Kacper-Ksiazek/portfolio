export interface Snackbar {
    msg: string;
    severity: "success" | "error" | "warning" | "info";
    hideAfter: number;
    /** `Date.now()` assigned while adding a snackbar*/
    _id: number;
    /** Returned value from `setTimeout` function */
    _hidingTimeout: ReturnType<typeof setTimeout>;
    /** Initialize snackbar's hiding animation */
    _displayHidingAnimation: boolean;
}

export interface AddSnackbarParams {
    msg: string;
    severity: "success" | "error" | "warning" | "info";
    hideAfter?: number;
}

export interface SnackbarContext {
    snackbars: Snackbar[];
    addSnackbar: (snackbar: AddSnackbarParams) => void;
    /** Close snackbar with certain id */
    closeSnackbar: (id: number) => void;
}
