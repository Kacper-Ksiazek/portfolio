// Tools
import { useEffect, useState, useContext } from "react";
import { SnackbarContext } from "@/layout/global/SnackbarContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import ArrowUpward from "@mui/icons-material/ArrowUpward";
// Styled Components
import StyledButtonBase from "./styled_components/StyledButtonBase";

type AppearingAnimation = "intro" | "outro" | "spinning" | null;

const ScrollButton: FunctionComponent = () => {
    const SPACE_WITHOUT_SCROLLBUTTON = 200;

    const snackbarContext = useContext(SnackbarContext);
    const [appearingAnimation, setAppearingAnimation] = useState<AppearingAnimation>(null);

    useEffect(() => {
        const handleOnScroll = () => {
            if (scrollY >= SPACE_WITHOUT_SCROLLBUTTON) {
                setAppearingAnimation((val) => {
                    if (val !== "intro" && val !== "spinning") return "intro";
                    return val;
                });
            } else if (scrollY < SPACE_WITHOUT_SCROLLBUTTON) {
                setAppearingAnimation((val) => {
                    if (val === "intro") return "outro";
                    return val;
                });
            }
        };

        window.addEventListener("scroll", handleOnScroll);
        return () => {
            window.removeEventListener("scroll", handleOnScroll);
        };
    }, []);

    const onClick = () => {
        scrollTo({ left: 0, top: 0, behavior: "smooth" });
        setAppearingAnimation("spinning");
        setTimeout(() => {
            setAppearingAnimation("outro");
        }, 600);
    };

    return (
        <StyledButtonBase
            onClick={onClick} //
            className={snackbarContext.snackbars.length >= 1 ? "outro" : appearingAnimation ?? ""}
        >
            <ArrowUpward />
        </StyledButtonBase>
    );
};

export default ScrollButton;
