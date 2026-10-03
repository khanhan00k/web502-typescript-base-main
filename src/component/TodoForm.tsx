import { useState, type FormEvent } from "react";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    onAdd(trimmedTitle);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="todo-title" className="sr-only">
        Nội dung Todo
      </label>
      <input
        id="todo-title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Nhập công việc..."
        className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
      >
        Thêm Todo
      </button>
    </form>
  );
}

export default TodoForm;
