// Tools
import { useRef } from "react";
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// Styled components
import StyledButton from "@/components/_styled_components/forms/StyledButton";

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
}));

interface ShowMoreProps {
    allFeaturesAreDisplayed: boolean;
    showMore: () => void;
    showLess: () => void;
}

const ShowMore: FunctionComponent<ShowMoreProps> = (props) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const onClick = () => {
        if (buttonRef.current) buttonRef.current.blur();

        if (props.allFeaturesAreDisplayed) props.showLess();
        else props.showMore();
    };

    return (
        <ShowMoreButton
            color="primary" //
            onClick={onClick}
            ref={buttonRef}
            className={props.allFeaturesAreDisplayed ? "all-features-are-displayed" : ""}
            id="features-display-toggler"
        >
            <span className="text">{props.allFeaturesAreDisplayed ? "Show less" : "Show more"}</span>
            <KeyboardArrowDown />
        </ShowMoreButton>
    );
};

export default ShowMore;
