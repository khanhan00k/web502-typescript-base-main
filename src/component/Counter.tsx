import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Counter</h2>
      <p aria-live="polite" className="my-5 text-5xl font-semibold tabular-nums">
        {count}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setCount((currentCount) => currentCount - 1)}
          className="rounded-lg bg-slate-700 px-5 py-2 font-semibold text-white hover:bg-slate-800"
          aria-label="Giảm"
        >
          [-]
        </button>
        <button
          type="button"
          onClick={() => setCount((currentCount) => currentCount + 1)}
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
          aria-label="Tăng"
        >
          [+]
        </button>
        <button
          type="button"
          onClick={() => setCount(0)}
          className="rounded-lg border border-slate-300 px-5 py-2 font-semibold hover:bg-slate-100"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
