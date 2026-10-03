import { useState } from "react";
import Counter from "./component/Counter";
import Header from "./component/Header";
import ProductForm from "./component/ProductForm";
import ProductList from "./component/ProductList";
import ShowHideInfo from "./component/ShowHideInfo";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import type { Product, Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  function addTodo(title: string) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), title, completed: false },
    ]);
  }

  function toggleTodo(id: number) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function deleteTodo(id: number) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  function addProduct(productDetails: Omit<Product, "id">) {
    setProducts((currentProducts) => {
      const id = currentProducts.reduce(
        (highestId, product) => Math.max(highestId, product.id),
        0,
      ) + 1;

      return [...currentProducts, { id, ...productDetails }];
    });
  }

  function deleteProduct(id: number) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== id),
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6">
        <section
          id="counter"
          className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
        >
          <Counter />
        </section>

        <section
          id="show-hide"
          className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
        >
          <ShowHideInfo />
        </section>

        <section
          id="todo"
          className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
        >
          <h2 className="mb-4 text-2xl font-bold">Todo</h2>
          <TodoForm onAdd={addTodo} />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </section>

        <section
          id="products"
          className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Quản lý sản phẩm</h2>
            <p className="mt-1 text-slate-600">
              Thêm và xóa sản phẩm trong danh sách.
            </p>
          </div>
          <ProductForm onAdd={addProduct} />
          <ProductList products={products} onDelete={deleteProduct} />
        </section>
      </main>
    </div>
  );
}

export default App;
