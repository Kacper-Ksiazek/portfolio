// Tools
import { useTheme } from "@mui/material";
import { useEffect, useRef } from "react";
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

    rootMargin?: number;

    onVisible?: () => void;

    children: ReactNode;
}

interface GetTransformationStylesParams {
    alreadyHasBeenVisible: boolean;
    elementIsVisible: boolean;
    stylesWhenVisible: Styles;
    stylesWhenNOTVisible: Styles;
}

function getTransformationStyles(params: GetTransformationStylesParams): Styles {
    const { alreadyHasBeenVisible, elementIsVisible, stylesWhenVisible, stylesWhenNOTVisible } = params;
    if (alreadyHasBeenVisible === true) return {};

    return elementIsVisible ? stylesWhenVisible : stylesWhenNOTVisible;
}

const TransformWhenVisible: FunctionComponent<TransformWhenVisibleProps> = (props) => {
    const theme = useTheme();

    const ref = useRef<Element>(null);
    const alreadyHasBeenVisible = useRef<boolean>(false);

    const timeout = useRef<NodeJS.Timeout | null>(null);

    function onVisible() {
        if (props.onVisible) props.onVisible();

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

    const stylesWhenVisible: Styles = applySxProps(props.to, theme);
    const stylesWhenNOTVisible: Styles = props.from ?? {};

    const transformationStyles: Styles = getTransformationStyles({
        alreadyHasBeenVisible: alreadyHasBeenVisible.current,
        elementIsVisible,
        stylesWhenVisible,
        stylesWhenNOTVisible,
    });

    return (
        <Box
            className="transform-when-visible-wrapper"
            ref={ref as any}
            sx={{
                visibility: elementIsVisible ? "visible" : "hidden",
                ...applySxProps(props.sx, theme),
                ...transformationStyles,
            }}
        >
            {props.children}
        </Box>
    );
};

export default TransformWhenVisible;
