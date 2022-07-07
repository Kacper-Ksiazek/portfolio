// Tools
import stated from "@/utils/client/stated";
import { useState, useEffect } from "react";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
import type { IceBreakingStage } from "@/components/landing_page/BreakTheIce/@types";
// Other components
import Content from "./Content";
import NavigationBetweenStages from "./NavigationBetweenStages";
// Styled Components
import LightSectionWrapper from "@/components/_styled_components/SectionWrapper/Light";

const BreakTheIce: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const [stage, setStage] = useState<IceBreakingStage>("General");
    const [letter, setLetter] = useState<string>("K");
    const [previousStage, setPreviousStage] = useState<IceBreakingStage | null>(null);

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

    const changeStage = (val: IceBreakingStage) => {
        setStage(val);
        setPreviousStage(stage);
        setTimeout(() => {
            setPreviousStage(null);
        }, 1000);
    };

    return (
        <LightSectionWrapper
            round="left"
            header={{
                label: `Let's break the ice`,
                main: "About me",
                additionalJSX: <NavigationBetweenStages stage={stated(stage, changeStage as any)} />,
            }}
            backgroundLetter={letter}
        >
            <Content stage={stage} previousStage={previousStage} />
        </LightSectionWrapper>
    );
};

export default BreakTheIce;
