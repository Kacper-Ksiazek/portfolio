// Tools
import { useEffect, useState } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Fade from "@mui/material/Fade";
interface SmoothConditionalRenderProps {
    when: boolean;
    children: ReactNode;
}

const OUTRO_ANIMATION_DURATION: TimeInMS = 300;

const SmoothConditionalRender: FunctionComponent<SmoothConditionalRenderProps> = (props) => {
    const [stage, setStage] = useState<"RENDER" | "RENDER_WITH_OUTRO_ANIMATION" | "DO_NOT_RENDER">("DO_NOT_RENDER");

    useEffect(() => {
        if (props.when) {
            setStage("RENDER");
        } else {
            setStage("RENDER_WITH_OUTRO_ANIMATION");
            setTimeout(() => setStage("DO_NOT_RENDER"), OUTRO_ANIMATION_DURATION);
        }
    }, [props.when]);

    if (stage === "DO_NOT_RENDER") return <></>;

    return (
        <Fade in={stage === "RENDER"}>
            <span style={{ position: "absolute" }}>{props.children}</span>
        </Fade>
    );
};

export default SmoothConditionalRender;
