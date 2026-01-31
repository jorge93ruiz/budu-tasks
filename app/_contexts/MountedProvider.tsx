"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { User } from "../_lib/types";
import { useRouter } from "next/navigation";
import { getUser } from "../_lib/auth";

type MountedContext = {
    mounted: boolean;
    setMounted: (value: boolean) => void;
    loggedInUser: User | null;
    setLoggedInUser: (user: User | null) => void;
};

const MountedContext = createContext<MountedContext | null>(null);

function MountedProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const initializeUser = async () => {
            const user = await getUser();

            if (user) {
                setLoggedInUser(user);
            } else {
                // redirect to login unless the user is already visiting the login page
                if (window.location.pathname !== "/login") {
                    return router.push("/login");
                }
            }

            setMounted(true);
        };

        initializeUser();
    }, []);

    const contextValue = useMemo<MountedContext>(
        () => ({
            mounted,
            setMounted,
            loggedInUser,
            setLoggedInUser,
        }),
        [mounted, setMounted, loggedInUser, setLoggedInUser],
    );

    return <MountedContext value={contextValue}>{children}</MountedContext>;
}

function useMounted() {
    const context = useContext(MountedContext);

    if (!context) {
        throw new Error("useMounted must be used within a MountedProvider.");
    }

    return context;
}

export { MountedProvider, useMounted };
