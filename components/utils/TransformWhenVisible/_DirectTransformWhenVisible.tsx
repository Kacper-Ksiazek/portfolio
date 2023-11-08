// Tools
import { useEffect, useRef } from "react";
import { useElementVisibility } from "@/hooks/useElementVisibility";
import { applySxProps } from "@/utils/client/styled/applyOptionalSxProps";
import { getTransformationStyles } from "./utils/getTransformationStyles";
// Types
import type { Styles, SxProps, SxPropsFn } from "@/@types/MUI";
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Box from "@mui/material/Box";

export interface DirectTransformWhenVisibleProps {
    /** Styles applied to the wrapper */
    sx?: SxProps;
    /** Styles before animation */
    from?: Styles;
    /** Styles applied when **visible** */
    to: SxProps;

    rootMargin?: number;
    updatesFrequently?: boolean;

    onVisible?: () => void;

    children: ReactNode;
}

const DirectTransformWhenVisible: FunctionComponent<DirectTransformWhenVisibleProps> = (props) => {
    const ref = useRef<Element>(null);
    const alreadyHasBeenVisible = useRef<boolean>(false);

    const timeout = useRef<NodeJS.Timeout | null>(null);

    function onVisible() {
        if (props.onVisible) props.onVisible();

        if (props.updatesFrequently === false) return;

        timeout.current = setTimeout(() => {
            alreadyHasBeenVisible.current = true;
        }, 1000);
    }

    useEffect(() => {
        return () => {
            if (timeout.current !== null) {
                clearTimeout(timeout.current);
                timeout.current = null;
            }
        };
    }, []);

    const elementIsVisible = useElementVisibility(ref, onVisible, props.rootMargin);

    const transformationStyles: SxPropsFn = function (theme) {
        return getTransformationStyles({
            elementIsVisible,
            stylesWhenNOTVisible: props.from ?? {},
            stylesWhenVisible: applySxProps(props.to, theme),
            alreadyHasBeenVisible: props.updatesFrequently ? alreadyHasBeenVisible.current : false,
        });
    };

    return (
        <Box
            className="transform-when-visible-wrapper"
            ref={ref as any}
            sx={(theme) => ({
                visibility: elementIsVisible ? "visible" : "hidden",
                ...applySxProps(props.sx, theme),
                ...transformationStyles(theme),
            })}
        >
            {props.children}
        </Box>
    );
};

export default DirectTransformWhenVisible;
