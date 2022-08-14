// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components
import { intro, outro } from "./keyframes";

export default styled("div")(({ theme }) => ({
    width: "100%",
    position: "relative",
    overflow: "hidden",
    margin: "20px 0",
    borderRadius: "10px",
    height: "650px",
    "#features-overflow-hidden-container": {
        height: "calc(100% - 50px)",
    },
    ".project-thumbnail, .image-actions-wrapper": {
        animation: `${fadeSimple} .001s 1.7s both`,
    },
    "&::after, &::before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "10px",
    },
    "&::after": {
        zIndex: 11,
        background: theme.palette.primary.main,
        animation: `${intro} 1s .6s both linear, ${outro} .7s 2s forwards linear`,
    },
    "&::before": {
        zIndex: 10,
        background: theme.palette.secondary.main,
        animation: `${intro} 1s .5s both linear, ${outro} .7s 2.1s forwards linear`,
    },
    ["@media (max-width:1600px)"]: {
        height: "600px",
    },
    ["@media (max-width:1500px)"]: {
        height: "550px",
    },
    ["@media (max-width:900px)"]: {
        height: "500px",
    },
    ["@media (max-width:800px)"]: {
        height: "450px",
    },
    ["@media (max-width:700px)"]: {
        height: "400px",
    },
    ["@media (max-width:600px)"]: {
        height: "350px",
    },
    ["@media (max-width:500px)"]: {
        height: "300px",
    },
    ["@media (max-width:400px)"]: {
        height: "260px",
    },
}));
