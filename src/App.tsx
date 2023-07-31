import React, { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import "./App.css"; // Import the CSS file for styling

// Define the type for each sub-menu option
interface SubMenuOption {
  label: string;
  icon: string;
}

// Define the type for each menu option
interface SidebarMenuOption {
  label: string;
  icon: string;
  children?: SubMenuOption[]; // Optional sub-menu options
}

interface SidebarProps {
  menuOptions: SidebarMenuOption[];
}

const App: React.FC<SidebarProps> = ({ menuOptions }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const renderSubMenu = (subMenuOptions: SubMenuOption[]) => {
    return (
      <ul className="sub-menu">
        {subMenuOptions.map((option, index) => (
          <li key={index} className="sub-menu-item">
            <span className="icon">{React.createElement(option.icon)}</span>
            {!collapsed && <span className="label">{option.label}</span>}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!collapsed && <h5>Venture Ramp</h5>}
        <GiHamburgerMenu onClick={toggleCollapse} className='side-burger' size={14} />
      </div>
      <ul className="sidebar-menu">
        {menuOptions.map((option, index) => (
          <li key={index} className="sidebar-menu-item">
            <span className="icon">{React.createElement(option.icon)}</span>
            {!collapsed && <span className="label">{option.label}</span>}
            {option.children && collapsed && (
              <div className="sub-menu-dropdown">{renderSubMenu(option.children)}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App
