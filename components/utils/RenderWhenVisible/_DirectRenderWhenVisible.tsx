// Tools
import { useRef } from "react";
import { useElementVisibility } from "@/hooks/useElementVisibility";
import { applySxProps } from "@/utils/client/styled/applyOptionalSxProps";
// Types
import type { SxProps } from "@/@types/MUI";
import type { FunctionComponent, HTMLAttributes, ReactNode } from "react";
// Material UI Components
import Box from "@mui/material/Box";

export interface DirectRenderWhenVisibleProps {
    /** Styles applied to the wrapper */
    sx?: SxProps;
    children: ReactNode;

    wrapperProps?: Exclude<HTMLAttributes<HTMLDivElement>, "className">;

    rootMargin?: number;

    onClick?: () => void;
    onVisible?: () => void;
}

const RenderWhenVisible: FunctionComponent<DirectRenderWhenVisibleProps> = (props) => {
    const ref = useRef<Element>(null);
    const elementIsVisible = useElementVisibility(ref, props.onVisible, props.rootMargin);

    return (
        <Box
            {...props.wrapperProps}
            className="render-when-visible-wrapper" //
            ref={ref as any}
            onClick={props.onClick}
            sx={(theme) => applySxProps(props.sx, theme)}
        >
            {elementIsVisible && props.children}
        </Box>
    );
};

export default RenderWhenVisible;
