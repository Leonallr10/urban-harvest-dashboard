import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slices/dashboardSlice";
import { Menu, Bell, Search } from "lucide-react";
import "./Layout.css";

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="menu-toggle"
          onClick={() => dispatch(toggleSidebar())}
        >
          <Menu size={22} />
        </button>
        <div className="header-search">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header-right">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <div className="user-profile">
          <div className="user-avatar">
            {user?.name?.charAt(0) || "A"}
          </div>
          <div className="user-info">
            <span className="user-name">{user?.name || "Admin User"}</span>
            <span className="user-role">{user?.role || "Administrator"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
