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
    },
    "td strong.colored": {
        background: alpha(theme.palette.primary.main, 0.7),
        padding: "4px 24px",
        borderRadius: "3px",
    },
}));
