// Tools
import { styled } from "@mui/material";
//
import _LeftHorizontal from "./_LeftHorizontal";
import _LeftVertical from "./_LeftVertical";
import _RightHorizontal from "./_RightHorizontal";
import _RightVertical from "./_RightVertical";
// Styled components
export default styled("span")(({ theme }) => ({
    position: "absolute",
    borderRadius: "3px",
    ...(_LeftHorizontal as any),
    ...(_LeftVertical as any),
    ...(_RightHorizontal as any),
    ...(_RightVertical as any),
}));
