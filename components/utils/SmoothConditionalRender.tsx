// Tools
import { useEffect, useState } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Fade from "@mui/material/Fade";
import { Styles } from "@/@types/MUI";
interface SmoothConditionalRenderProps {
    when: boolean;
    children: ReactNode;
    styles?: Styles;
}

const OUTRO_ANIMATION_DURATION: TimeInMS = 300;

const SmoothConditionalRender: FunctionComponent<SmoothConditionalRenderProps> = (props) => {
    const [stage, setStage] = useState<"RENDER" | "RENDER_WITH_OUTRO_ANIMATION" | "DO_NOT_RENDER">("DO_NOT_RENDER");

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        if (props.when) {
            setStage("RENDER");
        } else {
            setStage("RENDER_WITH_OUTRO_ANIMATION");
            timeout = setTimeout(() => setStage("DO_NOT_RENDER"), OUTRO_ANIMATION_DURATION);
        }

        return () => {
            if (timeout !== null) clearTimeout(timeout);
        };
    }, [props.when]);

    if (stage === "DO_NOT_RENDER") return <></>;

    return (
        <Fade in={stage === "RENDER"}>
            <span
                className="smooth-conditional-render-wrapper"
                style={{
                    position: "absolute", //
                    ...(props.styles as any),
                }}
            >
                {props.children}
            </span>
        </Fade>
    );
};

export default SmoothConditionalRender;
