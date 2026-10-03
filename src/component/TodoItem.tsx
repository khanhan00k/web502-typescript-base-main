import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Đánh dấu "${todo.title}" hoàn thành`}
        className="size-4 accent-blue-600"
      />
      <span className={`min-w-0 flex-1 break-words ${todo.completed ? "text-slate-500 line-through" : ""}`}>
        {todo.title}
      </span>
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className="rounded-md px-3 py-1 text-sm font-medium text-red-700 hover:bg-red-50"
        aria-label={`Xóa "${todo.title}"`}
      >
        Xóa
      </button>
    </li>
  );
}

export default TodoItem;
