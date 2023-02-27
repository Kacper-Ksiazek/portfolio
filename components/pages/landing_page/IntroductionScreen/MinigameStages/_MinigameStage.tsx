// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Types
import type { WayOfRendering } from "../@types";
import type { FunctionComponent, ReactNode } from "react";
// Styled components
const MinigameStageBase = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&.outro": {
        animation: `${fadeSimpleOUT} .4s both`,
    },
    "&.add-padding-top": {
        paddingTop: "112px",
        ["@media (max-height:840px)"]: {
            paddingTop: "64px",
        },
        ["@media (max-height:680px)"]: {
            paddingTop: "32px",
        },
    },
    "&:not(&.disable-text-elements-styles)": {
        p: {
            margin: "12px 0 0 0",
            fontSize: "20px",
            textAlign: "center",
            "&.header-additional-text": {
                animation: `${fadeSimple} .3s .1s both linear`,
            },
        },
    },
    "&.disable-text-elements-styles": {
        "p.header-additional-text": {
            margin: "12px 0 0 0",
            fontSize: "20px",
            textAlign: "center",
            animation: `${fadeSimple} .3s .1s both linear`,
        },
    },
}));
const StageHeader = styled("h2")(({ theme }) => ({
    margin: 0,
    animation: `${fadeSimple} .3s both linear`,
    fontSize: "32px",
}));

interface MinigameStageProps {
    header?: {
        main: string;
        addition: string | ReactNode;
    };
    children: ReactNode;
    rendering: WayOfRendering;
    /**
     * Moves entire stage's content a little bit down.
     */
    addPaddingTop?: boolean;
    /**
     * **MinigameStage** component create styles for `p` elements inside it. By fixing this property to `true` this process becomes prevented
     * */
    disableTextElementsStyles?: boolean;
}

const MinigameStage: FunctionComponent<MinigameStageProps> = (props) => {
    if (props.rendering === "DO_NOT_RENDER") return <></>;

    const { rendering, children, header, addPaddingTop, disableTextElementsStyles, ...materialUIProps } = props;
    return (
        <MinigameStageBase
            {...materialUIProps}
            className={
                [
                    rendering === "RENDER_WITH_OUTRO_ANIMATION" ? "outro" : "", //
                    addPaddingTop ? "add-padding-top" : "",
                    disableTextElementsStyles ? "disable-text-elements-styles" : "",
                    (materialUIProps as any).className ?? "",
                ].join(" ") //
            } //
        >
            {(() => {
                if (header) {
                    return (
                        <>
                            <StageHeader>{header.main}</StageHeader>
                            <p className="header-additional-text">{header.addition}</p>
                        </>
                    );
                }
            })()}
            {/*  */}
            {children}
        </MinigameStageBase>
    );
};

MinigameStage.defaultProps = {
    addPaddingTop: false,
};
export default MinigameStage;
