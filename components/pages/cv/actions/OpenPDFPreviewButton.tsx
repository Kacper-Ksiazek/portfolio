// Other components
import StyledButton from "@/components/atoms/forms/StyledButton";
// Material UI Icons
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

interface OpenPDFPreviewButtonProps {
    handleOpenPDFPreview: () => void;
}

const OpenPDFPreviewButton: React.FunctionComponent<OpenPDFPreviewButtonProps> = (props) => {
    return (
        <StyledButton
            componentThemeID="PRIMARY" //
            onClick={props.handleOpenPDFPreview}
        >
            <PictureAsPdfRoundedIcon sx={{ mr: "8px" }} />
            <span>Open PDF preview</span>
        </StyledButton>
    );
};

export default OpenPDFPreviewButton;
