// Tools
import { styled, alpha } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";
import type { FunctionComponent, ReactNode } from "react";
// Styled components
const Wrapper = styled("div", {
    shouldForwardProp: (prop: string) => !["maxHeightWhileScrollable"].includes(prop),
})<{ maxHeightWhileScrollable: string }>(({ theme, ...props }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flexGrow: 1,
    boxSizing: "border-box",
    ["@media (min-width:1001px)"]: {
        height: props.maxHeightWhileScrollable,
        paddingRight: "10px",
        overflowY: "scroll",
        overflowX: "hidden",
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-track": { boxShadow: `inset 0 0 2px ${alpha(theme.palette.primary.main, 0.3)}` },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "2px",
        },
    },
    ["@media (max-width:800px)"]: {
        padding: "0 20px",
    },
    ["@media (max-width:600px)"]: {
        padding: "0 10px 0 10px",
    },
}));
interface OverflowScrollDivProps {
    children: ReactNode;
    maxHeight: string;
    sx?: SxProps;
}

const OverflowScrollDiv: FunctionComponent<OverflowScrollDivProps> = (props) => {
    return (
        <Wrapper sx={props.sx} maxHeightWhileScrollable={props.maxHeight}>
            <div>{props.children}</div>
        </Wrapper>
    );
};

export default OverflowScrollDiv;
