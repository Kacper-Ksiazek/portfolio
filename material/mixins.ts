import type { MixinsOptions } from "@mui/material/styles/createMixins";

declare module "@mui/material/styles/createMixins" {
    interface Mixins {
        flex_center: CSSProperties;
        absolute_full: CSSProperties;
        absolute_center: CSSProperties;
    }
    // allow configuration using `createMuiTheme`
    interface MixinsOptions {
        flex_center?: CSSProperties;
        absolute_full?: CSSProperties;
        absolute_center?: CSSProperties;
    }
}

export const mixins: MixinsOptions = {
    absolute_center: {
        position: "absolute",
        inset: "50% 50%",
        transform: "translate(-50%, -50%)",
    },
    absolute_full: {
        position: "absolute",
        inset: 0,
    },
    flex_center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
};
