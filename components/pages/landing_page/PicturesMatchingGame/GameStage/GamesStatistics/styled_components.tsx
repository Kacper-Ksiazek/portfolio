// Tools
import { styled, alpha } from "@mui/system";

export const StyledTable = styled("table")(({ theme }) => ({
    fontSize: "18px",
    th: {
        background: alpha("#000", 0.6),
    },
    tr: {
        "&:nth-of-type(odd) td": {
            background: alpha("#000", 0.2),
            "&.win": {
                background: alpha(theme.palette.success.main, 0.36),
            },
        },
        "&:nth-of-type(even) td": {
            background: alpha("#000", 0.3),
            "&.win": {
                background: alpha(theme.palette.success.main, 0.52),
            },
        },
    },
    "th,td": {
        textAlign: "center",
        padding: "8px 48px",
        cursor: "default",
        height: "48px",
        "@media (max-width:1000px)": {
            height: "64px",
        },
    },
    "td strong.colored": {
        background: alpha(theme.palette.primary.main, 0.7),
        padding: "4px 24px",
        borderRadius: "3px",
    },
    "@media (max-width:500px)": {
        fontSize: "16px",
        "th,td": {
            padding: "8px 24px",
            height: "48px",
        },
    },
}));

export const TableWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    paddingBottom: "32px",
    position: "relative",
    "@media (max-width:1080px)": {
        width: "100%",
        overflowX: "scroll",
        maxWidth: "calc(100vw - 44px)",
        "&::-webkit-scrollbar": { height: "8px" },
        "&::-webkit-scrollbar-track": { boxShadow: `inset 0 0 2px ${alpha(theme.palette.primary.main, 0.3)}` },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "2px",
        },
    },
    "@media (max-width:500px)": {
        maxWidth: "calc(100vw - 24px)",
    },
}));
