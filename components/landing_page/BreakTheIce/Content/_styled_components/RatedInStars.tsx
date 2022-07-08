// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/fadeFromLeft";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Icons
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
// Styled components
const SingleLanguageWrapper = styled("div", {
    shouldForwardProp: (prop: string) => !["animationDelay"].includes(prop),
})<{ animationDelay: number }>(({ theme, ...props }) => ({
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    animation: `${fadeFromLeft} .3s ${props.animationDelay}s both`,
    "&:nth-of-type(1)": {
        marginTop: 0,
    },
}));
const Description = styled("span")(({ theme }) => ({
    fontWeight: 300,
}));
const Name = styled("span")(({ theme }) => ({
    fontSize: "18px",
    width: "75px",
}));

const StarsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "0 10px",
    alignItems: "center",
    svg: {
        color: theme.palette.primary.main,
        width: "24px",
        height: "24px",
    },
}));

interface SingleLanguageProps {
    name: string;
    stars: number;
    description: string;
    animationDelay: number;
}

const SingleLanguage: FunctionComponent<SingleLanguageProps> = (props) => {
    const stars: ReactNode[] = [];
    for (let i = 0; i < props.stars; i++) stars.push(<Star key={stars.length} />);
    for (let i = 0; i < 5 - props.stars; i++) stars.push(<StarBorder key={stars.length} />);

    return (
        <SingleLanguageWrapper animationDelay={props.animationDelay}>
            <Name>{props.name}</Name>
            <StarsWrapper>{stars.map((item, index) => item)}</StarsWrapper>
            <Description>{props.description}</Description>
        </SingleLanguageWrapper>
    );
};

export default SingleLanguage;
