"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ApiResponse } from "@/app/_lib/types";
import { login } from "@/app/_lib/auth";
import TextInput from "@/app/_ui/TextInput";
import Checkbox from "@/app/_ui/Checkbox";
import Button from "@/app/_ui/Button";

export default function Login() {
    console.log("Login page loaded");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    return (
        <div className="">
            <form
                className="flex flex-col gap-4"
                onSubmit={async (e) => {
                    e.preventDefault();

                    setIsLoading(true);
                    const res: ApiResponse = await login(formData.email, formData.password, formData.remember);
                    setIsLoading(false);

                    if (res.success) {
                        router.push("/dashboard");
                    } else {
                        setFormData((prev) => ({
                            ...prev,
                            password: "",
                        }));

                        setErrorMessage(res.message || "Login failed. Please try again.");
                    }
                }}
            >
                <div className="space-y-4">
                    <TextInput
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        required={true}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        required={true}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                    />
                    <Checkbox
                        id="remember"
                        label="Remember me"
                        checked={formData.remember}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFormData({
                                ...formData,
                                remember: e.target.checked,
                            })
                        }
                    />
                </div>
                <div className="flex gap-4">
                    <Button type="submit" hierarchy="primary" className="flex-1" isLoading={isLoading}>
                        Login
                    </Button>
                    <Button href="/" hierarchy="secondary" className="flex-1">
                        Go back
                    </Button>
                </div>
                {errorMessage && (
                    <div className="text-red-600 dark:text-red-400 text-sm text-center">{errorMessage}</div>
                )}
            </form>
        </div>
    );
}
