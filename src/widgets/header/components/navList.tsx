import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../../app/constants";
import './navList.scss';

export default function NavList() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {
          Object.entries(ROUTES).map(route => 
            <li key={ route[0] }>
              <Link 
                to={ route[1] } 
                className={ `base-text-shadow ${ location.pathname === route[1] ? 'active' : '' } ` }>
                  { t(`pages.${route[0]}`) }
                </Link>
            </li>
          )
        }
      </ul>
    </nav>
  )
}
