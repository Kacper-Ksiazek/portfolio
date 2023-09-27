// Tools
import { styled } from "@mui/material";
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
    display: "block",
    background: theme.palette.background.MUIFormElementsBackground,
    width: "100%",
    padding: "8px 0 ",
    textAlign: "center",
    borderRadius: "3px",
    border: `1px solid ${theme.palette.background.MUIFormElementsBorder}`,
    margin: "12px 0 24px 0",

    "span.content": {
        opacity: 0.8,
        fontsize: "18px",
        letterspacing: "1px",
        transition: "transform .3s, opacity .3s",
    },

    button: {
        marginLeft: "2px",
        transition: "transform .3s",
        svg: {
            fontSize: "24px",
            transition: "color .3s",
        },
        "&:hover": {
            svg: {
                color: theme.palette.primary.main,
            },
        },
    },

    "&:hover": {
        "span.content": {
            opacity: 1,
        },

        button: {
            transform: "scale(1.1)",
        },
    },
}));

interface ContentToCopyProps {
    tooltip: string;
    header: string;
    content: string;

    startAdornment?: ReactNode;

    onClick: () => void;
}

const ContentToCopy: FunctionComponent<ContentToCopyProps> = (props) => {
    return (
        <>
            <Typography variant="h5">{props.header}</Typography>

            <Tooltip title={props.tooltip} placement="top">
                <ContentToCopyBase onClick={props.onClick}>
                    <span className="content">{props.content}</span>
                    <IconButton>
                        <ContentCopy />
                    </IconButton>
                </ContentToCopyBase>
            </Tooltip>
        </>
    );
};

export default ContentToCopy;
