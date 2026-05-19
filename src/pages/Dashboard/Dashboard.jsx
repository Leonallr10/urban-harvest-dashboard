import { useSelector } from "react-redux";
import StatCard from "../../components/Cards/StatCard";
import OrdersTable from "../../components/Table/OrdersTable";
import { ShoppingCart, DollarSign, Users, Truck } from "lucide-react";
import "./Dashboard.css";

function Dashboard() {
  const { stats, orders } = useSelector((state) => state.dashboard);

  const statCards = [
    {
      title: "Total Orders",
      value: stats.totalOrders.toLocaleString(),
      icon: ShoppingCart,
      color: "green",
      trend: "+12.5% from last month",
    },
    {
      title: "Revenue",
      value: `$${stats.revenue.toLocaleString()}`,
      icon: DollarSign,
      color: "blue",
      trend: "+8.2% from last month",
    },
    {
      title: "Active Users",
      value: stats.activeUsers.toLocaleString(),
      icon: Users,
      color: "purple",
      trend: "+5.1% from last month",
    },
    {
      title: "Pending Deliveries",
      value: stats.pendingDeliveries.toString(),
      icon: Truck,
      color: "orange",
      trend: "-3.4% from last month",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening with Urban Harvest today.</p>
      </div>

      <div className="dashboard__stats">
        {statCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      <div className="dashboard__orders">
        <div className="section-header">
          <h2>Recent Orders</h2>
          <button className="view-all-btn">View All</button>
        </div>
        <OrdersTable orders={orders} />
      </div>
    </div>
  );
}

export default Dashboard;
