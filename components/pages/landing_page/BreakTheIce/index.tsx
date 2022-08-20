// Tools
import stated from "@/utils/client/stated";
import { useState, useEffect } from "react";
// Types
import type { Hobby, School } from "@prisma/client";
import type { FunctionComponent } from "react";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Other components
import Content from "./Content";
import Picture from "./Picture";
import NavigationBetweenStages from "./NavigationBetweenStages";
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
import { BreakTheIceContextProvider } from "./contexts/BreakTheIceContentContext";
// Styled Components
import BreakTheIceBase from "./styled_components/BreakTheIceBase";
import LightSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Light";

interface BreakTheIceProps {
    hobbies: Hobby[];
    schools: School[];
}

const BreakTheIce: FunctionComponent<BreakTheIceProps> = (props) => {
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
                estimatedHeight: "134px",
            }}
            backgroundLetter={letter}
            id="about-me"
            contentWrapperSx={{ display: "flex" }}
        >
            <VisibilitySensor
                offsetBottom={400} //
                dontRenderNotVisableChildren
                removeVisibleCSSClassIn={2300}
                childWrapperSx={{
                    height: "100%",
                    flexGrow: 1,
                    display: "flex",
                }}
            >
                <BreakTheIceBase>
                    <BreakTheIceContextProvider
                        hobbies={props.hobbies} //
                        schools={props.schools}
                    >
                        <Content stage={stage} previousStage={previousStage} changeStage={changeStage} />
                    </BreakTheIceContextProvider>

                    <Picture stage={stage} previousStage={previousStage} />
                </BreakTheIceBase>
            </VisibilitySensor>
        </LightSectionWrapper>
    );
};

export default BreakTheIce;
