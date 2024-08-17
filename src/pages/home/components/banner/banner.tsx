import { useEffect, useState } from 'react';
import './banner.scss';
import { IBanner } from "./banner.types";
import { useTranslation } from 'react-i18next';
import Button from '../../../../shared/button/button';

export default function Banner({}: IBanner) {
  const { t } = useTranslation();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight + 10);
  window.addEventListener('resize', () => setWindowHeight(window.innerHeight + 10))
  
  return (
    <section className='banner position-center' style={{height: windowHeight}}>
      <div className="wrapper position-center">
        <div className="banner__info">
          <p className="banner__info-title base-text-shadow">{ t("homePage.banner.title") }</p>
          <p className="banner__info-title second-title base-text-shadow">{ t("homePage.banner.secondTitle") }</p>
          <div className="banner__info-desc base-text-shadow">
            <p>{ t("homePage.banner.desc") }</p>
          </div>
          <Button type='button' text={t("homePage.banner.button")} color='green' /> 
        </div>
      </div>
    </section>
  )
}
