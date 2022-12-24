// Tools
import { alpha, styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { BoxProps } from "@mui/system";
import type { FunctionComponent } from "react";
// Styled components
const ProgressRowBase = styled("div")(({ theme, ...props }) => ({
    background: alpha("#000", 0.35),
    padding: "6px 12px",
    width: "166px",
    textAlign: "center",
    borderRadius: "5px",
    letterSpacing: "1px",
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    transition: "color .3s linear, background .3s linear",
    color: alpha("#fff", 0.3),
    svg: {
        fontSize: "inherit",
        margin: "0 8px 0 0px",
    },
    "&:not(&:nth-of-type(1))": {
        marginTop: "4px",
    },
}));

export const ProgressRow: FunctionComponent<BoxProps> = ({ children, ...props }) => {
    return (
        <ProgressRowBase
            {...(props as any)} //
            className={`progress-row ${props.className ?? ""}`}
        >
            {children}
        </ProgressRowBase>
    );
};

export const ProgressWrapper = styled("div")(({ theme }) => ({
    position: "fixed",
    top: "calc(100vh)",
    transform: "translateY(calc(-100% - 32px))",
    right: "20px",
    animation: `${fadeSimple} .3s .2s both`,
    strong: {
        marginLeft: "4px",
        minWidht: "22px",
    },
    "&.counting-active": {
        ".progress-row": {
            color: alpha("#fff", 0.9),
        },
    },
    "&.is-over": {
        ".progress-row": {
            color: alpha("#fff", 0.9),
            background: theme.palette.success.main,
        },
    },
}));
