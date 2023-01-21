// Tools
import { useEffect } from "react";
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

    useEffect(() => {
        return () => {
            setTimeout(() => {
                requstDOMNode("MAIN_WRAPPER").classList.add("visible");
            }, 100);
        };
    }, [context.navigation.stage]);

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
