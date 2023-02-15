// Tools
import { keyframes } from "@mui/system";

import * as GENERAL_PURPOSE from "./GENERAL_PURPOSE";
import * as CONTACT_DETAILS from "./CONTACT_DETAILS";

export { GENERAL_PURPOSE, CONTACT_DETAILS };

export const contentAppearing = keyframes({
    from: {
        visibility: "hidden",
    },
    to: {
        visibility: "visible",
    },
});
export const contentDisappearing = keyframes({
    from: {
        visibility: "visible",
    },
    to: {
        visibility: "hidden",
    },
});
