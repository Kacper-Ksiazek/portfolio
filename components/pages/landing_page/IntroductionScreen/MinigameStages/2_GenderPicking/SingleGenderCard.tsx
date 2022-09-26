// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
// Styled components
const SingleGenderCardBase = styled("div")(({ theme }) => ({
    height: "300px",
    width: "240px",
    color: "#fff",
    fontFamily: "Montserrat Alternates",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background .3s",
    border: "none",

    "&:not(&:nth-of-type(1))": {
        marginLeft: "32px",
    },
    svg: {
        fontSize: "10rem",
        marginBottom: "24px",
    },
    "span.label": {
        fontSize: "24px",
    },
    "&.male": {
        background: "#2DA9D9",
        "&:hover": {
            background: theme.palette.secondary.main,
        },
    },
    "&.female": {
        background: "#B73377",
        "&:hover": {
            background: theme.palette.secondary.main,
        },
    },
}));

interface SingleGenderCardProps {
    gender: "male" | "female";
    onClick: () => void;
}

const SingleGenderCard: FunctionComponent<SingleGenderCardProps> = ({ gender, onClick }) => {
    return (
        <SingleGenderCardBase className={[gender, "single-gender-card"].join(" ")} onClick={onClick}>
            {gender === "male" ? <MaleIcon /> : <FemaleIcon />}
            <span className="label">{gender}</span>
        </SingleGenderCardBase>
    );
};

export default SingleGenderCard;
