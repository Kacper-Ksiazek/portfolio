// Tools
import { styled } from "@mui/material";
import { scaleFromLeft } from "@/components/keyframes/intro";
import { generateSequentialLineAnimations, generateStaticLineAnimations } from "@/utils/client/styled/lineAnimations";

export default styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    margin: "0px 0 24px 0",
    ".single-nagivation-step": {
        position: "relative",
        ...generateSequentialLineAnimations({
            color: theme.palette.primary.main,
            sequence: [
                ["BOTTOM", "RIGHT"],
                ["LEFT", "TOP"],
            ],
            duration: 0.25,
            playBackToBack: true,
            delays: {
                initial: 0.2,
                beforeOutro: 0.2,
                betweenSequenceElements: 0.2,
            },
        }),
        "&:nth-of-type(3)": generateStaticLineAnimations({
            animations: {
                commonDuration: 0.25,
                start: {
                    direction: "BOTTOM",
                },
                end: {
                    direction: "TOP",
                },
            },
            color: theme.palette.primary.main,
        }),
    },
    ".divider": {
        animation: `${scaleFromLeft} .2s linear both .8s`,
        "&:nth-of-type(2)": {
            animation: `${scaleFromLeft} .2s linear both`,
        },
    },
    "@media (max-width:800px)": {
        justifyContent: "space-between",
        ".single-nagivation-step": {
            "&:nth-of-type(1)": {
                paddingRight: "8px",
                zIndex: 2,
            },
            "&:not(&:nth-of-type(1))": {
                marginLeft: 0,
                "&::before": {
                    width: "30vw",
                    transform: "translate(-105%,50%)",
                },
            },
        },
    },
    "@media (max-width:385px)": {
        ".single-nagivation-step": {
            fontSize: "16px",
        },
    },
}));
