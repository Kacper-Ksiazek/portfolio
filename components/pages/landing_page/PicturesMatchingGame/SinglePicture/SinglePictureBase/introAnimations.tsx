// Tools
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { SxProps } from "@mui/system";

export const SinglePictureBaseIntroAnimations: SxProps = {
    "&:not(&.first-game-in-the-session)": {
        "&:nth-of-type(1)": {
            animation: `${fadeSimple} .3s .1s linear both`,
        },
        "&:nth-of-type(2)": {
            animation: `${fadeSimple} .3s .15s linear both`,
        },
        "&:nth-of-type(3)": {
            animation: `${fadeSimple} .3s .2s linear both`,
        },
        "&:nth-of-type(4)": {
            animation: `${fadeSimple} .3s .25s linear both`,
        },
        "&:nth-of-type(5)": {
            animation: `${fadeSimple} .3s .3s linear both`,
        },
        "&:nth-of-type(6)": {
            animation: `${fadeSimple} .3s .3s linear both`,
        },
        "&:nth-of-type(7)": {
            animation: `${fadeSimple} .3s .25s linear both`,
        },
        "&:nth-of-type(8)": {
            animation: `${fadeSimple} .3s .2s linear both`,
        },
        "&:nth-of-type(9)": {
            animation: `${fadeSimple} .3s .15s linear both`,
        },
        "&:nth-of-type(10)": {
            animation: `${fadeSimple} .3s .1s linear both`,
        },
    },
};
