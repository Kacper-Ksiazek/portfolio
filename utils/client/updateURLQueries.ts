export function updateURLQueries(queryParams: Record<string, number | string | boolean>) {
    if (!window) return;

    const searchParams = new URLSearchParams(window.location.search);

    for (const [key, value] of Object.entries(queryParams)) {
        searchParams.set(key, value.toString());
    }

    const baseURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
    const updatedURL = `${baseURL}?${searchParams.toString()}`;

    window.history.pushState({ path: updatedURL }, "", updatedURL);
}
