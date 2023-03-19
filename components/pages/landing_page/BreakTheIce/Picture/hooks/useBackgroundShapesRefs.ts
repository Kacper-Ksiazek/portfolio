// Tools
import { useEffect, useRef, useMemo } from "react";
// Types
import type { RefObject } from "react";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
import type { ID } from "../styled_components/BackgroundRectrangle/keyframes/@types";

type UseBackgroundShapesRefsResult = Record<ID, RefObject<HTMLSpanElement | null>>;

export function useBackgroundShapesRefs(currentIceBreakingStage: IceBreakingStage): UseBackgroundShapesRefsResult {
    const LEFT_HORIZONTAL = useRef<HTMLSpanElement | null>(null);
    const LEFT_VERTICAL = useRef<HTMLSpanElement | null>(null);
    const RIGHT_HORIZONTAL = useRef<HTMLSpanElement | null>(null);
    const RIGHT_VERTICAL = useRef<HTMLSpanElement | null>(null);

    const AllRefs = useMemo<RefObject<HTMLSpanElement | null>[]>(() => {
        return [LEFT_HORIZONTAL, LEFT_VERTICAL, RIGHT_HORIZONTAL, RIGHT_VERTICAL];
    }, []);

    useEffect(() => {
        AllRefs.forEach((el) => {
            if (el.current) {
                el.current.classList.remove("outro");
                el.current.classList.add("intro");
            }
        });

        setTimeout(() => {
            AllRefs.forEach((el) => {
                if (el.current) {
                    el.current.classList.remove("intro");
                    el.current.classList.add("outro");
                }
            });
            setTimeout(() => {
                AllRefs.forEach((el) => {
                    if (el.current) {
                        el.current.classList.remove("outro");
                    }
                });
            }, 1200);
        }, 1200);
    }, [AllRefs, currentIceBreakingStage]);

    return {
        LEFT_HORIZONTAL,
        LEFT_VERTICAL,
        RIGHT_HORIZONTAL,
        RIGHT_VERTICAL,
    };
}
