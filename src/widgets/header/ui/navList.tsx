import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../../app/layout";

const ANOTHER_PAGE_STYLE = 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 capitalize';
const CURENT_PAGE_STYLE = 'block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white capitalize';

export default function NavList() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    
    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {
          Object.entries(ROUTES).map(route => 
            <li key={route[0]}>
              <Link to={route[1]} className={ location.pathname === route[1] ? CURENT_PAGE_STYLE : ANOTHER_PAGE_STYLE}> { t(route[0]) }</Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}
