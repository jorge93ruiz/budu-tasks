export interface ApiResponse {
    success: boolean;
    message?: string;
    data?: {};
}

export interface BudgetEntryFromApi {
    id: string;
    amount: number;
    category: {
        id: string;
        title: string;
        description: string;
        owner_type: "own" | "shared";
    };
    description: string;
    owner_type: "own" | "shared";
    status: string;
    transaction_date: string;
    trasaction_type: "income" | "expense";
}
