// Tools
import { styled, alpha } from "@mui/system";
// Types
import type { GalleryProps } from "./@types";
import type { FunctionComponent } from "react";
// Material UI Icons
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
// Styled components
const GalleryNavigationButtonWrapper = styled("div", {
    shouldForwardProp: (prop: string) => !["side"].includes(prop),
})<{ side: "left" | "right" }>(({ theme, ...props }) => ({
    position: "absolute",
    top: "0",
    width: "50%",
    height: "100%",
    zIndex: 10,
    [props.side === "left" ? "left" : "right"]: "-20px",
    display: "flex",
    alignItems: "center",
    justifyContent: props.side === "left" ? "flex-start" : "flex-end",
    cursor: "pointer",
    svg: {
        color: alpha("#fff", 0.3),
        fontSize: "8rem",
        transition: "color .3s, transition .3s",
    },
    "&:not(&.disabled)": {
        "&:hover": {
            svg: {
                color: "#fff",
                transform: `scaleY(1.5)`,
            },
        },
    },
    "&.disabled": {
        cursor: "default",
        svg: {
            color: alpha("#000", 0.1),
        },
    },
}));

interface GalleryManagementProps extends GalleryProps {
    //
}

const GalleryManagement: FunctionComponent<GalleryManagementProps> = (props) => {
    const { currentIndex, imagesInTotal, setCurrentImageIndex } = props;

    const leftButtonIsDisabled: boolean = currentIndex === 0;
    const rightButtonIsDisabled: boolean = currentIndex === imagesInTotal - 1;

    const handleGoLeft = () => {
        if (leftButtonIsDisabled) return;
        setCurrentImageIndex((val) => val - 1);
    };

    const handleGoRight = () => {
        if (rightButtonIsDisabled) return;
        setCurrentImageIndex((val) => val + 1);
    };

    return (
        <>
            <GalleryNavigationButtonWrapper
                side="left" //
                className={[
                    "gallery-navigation-button", //
                    leftButtonIsDisabled ? "disabled" : "",
                ].join(" ")}
                onClick={handleGoLeft}
            >
                <ChevronLeft />
            </GalleryNavigationButtonWrapper>
            <GalleryNavigationButtonWrapper
                side="right" //
                className={[
                    "gallery-navigation-button", //
                    rightButtonIsDisabled ? "disabled" : "",
                ].join(" ")}
                onClick={handleGoRight}
            >
                <ChevronRight />
            </GalleryNavigationButtonWrapper>
        </>
    );
};

export default GalleryManagement;
