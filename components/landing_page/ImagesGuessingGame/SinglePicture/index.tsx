// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Styled components
const SinglePictureBase = styled("div")(({ theme }) => ({
    width: "130px",
    height: "130px",
    background: "#fff",
    borderRadius: "5px",
    marginLeft: "10px",
    "&:nth-of-type(1)": {
        marginBottom: "10px",
        marginLeft: "0",
    },
    "&:nth-of-type(6)": {
        marginLeft: "0",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.main,
    cursor: "pointer",
    "span.question-mark": {
        color: "inherit",
        fontWeight: 700,
        fontFamily: "Montserrat Alternates",
        fontSize: "48px",
        userSelect: "none",
    },
    "&:hover, &:focus": {
        background: theme.palette.primary.main,
        color: "#fff",
        outline: "none",
    },
}));
interface SinglePictureProps {
    //
}

const SinglePicture: FunctionComponent<SinglePictureProps> = (props) => {
    return (
        <SinglePictureBase role="button">
            <span className="question-mark">?</span>
        </SinglePictureBase>
    );
};

export default SinglePicture;
