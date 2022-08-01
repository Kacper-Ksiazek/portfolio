// Tools
import { useRouter } from "next/router";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
import SingleNavigationRouteBase from "./styled_components/SingleNavigationRouteBase";

interface SingleNavigationRouteProps {
    children: ReactNode;
    idOfElementToScroll: string;
    forceShowingNavigaton: () => void;
}

const SingleNavigationRoute: FunctionComponent<SingleNavigationRouteProps> = (props) => {
    const router = useRouter();

    const onRedirectionClick = () => {
        if (router.pathname === "/") {
            props.forceShowingNavigaton();
            setTimeout(() => {
                const el = document.getElementById(props.idOfElementToScroll);
                if (el) {
                    window.scrollTo({
                        top: el.getBoundingClientRect().top + window.pageYOffset - 80, //
                        behavior: "smooth",
                    });
                }
            }, 30);
        } else {
            router.push({
                pathname: "/",
                query: {
                    skipIntroductionAnimationEvenThoughItsCool: "1",
                    scrollToElement: props.idOfElementToScroll,
                },
            });
        }
    };

    return (
        <SingleNavigationRouteBase onClick={onRedirectionClick}>
            <span className="text">{props.children}</span>
            <span className="line left"></span>
            <span className="line right"></span>
            <span className="line left big"></span>
            <span className="line right big"></span>
        </SingleNavigationRouteBase>
    );
};

export default SingleNavigationRoute;
