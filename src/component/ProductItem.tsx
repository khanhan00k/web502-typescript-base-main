import type { Product } from "../types";

interface ProductItemProps {
  product: Product;
  onDelete: (id: number) => void;
}

function ProductItem({ product, onDelete }: ProductItemProps) {
  return (
    <li>
      {product.name} - {product.price} - {product.category}{" "}
      <button onClick={() => onDelete(product.id)}>Xóa</button>
    </li>
  );
}

export default ProductItem;
