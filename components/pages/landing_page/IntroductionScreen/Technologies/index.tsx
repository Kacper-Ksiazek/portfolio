// Tools
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
import { LandingScreenTechnologiesContextProvider } from "./context/LandingScreenTechnologiesContext";
import { useMinigameContext } from "@/components/pages/landing_page/IntroductionScreen/hooks/useMinigameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import ProgressBar from "./ProgressBar";
import SingleTechnology from "./SingleTechnology";
// Styled Components
import Wing from "./_styled_components/Wing";
import Column from "./_styled_components/Column";
import TechnologiesWrapper from "./_styled_components/TechnologiesWrapper";

const Technologies: FunctionComponent = (props) => {
    const { minigameStage } = useMinigameContext();

    useLazyLoadedImages({
        id: "MINIGAME_TECHNOLOGY",
        srcsToLazyLoad: [
            "react", //
            "electron", //
            "node",
            "figma",
            "material",
            "mysql",
            "laravel",
            "vue",
            "jest",
            "python",
            "express",
            "typescript",
            "javascript",
            "prisma",
            "html",
            "redux",
            "postgresql",
            "sequelize",
            "storybook",
            "sass",
            "php",
            "vue-bootstrap",
            "git",
            "next",
        ].map((technology) => `/images/technologies/pink/${technology}.png`),
    });

    return (
        <LandingScreenTechnologiesContextProvider minigameStage={minigameStage}>
            <TechnologiesWrapper
                className={[
                    minigameStage === "INITIAL" ? "intro-animations" : "",
                    minigameStage === "PROCESSING" ? "minigame-processing-animations" : "", //
                    minigameStage === "THROPHY_COLLECTING" ? "minigame-throphy-is-being-collected-animations" : "", //
                ].join(" ")}
            >
                <Wing className="wing left">
                    <Column className="column">
                        <SingleTechnology icon="react" />
                        <SingleTechnology icon="electron" />
                        <SingleTechnology icon="node" />
                    </Column>

                    <Column className="column">
                        <SingleTechnology icon="figma" />
                        <SingleTechnology icon="material" />
                        <SingleTechnology icon="mysql" />
                        <SingleTechnology icon="laravel" />
                    </Column>

                    <Column className="column">
                        <SingleTechnology icon="vue" />
                        <SingleTechnology icon="jest" />
                        <SingleTechnology icon="python" />
                        <SingleTechnology icon="express" />
                        <SingleTechnology icon="typescript" />
                    </Column>
                </Wing>
                <Wing className="wing right">
                    <Column className="column">
                        <SingleTechnology icon="javascript" />
                        <SingleTechnology icon="prisma" />
                        <SingleTechnology icon="html" />
                        <SingleTechnology icon="redux" />
                        <SingleTechnology icon="postgresql" />
                    </Column>

                    <Column className="column">
                        <SingleTechnology icon="sequelize" />
                        <SingleTechnology icon="storybook" />
                        <SingleTechnology icon="sass" />
                        <SingleTechnology icon="php" />
                    </Column>

                    <Column className="column">
                        <SingleTechnology icon="vue-bootstrap" />
                        <SingleTechnology icon="git" />
                        <SingleTechnology icon="next" />
                    </Column>
                </Wing>
            </TechnologiesWrapper>

            <ProgressBar />
        </LandingScreenTechnologiesContextProvider>
    );
};

export default Technologies;
