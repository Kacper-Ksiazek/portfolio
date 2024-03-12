// Tools
import { styled } from "@mui/material";
import { getListOfAllPossiblePhotos } from "./utils";
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
// Other components
import CVQRCode from "./CVQRCode";
import CVAsPicture from "./CVAsPicture";
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";

const CVPreviewBase = styled("div")(({ theme }) => ({
    position: "relative",

    ".smooth-conditional-render-wrapper": {
        ...theme.mixins.absolute_full,
    },
}));

interface CVPreviewProps {
    openPDFPreview: () => void;
}

const CVPreview: React.FunctionComponent<CVPreviewProps> = (props) => {
    const { displayQRCode } = useCVContext();

    useLazyLoadedImages({
        id: "cv-preview-images", //
        srcsToLazyLoad: getListOfAllPossiblePhotos(),
    });

    return (
        <CVPreviewBase>
            <SmoothConditionalRender when={displayQRCode === false}>
                <CVAsPicture {...props} />
            </SmoothConditionalRender>

            <SmoothConditionalRender when={displayQRCode === true}>
                <CVQRCode />
            </SmoothConditionalRender>
        </CVPreviewBase>
    );
};

export default CVPreview;
