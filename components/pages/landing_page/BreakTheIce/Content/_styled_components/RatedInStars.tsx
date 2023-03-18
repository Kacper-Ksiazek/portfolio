// Tools
import { styled, alpha } from "@mui/material";
import { fadeFromLeft } from "@/components/keyframes/intro";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Icons
import Star from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";
import StarBorder from "@mui/icons-material/StarBorder";
// Styled components
const SingleLanguageBase = styled("div", {
    shouldForwardProp: (prop: string) => !["animationDelay"].includes(prop),
})<{ animationDelay: number }>(({ theme, ...props }) => ({
    display: "flex",
    alignItems: "center",
    position: "relative",
    animation: `${fadeFromLeft} .3s ${props.animationDelay}s both`,
    "&:not(&:nth-of-type(1))": {
        marginTop: "5px",
    },
    ["@media (max-width:600px)"]: {
        flexWrap: "wrap",
        "&:not(&:nth-of-type(1))": {
            marginTop: "24px",
            "&::before": {
                content: "''",
                position: "absolute",
                top: "-12px",
                width: "75%",
                height: "2px",
                background: alpha("#000", 0.1),
            },
        },
    },
}));
const Description = styled("span")(({ theme }) => ({
    fontWeight: 300,
    width: "calc(100% - 90px - 120px - 20px)",
    color: alpha(theme.palette.text.primary, 0.8),
    ["@media (max-width:600px)"]: {
        width: "100%",
        marginTop: "5px",
    },
}));
const Name = styled("span")(({ theme }) => ({
    fontSize: "18px",
    width: "90px",
}));

const StarsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "0 10px",
    width: "120px",
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
    for (let i = 0; i < Math.floor(props.stars); i++) stars.push(<Star key={stars.length} />);

    if (String(props.stars).split(".").length === 2) {
        stars.push(<StarHalf key={stars.length} />);
        for (let i = 0; i < 4 - props.stars; i++) stars.push(<StarBorder key={stars.length} />);
    } else {
        for (let i = 0; i < 5 - props.stars; i++) stars.push(<StarBorder key={stars.length} />);
    }

    return (
        <SingleLanguageBase animationDelay={props.animationDelay}>
            <Name>{props.name}</Name>
            <StarsWrapper>{stars.map((item, index) => item)}</StarsWrapper>
            <Description>{props.description}</Description>
        </SingleLanguageBase>
    );
};

export default SingleLanguage;
