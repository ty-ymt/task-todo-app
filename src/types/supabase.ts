export type TodoStatus = "not-started" | "on-progress" | "completed";

export type Database = {
  public: {
    Tables: {
      todos: {
        Row: {
          id: number;
          title: string;
          detail: string;
          status: TodoStatus;
          created_at: string;
          updated_at?: string;
        };
        Insert: {
          title: string;
          detail: string;
          status: TodoStatus;
        };
        Update: Partial<{
          title: string;
          detail: string;
          status: TodoStatus;
          updated_at?: string;
        }>;
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export interface Todo {
  id: number;
  title: string;
  detail: string;
  status: TodoStatus;
}