// Tools
import RWD from "./RWD";
import { styled } from "@mui/material";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Other components
import MinigameStage from "@/components/pages/landing_page/IntroductionScreen/MinigameStages/_MinigameStage";

export default styled(MinigameStage)(({ theme }) => ({
    ".go-back": {
        marginTop: "64px",
        padding: "6px 64px",
        fontSize: "20px",
        svg: {
            marginRight: "4px",
        },
        animation: `${fadeSimple} .3s 1.4s both linear`,
    },
    "p.message-to-winner": {
        fontSize: "20px",
        margin: "32px 0 0 0",
        display: "flex",
        alignItems: "center",
        fontWeight: "400",
        animation: `${fadeSimple} .3s 1.2s both linear`,
        strong: {
            margin: "0 6px",
            fontWeight: 900,
            fontSize: "24px",
        },
    },
    "p strong": {
        fontWeight: 900,
    },
    ".podium": {
        display: "flex",
        ".podium-place:nth-of-type(1)": {
            ".podium-place-base": {
                animation: `${fadeSimple} .3s .4s both linear`,
            },
            ".trophy-wrapper": {
                animation: `${fadeSimple} .3s .8s both linear`,
            },
        },
        ".podium-place:nth-of-type(2)": {
            ".podium-place-base": {
                animation: `${fadeSimple} .3s .3s both linear`,
            },
            ".trophy-wrapper": {
                animation: `${fadeSimple} .3s .9s both linear`,
            },
        },
        ".podium-place:nth-of-type(3)": {
            ".podium-place-base": {
                animation: `${fadeSimple} .3s .5s both linear`,
            },
            ".trophy-wrapper": {
                animation: `${fadeSimple} .3s .7s both linear`,
            },
        },
    },
    //
    ...(RWD as any),
}));
