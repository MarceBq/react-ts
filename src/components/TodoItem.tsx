import { Todo } from "./TodoApp";

interface TodoItemProps {
  formValue: Todo;
}

export default function TodoItem({ formValue }: TodoItemProps) {
  const { id, value } = formValue;

  return (
    <div>
      <h2>
        {+id}. {value}
      </h2>

      <div className="actions">
        <button>
          <span className="material-symbols-outlined">remove</span>
        </button>
        <button>
          <span className="material-symbols-outlined">edit</span>
        </button>
      </div>
    </div>
  );
}
