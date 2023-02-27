// Tools
import { styled } from "@mui/material";
// Types
import type { BoxProps } from "@mui/material";
import type { FunctionComponent } from "react";
// Styled components
const ProgressRowBase = styled("div")(({ theme, ...props }) => ({
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    transition: "color .3s linear, background .3s linear",
    svg: {
        fontSize: "inherit",
        margin: "0 8px 0 0px",
    },
    "&:not(&:nth-of-type(1))": {
        marginTop: "4px",
    },
    strong: {
        marginLeft: "4px",
        minWidht: "22px",
        letterSpacing: 0,
    },
}));

const ProgressRow: FunctionComponent<BoxProps> = ({ children, ...props }) => {
    return (
        <ProgressRowBase
            {...(props as any)} //
            className={`progress-row ${props.className ?? ""}`}
        >
            {children}
        </ProgressRowBase>
    );
};

export default ProgressRow;
