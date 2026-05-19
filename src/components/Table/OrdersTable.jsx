import "./OrdersTable.css";

function OrdersTable({ orders }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Delivered":
        return "status--delivered";
      case "In Transit":
        return "status--transit";
      case "Preparing":
        return "status--preparing";
      case "Cancelled":
        return "status--cancelled";
      default:
        return "";
    }
  };

  return (
    <div className="orders-table-wrapper">
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="order-id">{order.id}</td>
              <td>{order.customer}</td>
              <td className="order-items">{order.items}</td>
              <td className="order-total">${order.total.toFixed(2)}</td>
              <td>
                <span className={`status-badge ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td className="order-date">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
