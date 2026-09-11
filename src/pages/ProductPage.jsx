import { labelForCategory, products } from '../data/products.js';
import { useParams, useNavigate } from 'react-router-dom';


export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="not-found-inline">Такого растения нет в каталоге.</div>;
  }

  return (
    <section className="page-shell">
      <div className="product-detail">
        <div className="detail-swatch" style={{ background: product.color }}>
          {product.name[0]}
        </div>
        <div className="detail-body">
          <p className="detail-name">{product.name}</p>
          <p className="detail-cat">{labelForCategory(product.category)}</p>
          <div className="detail-price">{product.price} ₽</div>
          <p className="detail-desc">{product.description}</p>
          <div className="detail-actions">
            <button type="button" className="btn ghost" onClick={() => navigate(-1)}>← Назад</button>
          </div>
        </div>
      </div>
    </section>
  );
}
