import { useTranslation } from "react-i18next";
import { LANG_LIST } from "../../app/constants";

export default function LangSwitcher() {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  return (
        <select className="" 
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
          aria-label="select language">
            {
              LANG_LIST.map((lang) => (
                <option value={lang} key={lang}>
                  {
                    lang
                  }
                </option>
              ))
            }
        </select>
  )
}
