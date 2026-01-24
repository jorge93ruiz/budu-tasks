export const getUser = async () => {
    //
};

export const login = async (email: string, password: string, remember: boolean) => {
    try {
        const response = await fetch("/login", {
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
