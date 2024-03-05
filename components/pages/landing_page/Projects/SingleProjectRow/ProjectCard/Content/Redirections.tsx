// Tools
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "../../css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import { InternalRedirection, ExternalRedirection } from "@/components/atoms/redirections";
// Styled components
const RedirectionsBase = styled("div")(({ theme }) => ({
    marginTop: "16px",
    alignSelf: "flex-start",
    ["@media (max-width:500px)"]: {
        width: "100%",
        marginTop: "32px",
    },

    ".redirect": {
        padding: "0 20px",
        height: "36px",
        fontSize: "16px",
        svg: {
            fontSize: "22px !important",
        },
    },
    "&.double": {
        ".redirect": {
            "@media (max-width:1250px)": {
                padding: "4px 12px",
                fontSize: "16px",
                svg: {
                    fontSize: "20px !important",
                },
            },
            "@media (max-width:1180px) and (min-width: 1000px)": {
                padding: "4px 4px",
            },
        },
    },
    "@media (max-width:750px)": {
        ".redirect": {
            padding: "0 20px",
            height: "42px",
            fontSize: "18px",
            svg: {
                fontSize: "24px !important",
            },
        },
    },
}));

interface RedirectionsProps {
    id: string;
    hasSubpage: boolean;
    liveDemoURL: string | null;
}

const Redirections: FunctionComponent<RedirectionsProps> = (props) => {
    if (props.hasSubpage === false && props.liveDemoURL === null) return <></>;

    return (
        <RedirectionsBase className={`${CSS_REFERENCES.PROJECT_CARD.REDIRECTIONS} ${props.liveDemoURL ? "double" : ""}`}>
            {props.hasSubpage && <InternalRedirection url={`/projects/${props.id}`}>See details</InternalRedirection>}

            {(() => {
                if (props.liveDemoURL) {
                    return <ExternalRedirection url={props.liveDemoURL}>Live demo</ExternalRedirection>;
                }
            })()}
        </RedirectionsBase>
    );
};

export default Redirections;
