import { useReducer, useRef } from "react";
import TodoItem from "./TodoItem";
import { useForm } from "../hooks/useForm";
import Form from "./Form";

export interface Todo {
  value: string;
}

const initialState: { todo: Todo[] } = {
  todo: [{ value: "Go to buy pickles" }],
};

type ActionType = { type: "delete" } | { type: "create" } | { type: "edit" };

// TODO
const actionReducer = (state: typeof initialState, action: ActionType) => {};


// TODO: Implement automatic id

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
        {formValues.map((formValues, i = 1) => (
          <TodoItem key={i} formValue={formValues} />
        ))}
      </ul>
    </div>
  );
}
