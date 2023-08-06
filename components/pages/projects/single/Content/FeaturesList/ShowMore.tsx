// Tools
import { useRef } from "react";
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

const ShowMoreButton = styled(StyledButton)(({ theme }) => ({
    alignSelf: "center",
    fontFamily: "Montserrat Alternates",
    marginTop: "32px",
    width: "250px",
    svg: {
        transition: "transform .3s",
    },
    "span.text": {
        width: "94px",
    },
    "&.all-features-are-displayed": {
        svg: {
            transform: "rotate(180deg)",
        },
    },
    ["@media (max-width:500px)"]: {
        width: "100%",
    },
}));

interface ShowMoreProps {
    allFeaturesAreShown: boolean;
    showMore: () => void;
    showLess: () => void;
}

const ShowMore: FunctionComponent<ShowMoreProps> = (props) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    function onClick() {
        if (buttonRef.current) buttonRef.current.blur();

        if (props.allFeaturesAreShown) props.showLess();
        else props.showMore();
    }

    return (
        <ShowMoreButton
            ref={buttonRef} //
            componentThemeID="PRIMARY"
            id="features-display-toggler"
            className={props.allFeaturesAreShown ? "all-features-are-displayed" : ""}
            onClick={onClick}
        >
            <span className="text">{props.allFeaturesAreShown ? "Show less" : "Show more"}</span>
            <KeyboardArrowDown />
        </ShowMoreButton>
    );
};

export default ShowMore;
