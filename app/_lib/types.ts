export interface ApiResponse {
    success: boolean;
    message?: string;
    data?: {};
}

export interface Task {
    id: string;
    created_at: string;
    title: string | null;
    content: string;
    due_date: string | null;
    completed_at: string | null;
}

export interface User {
    id: number;
    name: string;
    email: string;
}
