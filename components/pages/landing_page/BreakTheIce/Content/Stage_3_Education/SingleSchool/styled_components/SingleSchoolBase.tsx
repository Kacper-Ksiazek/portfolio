// Tools
import { styled, keyframes } from "@mui/system";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromBottom";
// Styled components
const dividerIntro = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 0.1,
    },
});

export default styled("div")(({ theme }) => ({
    width: "calc(100% - 50px)",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    "&:not(&:nth-of-type(1))": {
        marginTop: "40px",
        "&::after": {
            content: "''",
            position: "absolute",
            top: "-20px",
            left: "0%",
            width: "75%",
            height: "2px",
            background: "#000",
            animation: `${dividerIntro} .5s 1.5s both`,
        },
    },
    "&:nth-of-type(1)": {
        animation: `${fadeFromLeft} .5s 1s backwards`,
    },
    "&:nth-of-type(2)": {
        animation: `${fadeFromLeft} .5s 1.1s backwards`,
    },
    ["@media (max-width:1000px)"]: {
        width: "100%",
    },
    ["@media (max-width:500px)"]: {
        flexDirection: "column-reverse",
        ".single-school-content-wrapper": {
            marginTop: "10px",
            width: "100%",
        },
    },
}));
