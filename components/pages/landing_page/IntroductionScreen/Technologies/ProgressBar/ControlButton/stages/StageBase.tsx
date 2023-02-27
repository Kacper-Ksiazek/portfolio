// Tools
import { styled } from "@mui/material";
import { useState, useEffect } from "react";
import { fadeSimple } from "@/components/keyframes/intro";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
const _StageBase = styled("span")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ".MuiCircularProgress-root": {
        color: "inherit",
        marginLeft: "12px",
        svg: {
            color: "inherit",
            margin: 0,
        },
    },
    animation: `${fadeSimple} .3s both linear`,
    "&.clickable": {
        cursor: "pointer",
    },
    "&.outro": {
        animation: `${fadeSimpleOUT} .3s both linear`,
    },
}));

interface StageBaseProps {
    displayWhen: boolean;
    onClick?: () => void;
    children: ReactNode;
}

const StageBase: FunctionComponent<StageBaseProps> = (props) => {
    const OUTRO_ANIMATION_DURATION: number = 300;

    const [renderElement, setRenderElement] = useState<boolean>(props.displayWhen);

    useEffect(() => {
        if (props.displayWhen) setRenderElement(true);
        else {
            setTimeout(() => setRenderElement(false), OUTRO_ANIMATION_DURATION);
        }
    }, [props.displayWhen]);

    if (!renderElement) return <></>;
    return (
        <_StageBase
            className={[
                props.displayWhen ? "" : "outro", //
                props.onClick ? "clickable" : "",
            ].join(" ")}
            onClick={props.onClick}
        >
            {props.children}
        </_StageBase>
    );
};

export default StageBase;
