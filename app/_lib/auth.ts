import api from "./axios";

export const getUser = async () => {
    try {
        const response = await api.get("/user");
        return response.data;
    } catch (error) {
        return null;
    }
};

export const login = async (email: string, password: string, remember: boolean) => {
    try {
        const response = await api.post("/login", {
            email,
            password,
            remember,
        });
        return response.data;
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
