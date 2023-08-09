// Types
import type { NewTaskBody, Task } from "landing_page/ToDoList2/@types";

export interface I_AddNewTaskContext {
    newTaskBody: NewTaskBody;
    updateProperty: UpdatePropertyFunction;
}

export type RequiredProperty = keyof Omit<NewTaskBody, "additionalInformation">;
export type OptionalProperty = keyof NewTaskBody["additionalInformation"];

export type UpdatePropertyFunction = <
    P extends RequiredProperty | OptionalProperty,
    V extends P extends RequiredProperty ? NewTaskBody[P] : P extends OptionalProperty ? NewTaskBody["additionalInformation"][P] : never
>(
    property: P,
    val: V
) => void;
