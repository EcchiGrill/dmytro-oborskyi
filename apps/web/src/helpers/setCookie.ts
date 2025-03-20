export const setCookie = (name: string, value: unknown) => {
    if (typeof document !== "undefined") {
        document.cookie = `${name}=${value}; path=/`;
    }
};
