// Tools
import { useCallback, useState, useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
// Types
import type { Snackbar } from "@/@types/GlobalContext";

interface DisplaySnackbarParams extends Omit<Snackbar, "display" | "hideAfter"> {
    hideAfter?: number;
}
interface UseSnackbarResult {
    snackbar: Snackbar | null;
    isSnackbarOpened: boolean;

    displaySnackbar: (params: DisplaySnackbarParams) => void;
    closeSnackbar: (shouldClearTimeout: boolean) => void;
}

export const useSnackbar = (): UseSnackbarResult => {
    const HIDE_SNACKBAR_AFTER: number = 6000;
    const OUTRO_ANIMATION_DURATION: number = 300;

    const globalContext = useGlobalContext();

    const [isSnackbarOpened, setIsSnackbarOpened] = useState<boolean>(false);
    const [hidingSnackbarTimeout, setHidingSnackbarTimeout] = useState<number | null>(null);

    const closeSnackbar: UseSnackbarResult["closeSnackbar"] = useCallback(
        (shouldClearTimeout) => {
            setIsSnackbarOpened(false);
            if (hidingSnackbarTimeout !== null && shouldClearTimeout) clearTimeout(hidingSnackbarTimeout);
            setTimeout(() => {
                globalContext.setSnackbar(null);
                setHidingSnackbarTimeout(null);
            }, OUTRO_ANIMATION_DURATION);
        },
        [globalContext, hidingSnackbarTimeout]
    );

    const displaySnackbar: UseSnackbarResult["displaySnackbar"] = useCallback(
        (params) => {
            const _updateGlobalState = () => {
                globalContext.setSnackbar({
                    display: true,
                    msg: params.msg,
                    severity: params.severity,
                    hideAfter: params.hideAfter ?? HIDE_SNACKBAR_AFTER,
                });
            };
            if (globalContext.snackbar === null) return _updateGlobalState();
            //
            else if (globalContext.snackbar !== null && isSnackbarOpened) {
                closeSnackbar(true);
                setTimeout(() => {
                    _updateGlobalState();
                }, OUTRO_ANIMATION_DURATION + 50);
            }
            //
            else if (globalContext.snackbar !== null && !isSnackbarOpened && hidingSnackbarTimeout !== null) {
                setTimeout(() => {
                    _updateGlobalState();
                }, OUTRO_ANIMATION_DURATION + 50);
            }
        },
        [globalContext, isSnackbarOpened, closeSnackbar, hidingSnackbarTimeout]
    );

    useEffect(() => {
        if (globalContext.snackbar !== null && hidingSnackbarTimeout === null) {
            setIsSnackbarOpened(true);

            setHidingSnackbarTimeout(
                setTimeout(() => closeSnackbar(true), globalContext.snackbar.hideAfter) as any //
            );
        }
    }, [closeSnackbar, globalContext.snackbar, hidingSnackbarTimeout]);

    return {
        snackbar: globalContext.snackbar, //
        isSnackbarOpened,
        displaySnackbar,
        closeSnackbar,
    };
};
