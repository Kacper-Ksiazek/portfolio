// Tools
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
import { generateBackgroundImagePropertyValue } from "./utils/generateBackgroundImagePropertyValue";
// Styled components
import CVPreviewBase from "./Base";

interface CVAsPictureProps {
    openPDFPreview: () => void;
}

const CVAsPicture: React.FunctionComponent<CVAsPictureProps> = (props) => {
    const { cvToDownload } = useCVContext();

    return (
        <CVPreviewBase
            sx={{
                backgroundImage: generateBackgroundImagePropertyValue({
                    language: cvToDownload.lang,
                    variant: cvToDownload.variant,
                }),
            }}
            onClick={props.openPDFPreview}
        />
    );
};

export default CVAsPicture;
