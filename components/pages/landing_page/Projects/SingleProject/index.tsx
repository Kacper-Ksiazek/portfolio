// Tools
import { styled, alpha } from "@mui/system";
import { shapesOnHoverAnimations } from "@/components/pages/_shared/single-project/Thumbnail/onHover";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Material UI Components
import Typography from "@mui/material/Typography";
// Other components
import Link from "next/Link";
import Duration from "@/components/pages/_shared/single-project/Duration";
import Thumbnail from "@/components/pages/_shared/single-project/Thumbnail";
import Technologies from "@/components/pages/_shared/single-project/Technologies";
// Styled components
const SingleProjectBase = styled("div")(({ theme }) => ({
    width: "calc(50% - 100px)",
    minHeight: "250px",
    position: "relative",
    display: "flex",
    padding: "8px",
    boxSizing: "border-box",
    justifyContent: "space-between",
    alignItems: "center",
    ".thumbnail-wrapper": {
        height: "200px",
        width: "240px",
    },
    "&:nth-of-type(odd)": {
        ".single-project-text-content-wrapper": {
            marginRight: "20px",
        },
        "&::before": {
            left: 0,
        },
    },
    "&:nth-of-type(even)": {
        alignSelf: "flex-end",
        flexDirection: "row-reverse",
        ".single-project-text-content-wrapper": {
            marginLeft: "20px",
        },
        "&::before": {
            left: 0,
        },
    },
    "&::before": {
        content: "''",
        top: 0,
        position: "absolute",
        height: "100%",
        width: "80px",
        background: alpha(theme.palette.secondary.main, 0.1),
        borderRadius: "3px",
        transition: "width .3s ease-out",
    },
    "&:hover": {
        "&::before": {
            width: "100%",
        },
        ".thumbnail-wrapper": {
            ...(shapesOnHoverAnimations as any),
        },
    },
}));
const Redirection = styled("a")(({ theme }) => ({
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    zIndex: 10,
    cursor: "pointer",
}));
const SingleProjectTextContent = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "250px",
    width: "calc(100% - 250px)",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 2,
}));

interface SingleProjectProps {
    data: Project;
}

const SingleProject: FunctionComponent<SingleProjectProps> = (props) => {
    return (
        <SingleProjectBase>
            <Link href={`/projects/${props.data.id}`}>
                <Redirection />
            </Link>
            <SingleProjectTextContent className="single-project-text-content-wrapper">
                <Technologies technologies={props.data.releventTechnologies.slice(0, 5)} />
                <Typography variant="h4">{props.data.title}</Typography>
                <Duration end={props.data.end} start={props.data.start} smaller />
                <Typography variant="body2" sx={{ mt: "16px" }}>
                    {props.data.shortDescription}
                </Typography>
            </SingleProjectTextContent>
            <Thumbnail folder={props.data.folder} />
        </SingleProjectBase>
    );
};

export default SingleProject;
