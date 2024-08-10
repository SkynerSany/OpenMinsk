import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LangSwitcher from "../langSwitcher/langSwitcher";
import NavList from "./ui/navList";
import './header.scss';
import Button from "../../shared/button/button";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="wrapper">
        <div>Logo</div>
        <NavList />
        <div className="header__right-container">
          <div className="registration">
            <Button type="link" color="white" text={t('login')} link="/login" />
            <Button type="link" color="blue" text={t('signup')} link="/signin" />
          </div>
          <LangSwitcher />
        </div>
      </div>
  </header>
  )
}
