// Tools
import { LandingScreenTechnologiesContextProvider } from "./context/LandingScreenTechnologiesContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import ProgressBar from "./ProgressBar";
import SingleTechnology from "./SingleTechnology";
// Styled Components
import Wing from "./_styled_components/Wing";
import Column from "./_styled_components/Column";
import TechnologiesWrapper from "./_styled_components/TechnologiesWrapper";

interface TechnologiesProps {
    isProcessing: boolean;
    startProcessing: () => void;
}

const Technologies: FunctionComponent<TechnologiesProps> = (props) => {
    return (
        <LandingScreenTechnologiesContextProvider>
            <TechnologiesWrapper>
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
            <ProgressBar isProcessing={props.isProcessing} startProcessing={props.startProcessing} />
        </LandingScreenTechnologiesContextProvider>
    );
};

export default Technologies;
