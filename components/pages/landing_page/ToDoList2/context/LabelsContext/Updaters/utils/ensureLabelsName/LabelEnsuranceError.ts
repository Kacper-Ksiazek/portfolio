// Types
import type { Expectation } from "./@types";
import type { LabelID } from "landing_page/ToDoList2/@types/Labels";

export class LabelEnsuranceError extends Error {
    public constructor(private expectation: Expectation, private details: { label: string; id?: undefined } | { label?: undefined; id: LabelID }) {
        let labelsPeculiarity: string = typeof details.id == "string" ? `an id equal to ${details.id}` : `a name equal to ${details.label}`;
        const msg = expectation === "NON_PRESENCE" ? `Label with ${labelsPeculiarity} already exists!` : `Unexpected label ${labelsPeculiarity} has been received`;

        super(msg);
    }
}
