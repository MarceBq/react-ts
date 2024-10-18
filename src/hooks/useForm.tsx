import { useState } from "react";
import { Todo } from "../components/TodoApp";

export const useForm = (initialValue: Todo[]) => {
  const [formValues, setFormValues] = useState<Todo[]>(initialValue);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = { id: formValues.length + 1, value: inputValue };

    console.log(`Aca se asigna un nuebo valor: ${newTodo.value}`);

    if (formValues.some((todo) => todo.value.includes(newTodo.value))) {
      setInputValue("");
      return;
    }

    setFormValues((prevFormValues) => [...prevFormValues, newTodo]);
    setInputValue("");
  };

  console.log("Estado actual de los valores del formulario: ", formValues);

  return {
    formValues,
    inputValue,
    setInputValue,
    handleSubmit,
  };
};
