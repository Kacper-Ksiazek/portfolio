// Tools
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
// Other components
import StyledButton from "@/components/atoms/forms/StyledButton";
// Material UI Icons
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";

const ShowQRCodeButton: React.FunctionComponent = () => {
    const { setDisplayQRCode } = useCVContext();

    function handleOnClick() {
        setDisplayQRCode((val) => !val);
    }

    return (
        <StyledButton
            onClick={handleOnClick} //
            componentThemeID="TEXT_PRIMARY"
            subtleHoverEffect
        >
            <QrCode2RoundedIcon sx={{ mr: "8px" }} />
            <span>Show QR code</span>
        </StyledButton>
    );
};

export default ShowQRCodeButton;
