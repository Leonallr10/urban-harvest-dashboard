import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleSidebar } from "../../store/slices/dashboardSlice";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  X,
  Leaf,
} from "lucide-react";
import { logout } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import "./Layout.css";

function Sidebar() {
  const { sidebarOpen } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const navItems = [
    { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/products", icon: Package, label: "Products" },
    { path: "/orders", icon: ShoppingCart, label: "Orders" },
    { path: "/customers", icon: Users, label: "Customers" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Leaf size={24} />
            <span>Urban Harvest</span>
          </div>
          <button
            className="sidebar-close"
            onClick={() => dispatch(toggleSidebar())}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
              onClick={() => {
                if (window.innerWidth < 1024) dispatch(toggleSidebar());
              }}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
