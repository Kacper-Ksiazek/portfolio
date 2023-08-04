import { Theme, styled } from "@mui/material";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
import { SELECTORS } from "landing_page/ToDoList2/TasksList/SingleTask/css_references";
// Animations
import { fadeSimple, scaleFromBottom, scaleFromLeft } from "@/components/keyframes/intro";
import { fadeSimpleOUT, scaleToBottom, scaleToLeft } from "@/components/keyframes/outro";
// Styled components
interface SingleTaskContentWrapperProps {
    isClosing: boolean;
    isUrgent: boolean;
    editModeIsOpened: boolean;
    modeHasRecentlyChanged: boolean;
}

function shouldForwardProp(prop: string): boolean {
    return ![
        "editModeIsOpened", //
        "isClosing",
        "isUrgent",
        "modeHasRecentlyChanged",
    ].includes(prop);
}

function getAnimationBarColor(theme: Theme, props: SingleTaskContentWrapperProps): string {
    const { editModeIsOpened, isUrgent } = props;
    const isLightThemeOn: boolean = theme.palette.mode === "light";

    const darkThemeAnimationBarColor: string = "#474748";

    if (editModeIsOpened === false && isUrgent === true) {
        return theme.palette.primary.main;
    } else if (isLightThemeOn === true && editModeIsOpened === false) {
        return theme.palette.secondary.main;
    }

    return darkThemeAnimationBarColor;
}

export default styled("div", { shouldForwardProp })<SingleTaskContentWrapperProps>(({ theme, ...props }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    minHeight: "70px",
    gap: "4px",
    transition: "opacity .24s",
    marginRight: props.editModeIsOpened ? "64px" : "16px",
    [SELECTORS.CONTENT.PIECE_OF_CONTENT_WRAPPER]: {
        gap: "6px",
    },
    "&>*": {
        height: "32px",

        ...(props.modeHasRecentlyChanged && {
            [`&:not(&${SELECTORS.CONTENT.PIECE_OF_CONTENT_WRAPPER}), &${SELECTORS.CONTENT.PIECE_OF_CONTENT_WRAPPER}>*`]: {
                position: "relative",
                "&::after": {
                    content: "''",
                    ...theme.mixins.absolute_full,
                    background: getAnimationBarColor(theme, props),
                    borderRadius: "3px",
                    animation: props.isClosing
                        ? chainAnimations([
                              [scaleFromBottom, 0.25, 0.1],
                              [scaleToLeft, 0.25, 0.1],
                          ])
                        : chainAnimations([
                              [scaleFromLeft, 0.25, 0.1],
                              [scaleToBottom, 0.25, 0.1],
                          ]),
                },
                "&>*": {
                    animation: `${props.isClosing ? fadeSimpleOUT : fadeSimple} .0001s .4s both`,
                },
            },
        }),
    },
}));
