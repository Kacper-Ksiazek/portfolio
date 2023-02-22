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

export const mixins: MixinsOptions = {};
