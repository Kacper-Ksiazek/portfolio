// Tools
import { styled } from "@mui/material";
// Styled components
const RedirectionBase = styled("a")(({ theme }) => ({
    position: "relative",
    color: theme.palette.text.primary,
    opacity: 0.8,
    transition: "opacity 0.3s, color 0.3s",

    "&:hover": {
        opacity: 1,
        color: theme.palette.primary.main,
    },

    svg: {
        fontSize: "42px",
        color: "inherit",
    },
    ...theme.mixins.flex_center,
    "&:not(&:nth-child(1))": {
        "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "-18px",
            background: theme.palette.text.primary,
            opacity: 0.2,
            width: "8px",
            aspectRatio: "1/1",
            borderRadius: "50%",
            transform: "translateY(-50%)",
        },
    },
}));

interface RedirectionProps {
    icon: React.ReactElement;
    url: string;
}

const Redirection: React.FunctionComponent<RedirectionProps> = (props) => {
    return (
        <RedirectionBase href={props.url} target="_blank" rel="noreferrer">
            {props.icon}
        </RedirectionBase>
    );
};

export default Redirection;
