// Types
import type { FunctionComponent } from "react";
import type { WayOfRendering } from "@/components/pages/landing_page/IntroductionScreen/@types";
// Other components
import ScrollButton from "./ScrollButton";
// Styled Components
import IntroductionScreenBase from "./InitialIntroductionBase";
import { ColoredHeader, Description, MainHeader } from "./Texts";

interface InitialIntroductionProps {
    rendering: WayOfRendering;
    onScrollButtonHover: () => void;
    onScrollButtonBlur: () => void;
}

const InitialIntroduction: FunctionComponent<InitialIntroductionProps> = (props) => {
    return (
        <IntroductionScreenBase rendering={props.rendering} disableTextElementsStyles addPaddingTop>
            <ColoredHeader className="colored-header">full-stack</ColoredHeader>
            <MainHeader className="main-header">Kacper Książek</MainHeader>
            <Description>20 years old Engineering and Data Analysis student living in Poland, who takes sheer pleasure in coding 😎😎</Description>
            <ColoredHeader className="colored-header">developer</ColoredHeader>
            <ScrollButton
                onMouseEnter={props.onScrollButtonHover} //
                onMouseLeave={props.onScrollButtonBlur}
            />
        </IntroductionScreenBase>
    );
};

export default InitialIntroduction;
