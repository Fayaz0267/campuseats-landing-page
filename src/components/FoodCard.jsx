export default function FoodCard({ item }) {
  return (
    <div className="phone__food-card">
      <div
        className="phone__food-thumb"
        style={{ background: item.veg ? '#4f9d7a26' : '#d9757526' }}
        aria-hidden="true"
      >
        {item.icon}
      </div>
      <div className="phone__food-body">
        <div className="phone__food-name">{item.name}</div>
        <div className="phone__food-meta">
          <span className={`badge ${item.veg ? 'badge--veg' : 'badge--nonveg'}`}>
            <span className="badge__dot" />
            {item.veg ? 'Veg' : 'Non-Veg'}
          </span>
          <span>{item.pickupMinutes} min</span>
        </div>
      </div>
      <span className="phone__food-price">₹{item.price}</span>
      <button className="phone__add-btn" aria-label={`Add ${item.name} to cart`}>+</button>
    </div>
  );
}
