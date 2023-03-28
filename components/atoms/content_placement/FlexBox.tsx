// Tools
import { styled } from "@mui/system";

type Spacing = "between" | "center" | "evenly" | "around" | "end" | "start";
interface FlexBoxProps {
    column?: true;
    center?: true;
    reverse?: true;
    vertical?: Spacing;
    horizontal?: Spacing;
}

const CSSSPacingProperties: Record<Spacing, string> = {
    between: "space-between",
    evenly: "space-evenly",
    around: "space-around",
    center: "center",
    end: "flex-end",
    start: "flex-start",
};
/**
 * Styled `div` component which provides intuitive approach for position items using *flexbox*
 *
 * ### Params
 * 1. Params which are either *true* or *undefined*
 * - `center`- determines whether all content should be centered
 * - `column`- determines `flex-direction`
 * - `reverse`- reverses `flex-direction`
 *
 * 2. Params which allow user to place elements more **flexibly**
 * - `vertical`- positioning on Y axis
 * - `horizontal`- positioning on X axis
 *
 * Both of above properties are either *undefined* or `"between"` | `"center"` | `"evenly"` | `"around"` | `"end"` | `"start"`
 */
export default styled("div", {
    shouldForwardProp: (propName: string) => {
        return !["column", "center"].includes(propName);
    },
})<FlexBoxProps>(({ theme, ...props }) => {
    const { column, center, vertical, horizontal, reverse } = props;

    const applyVertical = () => {
        if (!vertical) return {};
        const property = column ? "justifyContent" : "alignItems";
        return { [property]: CSSSPacingProperties[vertical] };
    };
    const applyHorizontal = () => {
        if (!horizontal) return {};
        const property = column ? "alignItems" : "justifyContent";
        return { [property]: CSSSPacingProperties[horizontal] };
    };

    return {
        display: "flex",
        // Direction
        ...(reverse
            ? { flexDirection: column ? "column-reverse" : "row-reverse" }
            : {
                  flexDirection: column ? "column" : "row",
              }),
        // Items placement
        ...(center
            ? {
                  alignItems: "center",
                  justifyContent: "center",
              }
            : {
                  ...applyVertical(),
                  ...applyHorizontal(),
              }),
    };
});
