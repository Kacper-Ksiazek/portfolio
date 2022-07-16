// Tools
import { styled } from "@mui/system";
import usePicturesMatchingGameContext from "./hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SinglePicture from "./SinglePicture";
import { PicturesMatchingGameContextProvider } from "./context";
// Styled Components
import DarkSectionWrapper from "@/components/_styled_components/SectionWrapper/Dark";

const BottomInformation = styled("span")(({ theme }) => ({
    fontSize: "18px",
    userSelect: "none",
}));

const PicturesWrapper = styled("section")(({ theme }) => ({
    width: "100%",
    marginBottom: "20px",
    maxWidth: "800px",
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
}));

interface PicturesMatchingGameProps {
    //
}

const PicturesMatchingGame: FunctionComponent<PicturesMatchingGameProps> = (props) => {
    const { allPictures, numberOfTurns } = usePicturesMatchingGameContext();

    return (
        <DarkSectionWrapper
            shapesDirection="right"
            header={{
                main: "React image matching game",
                label: "Try to find all pairs of identical pictures as soon as possible",
            }}
            sx={{
                height: "450px",
            }}
        >
            <PicturesWrapper>
                <span>{JSON.stringify(allPictures)}</span>
            </PicturesWrapper>

            <BottomInformation>
                Already taken turns: <strong>{numberOfTurns}</strong>
            </BottomInformation>
        </DarkSectionWrapper>
    );
};

const PicturesMatchingGameContextProviderWrapper: FunctionComponent = () => {
    return (
        <PicturesMatchingGameContextProvider>
            <PicturesMatchingGame />
        </PicturesMatchingGameContextProvider>
    );
};

export default PicturesMatchingGameContextProviderWrapper;
