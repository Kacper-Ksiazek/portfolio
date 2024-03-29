// Tools
import { createContext } from "react";
// Types
import type { UseTaskValidatorOutput } from "landing_page/ToDoList/2023/validators/useTaskValidator";

type I_ValidationResultContext = UseTaskValidatorOutput & {
    someChangesHaveBeenMade: boolean;
};

export const validationResultContext = createContext<I_ValidationResultContext>({} as any);
