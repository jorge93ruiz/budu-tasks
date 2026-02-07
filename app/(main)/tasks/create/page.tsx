"use client";

import api from "@/app/_lib/axios";
import DateInput from "@/app/_ui/DateInput";
import PageTitle from "@/app/_ui/PageTitle";
import PrimaryButton from "@/app/_ui/PrimaryButton";
import SecondaryButton from "@/app/_ui/SecondaryButton";
import TextareaInput from "@/app/_ui/TextareaInput";
import TextInput from "@/app/_ui/TextInput";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TasksNewPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: "",
        due_date: "",
        content: "",
    });

    const [errors, setErrors] = useState({
        title: "",
        due_date: "",
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
                        if (axios.isAxiosError(error)) {
                            setErrors({
                                title: error.response?.data?.errors?.title || "",
                                due_date: error.response?.data?.errors?.due_date || "",
                                content: error.response?.data?.errors?.content || "",
                            });
                        }
                    } finally {
                        setIsLoading(false);
                    }
                }}
            >
                <div className="grid grid-cols-2 gap-4">
                    <TextInput
                        label="Title"
                        id="title"
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        value={formData.title}
                        placeholder="Enter task title here..."
                        error={errors.title}
                    />
                    <DateInput
                        label="Due Date"
                        id="due-date"
                        onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
                        value={formData.due_date}
                        placeholder="Enter task due date here..."
                    />
                </div>

                <TextareaInput
                    label="Task Content"
                    id="task-content"
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    value={formData.content}
                    placeholder="Enter task details here..."
                    rows={5}
                    error={errors.content}
                />

                <div className="flex gap-4 justify-between">
                    <SecondaryButton type="button" className="flex-1" onClick={() => router.back()}>
                        Back
                    </SecondaryButton>
                    <PrimaryButton type="submit" className="flex-1" isLoading={isLoading}>
                        Create Task
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
