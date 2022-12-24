// Tools
import { alpha, styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Styled components
export const ProgressRow = styled("div")(({ theme }) => ({
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
    svg: {
        fontSize: "inherit",
        margin: "0 8px 0 0px",
    },
}));

export const ProgressWrapper = styled("div")(({ theme }) => ({
    position: "fixed",
    top: "calc(100vh - 82px)",
    right: "20px",
    animation: `${fadeSimple} .3s .2s both`,
}));
