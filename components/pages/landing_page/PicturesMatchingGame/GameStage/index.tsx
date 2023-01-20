// Tools
import { usePicturesMatchingGameContext } from "../hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Menu from "./Menu";
import Summary from "./Summary";
import Gameplay from "./Gameplay";
import Statistics from "./Statistics";

const GameStage: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

    switch (context.navigation.stage) {
        case "MENU":
            return <Menu />;
        case "GAMEPLAY":
            return <Gameplay />;
        case "SUMMARY":
            return <Summary />;
        case "STATISTICS":
            return (
                <Statistics
                    general={context.statistics.general} //
                    history={context.statistics.history}
                    goBack={context.navigation.goBackToMenu}
                />
            );
    }
};

export default GameStage;
