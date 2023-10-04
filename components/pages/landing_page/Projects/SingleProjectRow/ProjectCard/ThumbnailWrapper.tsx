// Tools
import { styled } from "@mui/material";
import { useRouter } from "next/router";
import { SELECTORS } from "../css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import Thumbnail from "@/components/atoms/single_project/Thumbnail";
// Styled Components
const ThumbnailWrapperBase = styled("div")(({ theme }) => ({
    "@media (max-width:750px)": {
        width: "100%",
        marginBottom: "6px",
    },
    [SELECTORS.THUMBNAIL.WRAPPER]: {
        height: "200px",
        width: "240px",
        position: "relative",
        "&::after": {
            content: "''",
            zIndex: 5,
            ...theme.mixins.absolute_full,
            background: theme.palette.primary.main,
        },
        "@media (max-width:1000px)": {
            height: "240px",
            width: "320px",
        },
        "@media (max-width:800px)": {
            height: "200px",
            width: "240px",
        },
        "@media (max-width:750px)": {
            marginBottom: "16px",
            width: "100%",
            height: "auto",
            maxWidth: "500px",
            aspectRatio: "3/2",
        },
    },
}));

interface ThumbnailWrapperProps {
    id: string;
    folder: string;
}

const ThumbnailWrapper: FunctionComponent<ThumbnailWrapperProps> = (props) => {
    const router = useRouter();

    function redirect() {
        router.push(`/projects/${props.id}`);
    }

    return (
        <ThumbnailWrapperBase>
            <Thumbnail folder={props.folder} onClick={redirect} />
        </ThumbnailWrapperBase>
    );
};

export default ThumbnailWrapper;
