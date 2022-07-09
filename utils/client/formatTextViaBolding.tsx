// Tools
import { styled } from "@mui/system";
// Types
import type { ReactNode } from "react";
// Styled components
const StyledStrong = styled("strong")(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default (text: string): ReactNode => {
    return text.split("*").map((textPiece, index) => {
        if (!(index % 2)) return textPiece;
        else return <StyledStrong key={index}>{textPiece}</StyledStrong>;
    });
};
