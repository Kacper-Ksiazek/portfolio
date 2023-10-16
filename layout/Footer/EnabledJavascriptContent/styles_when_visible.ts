// Tools
import { repeat } from "@/utils/client/styled/repeat";
import { SELECTORS } from "@/layout/Footer/css_references";
// Types
import type { SxProps } from "@/@types/MUI";
import { fadeSimple } from "@/components/keyframes/intro";

export const stylesWhenVisible: SxProps = {
    [SELECTORS.REDIRECTIONS_DIVIDER]: {
        ...repeat(5, (index) => {
            const deltaTime = index * 0.1;
            return {
                animation: `${fadeSimple} 0.3s ease-in-out ${1 + deltaTime}s both`,
            };
        }),
    },

    [SELECTORS.SINGLE_REDIRECTION]: {
        ...repeat(5, (index) => {
            const deltaTime = index * 0.1;
            return {
                animation: `${fadeSimple} 0.3s ease-in-out ${0.3 + deltaTime}s both`,
            };
        }),
    },

    [SELECTORS.SINGLE_SOCIAL_MEDIAL_ICON]: {
        ...repeat(5, (index) => {
            const deltaTime = index * 0.1;
            return {
                animation: `${fadeSimple} 0.3s ease-in-out ${0.8 + deltaTime}s both`,
            };
        }),
    },

    [SELECTORS.AUTHOR_NAME]: {
        animation: `${fadeSimple} 0.3s ease-in-out 1.1s both`,
    },
    [SELECTORS.YEARS]: {
        animation: `${fadeSimple} 0.3s ease-in-out 1.3s both`,
    },
};
