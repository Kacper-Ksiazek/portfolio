// Tools
import { useEffect, useState } from "react";
// Types
import type { Status } from "./useMobileMenuHandlers";

const OUTRO_ANIMATION_DURATION = 700;

export function useKeepContrastFontColor(mobileMenuStatus: Status): boolean {
    const [keepContrastFontColor, setKeepContrastFontColor] = useState<boolean>(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        if (mobileMenuStatus === "closed") {
            setKeepContrastFontColor(true);
            timeout = setTimeout(() => {
                setKeepContrastFontColor(false);
            }, OUTRO_ANIMATION_DURATION);
        }

        return () => {
            if (timeout !== null) clearTimeout(timeout);
        };
    }, [mobileMenuStatus]);

    return keepContrastFontColor;
}
