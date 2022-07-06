// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
import SingleNavigationRouteBase from "./styled_components/SingleNavigationRouteBase";

interface SingleNavigationRouteProps {
    children: ReactNode;
}

const SingleNavigationRoute: FunctionComponent<SingleNavigationRouteProps> = (props) => {
    return (
        <SingleNavigationRouteBase>
            <span className="text">{props.children}</span>
            <span className="line left"></span>
            <span className="line right"></span>
        </SingleNavigationRouteBase>
    );
};

export default SingleNavigationRoute;
