// Tools
import { useState } from "react";
import { useTheme } from "@mui/material";
import useWindowSizes from "@/hooks/useWindowSizes";
// Types
import type { Theme } from "@mui/material";
import type { FunctionComponent } from "react";
// Other components
import ModalOpeningButton from "./ModalOpeningButton";
import ImageModal from "@/components/utils/ImageModel";

const BACKGROUND_TO_PREVIEW: Record<Theme["palette"]["mode"], { title: string; url: string }> = {
    dark: {
        title: "USA / San Francisco / Golden Bridge",
        url: "/images/landing-page/introduction-screen/dark/fullsize.jpg",
    },
    light: {
        title: "Germany / Hamburg / Fiction Park",
        url: "/images/landing-page/introduction-screen/light/fullsize.jpg",
    },
};

const PreviewBackgroundPicture: FunctionComponent = () => {
    const theme = useTheme();
    const { width } = useWindowSizes();

    const [modalIsOpened, setModalIsOpened] = useState<boolean>(false);

    function openModal() {
        setModalIsOpened(true);
    }

    if (width < 500) return <></>;

    return (
        <>
            {<ModalOpeningButton onClick={openModal} />}

            {(() => {
                if (modalIsOpened) {
                    return (
                        <ImageModal
                            open={modalIsOpened} //
                            onClose={() => setModalIsOpened(false)}
                            imageURL={BACKGROUND_TO_PREVIEW[theme.palette.mode].url}
                            title={BACKGROUND_TO_PREVIEW[theme.palette.mode].title}
                        />
                    );
                }
            })()}
        </>
    );
};

export default PreviewBackgroundPicture;
