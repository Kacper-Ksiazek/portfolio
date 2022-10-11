// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Styled Components
const LazyLoadedImagesBase = styled("div")(({ theme }) => ({
    display: "none",
    img: {
        width: "1px",
        height: "1px",
    },
}));

const LazyLoadedImages: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return <LazyLoadedImagesBase id="use-lazy-loaded-images-wrapper"></LazyLoadedImagesBase>;
};

export default LazyLoadedImages;
