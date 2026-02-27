import {
  FaHome,
  FaBoxOpen,
  FaRobot,
  FaTags,
  FaShoppingCart,
  FaChartBar,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Sidebar({ collapsed, setCollapsed }) {
  return (
    <div
      className={`fixed left-0 top-[62px] h-[calc(100vh-62px)] 
      bg-[#05161f] backdrop-blur-sm border-r border-gray-800
      text-white transition-all duration-300 z-40 
      ${collapsed ? "w-16" : "w-56"}`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 flex items-center justify-center rounded-full 
                     bg-gray-800 hover:bg-indigo-600 
                     transition-all duration-300 shadow-md"
        >
          {collapsed ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 px-4">
        <SidebarItem icon={<FaHome />} label="Dashboard" collapsed={collapsed} />
        <SidebarItem icon={<FaBoxOpen />} label="Products" collapsed={collapsed} />
        <SidebarItem icon={<FaRobot />} label="AI Assistant" collapsed={collapsed} />

        <div className="my-3 border-t border-gray-800" />

        <SidebarItem icon={<FaTags />} label="Categories" collapsed={collapsed} />
        <SidebarItem icon={<FaShoppingCart />} label="Orders" collapsed={collapsed} />
        <SidebarItem icon={<FaChartBar />} label="Analytics" collapsed={collapsed} />

        <div className="my-3 border-t border-gray-800" />

        <SidebarItem icon={<FaCog />} label="Settings" collapsed={collapsed} />
        <SidebarItem icon={<FaQuestionCircle />} label="Help" collapsed={collapsed} />
      </nav>
    </div>
  );
}

function SidebarItem({ icon, label, collapsed }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition-all duration-200">
      <span className="text-lg">{icon}</span>
      {!collapsed && <span className="text-sm">{label}</span>}
    </div>
  );
}

export default Sidebar;