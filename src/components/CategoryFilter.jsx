import { useSearchParams } from 'react-router-dom';

export default function CategoryFilter({ categories }) {

  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "";

  const handleSelect = (categoryId) => {
    setSearchParams(categoryId ? { category: categoryId } : {});
  }
  return (
    <div className="filter-row">
      {categories.map(cat => (
        <button
          key={cat.id || 'all'}
          type="button"
          className={'filter-chip' + (cat.id === activeCategory ? ' active' : '')}
          onClick={() => handleSelect(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
