export function scrollToTheListsTop(element: HTMLElement | null) {
    if (element && element.firstChild) {
        (element.firstChild as HTMLElement).scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        });
    }
}
