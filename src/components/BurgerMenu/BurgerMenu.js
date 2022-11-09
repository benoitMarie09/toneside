import { Link, Outlet } from "react-router-dom";

import { headerMenu } from "../../datas/headerMenu";
import "./BurgerMenu.scss";

const BurgerMenu = ({ currentSlide, updateSlide }) => {
  function burgerClick() {
    document.querySelector(".nav__menu").classList.toggle("nav__menu--show");
    document
      .querySelector(".nav__burger")
      .classList.toggle("nav__burger--checked");
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
        <div className="nav__menu">
          <ul className="nav__menu__links">
            {headerMenu.getHeaderMenu().map((menuItem) => (
              <li key={menuItem.key}>
                <Link
                  className={menuItem.key === currentSlide ? "active" : ""}
                  to={menuItem.slug}
                  onClick={() => {menuClick(menuItem.key)}}
                >
                  {menuItem.key === currentSlide
                    ? "- " + menuItem.label + " -"
                    : menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button className="nav__burger" type="button" onClick={burgerClick}>
          <span></span>
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default BurgerMenu;
