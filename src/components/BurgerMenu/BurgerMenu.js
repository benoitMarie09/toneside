import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { headerMenu } from "../../datas/headerMenu";
import "./BurgerMenu.scss";

const BurgerMenu = ({ currentSlide, updateSlide }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function burgerClick() {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  function menuClick(index) {
    burgerClick();
    updateSlide(index);
  }

  return (
    <>
      <nav className="nav" role="navigation">
        <div>
          <div className="nav__logo">Logo</div>
        </div>
        <div className={`menu ${isMenuOpen ? "menu--show" : ""}`}>
          <ul className="menu__links">
            {headerMenu.getHeaderMenu().map((menuItem) => (
              <li key={menuItem.key}>
                <Link
                  className={menuItem.key === currentSlide ? "active" : ""}
                  to={menuItem.slug}
                  onClick={() => {
                    menuClick(menuItem.key);
                  }}
                >
                  {menuItem.key === currentSlide
                    ? "- " + menuItem.label + " -"
                    : menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`nav__burger ${isMenuOpen ? "nav__burger--on" : ""}`}
          type="button"
          onClick={burgerClick}
        >
          <span></span>
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default BurgerMenu;
