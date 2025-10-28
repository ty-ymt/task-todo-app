"use client";

import { supabase } from "@/lib/supabaseClient";
import { Todo, TodoStatus } from "@/types/supabase";
import { useState } from "react";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [status, setStatus] = useState(todo.status);

  const handleStatusChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStatus = e.target.value as TodoStatus;
    setStatus(newStatus);

    const { error } = await supabase
      .from("todos")
      .update({ status: newStatus })
      .eq("id", todo.id);

    if (error) {
      console.error("更新エラー：", error);
      setStatus(todo.status);
    }
  };

  const deleteTodo = async () => {
    const { error } = await supabase.from("todos").delete().eq("id", todo.id);

    if (!error) window.location.reload();
  };

  return (
    <li className="flex items-center justify-between py-2 px-3 border mb-2">
      <div className={status === "completed" ? "line-through pl-3" : "pl-3"}>
        {todo.title}
      </div>
      <div className="flex items-center gap-2">
        <select
          value={status}
          onChange={handleStatusChange}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="not-started">未着手</option>
          <option value="on-progress">進行中</option>
          <option value="completed">完了</option>
        </select>
        <button
          onClick={deleteTodo}
          className="bg-red-600 text-white text-sm font-bold py-1 px-4 rounded-md cursor-pointer hover:bg-red-700"
        >
          削除
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
