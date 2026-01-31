"use client";

import api from "@/app/_lib/axios";
import PageTitle from "@/app/_ui/PageTitle";
import PrimaryButton from "@/app/_ui/PrimaryButton";
import TextareaInput from "@/app/_ui/TextareaInput";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TasksNewPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        content: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="space-y-8">
            <PageTitle title="Create New Task" />

            <form
                className="space-y-4"
                onSubmit={async (e) => {
                    e.preventDefault();

                    setIsLoading(true);
                    try {
                        const res: AxiosResponse = await api.post("tasks", formData);
                        return router.push("/tasks");
                    } catch (error) {
                        alert("Error creating task. Please try again.");
                    } finally {
                        setIsLoading(false);
                    }
                }}
            >
                <TextareaInput
                    label="Task Content"
                    id="task-content"
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    value={formData.content}
                    placeholder="Enter task details here..."
                    rows={5}
                />

                <PrimaryButton type="submit" className="flex-1" isLoading={isLoading}>
                    Create Task
                </PrimaryButton>
            </form>
        </div>
    );
}
