// Tools
import { generateBackgroundImagePropertyValue } from "./utils/generateBackgroundImagePropertyValue";
// Types
import type { DataToVisualizeCV } from "../@types";
// Styled components
import CVPreviewBase from "./Base";

interface CVAsPictureProps extends DataToVisualizeCV {
    openPDFPreview: () => void;
}

const CVAsPicture: React.FunctionComponent<CVAsPictureProps> = (props) => {
    return (
        <CVPreviewBase
            sx={{
                backgroundImage: generateBackgroundImagePropertyValue(props),
            }}
            onClick={props.openPDFPreview}
        />
    );
};

export default CVAsPicture;
