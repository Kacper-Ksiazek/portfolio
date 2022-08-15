// Tools
import { forwardRef } from "react";
import { styled, alpha } from "@mui/system";
// Types
import type { ReactNode } from "react";
import type { SxProps } from "@mui/system";
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
}));
interface OverflowScrollDivProps {
    children: ReactNode;
    maxHeight?: string;
    sx?: SxProps;
    id?: string;
}

const OverflowScrollDiv = forwardRef<HTMLDivElement, OverflowScrollDivProps>((props, ref) => {
    if (!props.id && !props.maxHeight) {
        throw new Error(
            "`OverflowScrollDiv` component has to have its height fixed either by passing it in `maxHeight` prop or by adding particular component unique id and then specyfing height more flexibly (in order to achive responsibility for instance) in another place able to add styles"
        );
    }
    return (
        <Wrapper
            sx={props.sx} //
            id={props.id}
            ref={ref as any}
            maxHeightWhileScrollable={props.maxHeight ?? "auto"}
        >
            <div className="overflow-scroll-container-content">{props.children}</div>
        </Wrapper>
    );
});

OverflowScrollDiv.displayName = "OverflowScrollDiv";
export default OverflowScrollDiv;
