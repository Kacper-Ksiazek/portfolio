// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Styled components
const TechnologiesWrapper = styled("div")(({ theme }) => ({
    display: "flex",
}));
const SingleTechnology = styled("div")(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    padding: "0 6px",
    userSelect: "none",
    fontSize: "14px",
    borderRadius: "3px",
    position: "relative",
    "&:not(&:nth-of-type(1))": {
        marginLeft: "5px",
    },
}));

const ThereAreMoreTechnologies = styled("span")(({ theme }) => ({
    fontSize: "20px",
    lineHeight: "20px",
    marginLeft: "8px",
}));

interface TechnologiesProps {
    technologies: string[];
    thereAreMoreTechnologies?: boolean;
}

const Technologies: FunctionComponent<TechnologiesProps> = (props) => {
    return (
        <TechnologiesWrapper className="technologies-wrapper">
            {props.technologies.map((item, index) => {
                return (
                    <SingleTechnology key={item} className="single-technology">
                        {item}
                    </SingleTechnology>
                );
            })}
            {(() => {
                if (props.thereAreMoreTechnologies) {
                    return <ThereAreMoreTechnologies className="there-are-more-technologies">...</ThereAreMoreTechnologies>;
                }
            })()}
        </TechnologiesWrapper>
    );
};

export default Technologies;
