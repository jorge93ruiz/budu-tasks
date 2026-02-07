"use client";

import api from "@/app/_lib/axios";
import { Task } from "@/app/_lib/types";
import IconButton from "@/app/_ui/IconButton";
import PageTitle from "@/app/_ui/PageTitle";
import TextButton from "@/app/_ui/TextButton";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaPen, FaPlus } from "react-icons/fa";

export default function TasksPage() {
    const [limit, setLimit] = useState(0);
    const [skip, setSkip] = useState(0);

    const [tasks, setTasks] = useState<Task[]>([]);
    const [totalTasks, setTotalTasks] = useState(0);

    const fetchTasks = async (limit = 20, skip = 0, reset = false) => {
        setLimit(limit);
        setSkip(skip);

        try {
            const res = await api.get("tasks", {
                params: {
                    limit: limit,
                    skip: skip,
                },
            });

            setTasks((prevTasks) => [...(reset ? [] : prevTasks), ...(res.data.tasks || [])]);

            setTotalTasks(res.data.total_tasks || 0);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchTasks(20, 0, true);
    }, []);

    return (
        <div className="space-y-8">
            <div className="flex gap-4 items-center">
                <PageTitle title="Tasks" />
                <IconButton icon={<FaPlus className="w-3 h-3" />} href="/tasks/create" />
            </div>

            {tasks.length > 0 ? (
                <ul className="space-y-4">
                    {tasks.map((task: Task) => (
                        <div
                            key={task.id}
                            className="p-4 border border-border rounded-xl flex gap-4 justify-between hover:bg-card-hover"
                        >
                            <span>{task.content}</span>
                            <div className="flex gap-4">
                                <span className="text-muted">
                                    {format(task.created_at, "EEEE d MMMM yyyy, h:mm a")}
                                </span>
                                <IconButton icon={<FaPen className="w-3 h-3" />} href={`/tasks/${task.id}/edit`} />
                            </div>
                        </div>
                    ))}

                    {totalTasks > tasks.length && totalTasks > skip + limit && (
                        <div className="text-end">
                            <TextButton
                                onClick={() => {
                                    fetchTasks(limit, skip + limit);
                                }}
                            >
                                Load more
                            </TextButton>
                        </div>
                    )}
                </ul>
            ) : (
                <p className="text-muted">No tasks entries found.</p>
            )}
        </div>
    );
}
