import { useState } from "react";
import { Todo } from "../components/TodoApp";

export const useForm = (initialValue: Todo[]) => {
  const [formValues, setFormValues] = useState<Todo[]>(initialValue);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTodo = { value: inputValue };

    setFormValues((prevFormValues) => [...prevFormValues, newTodo]);
    setInputValue("");
  };

  return {
    formValues,
    inputValue,
    setInputValue,
    handleSubmit,
  };
};
