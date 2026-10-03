import type { Product } from "../types";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => void;
}

function ProductList({ products, onDelete }: ProductListProps) {
  return (
    <ul>
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
