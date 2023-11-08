import type { Styles } from "@/@types/MUI";

interface GetTransformationStylesParams {
    alreadyHasBeenVisible: boolean;
    elementIsVisible: boolean;
    stylesWhenVisible: Styles;
    stylesWhenNOTVisible: Styles;
}

export function getTransformationStyles(params: GetTransformationStylesParams): Styles {
    const { alreadyHasBeenVisible, elementIsVisible, stylesWhenVisible, stylesWhenNOTVisible } = params;
    if (alreadyHasBeenVisible === true) return {};

    return elementIsVisible ? stylesWhenVisible : stylesWhenNOTVisible;
}
