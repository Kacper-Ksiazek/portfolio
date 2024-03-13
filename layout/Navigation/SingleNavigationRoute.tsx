// Tools
import { useRouter } from "next/router";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
import { URL_QUERY_NAME } from "@/components/pages/landing_page/IntroductionScreen/Base/hooks/useIntroAnimationControls/constans";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
import SingleNavigationRouteBase from "./styled_components/SingleNavigationRouteBase";

namespace NavigationRouteRedirection {
    interface _Base {
        children: ReactNode;
        mobileMenuIsOpened: boolean;
        closeMobileMenu: () => void;
    }

    export interface ToHomePage extends _Base {
        /** Id of element on home page to which viewport should be aligned after redirection */
        idOfElementToScroll: string;
    }

    export interface ToDifferentPage extends _Base {
        /** The url of page that user should be redirected to */
        url: string;
    }
}

type SingleNavigationRouteProps = NavigationRouteRedirection.ToHomePage | NavigationRouteRedirection.ToDifferentPage;

function isHomePageRedirection(data: unknown): data is NavigationRouteRedirection.ToHomePage {
    const prop: keyof NavigationRouteRedirection.ToHomePage = "idOfElementToScroll";
    return Object(data).hasOwnProperty(prop);
}

const SingleNavigationRoute: FunctionComponent<SingleNavigationRouteProps> = (props) => {
    const router = useRouter();
    const { blockOnScroll } = useMainNavigationBarContext();

    function onRedirectionClick() {
        // Check whether are we dealing with redirection to the home page
        if (isHomePageRedirection(props)) {
            // Check if we're currently on the home page
            if (router.pathname === "/") {
                // Check if mobil menu is opened
                if (props.mobileMenuIsOpened) {
                    // If mobile menu is opened, then close it before redirecting anywhere
                    props.closeMobileMenu();
                    // and then redirect to the expected route
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
            }
            // If we're NOT on the home page, then redirect to it straight forward
            else {
                router.push({
                    pathname: "/",

                    query: {
                        [URL_QUERY_NAME]: "1",
                        scrollToElement: props.idOfElementToScroll,
                    },
                });
            }
        } else {
            // If we are currently on a page that we want redirect to, then do nothing
            if (router.pathname === props.url) return;

            router.push({
                pathname: props.url,
            });
        }
    }

    return (
        <SingleNavigationRouteBase
            onClick={onRedirectionClick} //
            className="single-main-navigation-route"
        >
            <span className="text">{props.children}</span>
            <span className="line left"></span>
            <span className="line right"></span>
            <span className="line left big"></span>
            <span className="line right big"></span>
        </SingleNavigationRouteBase>
    );
};

export default SingleNavigationRoute;
