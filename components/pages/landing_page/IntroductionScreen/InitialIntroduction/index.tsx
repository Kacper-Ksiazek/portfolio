// Tools
import { styled } from "@mui/system";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Types
import type { FunctionComponent } from "react";
// Other components
import ScrollButton from "./ScrollButton";
// Styled Components
import { ColoredHeader, Description, MainHeader } from "./Texts";
const IntroductionScreenBase = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&.outro": {
        animation: `${fadeSimpleOUT} .4s both`,
    },
}));

const IntroductionScreen: FunctionComponent<{ outro: boolean }> = (props) => {
    return (
        <IntroductionScreenBase className={props.outro ? "outro" : ""}>
            <ColoredHeader>full-stack</ColoredHeader>
            <MainHeader>Kacper Książek</MainHeader>
            <Description>20 years old Engineering and Data Analysis student living in Poland, who takes sheer pleasure in coding 😎😎</Description>
            <ColoredHeader>developer</ColoredHeader>
            <ScrollButton />
        </IntroductionScreenBase>
    );
};

export default IntroductionScreen;
