// Tools
import { styled } from "@mui/material";
// Styled components
export const StyledFlexWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    marginTop: "4px",
}));

export const ProgressTrackerBase = styled(StyledFlexWrapper)(({ theme }) => ({
    "@media (max-width:660px)": {
        flexDirection: "column",
        ".progress-tracker-single-label": {
            width: "100%",
            "&:not(&:nth-of-type(1))": {
                marginLeft: "0",
                marginTop: "12px",
            },
        },
    },
}));
