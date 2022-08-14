// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Material UI Icons
import East from "@mui/icons-material/East";
// Styled Components
interface MobileBottomNavigationProps {
    stage: IceBreakingStage;
    changeStage: (val: IceBreakingStage) => any;
}

const MobileBottomNavigationBase = styled("div")(({ theme }) => ({
    fontSize: "20px",
    display: "flex",
    marginTop: "64px",
    alignItems: "center",
    border: `1px solid ${theme.palette.secondary.main}`,
    width: "100%",
    padding: "8px 12px",
    boxSizing: "border-box",
    borderRadius: "3px",
    "svg, strong": {
        marginLeft: "8px",
    },
    svg: {
        fontSize: "24px",
    },
}));

const MobileBottomNavigation: FunctionComponent<MobileBottomNavigationProps> = (props) => {
    const stages: Record<IceBreakingStage, IceBreakingStage> = {
        General: "Competences",
        Competences: "Education",
        Education: "Hobbies",
        Hobbies: "General",
    };

    const nextStage: IceBreakingStage = stages[props.stage];

    const changeStage = () => {
        const el = document.getElementById("about-me");
        if (el) {
            scrollTo({
                top: el.getBoundingClientRect().y,
                behavior: "smooth",
            });
            setTimeout(() => {
                props.changeStage(nextStage);
            }, 300);
        }
    };

    return (
        <MobileBottomNavigationBase onClick={changeStage}>
            <span>See also</span>
            <strong>{nextStage}</strong>
            <East />
        </MobileBottomNavigationBase>
    );
};

export default MobileBottomNavigation;
