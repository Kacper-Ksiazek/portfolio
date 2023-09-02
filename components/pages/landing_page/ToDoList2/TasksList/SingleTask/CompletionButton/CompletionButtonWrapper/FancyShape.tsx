// Tools
import { alpha, styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro/fade";
import { mergeSXObjects } from "@/utils/client/mergeSXObjects";
// Styled components
interface FancyShapeProps {
    urgent: boolean;
    completed: boolean;
    inEditMode: boolean;
}

function shouldForwardProp(prop: string | keyof FancyShapeProps): boolean {
    return ![
        "completed", //
        "inEditMode",
        "urgent",
    ].includes(prop as any);
}

export default styled("span", { shouldForwardProp })<FancyShapeProps>(({ theme, ...props }) =>
    mergeSXObjects(
        {
            position: "absolute",
            top: "64px",
            left: "20px",
            width: "28px",
            height: "calc(100% - 64px - 12px)",
            borderRadius: "2px",
            animation: `${fadeSimple} .3s .1s ease-in-out both`,
            "&::before, &::after": {
                opacity: props.urgent ? 0.6 : 0.24,
                content: "''",
                position: "absolute",
                border: "2px solid",
                borderColor: alpha("#fff", 0.4),
                boxSizing: "border-box",
                width: "10px",
                transition: "all 0.2s ease-in-out",

                ...(props.completed && {}),
            },
            "&::after": {
                top: "0",
                right: "0",
                height: "calc(100% - 8px)",
            },
            "&::before": {
                top: "4px",
                left: "0",
                height: "50%",
            },

            //
        },
        props.completed
            ? {
                  "&::before, &::after": {
                      opacity: 1,
                      borderColor: theme.palette.success.main,
                      background: alpha(theme.palette.success.main, 0.12),
                  },
                  "&::before": {
                      top: "12px",
                  },
                  "&::after": {
                      top: "4px",
                  },
              }
            : {},
        props.inEditMode
            ? {
                  "&::before, &::after": {
                      opacity: 1,
                  },
                  "&::before": {
                      top: "0px",
                      height: "calc(100% - 48px)",
                  },
                  "&::after": {
                      top: "12px",
                      height: "60%",
                  },
              }
            : {}
    )
);
