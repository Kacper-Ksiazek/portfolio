// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Other components
import ScrollButton from "./ScrollButton";
import Technologies from "./Technologies";
// Styled components
import IntroductionScreenBase from "./IntroductionScreenBase";
import { ColoredHeader, Description, MainHeader } from "./Texts";

const IntroductionScreen: FunctionComponent = (props) => {
    return (
        <IntroductionScreenBase>
            <Technologies />
            <ColoredHeader>full-stack</ColoredHeader>
            <MainHeader>Kacper Książek</MainHeader>
            <Description>19 years old Engineering and Data Analysis student living in Poland, who takes sheer pleasure in coding 😎😎</Description>
            <ColoredHeader>developer</ColoredHeader>
            <ScrollButton />
        </IntroductionScreenBase>
    );
};

export default IntroductionScreen;
