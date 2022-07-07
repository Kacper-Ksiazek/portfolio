// Tools
import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import stated from "@/utils/client/stated";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
import type { IceBreakingStage } from "@/components/landing_page/BreakTheIce/@types";
// Other components
import NavigationBetweenStages from "./NavigationBetweenStages";
// Styled Components
import LightSectionWrapper from "@/components/_styled_components/SectionWrapper/Light";

const BreakTheIce: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const [stage, setStage] = useState<IceBreakingStage>("General");
    const [letter, setLetter] = useState<string>("K");

    // Update letter after stage being change
    useEffect(() => {
        const letters: Record<IceBreakingStage, string> = {
            General: "K",
            Competences: "A",
            Education: "C",
            Hobbies: "P",
        };
        setLetter(letters[stage]);
    }, [stage]);

    return (
        <LightSectionWrapper
            round="left"
            header={{
                label: `Let's break the ice`,
                main: "About me",
                additionalJSX: <NavigationBetweenStages stage={stated(stage, setStage)} />,
            }}
            backgroundLetter={letter}
        >
            <span>CONTENT</span>
        </LightSectionWrapper>
    );
};

export default BreakTheIce;
