export function scrollWindowDown() {
    if (window) {
        window.scrollTo({
            left: 0,
            top: window.innerHeight + 60,
            behavior: "smooth",
        });
    }
}
