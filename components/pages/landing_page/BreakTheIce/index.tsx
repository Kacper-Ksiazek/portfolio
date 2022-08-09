// Tools
import RWD from "./RWD";
import { styled } from "@mui/system";
import stated from "@/utils/client/stated";
import { useState, useEffect } from "react";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Other components
import Content from "./Content";
import Picture from "./Picture";
import NavigationBetweenStages from "./NavigationBetweenStages";
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
// Styled Components
import LightSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Light";

const SimpleFlexbox = styled("div")(({ theme }) => ({
    display: "flex",
    marginTop: "16px",
    flexGrow: "1",
    justifyContent: "space-between",
    width: "100%",
    "&.visible": {
        "#picture-main-wrapper": {
            animation: `${fadeSimple} .5s .5s both`,
        },
    },
    ...(RWD as any),
}));

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
                <SimpleFlexbox>
                    <Content stage={stage} previousStage={previousStage} />
                    <Picture stage={stage} previousStage={previousStage} />
                </SimpleFlexbox>
            </VisibilitySensor>
        </LightSectionWrapper>
    );
};

export default BreakTheIce;
