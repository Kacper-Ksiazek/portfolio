// Tools
import { useState } from "react";
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Other components
import SinglePicture from "./SinglePicture";
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

interface ImagesGuessingNameProps {
    //
}

const ImagesGuessingName: FunctionComponent<ImagesGuessingNameProps> = (props) => {
    const [numberOfTurns, setNumberOfTurns] = useState<number>(0);

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
                <SinglePicture />
                <SinglePicture />
                <SinglePicture />
                <SinglePicture />
                <SinglePicture />
                <SinglePicture />
                <SinglePicture />
                <SinglePicture />
                <SinglePicture />
                <SinglePicture />
            </PicturesWrapper>

            <BottomInformation>
                Already taken turns: <strong>{numberOfTurns}</strong>
            </BottomInformation>
        </DarkSectionWrapper>
    );
};

export default ImagesGuessingName;
