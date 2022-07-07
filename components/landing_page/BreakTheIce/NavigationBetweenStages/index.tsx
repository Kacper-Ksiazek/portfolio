// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { StatedDataField } from "@/@types/StatedDataField";
import type { IceBreakingStage } from "@/components/landing_page/BreakTheIce/@types";
// Styled components

const Divider = styled("span")(({ theme }) => ({
    transform: "rotate(10deg)",
    height: "20px",
    width: "2px",
    background: theme.palette.text.secondary,
    margin: "0 10px",
}));

const NavigationStagesWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
}));

const SingleNavigationStep = styled("div")(({ theme }) => ({
    fontWeight: 500,
    fontSize: "18px",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    padding: "0 10px",
    transition: "background .2s",
    borderRadius: "3px",
    "&:before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: "0",
        background: theme.palette.secondary.main,
        width: "100%",
        height: "100%",
        transition: "transform .2s, background .3s",
        transform: "translateY(-100%)",
    },
    "&:nth-of-type(even)": {
        "&:before": {
            transform: "translateY(-100%)",
        },
    },
    "&:nth-of-type(odd)": {
        "&:before": {
            transform: "translateY(100%)",
        },
    },
    "span.text": {
        position: "relative",
        zIndex: 1,
        transition: "color .2s",
    },
    "&:hover": {
        "span.text": {
            color: "#fff",
        },
        "&:before": {
            transform: "translateY(0%)",
        },
    },
    "&.selected": {
        background: theme.palette.primary.main,
        "span.text": {
            color: "#fff",
        },
        "&:before": {
            background: theme.palette.primary.main,
        },
    },
}));

interface NavigationBetweenStagesProps {
    stage: StatedDataField<IceBreakingStage>;
}

const NavigationBetweenStages: FunctionComponent<NavigationBetweenStagesProps> = (props) => {
    const stages: IceBreakingStage[] = ["General", "Competences", "Education", "Hobbies"];

    return (
        <NavigationStagesWrapper>
            {stages.map((item, index) => {
                return (
                    <>
                        {index ? <Divider /> : <></>}
                        <SingleNavigationStep
                            key={item} //
                            className={props.stage.value === item ? "selected" : ""}
                            onClick={() => props.stage.setValue(item)}
                        >
                            <span className="text">{item}</span>
                        </SingleNavigationStep>
                    </>
                );
            })}
        </NavigationStagesWrapper>
    );
};

export default NavigationBetweenStages;
