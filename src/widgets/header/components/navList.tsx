import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../../app/constants";
import './navList.scss';
import { INavRow } from "./navList.types";

function NavRow({name, link}: INavRow) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <li>
      <Link 
        to={ link } 
        className={ `base-text-shadow ${ location.pathname === link ? 'active' : '' } ` }>
          { t(`pages.${name}`) }
        </Link>
    </li>
  )
}

export default function NavList() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {
          Object.entries(ROUTES).map((route, i) => 
            i < 4 ? <NavRow name={route[0]} link={route[1]} /> : '' 
          )
        }
      </ul>
    </nav>
  )
}
