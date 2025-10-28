import Button from "@/components/Button";
import TodoItem from "@/components/TodoItem";
import { supabase } from "@/lib/supabaseClient";

const getTodos = async () => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

const Todos = async () => {
  const todos = await getTodos();
  return (
    <div className="w-3xl mx-auto my-5">
      <h1 className="flex text-3xl font-semibold justify-center">Todo一覧</h1>
      <Button
        label={"✐新規作成"}
        color={"blue"}
        href={"todos/create"}
        align="end"
      />
      <ul>
        {todos?.map((todo)=> (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
