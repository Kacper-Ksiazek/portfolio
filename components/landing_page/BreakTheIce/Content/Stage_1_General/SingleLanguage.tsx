// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/fadeFromLeft";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Icons
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
// Styled components
const SingleLanguageWrapper = styled("div")(({ theme }) => ({
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    "&:nth-of-type(1)": {
        marginTop: 0,
        animation: `${fadeFromLeft} .3s 1.1s both`,
    },
    "&:nth-of-type(2)": {
        animation: `${fadeFromLeft} .3s 1.2s both`,
    },
    "&:nth-of-type(3)": {
        animation: `${fadeFromLeft} .3s 1.3s both`,
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
}

const SingleLanguage: FunctionComponent<SingleLanguageProps> = (props) => {
    const stars: ReactNode[] = [];
    for (let i = 0; i < props.stars; i++) stars.push(<Star key={stars.length} />);
    for (let i = 0; i < 5 - props.stars; i++) stars.push(<StarBorder key={stars.length} />);

    return (
        <SingleLanguageWrapper>
            <Name>{props.name}</Name>
            <StarsWrapper>{stars.map((item, index) => item)}</StarsWrapper>
            <Description>{props.description}</Description>
        </SingleLanguageWrapper>
    );
};

export default SingleLanguage;
