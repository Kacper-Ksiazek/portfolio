// Tools
import { useEffect, useRef, useMemo, useState } from "react";
// Types
import type { RefObject } from "react";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";

interface UseBackgroundShapesRefsResult {
    LeftHorizontalRectangleElement: RefObject<HTMLSpanElement | null>;
    LeftVerticalRectangleElement: RefObject<HTMLSpanElement | null>;
    RightHorizontalRectangleElement: RefObject<HTMLSpanElement | null>;
    RightVerticalRectangleElement: RefObject<HTMLSpanElement | null>;
}

export function useBackgroundShapesRefs(currentIceBreakingStage: IceBreakingStage): UseBackgroundShapesRefsResult {
    const LeftHorizontalRectangleElement = useRef<HTMLSpanElement | null>(null);
    const LeftVerticalRectangleElement = useRef<HTMLSpanElement | null>(null);
    const RightHorizontalRectangleElement = useRef<HTMLSpanElement | null>(null);
    const RightVerticalRectangleElement = useRef<HTMLSpanElement | null>(null);

    const AllRefs = useMemo<RefObject<HTMLSpanElement | null>[]>(() => {
        return [LeftHorizontalRectangleElement, LeftVerticalRectangleElement, RightHorizontalRectangleElement, RightVerticalRectangleElement];
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
        LeftHorizontalRectangleElement,
        LeftVerticalRectangleElement,
        RightHorizontalRectangleElement,
        RightVerticalRectangleElement,
    };
}
