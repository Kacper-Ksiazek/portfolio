// Tools
import RWD from "./RWD";
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Other components
import MinigameStage from "@/components/pages/landing_page/IntroductionScreen/MinigameStages/_MinigameStage";
// Styled components
export default styled(MinigameStage)(({ theme }) => ({
    i: {
        fontSize: "14px",
        marginTop: "64px",
        textAlign: "center",
        animation: `${fadeSimple} .3s 1s both linear`,
        span: {
            opacity: 0.5,
        },
    },
    ".simple-flexbox": {
        display: "flex",
        margin: "32px 0",
        ".male": {
            animation: `${fadeSimple} .3s .2s both linear`,
        },
        ".female": {
            animation: `${fadeSimple} .3s .3s both linear`,
        },
    },
    ".prefer-not-to-answer": {
        padding: "6px 64px",
        fontSize: "20px",
        animation: `${fadeSimple} .3s .4s both linear`,
    },

    ...(RWD as any),
}));
