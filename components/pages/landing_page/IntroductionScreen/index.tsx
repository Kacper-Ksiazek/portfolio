// Tools
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// Types
import type { FunctionComponent } from "react";
// Other components
import ScrollButton from "./ScrollButton";
import Technologies from "./Technologies";
// Styled components
import IntroductionScreenBase from "./IntroductionScreenBase";
import { ColoredHeader, Description, MainHeader } from "./Texts";

const IntroductionScreen: FunctionComponent = (props) => {
    const [displayAnimations, setDisplayAnimations] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        setDisplayAnimations(router.query.hasOwnProperty("skipIntroductionAnimation"));
    }, [router.query]);

    return (
        <IntroductionScreenBase>
            <Technologies />
            <ColoredHeader>full-stack</ColoredHeader>
            <MainHeader>Kacper Książek</MainHeader>
            <Description>20 years old Engineering and Data Analysis student living in Poland, who takes sheer pleasure in coding 😎😎</Description>
            <ColoredHeader>developer</ColoredHeader>
            <ScrollButton />
        </IntroductionScreenBase>
    );
};

export default IntroductionScreen;
