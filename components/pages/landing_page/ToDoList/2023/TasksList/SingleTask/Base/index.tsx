// Tools
import { styled } from "@mui/material";
import { MOBILE_LAYOUT_APPLIANCE_BREAKPOINT } from "..";
import { mergeSXObjects } from "@/utils/client/mergeSXObjects";
// Styles
import RWD from "./RWD";
import { getStylesWhenCompleted } from "./task_stages_styles/completed";
import { getStylesDuringDeletion } from "./task_stages_styles/duringDeletion";
// Types
import type { SxProps } from "@/@types/MUI";
// Styled components
interface SingleTaskBaseProps {
    urgent: boolean;
    completed: boolean;
    currentlyBeingRemoved: boolean;
}

function shouldForwardProp(prop: string | keyof SingleTaskBaseProps): boolean {
    return ![
        "completed", //
        "urgent",
        "currentlyBeingRemoved",
    ].includes(prop as any);
}

export default styled("div", { shouldForwardProp })<SingleTaskBaseProps>(({ theme, ...props }) => {
    const stylesWhenCompleted: SxProps = props.completed ? getStylesWhenCompleted(theme) : {};
    const stylesWhenBeingRemoved: SxProps = props.currentlyBeingRemoved ? getStylesDuringDeletion(theme, props.urgent) : {};

    return mergeSXObjects(
        {
            background: theme.palette.background.darkSectionBackground,
            width: "100%",
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "8px 12px",
            borderRadius: "5px",
            position: "relative",
            paddingRight: "40px",
            zIndex: 1,
            overflow: "hidden",
            backdropFilter: "blur(3px)",
            transition: "background .3s",

            "&:not(&:nth-of-type(1))": {
                marginTop: "24px",
            },
            [`@media (max-width:${MOBILE_LAYOUT_APPLIANCE_BREAKPOINT}px)`]: {
                paddingRight: "0",
            },
        },
        stylesWhenCompleted,
        stylesWhenBeingRemoved,
        RWD
    );
});
