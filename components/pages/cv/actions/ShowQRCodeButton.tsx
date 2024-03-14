// Tools
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
// Other components
import StyledButton from "@/components/atoms/forms/StyledButton";
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";
// Material UI Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";

const ShowQRCodeButton: React.FunctionComponent = () => {
    const { setDisplayQRCode, displayQRCode } = useCVContext();

    function handleOnClick() {
        setDisplayQRCode((val) => !val);
    }

    return (
        <StyledButton
            onClick={handleOnClick} //
            componentThemeID={displayQRCode ? "ERROR" : "TEXT"}
            subtleHoverEffect
            sx={{
                "&>*": {
                    display: "flex",
                    alignItems: "center",
                },
            }}
        >
            <SmoothConditionalRender when={displayQRCode === false}>
                <QrCode2RoundedIcon sx={{ mr: "8px" }} />
                <span>Show QR code</span>
            </SmoothConditionalRender>

            <SmoothConditionalRender when={displayQRCode === true}>
                <CloseRoundedIcon sx={{ mr: "2px" }} />
                <span>Close QR screen</span>
            </SmoothConditionalRender>
        </StyledButton>
    );
};

export default ShowQRCodeButton;
