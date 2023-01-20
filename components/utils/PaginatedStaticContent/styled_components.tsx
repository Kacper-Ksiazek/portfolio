// Tools
import { styled, alpha } from "@mui/system";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

export const Ellipsis = styled("span")(({ theme }) => ({
    paddingTop: "6px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
}));

export const PaginationStep = styled(StyledButton)(({ theme }) => ({
    fontSize: "20px",
    width: "42px",
    height: "42px",
    "&:disabled": {
        color: alpha("#fff", 0.3),
    },
    "&.unclickable": {
        cursor: "default",
        background: `${theme.palette.primary.main} !important`,
        color: "#fff",
        borderColor: theme.palette.primary.main,
    },
}));

export const PaginationWrapper = styled("ul")(({ theme }) => ({
    width: "100%",
    marginTop: "32px",
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 0,
    li: {
        "&:not(&:nth-of-type(1))": {
            marginLeft: "8px",
        },
    },
}));
