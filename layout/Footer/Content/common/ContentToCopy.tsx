// Tools
import { alpha, styled } from "@mui/material";
import { useSnackbar } from "@/hooks/useSnackbar";
import { fadeSimple, scaleFromLeft } from "@/components/keyframes/intro";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// Material UI Icons
import ContentCopy from "@mui/icons-material/ContentCopy";
// Styled components
const ContentToCopyBase = styled("div")(({ theme }) => ({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.primary.main,
    width: "100%",
    padding: "8px 0 ",
    borderRadius: "3px",
    margin: "12px 0 24px 0",
    animation: `${scaleFromLeft} .24s .2s both linear`,
    color: "#fff",
    fontSize: "20px",

    "&>*": {
        animation: `${fadeSimple} .2s .5s both linear`,
    },

    "span.content": {
        fontWeight: 500,
        transition: "transform .3s, opacity .3s",
    },

    button: {
        marginLeft: "2px",
        transition: "transform .3s",
        svg: {
            color: "#fff",
            fontSize: "24px",
        },
    },

    "&:hover": {
        button: {
            transform: "scale(1.1)",
        },
    },
}));

interface ContentToCopyProps {
    tooltip: string;
    header: string;
    startAdornment?: ReactNode;

    contentToCopy: {
        value: string;
        snackbarMsg: string;
    };
}

const ContentToCopy: FunctionComponent<ContentToCopyProps> = (props) => {
    const { displaySnackbar } = useSnackbar();

    function copyToClipboard() {
        if (!navigator) return;

        navigator.clipboard.writeText(props.contentToCopy.value);

        displaySnackbar({
            msg: props.contentToCopy.snackbarMsg,
            severity: "info",
            hideAfter: 5000,
        });
    }

    return (
        <>
            <Typography
                variant="h5"
                sx={{
                    color: "#fff",
                    animation: `${fadeSimple} .24s .4s both linear`,
                }}
            >
                {props.header}
            </Typography>

            <Tooltip title={props.tooltip} placement="top">
                <ContentToCopyBase onClick={copyToClipboard}>
                    {props.startAdornment ?? <></>}

                    <span className="content">{props.contentToCopy.value}</span>

                    <IconButton
                        sx={{
                            animation: `${fadeSimple} .24s .5s both linear`,
                        }}
                    >
                        <ContentCopy />
                    </IconButton>
                </ContentToCopyBase>
            </Tooltip>
        </>
    );
};

export default ContentToCopy;
