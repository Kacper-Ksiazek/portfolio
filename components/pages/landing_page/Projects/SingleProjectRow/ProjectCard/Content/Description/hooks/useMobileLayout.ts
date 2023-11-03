import { useMemo } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";

export function useMobileLayout(): boolean {
    const { width } = useWindowSizes();

    return useMemo<boolean>(() => width !== 0 && width <= 1000, [width]);
}
