// Tools
import { useCallback } from "react";
import { useSnackbar } from "./useSnackbar";

type Callback<T> = (args: T) => void;

/**
 * Functions takes 3 arguments:
 * 1. callback
 * 2. message to be displayed **on success**
 * 3. message to be displayed on failure
 */
export function useSafeSnackbarCallback<T>(callback: Callback<T>, msgOnSuccess: string, msgOnFailure: string = "Something went wrong"): Callback<T> {
    const { displaySnackbar } = useSnackbar();

    return useCallback(
        (args: T) => {
            try {
                callback(args);

                setTimeout(() => {
                    displaySnackbar({
                        msg: msgOnSuccess,
                        severity: "success",
                    });
                }, 240);
            } catch (e) {
                console.error(e);
                displaySnackbar({
                    msg: msgOnFailure,
                    severity: "error",
                });
            }
        },
        [callback, displaySnackbar, msgOnFailure, msgOnSuccess]
    );
}
