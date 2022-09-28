// Tools
import { useRouter } from "next/router";
import { useMainNavigation } from "@/hooks/useMainNavigation";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
import SingleNavigationRouteBase from "./styled_components/SingleNavigationRouteBase";

interface SingleNavigationRouteProps {
    children: ReactNode;
    idOfElementToScroll: string;
}

const SingleNavigationRoute: FunctionComponent<SingleNavigationRouteProps> = (props) => {
    const router = useRouter();
    const { showNavigationBar } = useMainNavigation();

    const onRedirectionClick = () => {
        if (router.pathname === "/") {
            const el = document.getElementById(props.idOfElementToScroll);
            if (el) {
                showNavigationBar({ keepNavigationVisibleFor: 500 });

                window.scrollTo({
                    top: el.getBoundingClientRect().top + window.pageYOffset - 80, //
                    behavior: "smooth",
                });
            }
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
        <SingleNavigationRouteBase onClick={onRedirectionClick} className="single-main-navigation-route">
            <span className="text">{props.children}</span>
            <span className="line left"></span>
            <span className="line right"></span>
            <span className="line left big"></span>
            <span className="line right big"></span>
        </SingleNavigationRouteBase>
    );
};

export default SingleNavigationRoute;
