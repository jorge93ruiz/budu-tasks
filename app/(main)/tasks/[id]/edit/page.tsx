"use client";

import api from "@/app/_lib/axios";
import PageTitle from "@/app/_ui/PageTitle";
import PrimaryButton from "@/app/_ui/PrimaryButton";
import SecondaryButton from "@/app/_ui/SecondaryButton";
import TextareaInput from "@/app/_ui/TextareaInput";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TasksEditPage({ params }: { params: Promise<{ id: number }> }) {
    const router = useRouter();

    const [formData, setFormData] = useState({
        content: "",
    });

    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const { id } = await params;
                console.log("Fetching task with ID:", id);
                const res: AxiosResponse = await api.get(`tasks/${id}`);
                console.log("Task details fetched:", res.data);
                setFormData({
                    content: res.data.task.content || "",
                });
            } catch (error) {
                alert("Error fetching task details. Please try again.");
            } finally {
                setMounted(true);
            }
        };

        fetchTask();
    }, [params]);

    return (
        <div className="space-y-8">
            <PageTitle title="Edit Task" />

            {mounted ? (
                <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                        e.preventDefault();

                        setIsLoading(true);
                        try {
                            const { id } = await params;
                            const res: AxiosResponse = await api.put(`tasks/${id}`, formData);
                            return router.push("/tasks");
                        } catch (error) {
                            alert("Error updating task. Please try again.");
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

                    <div className="flex gap-4 justify-between">
                        <SecondaryButton type="button" className="flex-1" onClick={() => router.back()}>
                            Back
                        </SecondaryButton>
                        <PrimaryButton type="submit" className="flex-1" isLoading={isLoading}>
                            Update Task
                        </PrimaryButton>
                    </div>
                </form>
            ) : (
                <div className="space-y-4">
                    <div className="bg-card-hover w-full h-24 rounded-xl animate-pulse"></div>
                    <div className="flex gap-4">
                        <div className="flex-1 h-9 rounded-xl bg-card-hover animate-pulse"></div>
                        <div className="flex-1 h-9 rounded-xl bg-card-hover animate-pulse"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
