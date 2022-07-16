// Tools
import RWD from "./RWD";
import { styled } from "@mui/system";
import fadeToTop from "@/components/_keyframes/fadeToTop";
import fadeFromBottom from "@/components/_keyframes/fadeFromBottom";

export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50vw",
    transform: "translate(-50%, -50%)",
    maxWidth: "1920px",
    display: "flex",
    outline: "none !important",
    flexDirection: "column",
    "div.imageWrapper": {
        position: "relative",
        flexGrow: "1",
        "&.intro": {
            animation: `${fadeFromBottom} .2s linear both`,
        },
        "&.outro": {
            animation: `${fadeToTop} .2s linear both`,
        },
    },
    h4: {
        margin: "0",
        color: "#fff",
        fontSize: "32px",
        userSelect: "none",
        fontWeight: 500,
        marginBottom: "10px",
        "span.seperator": {
            margin: "0 10px",
        },
    },
    ...(RWD as any),
}));
