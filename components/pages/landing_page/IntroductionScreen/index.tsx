// Tools
import { useState } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
// Types
import type { FunctionComponent } from "react";
// Other components
import Content from "./Content";
import OutterContent from "./OutterContent";
import { MinigameContextProvider } from "./context/MinigameContext";
// Styled components
import IntroductionScreenBase from "./Base";

const IntroductionScreen: FunctionComponent = () => {
    const { width } = useWindowSizes();
    const [scrollButtonIsHovered, setScrollButtonIsHovered] = useState<boolean>(false);

    return (
        <IntroductionScreenBase
            scrollButtonIsHovered={scrollButtonIsHovered} //
            renderBigCircle={width > 1450 || width <= 1150}
            elementsOutsideContent={<OutterContent viewportWidth={width} />}
        >
            <Content
                viewportWidth={width} //
                setScrollButtonIsHovered={setScrollButtonIsHovered}
            />
        </IntroductionScreenBase>
    );
};

const IntroductionScreenWithMinigameContext: FunctionComponent = () => {
    return (
        <MinigameContextProvider>
            <IntroductionScreen />
        </MinigameContextProvider>
    );
};

export default IntroductionScreenWithMinigameContext;
