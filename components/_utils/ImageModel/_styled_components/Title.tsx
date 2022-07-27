// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components
export default styled("h3")(({ theme }) => ({
    margin: "0 0 32px 0",
    color: "#fff",
    fontSize: "32px",
    userSelect: "none",
    fontFamily: "Montserrat Alternates",
    display: "flex",
    alignItems: "center",
    "span.label": {
        animation: `${fadeSimple} .2s both`,
    },
    "span.gallery-navigation-info": {
        marginRight: "20px",
        background: "#fff",
        color: "#000",
        top: 0,
        left: 0,
        fontSize: "18px",
        padding: "4px 16px",
        width: "70px",
        textAlign: "center",
        borderRadius: "3px",
        userSelect: "none",
    },
}));
