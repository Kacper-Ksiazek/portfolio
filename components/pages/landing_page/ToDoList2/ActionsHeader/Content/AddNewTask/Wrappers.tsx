// Tools
import { styled } from "@mui/material";
// Styled components
const _WrapperBlueprint = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "6px",
    width: "100%",
}));

export const AdditionalInformationWrapper = styled(_WrapperBlueprint)(({ theme }) => ({
    alignItems: "center",
    ".label-picker-select": {
        ".label-picker-adornment": {
            animationDelay: ".3s",
        },
    },
}));

export const TitleAndUrgencySwitchWrapper = styled(_WrapperBlueprint)(({ theme }) => ({
    //
}));

export const FooterActionsWrapper = styled(_WrapperBlueprint)(({ theme }) => ({
    margin: "24px 0 12px 0!important",
}));
