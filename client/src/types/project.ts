export interface BudgetItem {
    id: string;
    name: string;
    estimatedCost: number;
    actualCost?: number;
    category: 'materials' | 'labor' | 'tools' | 'other';
}

export interface Task {
    id: string;
    description: string;
    dueDate?: Date;
    completed: boolean;
    assignedTo?: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    budget: number;
    status: 'in-progress' | 'completed' | 'not-started';
    materials: Material[];
    budgetItems: BudgetItem[];
    tasks: Task[];
}

export interface Material {
    id: string;
    name: string;
    quantity: number;
    unit: 'sqft' | 'pieces' | 'gallons';
    cost: number;
}
