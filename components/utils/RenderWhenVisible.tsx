// Tools
import { useRef } from "react";
import { useTheme } from "@mui/material";
import { useElementVisibility } from "@/hooks/useElementVisibility";
import { applySxProps } from "@/utils/client/styled/applyOptionalSxProps";
// Types
import type { SxProps } from "@/@types/MUI";
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Box from "@mui/material/Box";

interface TransformWhenVisibleProps {
    /** Styles applied to the wrapper */
    sx?: SxProps;
    children: ReactNode;
}

const RenderWhenVisible: FunctionComponent<TransformWhenVisibleProps> = (props) => {
    const theme = useTheme();
    const ref = useRef<Element>(null);
    const elementIsVisible = useElementVisibility(ref);

    return (
        <Box
            className="render-on-scroll-wrapper"
            ref={ref as any}
            sx={{
                ...applySxProps(props.sx, theme),
            }}
        >
            {elementIsVisible && props.children}
        </Box>
    );
};

export default RenderWhenVisible;
