// Tools
import { SELECTORS } from "landing_page/css_references";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Material UI Icons
import East from "@mui/icons-material/East";
// Styled Components
import MobileBottomNavigationBase from "./MobileBottomNavigationBase";

const MobileBottomNavigation: FunctionComponent = () => {
    const context = useBreakTheIceContentContext();

    const stages: Record<IceBreakingStage, IceBreakingStage> = {
        General: "Competencies",
        Competencies: "Education",
        Education: "Hobbies",
        Hobbies: "Previous_Jobs",
        Previous_Jobs: "General",
    };

    const nextStage: IceBreakingStage = stages[context.currentIceBreakingStage];

    const changeStage = () => {
        const el = document.querySelector(SELECTORS.ABOUT_ME);

        if (el) {
            scrollTo({
                top: el.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "smooth",
            });
            setTimeout(() => {
                context.changeStage(nextStage);
            }, 300);
        }
    };

    return (
        <MobileBottomNavigationBase onClick={changeStage}>
            <span>See also</span>
            <strong>
                {nextStage.replaceAll
                    ? nextStage.replaceAll("_", " ")
                    : nextStage
                          .split("")
                          .map((char) => (char === "_" ? " " : char))
                          .join("")}
            </strong>
            <East />
        </MobileBottomNavigationBase>
    );
};

export default MobileBottomNavigation;
