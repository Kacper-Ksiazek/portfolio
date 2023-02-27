// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Styled Components
const LazyLoadedImagesBase = styled("div")(({ theme }) => ({
    display: "none",
    img: {
        width: "1px",
        height: "1px",
    },
}));

const LazyLoadedImages: FunctionComponent = () => {
    return <LazyLoadedImagesBase id="use-lazy-loaded-images-wrapper"></LazyLoadedImagesBase>;
};

export default LazyLoadedImages;
