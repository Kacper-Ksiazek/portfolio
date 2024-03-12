// Tools
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
// Other components
import FileSize from "./FileSize";
import StyledButton from "@/components/atoms/forms/StyledButton";
// Material UI Icons
import SaveAltRoundedIcon from "@mui/icons-material/SaveAltRounded";

const SaveCVButton: React.FunctionComponent = () => {
    const { cvToDownload } = useCVContext();
    const { format, lang, variant } = cvToDownload;

    function handleDownloadCVPNG() {
        const url = `/api/download_cv?format=${format}&lang=${lang}&variant=${variant}`;
        window.open(url, "_blank");
    }

    return (
        <StyledButton
            componentThemeID="TEXT_PRIMARY" //
            subtleHoverEffect
            onClick={handleDownloadCVPNG}
        >
            <SaveAltRoundedIcon sx={{ mr: "8px" }} />
            <span>Download</span>
            <FileSize />
        </StyledButton>
    );
};

export default SaveCVButton;
