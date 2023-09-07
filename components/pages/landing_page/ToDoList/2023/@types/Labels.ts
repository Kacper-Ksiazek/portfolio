export interface Label {
    name: string;
    color: ColorInHEX;
}

export type LabelID = string;

export type LabelsCollection = Record<LabelID, Label>;
