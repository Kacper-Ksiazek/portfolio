// Types
import type { LabelsCollection, LabelID } from "landing_page/ToDoList2/@types/Labels";

export type Expectation = "PRESENCE" | "NON_PRESENCE";

export type EnsureLabelsNameProps =
    | {
          label: string;
          dataset: LabelsCollection;
          expect: Expectation;
      }
    | {
          id: LabelID;
          dataset: LabelsCollection;
          expect: Expectation;
      };
