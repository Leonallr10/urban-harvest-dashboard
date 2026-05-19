import "./StatCard.css";

function StatCard({ title, value, icon: Icon, color, trend }) {
  return (
    <div className={`stat-card stat-card--${color}`}>
      <div className="stat-card__icon">
        <Icon size={24} />
      </div>
      <div className="stat-card__content">
        <p className="stat-card__title">{title}</p>
        <h3 className="stat-card__value">{value}</h3>
        {trend && <span className="stat-card__trend">{trend}</span>}
      </div>
    </div>
  );
}

export default StatCard;
