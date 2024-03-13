// Tools
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Other components
import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as CVComponents from "@/components/pages/cv";

interface CVDesktopScreenProps {
    handleOpenPDFPreview: () => void;
}

const CVDesktopScreen: React.FunctionComponent<CVDesktopScreenProps> = (props) => {
    const { handleOpenPDFPreview } = props;

    return (
        <>
            <Stack gap={1}>
                <Stack
                    id="cv-breadcrumbs" //
                    direction="row"
                    spacing="8px"
                    sx={{ a: { color: "inherit", textDecoration: "none" } }}
                >
                    <Link href="/?skip-introduction-screen-rectangle-animations=true">Home</Link>
                    <span>/</span>
                    <strong>CV</strong>
                </Stack>

                <h1 className="alternative-font-family">Curriculum vitae</h1>

                <Stack direction="row" justifyContent="space-between">
                    <CVComponents.Actions.PickLanguage />
                    <CVComponents.Actions.PickColorTheme />
                </Stack>

                <p>
                    {formatTextViaBolding(
                        `
                            You can save my CV in either *PDF* or *PNG* format.
                            Also, you can preview it in your browser buit-in PDF viewer by clicking the *Open PDF preview* button or at the image itself.
                            ` //
                    )}
                </p>

                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    <CVComponents.Actions.OpenPDFPreviewButton handleOpenPDFPreview={handleOpenPDFPreview} />
                    <CVComponents.Actions.ShowQRCodeButton />

                    <CVComponents.Actions.SaveCVButton />
                    <CVComponents.Actions.PickFormat />
                </Box>

                <span style={{ flexGrow: 1 }}></span>

                <CVComponents.Actions.GoHome />

                <CVComponents.SocialMediaRedirections />
            </Stack>

            <CVComponents.CVPreview openPDFPreview={handleOpenPDFPreview} />
        </>
    );
};

export default CVDesktopScreen;
