import { NavLink } from "react-router-dom";
import "./index.less";

function Header(): JSX.Element {
  const navList = [
    {
      text: "首页",
      path: "/",
    },
    {
      text: "产品与服务",
      path: "/fuse",
    },
  ];
  return (
    <header>
      <div className="container">
        <div className="logo-warp" />
        <nav className="navbar">
          {navList.map((item) => {
            return (
              <NavLink activeClassName="active" key={item.path} to={item.path}>
                {item.text}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
export default Header;
//
