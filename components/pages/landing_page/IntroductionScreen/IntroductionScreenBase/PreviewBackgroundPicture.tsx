// Tools
import { useState } from "react";
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
// Other components
import ImageModal from "@/components/utils/ImageModel";
// Material UI Icons
import Panorama from "@mui/icons-material/Panorama";
// Styled components

const PreviewBackgroundPictureBase = styled(Button)(({ theme }) => ({
    position: "absolute",
    zIndex: 20,
    bottom: "64px",
    right: "128px",
    minWidth: "auto",
    padding: "6px 16px",
    color: theme.palette.background.lightAnimationBar,
    borderRadius: "4px",
    svg: {
        fontSize: "24px",
    },
    animation: `${fadeSimple} .3s 6s both linear`,
    ["@media (max-width:1600px)"]: {
        bottom: "32px",
        right: "32px",
    },
    ["@media (max-width:500px)"]: {
        bottom: "16px",
        right: "16px",
    },
}));

const PreviewBackgroundPicture: FunctionComponent = (props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <>
            <Tooltip title="Preview background photo" placement="top">
                <PreviewBackgroundPictureBase
                    variant="outlined" //
                    color="inherit"
                    onClick={() => setOpenModal(true)}
                    id="background-picture-preview-button"
                >
                    <Panorama />
                </PreviewBackgroundPictureBase>
            </Tooltip>

            {(() => {
                if (openModal) {
                    return (
                        <ImageModal
                            open={openModal} //
                            onClose={() => setOpenModal(false)}
                            imageURL="/images/landing-page/introduction-screen/fullsize.jpg"
                            title="Germany / Hamburg / Fiction Park"
                        />
                    );
                }
            })()}
        </>
    );
};

export default PreviewBackgroundPicture;
