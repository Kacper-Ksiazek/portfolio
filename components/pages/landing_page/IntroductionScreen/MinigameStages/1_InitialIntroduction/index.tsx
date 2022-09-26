// Tools
import { styled } from "@mui/system";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Types
import type { FunctionComponent } from "react";
import type { WayOfRendering } from "@/components/pages/landing_page/IntroductionScreen/@types";
// Other components
import ScrollButton from "./ScrollButton";
// Styled Components
import MinigameStage from "@/components/pages/landing_page/IntroductionScreen/MinigameStages/_MinigameStage";

import { ColoredHeader, Description, MainHeader } from "./Texts";

const IntroductionScreenBase = styled(MinigameStage)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&.outro": {
        animation: `${fadeSimpleOUT} .4s both`,
    },
}));

const IntroductionScreen: FunctionComponent<{ rendering: WayOfRendering }> = (props) => {
    return (
        <IntroductionScreenBase rendering={props.rendering} disableTextElementsStyles>
            <ColoredHeader>full-stack</ColoredHeader>
            <MainHeader>Kacper Książek</MainHeader>
            <Description>20 years old Engineering and Data Analysis student living in Poland, who takes sheer pleasure in coding 😎😎</Description>
            <ColoredHeader>developer</ColoredHeader>
            <ScrollButton />
        </IntroductionScreenBase>
    );
};

export default IntroductionScreen;
