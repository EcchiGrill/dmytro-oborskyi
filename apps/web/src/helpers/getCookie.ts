export const getCookie = async <T extends string>(
    name: string,
): Promise<T | null> => {
    if (typeof document === "undefined") {
        const { cookies } = await import("next/headers");

        const cookieData = (await cookies()).get(name);

        return cookieData ? (cookieData.value as T) : null;
    } else {
        const cookieData = document.cookie
            .split("; ")
            .find((row) => row.startsWith(`${name}=`));

        return cookieData ? (cookieData.split("=")[1] as T) : null;
    }
};
