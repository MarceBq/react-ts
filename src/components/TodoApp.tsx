import { useReducer, useRef } from "react";
import TodoItem from "./TodoItem";
import { useForm } from "../hooks/useForm";

export interface Todo {
  id: number;
  value: string;
}

const initialState: { todo: Todo[] } = {
  todo: [{ id: 1, value: "Go to buy pickles" }],
};

type ActionType = { type: "delete" } | { type: "edit" };

// TODO
const actionReducer = (state: typeof initialState, action: ActionType) => {};

export default function TodoApp() {
  const { formValues, inputValue, setInputValue, handleSubmit } = useForm(
    initialState.todo
  );

  return (
    <div>
      <h1>TodoActions</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Write your TODOS</label>
        <input
          type="text"
          name="todo"
          placeholder="Go to the park"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button>
          <span className="material-symbols-outlined">add</span>
        </button>
      </form>

      <ul>
        {formValues.map((formValues, id) => (
          <TodoItem key={id} formValue={formValues} />
        ))}
      </ul>
    </div>
  );
}
