import { useState, type FormEvent } from "react";
import type { Product } from "../types";

interface ProductFormProps {
  onAdd: (product: Omit<Product, "id">) => void;
}

function ProductForm({ onAdd }: ProductFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim() === "" || category.trim() === "" || price === "") {
      return;
    }

    onAdd({ name, price: Number(price), category });
    setName("");
    setPrice("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Tên sản phẩm"
      />
      <input
        type="number"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        placeholder="Giá"
      />
      <input
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        placeholder="Danh mục"
      />
      <button type="submit">Thêm sản phẩm</button>
    </form>
  );
}

export default ProductForm;
