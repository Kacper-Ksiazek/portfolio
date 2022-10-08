// Tools
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
// Types
import type { FunctionComponent } from "react";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Other components
const Stage_1_General = dynamic(() => import("./Stage_1_General"));
const Stage_2_Competences = dynamic(() => import("./Stage_2_Competences"));
const Stage_3_Education = dynamic(() => import("./Stage_3_Education"));
const Stage_4_Hobbies = dynamic(() => import("./Stage_4_Hobbies"));
const Stage_5_Previous_Jobs = dynamic(() => import("./Stage_5_Previous_Jobs"));

interface ContentOnCertainStageProps {
    stage: IceBreakingStage;
    suspenceGeneralInfoStageRendering: boolean;
}

const ContentOnCertainStage: FunctionComponent<ContentOnCertainStageProps> = (props) => {
    const [renderGeneralStage, setRenderGeneralStage] = useState<boolean>(false);

    // Following timeout is required due to the fact, that the intro animation (this animation triggered onScroll) is slighty longer rather than the animation fired between changing sections
    useEffect(() => {
        const INITIAL_INTRO_ANIMATION_DURATION: number = 900;

        if (props.suspenceGeneralInfoStageRendering) {
            const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
                setRenderGeneralStage(true);
            }, INITIAL_INTRO_ANIMATION_DURATION);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [props.suspenceGeneralInfoStageRendering]);

    switch (props.stage) {
        case "General":
            return <Stage_1_General renderContent={renderGeneralStage} />;
        case "Competences":
            return <Stage_2_Competences />;
        case "Education":
            return <Stage_3_Education />;
        case "Hobbies":
            return <Stage_4_Hobbies />;
        case "Previous_Jobs":
            return <Stage_5_Previous_Jobs />;
    }
};

export default ContentOnCertainStage;
