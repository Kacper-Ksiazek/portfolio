// Tools
import { useEffect, useRef } from "react";
// Types
import type { MutableRefObject } from "react";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";

interface UseRectengularAnimationsResult {
    RectangleOneRef: MutableRefObject<HTMLElement | null>;
    RectangleTwoRef: MutableRefObject<HTMLElement | null>;
}

type Index = 1 | 2;

export function useRectengularAnimations(currentIceBreakingStage: IceBreakingStage): UseRectengularAnimationsResult {
    const RectangleOneRef = useRef<HTMLSpanElement | null>(null);
    const RectangleTwoRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const index: Index = (["General", "Education"] as IceBreakingStage[]).includes(currentIceBreakingStage) ? 1 : 2;

        RectangleOneRef.current?.classList.add(`intro-${index}`);
        RectangleOneRef.current?.classList.remove("outro-1");
        RectangleOneRef.current?.classList.remove("outro-2");

        RectangleTwoRef.current?.classList.add(`intro-${index}`);
        RectangleTwoRef.current?.classList.remove("outro-1");
        RectangleTwoRef.current?.classList.remove("outro-2");

        setTimeout(() => {
            RectangleOneRef.current?.classList.remove(`intro-${index}`);
            RectangleOneRef.current?.classList.add(`outro-${index}`);

            RectangleTwoRef.current?.classList.remove(`intro-${index}`);
            RectangleTwoRef.current?.classList.add(`outro-${index}`);
        }, 1000);
    }, [currentIceBreakingStage]);

    return {
        RectangleOneRef,
        RectangleTwoRef,
    };
}
