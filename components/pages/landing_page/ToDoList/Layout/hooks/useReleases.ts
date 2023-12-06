// Tools
import { useDelayedState } from "@/hooks/useDelayedState";
// Types
import type { Release } from "../@types";
import type { MutableRefObject } from "react";

/**
 * Scrolls the view to the top of the component.
 */
function alignViewToTop({ current }: MutableRefObject<HTMLDivElement | null>) {
    if (current === null) return;
    current.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

interface UseReleasesProps {
    currentRelease: Release;
    releaseIsChanging: boolean;
    toggleReleases: () => void;
}

export function useReleases(mainWrapperRef: MutableRefObject<HTMLDivElement | null>): UseReleasesProps {
    const releaseToDisplay = useDelayedState<"legacy" | "2023">("2023", 300);

    function toggleReleases() {
        alignViewToTop(mainWrapperRef);
        setTimeout(
            () => {
                releaseToDisplay.setValue((prev) => (prev === "2023" ? "legacy" : "2023"));
            },
            releaseToDisplay.value === "legacy" ? 50 : 350
        );
    }

    return {
        currentRelease: releaseToDisplay.value,
        releaseIsChanging: releaseToDisplay.isChanging,
        toggleReleases,
    };
}
