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
    "&:not(&:nth-of-type(1))": {
        marginLeft: "5px",
    },
}));
interface TechnologiesProps {
    technologies: string[];
}

const Technologies: FunctionComponent<TechnologiesProps> = ({ technologies }) => {
    return (
        <TechnologiesWrapper className="technologies-wrapper">
            {technologies.map((item, index) => {
                return (
                    <SingleTechnology key={item} className="single-technology">
                        {item}
                    </SingleTechnology>
                );
            })}
        </TechnologiesWrapper>
    );
};

export default Technologies;
