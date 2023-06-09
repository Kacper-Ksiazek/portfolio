// Types
import type { Labels, LabelID } from "landing_page/ToDoList2/@types";

export type Expectation = "PRESENCE" | "NON_PRESENCE";

export type EnsureLabelsNameProps =
    | {
          label: string;
          dataset: Labels;
          expect: Expectation;
      }
    | {
          id: LabelID;
          dataset: Labels;
          expect: Expectation;
      };
