import type { Product } from "../types";

interface ProductItemProps {
  product: Product;
  onDelete: (id: number) => void;
}

function ProductItem({ product, onDelete }: ProductItemProps) {
  return (
    <li className="flex flex-col gap-3 rounded-lg border border-slate-200 p-4 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-slate-600">
          {product.category} · {product.price.toLocaleString("vi-VN")} đ
        </p>
      </div>
      <button
        type="button"
        onClick={() => onDelete(product.id)}
        className="self-start rounded-md px-3 py-1 text-sm font-medium text-red-700 hover:bg-red-50 sm:self-auto"
        aria-label={`Xóa sản phẩm ${product.name}`}
      >
        Xóa
      </button>
    </li>
  );
}

export default ProductItem;
