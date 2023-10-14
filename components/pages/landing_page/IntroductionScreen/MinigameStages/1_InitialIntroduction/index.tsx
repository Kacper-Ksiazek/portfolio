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
            <Description>
                {
                    "Hi, I'm a 21-year-old technology enthusiast, currently a second-year student of Engineering and Data Analysis at AGH in Cracow, who takes great pleasure in coding and learning new things."
                }
            </Description>
            <ColoredHeader className="colored-header">developer</ColoredHeader>
            <ScrollButton
                onMouseEnter={props.onScrollButtonHover} //
                onMouseLeave={props.onScrollButtonBlur}
            />
        </IntroductionScreenBase>
    );
};

export default InitialIntroduction;
