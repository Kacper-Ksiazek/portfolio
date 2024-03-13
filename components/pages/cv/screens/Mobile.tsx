// Other components
import Stack from "@mui/material/Stack";
import * as CVComponents from "@/components/pages/cv";
import QRCode from "@/components/pages/cv/CVPreview/CVQRCode";

interface CVMobileScreenProps {
    handleOpenPDFPreview: () => void;
}

const CVMobileScreen: React.FunctionComponent<CVMobileScreenProps> = (props) => {
    const { handleOpenPDFPreview } = props;

    return (
        <>
            <h2 style={{ fontSize: "32px", margin: "0 0 24px 0" }}>Kacper Książek | CV</h2>

            <QRCode />

            <CVComponents.Actions.OpenPDFPreviewButton handleOpenPDFPreview={handleOpenPDFPreview} />

            <br />

            <Stack
                direction="row" //
                justifyContent="space-between"
                sx={{ width: "100%" }}
                alignItems="center"
            >
                <CVComponents.Actions.PickLanguage />
                <CVComponents.Actions.PickColorTheme />
            </Stack>
        </>
    );
};

export default CVMobileScreen;
