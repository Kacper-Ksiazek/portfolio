// Tools
import { styled } from "@mui/system";
// Styled components
export const BottomInformation = styled("span")(({ theme }) => ({
    fontSize: "18px",
    userSelect: "none",
}));

export const PicturesWrapper = styled("section")(({ theme }) => ({
    width: "100%",
    marginBottom: "20px",
    maxWidth: "800px",
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
}));
