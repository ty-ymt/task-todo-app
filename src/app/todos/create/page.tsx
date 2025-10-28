"use client";

import Button from "@/components/Button";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("タスクを入力してください");
      return;
    }

    const { error } = await supabase
      .from("todos")
      .insert([{ title, detail, status: "not-started" }]);

    if (error) {
      console.error("Error:", error);
    } else {
      setTitle("");
      setDetail("");
      router.push("/todos");
    }
  };
  return (
    <div className="w-3xl mx-auto my-5">
      <h1 className="flex text-3xl font-semibold justify-center mb-4">新規作成</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="新しいタスクを入力"
          className="border p-2 w-full mb-1"
        />
        <textarea
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder="詳細を入力"
          className="border p-2 w-full h-80"
        />
        <Button label={"✐作成"} color={"blue"} align="center" type="submit" />
      </form>
    </div>
  );
};

export default Create;
