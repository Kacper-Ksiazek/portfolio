// Tools
import Router from "next/router";
import { useEffect, useRef } from "react";
// Constants
import { INTRO_ANIMATION_DURATION } from "../constants";
// Types
import type { UpdateControls } from "./@types";

export function useAddRouterEvents(updateControls: UpdateControls) {
    const animationsHaveBeenAdded = useRef<boolean>(false);

    useEffect(() => {
        // We only want to add the animations once, so we check if they have been added before.
        if (window && Router && animationsHaveBeenAdded.current === false) {
            // 1.
            Router.events.on("routeChangeStart", () => {
                updateControls({ renderElements: true });

                setTimeout(() => {
                    updateControls({ introAnimationHasEnded: true });
                }, INTRO_ANIMATION_DURATION);
            });

            // 2.
            Router.events.on("routeChangeComplete", () => {
                updateControls({ newPageHasBeenLoaded: true });
            });

            // Set the animationsHaveBeenAdded to true so we don't add them again.
            animationsHaveBeenAdded.current = true;
        }
    }, [updateControls]);
}
