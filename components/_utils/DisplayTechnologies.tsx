// Tools
import { styled } from "@mui/system";
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
}));

interface DisplayTechnologiesProps {
    technologies: string[];
}

const DisplayTechnologies: FunctionComponent<DisplayTechnologiesProps> = (props) => {
    return (
        <DisplayTechnologiesWrapper>
            {props.technologies.map((item, index) => {
                return (
                    <SingleTechnology key={index} className="single-technology">
                        {item}
                    </SingleTechnology>
                );
            })}
        </DisplayTechnologiesWrapper>
    );
};

export default DisplayTechnologies;
