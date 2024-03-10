// Tools
import { styled } from "@mui/material";
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
import { applyCVAsBackground, getListOfAllPossiblePhotos } from "./utils";
// Types
import type { CV } from "@/@types/pages/CV";
import type { FunctionComponent } from "react";
// Styled components
const CVPreviewBase = styled("div")(({ theme }) => ({
    backgroundPosition: "top center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    transition: "background-image 0.3s ease-in-out",
}));

interface CVPreviewProps {
    displayQRCode: boolean;
    language: CV.Language;
    variant: CV.Variant;

    onClick: () => void;
}

const CVPreview: FunctionComponent<CVPreviewProps> = (props) => {
    useLazyLoadedImages({
        id: "cv-preview-images", //
        srcsToLazyLoad: getListOfAllPossiblePhotos(),
    });

    return (
        <CVPreviewBase
            onClick={props.onClick} //
            sx={props.displayQRCode === false ? applyCVAsBackground(props) : {}}
        >
            {/*  */}
        </CVPreviewBase>
    );
};

export default CVPreview;
