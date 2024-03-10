// Tools
import { styled } from "@mui/material";
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
import { getListOfAllPossiblePhotos } from "./utils";
// Types
import type { DataToVisualizeCV } from "./@types";
// Other components
import CVAsPicture from "./CVAsPicture";
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";

const CVPreviewBase = styled("div")(({ theme }) => ({
    position: "relative",

    ".smooth-conditional-render-wrapper": {
        ...theme.mixins.absolute_full,
    },
}));

interface CVPreviewProps extends DataToVisualizeCV {
    displayQRCode: boolean;

    openPDFPreview: () => void;
}

const CVPreview: React.FunctionComponent<CVPreviewProps> = (props) => {
    useLazyLoadedImages({
        id: "cv-preview-images", //
        srcsToLazyLoad: getListOfAllPossiblePhotos(),
    });

    return (
        <CVPreviewBase>
            <SmoothConditionalRender when={props.displayQRCode === false}>
                <CVAsPicture {...props} />
            </SmoothConditionalRender>
        </CVPreviewBase>
    );
};

export default CVPreview;
