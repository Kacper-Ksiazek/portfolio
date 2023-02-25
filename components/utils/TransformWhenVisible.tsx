// Tools
import { useRef } from "react";
import { useTheme } from "@mui/material";
import { useElementVisibility } from "@/hooks/useElementVisibility";
import { applySxProps } from "@/utils/client/styled/applyOptionalSxProps";
// Types
import type { Styles, SxProps } from "@/@types/MUI";
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Box from "@mui/material/Box";

interface TransformWhenVisibleProps {
    /** Styles applied to the wrapper */
    sx?: SxProps;
    /** Styles before animation */
    from?: Styles;
    /** Styles applied when **visible** */
    to: SxProps;

    onVisible?: () => void;

    children: ReactNode;
}

const TransformWhenVisible: FunctionComponent<TransformWhenVisibleProps> = (props) => {
    const theme = useTheme();
    const ref = useRef<Element>(null);
    const elementIsVisible = useElementVisibility(ref, props.onVisible);

    return (
        <Box
            className="transform-when-visible-wrapper"
            ref={ref as any}
            sx={{
                visibility: elementIsVisible ? "visible" : "hidden",
                ...applySxProps(props.sx, theme),
                ...(elementIsVisible ? applySxProps(props.to, theme) : props.from ?? {}),
            }}
        >
            {props.children}
            {/*  */}
        </Box>
    );
};

export default TransformWhenVisible;
