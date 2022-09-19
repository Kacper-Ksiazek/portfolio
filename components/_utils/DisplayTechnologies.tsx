// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Types
import type { FunctionComponent } from "react";
// Styled components
const DisplayTechnologiesWrapper = styled("ul")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    listStyleType: "none",
    margin: "0",
    padding: "0",
}));
const SingleTechnology = styled("li")(({ theme }) => ({
    borderRadius: "3px",
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "2px 15px",
    margin: "10px 10px 0 0 ",
    ["@media (max-width:600px)"]: {
        margin: "6px 6px 0 0 ",
    },
}));

interface DisplayTechnologiesProps {
    technologies: string[];
    /** Expressed in seconds */
    firstAnimationDelay?: number;
}

const DisplayTechnologies: FunctionComponent<DisplayTechnologiesProps> = (props) => {
    return (
        <DisplayTechnologiesWrapper className="technologies">
            {props.technologies.map((item, index) => {
                return (
                    <SingleTechnology
                        key={index} //
                        className="single-technology"
                        sx={props.firstAnimationDelay ? { animation: `${fadeSimple} .2s ${props.firstAnimationDelay + index * 0.05}s both linear` } : null}
                    >
                        {item}
                    </SingleTechnology>
                );
            })}
        </DisplayTechnologiesWrapper>
    );
};

export default DisplayTechnologies;
