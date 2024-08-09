import { useTranslation } from "react-i18next";


export default function LangSwitcher() {
  const {t, i18n} = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="flex gap-2 text-2xl">
      <button className="button" onClick={() => changeLanguage('ru')}>ru</button>
      <button className="button" onClick={() => changeLanguage('en')}>en</button>
    </div>
  )
}
