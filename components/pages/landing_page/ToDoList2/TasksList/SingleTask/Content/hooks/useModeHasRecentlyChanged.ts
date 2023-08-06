// Tools
import { useState, useEffect } from "react";

export function useModeHasRecentlyChanged(modeIsChanging: boolean, applyMobileEditMode: boolean): boolean {
    const [modeHasRecentlyChanged, setModeHasRecentlyChanged] = useState<boolean>(false);

    useEffect(() => {
        if (applyMobileEditMode) return;

        setModeHasRecentlyChanged(true);

        const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
            setModeHasRecentlyChanged(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [modeIsChanging, applyMobileEditMode]);

    return modeHasRecentlyChanged;
}
