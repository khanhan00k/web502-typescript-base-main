import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Counter from "./component/Counter";
import ProductForm from "./component/ProductForm";
import ProductList from "./component/ProductList";
import ShowHideInfo from "./component/ShowHideInfo";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import AddPage from "./pages/AddPage";
import ListPage from "./pages/ListPage";
import type { Product, Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  function addTodo(title: string) {
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addProduct(product: Omit<Product, "id">) {
    setProducts([...products, { id: Date.now(), ...product }]);
  }

  function deleteProduct(id: number) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
          </Link>
          <Header />
        </div>
      </nav>

      <ListPage />
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Thêm Sinh Viên</h1>
      </div>
      <AddPage />

      <main className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Bài tập thực hành</h1>
        <section id="counter">
          <Counter />
        </section>
        <hr />
        <section id="show-hide">
          <ShowHideInfo />
        </section>
        <hr />
        <section id="todo">
          <h2>Todo</h2>
          <TodoForm onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </section>
        <hr />
        <section id="products">
          <h2>Quản lý sản phẩm</h2>
          <ProductForm onAdd={addProduct} />
          <ProductList products={products} onDelete={deleteProduct} />
        </section>
      </main>

      <Footer />
      <Toaster />
    </>
  );
}

export default App;
