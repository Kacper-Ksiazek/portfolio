// Tools
import { styled } from "@mui/material";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Styled components
interface TaskBaseProps {
    fadeContentOut: boolean;
}

function shouldForwardProp(prop: string | keyof TaskBaseProps): boolean {
    return ![
        "fadeContentOut", //
    ].includes(prop as any);
}

export default styled("section", { shouldForwardProp })<TaskBaseProps>(({ theme, ...props }) => ({
    ...(props.fadeContentOut ? { animation: `${fadeSimpleOUT} .24s linear both` } : null),
    margin: "32px 0 16px 0",
}));
