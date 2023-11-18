// Tools
import { useRouter } from "next/router";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
import { URL_QUERY_NAME } from "@/components/pages/landing_page/IntroductionScreen/Base/hooks/useIntroAnimationControls/constans";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
import SingleNavigationRouteBase from "./styled_components/SingleNavigationRouteBase";

interface SingleNavigationRouteProps {
    children: ReactNode;
    idOfElementToScroll: string;
    mobileMenuIsOpened: boolean;
    closeMobileMenu: () => void;
}

const SingleNavigationRoute: FunctionComponent<SingleNavigationRouteProps> = (props) => {
    const router = useRouter();
    const { blockOnScroll } = useMainNavigationBarContext();

    const onRedirectionClick = () => {
        if (router.pathname === "/") {
            if (props.mobileMenuIsOpened) {
                props.closeMobileMenu();
                setTimeout(() => {
                    const el = document.getElementById(props.idOfElementToScroll);
                    if (el) {
                        blockOnScroll({ time: 1000 });

                        setTimeout(() => {
                            window.scrollTo({
                                top: el.getBoundingClientRect().top + window.pageYOffset - 80, //
                                behavior: "smooth",
                            });
                        }, 10);
                    }
                }, 600);
            } else {
                const el = document.getElementById(props.idOfElementToScroll);
                if (el) {
                    blockOnScroll({ time: 800 });

                    setTimeout(() => {
                        window.scrollTo({
                            top: el.getBoundingClientRect().top + window.pageYOffset - 80, //
                            behavior: "smooth",
                        });
                    }, 10);
                }
            }
        } else {
            router.push({
                pathname: "/",

                query: {
                    [URL_QUERY_NAME]: "1",
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
