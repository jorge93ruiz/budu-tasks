export interface ApiResponse {
    success: boolean;
    message?: string;
    data?: {};
}

export interface Task {
    id: string;
    created_at: string;
    content: string;
    completed_at: string | null;
}

export interface User {
    id: number;
    name: string;
    email: string;
}
