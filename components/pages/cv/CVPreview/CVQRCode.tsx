// Tools
import { styled } from "@mui/material";
import { useSnackbar } from "@/hooks/useSnackbar";
import { getParticularCV } from "@/utils/serverless/cv";
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
// Material UI Icons
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
// Other components
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import StyledButton from "@/components/atoms/forms/StyledButton";

const CVQRCodeBase = styled("div")(({ theme }) => ({
    ...theme.mixins.absolute_full,
    paddingTop: "64px",
    maxWidth: "calc(100vw - 16px)",
    margin: "0 auto",

    "div.content": {
        margin: "0 auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: "32px",
        width: "100%",
        maxWidth: "500px",

        "div.buttons-wrapper": {
            gap: "8px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            "@media (max-width: 1000px)": {
                gridTemplateColumns: "1fr",
            },
        },
    },

    "div#qr-code": {
        width: "100%",
        aspectRatio: "1/1",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.3s",
    },

    "@media (max-width:1000px)": {
        paddingTop: "0",
        position: "relative",
        width: "100%",
    },
}));

const CVQRCode: React.FunctionComponent = () => {
    const { displaySnackbar } = useSnackbar();
    const { cvToDownload, setDisplayQRCode } = useCVContext();

    const QRFileName: string = `QR_${cvToDownload.lang}_${cvToDownload.variant}`.toUpperCase();
    const url: string = `/assets/cv/${cvToDownload.lang}/QR/${QRFileName}.png`;

    useLazyLoadedImages({
        id: "cv-qr-code",
        srcsToLazyLoad: [
            "/assets/cv/pl/QR/QR_PL_LIGHT.png", //
            "/assets/cv/pl/QR/QR_PL_DARK.png",
            "/assets/cv/en/QR/QR_EN_LIGHT.png",
            "/assets/cv/en/QR/QR_EN_DARK.png",
        ],
    });

    function copyToClipboard() {
        const { path: pdfRelativePath } = getParticularCV({
            lang: cvToDownload.lang,
            variant: cvToDownload.variant,
            format: "pdf",
            clientSide: true,
        });

        const urlToCopy = `https://kacper-ksiazek-portfolio.vercel.app/${pdfRelativePath}`;

        navigator.clipboard.writeText(urlToCopy);

        displaySnackbar({
            msg: "The url to my CV has been copied to the clipboard!",
            severity: "info",
            hideAfter: 3000,
        });
    }

    function closeQRCodePreview() {
        setDisplayQRCode(false);
    }

    return (
        <CVQRCodeBase>
            <div className="content">
                <div
                    id="qr-code" //
                    style={{
                        backgroundImage: `url(${url})`,
                    }}
                />

                <div className="buttons-wrapper">
                    <StyledButton onClick={copyToClipboard}>
                        <ContentCopyRoundedIcon sx={{ mr: "8px" }} />
                        <span>Copy PDF url</span>
                    </StyledButton>

                    <StyledButton
                        className="only-big-viewports" //
                        onClick={closeQRCodePreview}
                        componentThemeID="ERROR"
                    >
                        <CloseRoundedIcon sx={{ mr: "2px" }} />
                        <span>Close</span>
                    </StyledButton>
                </div>
            </div>
        </CVQRCodeBase>
    );
};

export default CVQRCode;
