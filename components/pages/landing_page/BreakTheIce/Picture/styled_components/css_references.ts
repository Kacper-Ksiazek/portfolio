export const IDS = {
    LEFT_HORIZONTAL: "break-the-ice-picture-background-shape-left-horizontal",
    LEFT_VERTICAL: "break-the-ice-picture-background-shape-left-vertical",
    RIGHT_HORIZONTAL: "break-the-ice-picture-background-shape-right-horizontal",
    RIGHT_VERTICAL: "break-the-ice-picture-background-shape-right-vertical",
};

export const SELECTORS: Record<keyof typeof IDS, Selector> = Object.fromEntries(
    Object.keys(IDS).map((id) => {
        return [[id], `&#${IDS[id as keyof typeof IDS]}`];
    })
);
