// Tools
import { styled } from "@mui/material";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
import * as keyframes from "./keyframes";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components

export default styled(ButtonBase)(({ theme }) => ({
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: 10,
    width: "0px",
    height: "0px",
    backgroundColor: theme.palette.primary.main,
    transition: "background-color .3s, opacity .3s !important",
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
    borderRadius: "5px 20px 5px 20px",
    svg: {
        fontSize: "2rem",
        color: "#fff",
        opacity: 0,
    },
    ["@media (max-width:1100px)"]: {
        borderRadius: "5px",
    },
    "&.intro": {
        animation: [
            `${keyframes.intro_stageOne} .5s both linear`, //
            `${keyframes.intro_stageTwo} .3s .8s forwards linear`,
        ].join(", "),
        svg: {
            animation: [
                `${fadeSimple} .2s .6s both linear`, //
                `${keyframes.arrowBounce} .6s linear infinite alternate`,
            ].join(", "),
        },
    },
    "&.outro": {
        animation: [
            `${keyframes.outro_stageOne} .3s .2s both linear`, //
            `${keyframes.outro_stageTwo} .3s .5s forwards linear`,
        ].join(", "),
        svg: {
            animation: [
                `${fadeSimpleOUT} .2s both linear`, //
            ].join(", "),
        },
    },
    "&.spinning": {
        width: "50px",
        height: "50px",
        borderRadius: "5px 20px 5px 20px",
        animation: `${keyframes.spinning} .5s both linear`,
        svg: {
            opacity: 1,
        },
    },
}));
