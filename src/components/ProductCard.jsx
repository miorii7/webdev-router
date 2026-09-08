import { labelForCategory } from '../data/products.js';

export default function ProductCard({ product }) {
  return (
    <a
      href={'/catalog/' + product.id}
      className="product-card"
      onClick={e => { e.preventDefault(); onSelect(product.id); }}
    >
      <div className="product-swatch" style={{ background: product.color }}>
        {product.name[0]}
      </div>
      <div className="product-body">
        <p className="product-name">{product.name}</p>
        <p className="product-cat">{labelForCategory(product.category)}</p>
        <div className="product-price">{product.price} ₽</div>
      </div>
    </a>
  );
}
