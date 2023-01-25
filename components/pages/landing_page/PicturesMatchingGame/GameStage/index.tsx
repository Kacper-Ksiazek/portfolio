// Tools
import { useEffect } from "react";
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
    const { hideNavigationBar, showNavigationBar } = useMainNavigationBarContext();

    useEffect(() => {
        setTimeout(() => {
            const wrapper = requstDOMNode("MAIN_WRAPPER");
            wrapper.classList.add("visible");

            if (["MENU", "SUMMARY"].includes(context.navigation.stage)) {
                setTimeout(() => {
                    hideNavigationBar();
                    wrapper.scrollIntoView({ block: "center", behavior: "smooth" });
                }, 1);
            } else if (context.navigation.stage === "STATISTICS") {
                setTimeout(() => {
                    showNavigationBar();
                    wrapper.scrollIntoView({ block: "start", behavior: "smooth" });
                }, 1);
            }
        }, 100);
    }, [context.navigation.stage, hideNavigationBar, showNavigationBar]);

    switch (context.navigation.stage) {
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
