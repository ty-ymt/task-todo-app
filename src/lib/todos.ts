import { supabase } from "./supabaseClient";
import { Database } from "@/types/supabase";

export type TodoInsert = Database["public"]["Tables"]["todos"]["Insert"]
export type TodoUpdate = Database["public"]["Tables"]["todos"]["Update"]

export const getAllTodos = async () => {
  return supabase.from("todos").select("*");
};

export const getTodoById = async (id: number) => {
  return supabase.from("todos").select("*").eq("id", id).single();
};

export const insertTodo = async (data: TodoInsert) => {
  return supabase.from("todos").insert(data).select().single();
}

export const updateTodo = async (id: number, data: TodoUpdate) => {
  return supabase.from('todos').update(data).eq('id', id).select().single();
}

export const deleteTodo = async (id: number) => {
  return supabase.from('todos').delete().eq('id', id)
}