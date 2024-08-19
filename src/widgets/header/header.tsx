import { useTranslation } from "react-i18next";
import LangSwitcher from "../langSwitcher/langSwitcher";
import NavList from "./components/navList";
import './header.scss';
import Button from "../../shared/button/button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { t } = useTranslation();
  const [sticky, setSticky] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/') {
      
      window.onscroll = () => {
        setSticky(window.scrollY > 10 ? 'scroll' : '');
      }
    }
  }, [])

  return (
    <header className={`header position-center ${location.pathname === '/' ? 'bgTransperrent' : ''} ${ sticky }`}>
      <div className="wrapper">
        <button className="burger-menu"></button>
        <Link to='/'>
          <h1 className="header__logo base-text-shadow">{ t('openMinsk') }</h1>
        </Link>
        <NavList />
        <div className="header__right-container">
          {/* <div className="registration">
            <Button type="link" color="white" text={t('login')} link="/login" />
            <Button type="link" color="blue" text={t('signup')} link="/signin" />
          </div> */}
          <button className="user-btn" aria-label="user button"></button>
          <LangSwitcher />
        </div>
      </div>
  </header>
  )
}
