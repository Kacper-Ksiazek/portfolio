// Tools
import { useState } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
// Types
import type { FunctionComponent } from "react";
// Other components
import ScrollButton from "./ScrollButton";
import Technologies from "./New_Technologies";
// Styled components
import IntroductionScreenBase from "./IntroductionScreenBase";
import { ColoredHeader, Description, MainHeader } from "./Texts";

const IntroductionScreen: FunctionComponent = (props) => {
    const { width } = useWindowSizes();
    const [minigameStage, setMinigameStage] = useState<"hidden" | "processing" | "throphy_collecting">("hidden");

    return (
        <IntroductionScreenBase
            renderBigCircle={width > 1450 || width <= 1150} //
            elementsOutsideContent={
                width > 1150 && (
                    <Technologies
                        isProcessing={minigameStage === "processing"} //
                        startProcessing={() => setMinigameStage("processing")}
                    />
                )
            }
        >
            <ColoredHeader>full-stack</ColoredHeader>
            <MainHeader>Kacper Książek</MainHeader>
            <Description>20 years old Engineering and Data Analysis student living in Poland, who takes sheer pleasure in coding 😎😎</Description>
            <ColoredHeader>developer</ColoredHeader>
            <ScrollButton />
        </IntroductionScreenBase>
    );
};

export default IntroductionScreen;
