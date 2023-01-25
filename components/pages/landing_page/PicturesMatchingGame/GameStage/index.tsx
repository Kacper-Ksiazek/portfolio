// Tools
import { useEffect, useRef } from "react";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
import { usePicturesMatchingGameContext } from "../hooks/usePicturesMatchingGameContext";
import { requstDOMNode } from "@/components/pages/landing_page/PicturesMatchingGame/utils/getDOMNode";
// Types
import type { FunctionComponent } from "react";
// Other components
import Menu from "./Menu";
import Summary from "./Summary";
import Gameplay from "./Gameplay";
import GamesStatistics from "./GamesStatistics";

const GameStage: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();
    const thisSectionHasBeenAlreadySeen = useRef<boolean>(false);
    const { hideNavigationBar, showNavigationBar } = useMainNavigationBarContext();

    const { stage } = context.navigation;

    useEffect(() => {
        setTimeout(() => {
            const wrapper = requstDOMNode("MAIN_WRAPPER");
            wrapper.classList.add("visible");

            if (
                stage === "SUMMARY" || //
                (stage === "MENU" && thisSectionHasBeenAlreadySeen.current)
            ) {
                setTimeout(() => {
                    hideNavigationBar();
                    wrapper.scrollIntoView({ block: "center", behavior: "smooth" });
                }, 1);
            } else if (stage === "STATISTICS") {
                setTimeout(() => {
                    hideNavigationBar();
                    wrapper.scrollIntoView({ block: "start", behavior: "smooth" });
                }, 1);
            }
        }, 100);
        //
        if (!thisSectionHasBeenAlreadySeen.current && stage !== "MENU") {
            thisSectionHasBeenAlreadySeen.current = true;
        }
    }, [stage, hideNavigationBar]);

    switch (stage) {
        case "MENU":
            return <Menu />;
        case "GAMEPLAY":
            return <Gameplay />;
        case "SUMMARY":
            return <Summary />;
        case "STATISTICS":
            return (
                <GamesStatistics
                    general={context.statistics.general} //
                    history={context.statistics.history}
                    goBack={context.navigation.goBackToMenu}
                />
            );
    }
};

export default GameStage;
