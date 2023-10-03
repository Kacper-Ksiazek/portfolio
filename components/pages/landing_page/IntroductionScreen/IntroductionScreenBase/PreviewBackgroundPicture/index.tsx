// Tools
import { useState } from "react";
import { styled ,type Theme} from "@mui/material";
import { useTheme } from "@mui/material";
import useWindowSizes from "@/hooks/useWindowSizes";
import { fadeSimple } from "@/components/keyframes/intro";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
// Other components
import ModalOpeningButton from "./ModalOpeningButton";
import ImageModal from "@/components/utils/ImageModel";
// Material UI Icons
import Panorama from "@mui/icons-material/Panorama";
// Styled components


const BACKGROUND_TO_PREVIEW: Record<Theme['palette']['mode'], {title: string; url: string}> = {
    dark: {
        title: "USA / San Francisco / Golden Bridge",
        url: "/images/landing-page/introduction-screen/dark/fullsize.jpg"
    },
    light: {        
        title: "Germany / Hamburg / Fiction Park",
        url: "/images/landing-page/introduction-screen/light/fullsize.jpg"
    }
};

const PreviewBackgroundPicture: FunctionComponent = (props) => {
    const theme = useTheme();
    const { width } = useWindowSizes();

    const [modalIsOpened, setModalIsOpened] = useState<boolean>(false);

    function openModal(){
        setModalIsOpened(true);
    }

    if (width < 500) return <></>;

    return (
        <>
            {<ModalOpeningButton onClick={openModal}/>}

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
