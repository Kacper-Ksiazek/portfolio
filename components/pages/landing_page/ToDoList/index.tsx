// Tools
import { useRef } from "react";
import dynamic from "next/dynamic";
import { useReleases } from "./Layout/hooks/useReleases";
// Types
import type { FunctionComponent } from "react";
// Other components
import Release2023 from "./2023";
import ToDoListLayout from "./Layout";

const Legacy = dynamic(() => import("./Legacy"));

const ToDoList: FunctionComponent = () => {
    const mainWrapperRef = useRef<HTMLDivElement | null>(null);

    const { currentRelease, releaseIsChanging, toggleReleases } = useReleases(mainWrapperRef);

    return (
        <ToDoListLayout
            ref={mainWrapperRef} //
            currentRelease={currentRelease}
            releaseIsChanging={releaseIsChanging}
            toggleReleases={toggleReleases}
        >
            {currentRelease === "2023" ? <Release2023 /> : <Legacy />}
        </ToDoListLayout>
    );
};

export default ToDoList;
