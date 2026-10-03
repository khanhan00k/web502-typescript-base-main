import { useState, type FormEvent } from "react";

interface ProductFormProps {
  onAdd: (product: { name: string; price: number; category: string }) => void;
}

function ProductForm({ onAdd }: ProductFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedCategory = category.trim();
    const numericPrice = Number(price);
    if (!trimmedName || !trimmedCategory || price === "" || !Number.isFinite(numericPrice) || numericPrice < 0) {
      return;
    }

    onAdd({ name: trimmedName, price: numericPrice, category: trimmedCategory });
    setName("");
    setPrice("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="product-name" className="mb-1 block text-sm font-medium">
          Tên sản phẩm
        </label>
        <input
          id="product-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div>
        <label htmlFor="product-price" className="mb-1 block text-sm font-medium">
          Giá
        </label>
        <input
          id="product-price"
          type="number"
          min="0"
          step="any"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="product-category" className="mb-1 block text-sm font-medium">
          Danh mục
        </label>
        <input
          id="product-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <button
        type="submit"
        className="justify-self-start rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 sm:col-span-2"
      >
        Thêm sản phẩm
      </button>
    </form>
  );
}

export default ProductForm;
