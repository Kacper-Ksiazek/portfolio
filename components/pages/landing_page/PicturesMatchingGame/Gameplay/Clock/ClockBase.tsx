// Tools
import { alpha, styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Styled components
export default styled("span")(({ theme }) => ({
    position: "fixed",
    top: "calc(100vh - 82px)",
    right: "20px",
    background: alpha("#000", 0.35),
    fontSize: "28px",
    padding: "6px 12px",
    width: "144px",
    textAlign: "center",
    borderRadius: "5px",
    letterSpacing: "1px",
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "color .3s linear, background .3s linear",
    animation: `${fadeSimple} .3s .2s both`,
    color: alpha("#fff", 0.3),
    "&.counting-active": {
        color: alpha("#fff", 0.9),
        background: alpha(theme.palette.primary.main, 0.5),
    },
    "&.is-over": {
        color: alpha("#fff", 0.9),
        background: theme.palette.success.main,
    },
    svg: {
        fontSize: "inherit",
        margin: "0 8px 0 0px",
    },
}));
