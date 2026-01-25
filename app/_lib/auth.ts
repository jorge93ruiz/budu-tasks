export const getUser = async () => {
    //
};

export const getCsrfCookie = async () => {
    await fetch(process.env.NEXT_PUBLIC_CSRF_API_BASE_URL || "http://localhost/sanctum/csrf-cookie", {
        method: "GET",
        credentials: "include",
    });
};

export const login = async (email: string, password: string, remember: boolean) => {
    try {
        await getCsrfCookie();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost/api/tasks/"}login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                email,
                password,
                remember,
            }),
        });

        const data = await response.json();

        return data;
    } catch (error) {
        // return (
        //     error?.response?.data || {
        //         success: false,
        //         message: "An error occurred during login.",
        //         data: {},
        //     }
        // );
    }
};

export const logout = async () => {
    //
};
