// Tools
import { styled } from "@mui/system";
// Types
import type { ReactNode } from "react";
// Styled components
const StyledStrong = styled("strong")(({ theme }) => ({
    color: theme.palette.secondary.main,
}));
const StyledPrimaryStrong = styled("strong")(({ theme }) => ({
    color: theme.palette.primary.main,
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default (text: string, usePrimaryColorInstead?: boolean): ReactNode => {
    return text.split("*").map((textPiece, index) => {
        if (!(index % 2)) return textPiece;
        else {
            if (usePrimaryColorInstead) return <StyledPrimaryStrong key={index}>{textPiece}</StyledPrimaryStrong>;
            else return <StyledStrong key={index}>{textPiece}</StyledStrong>;
        }
    });
};
