// Tools
import { createContext } from "react";
import { useState, useCallback } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { SnackbarContext as SnackbarContextInterface, Snackbar } from "@/@types/SnackbarContext";

export const SnackbarContext = createContext<SnackbarContextInterface>({} as any);

interface SnackbarContextProviderProps {
    children: ReactNode;
}

export const SnackbarContextProvider: FunctionComponent<SnackbarContextProviderProps> = (props) => {
    const DEFAULT_HIDE_AFTER: number = 6000;
    const OUTRO_ANIMATION_DURATION: number = 1000;
    const INTRO_ANIMATION_DURATION: number = 800;

    const [snackbars, setSnackbars] = useState<Snackbar[]>([]);

    const closeSnackbar: SnackbarContextInterface["closeSnackbar"] = useCallback((idOfSnackbarToEdit) => {
        const updateSnackbar = (prop: keyof Snackbar, val: Snackbar[typeof prop]) => {
            setSnackbars((snackbars) => {
                return snackbars.map((el) => {
                    if (el._id === idOfSnackbarToEdit) {
                        return {
                            ...el,
                            [prop]: val,
                        };
                    }
                    return el;
                });
            });
        };

        const removeSnackbar = () => {
            setSnackbars((snackbars) => snackbars.filter((el) => el._id !== idOfSnackbarToEdit));
        };

        updateSnackbar("_displayHidingAnimation", true);
        setTimeout(removeSnackbar, OUTRO_ANIMATION_DURATION);
    }, []);

    const addSnackbar: SnackbarContextInterface["addSnackbar"] = useCallback(
        (addSnackbarParams) => {
            const id = Date.now();
            const hideAfter = (addSnackbarParams.hideAfter ?? DEFAULT_HIDE_AFTER) + INTRO_ANIMATION_DURATION;

            const timeout = setTimeout(() => {
                closeSnackbar(id);
            }, hideAfter);

            setSnackbars((currentSnackbars) => {
                return [
                    ...currentSnackbars,
                    {
                        msg: addSnackbarParams.msg,
                        severity: addSnackbarParams.severity,
                        hideAfter,
                        _id: id,
                        _displayHidingAnimation: false,
                        _hidingTimeout: timeout,
                    } as Snackbar,
                ];
            });
        },
        [closeSnackbar]
    );

    return (
        <SnackbarContext.Provider
            value={{
                snackbars,
                addSnackbar,
                closeSnackbar,
            }}
        >
            {props.children}
        </SnackbarContext.Provider>
    );
};
