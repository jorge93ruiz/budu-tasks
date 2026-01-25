"use client";

import api from "@/app/_lib/axios";
import { Task } from "@/app/_lib/types";
import Grid from "@/app/_ui/Grid";
import PageTitle from "@/app/_ui/PageTitle";
import { useEffect, useState } from "react";

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
            <PageTitle title="Tasks" />

            <Grid>
                {tasks.length > 0 ? (
                    <ul className="space-y-4">
                        <h2 className="font-semibold">Tasks</h2>

                        {tasks.map((task: Task) => (
                            <div key={task.id}>{task.content}</div>
                        ))}

                        {totalTasks > tasks.length && totalTasks > skip + limit && (
                            <div className="text-end">
                                <button
                                    className="text-foreground/50 hover:text-foreground"
                                    onClick={() => {
                                        fetchTasks(limit, skip + limit);
                                    }}
                                >
                                    Load more
                                </button>
                            </div>
                        )}
                    </ul>
                ) : (
                    <p className="text-muted">No tasks entries found.</p>
                )}
            </Grid>
        </div>
    );
}
