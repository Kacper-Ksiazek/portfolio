// Tools
import { URL_QUERY_NAME } from "./constans";
// Types
import type { NextRouter } from "next/router";

export function blockUserScroll() {
    document.body.style.position = "fixed";
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
}

export function unlockUserScroll() {
    document.body.style.position = "static";
    document.body.style.height = "auto";
    document.body.style.overflowY = "visible";
}

export function shouldSkipAnimation(query: NextRouter["query"]) {
    return query.hasOwnProperty(URL_QUERY_NAME);
}
