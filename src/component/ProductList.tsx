import type { Product } from "../types";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => void;
}

function ProductList({ products, onDelete }: ProductListProps) {
  if (products.length === 0) {
    return <p className="mt-6 text-slate-500">Chưa có sản phẩm nào.</p>;
  }

  return (
    <ul className="mt-6 space-y-3">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ProductList;
