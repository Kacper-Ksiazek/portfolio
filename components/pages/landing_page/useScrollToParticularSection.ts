// Tools
import { useEffect } from "react";
import { useRouter } from "next/router";
import { CSS_REFERENCES, SELECTORS } from "landing_page/css_references";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
// Types
import type { ScrollableToSections } from "@/@types/pages/LandingPage";

interface ScrollSchedule {
    selectorOfElementToScrollTo: string;
    callbackAfterScrollIsDone?: () => void;
}

const schedule: Record<string, ScrollSchedule> = {
    [CSS_REFERENCES.ABOUT_ME]: {
        selectorOfElementToScrollTo: SELECTORS.ABOUT_ME,
    },
    [CSS_REFERENCES.PROJECTS]: {
        selectorOfElementToScrollTo: SELECTORS.PROJECTS,
    },
    [CSS_REFERENCES.CONTACT_ME]: {
        selectorOfElementToScrollTo: SELECTORS.CONTACT_ME,
    },
    [CSS_REFERENCES.CONTACT_ME_OPEN_EMAIL_FORM_BUTTON]: {
        selectorOfElementToScrollTo: SELECTORS.CONTACT_ME,
        callbackAfterScrollIsDone: () => {
            const el = document.querySelector(SELECTORS.CONTACT_ME_OPEN_EMAIL_FORM_BUTTON);
            if (el) (el as HTMLElement).click();
        },
    },
};

const availableSectionsKeys: string[] = Object.keys(schedule);

export function useScrollToParticularSection() {
    const router = useRouter();
    const { showNavigationBar } = useMainNavigationBarContext();

    useEffect(() => {
        // Use timeout to wait for the page to be rendered
        let timeout: ReturnType<typeof setTimeout> | null = null;
        // Get the key of the element to scroll to
        const elementID: undefined | ScrollableToSections = router.query.scrollToElement as ScrollableToSections | undefined;

        // Scroll to the element with the id passed in the query
        if (elementID && availableSectionsKeys.includes(elementID)) {
            const { selectorOfElementToScrollTo, callbackAfterScrollIsDone } = schedule[elementID as ScrollableToSections];
            // Keep the navigation bar visible for 800ms
            showNavigationBar({ keepNavigationVisibleFor: 800 });

            timeout = setTimeout(() => {
                // Find the element and scroll to it
                const el = document.querySelector(selectorOfElementToScrollTo);
                if (el) {
                    const distanceFromTop: number = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo(0, distanceFromTop);
                }
                // Call the callback if it exists
                if (callbackAfterScrollIsDone) {
                    setTimeout(() => {
                        callbackAfterScrollIsDone();
                    }, 750);
                }
            }, 50);
        }

        return () => {
            if (timeout !== null) clearTimeout(timeout);
        };
    }, [router.query, showNavigationBar]);
}
