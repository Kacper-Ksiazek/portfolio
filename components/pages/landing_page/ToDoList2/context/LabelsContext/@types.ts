export type ColorInHEX = `#${string}`;
export type LabelsCollection = Record<string, ColorInHEX>;

export interface Label {
    name: string;
    color: ColorInHEX;
}

export type LabelID = string;

export type Labels = Record<LabelID, Label>;

export interface I_LabelsContext {
    labels: Labels;
    _colorsInUse: Label["color"][];
    _labelNamesInUse: Label["name"][];
    _hasFullyLoaded: boolean;
    getLabelWithID: (id: LabelID) => Label;
}

export interface I_LabelsUpdatersContext {
    add: (params: Label) => LabelID;
    update: (id: LabelID, data: Partial<Label>) => void;
    remove: (labelToBeRemoved: string) => void;
}
