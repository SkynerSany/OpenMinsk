import { useTranslation } from 'react-i18next';
import RoutesCard from './card/card';
import './cardRoutes.scss';
import {ICardRoutes} from './cardRoutes.types';

export default function CardRoutes({}: ICardRoutes) {
  const { t } = useTranslation();
  const CARDS = [
    {
      "title": t("homePage.cardRoutes.cards.popularPlaces.title"),
      "desc": t("homePage.cardRoutes.cards.popularPlaces.desc"),
      "iconName": 'landmarks'
    },
    {
      "title": t("homePage.cardRoutes.cards.recommendedRoutes.title"),
      "desc": t("homePage.cardRoutes.cards.recommendedRoutes.desc"),
      "iconName": 'routes'
    },
    {
      "title": t("homePage.cardRoutes.cards.eventsAndActivities.title"),
      "desc": t("homePage.cardRoutes.cards.eventsAndActivities.desc"),
      "iconName": 'events',
    },
    {
      "title": t("homePage.cardRoutes.cards.whereToStay.title"),
      "desc": t("homePage.cardRoutes.cards.whereToStay.desc"),
      "iconName": 'whereToStay'
    },
    {
      "title": t("homePage.cardRoutes.cards.whereToEat.title"),
      "desc": t("homePage.cardRoutes.cards.whereToEat.desc"),
      "iconName": 'whereToEat'
    },
    {
      "title": t("homePage.cardRoutes.cards.transport.title"),
      "desc": t("homePage.cardRoutes.cards.transport.desc"),
      "iconName": 'transport'
    },
    {
      "title": t("homePage.cardRoutes.cards.usefulInformation.title"),
      "desc": t("homePage.cardRoutes.cards.usefulInformation.desc"),
      "iconName": 'information'
    }
  ]

  return (
    <section className="cardRoutes position-center" id='cardRoutes'>
      <div className="wrapper position-center">
        <h3 className="cardRoutes__title">{ t('homePage.cardRoutes.title') }</h3>
        <div className="cardRoutes__card-list">
          {
            CARDS.map((card, index) => <RoutesCard title={card.title} desc={card.desc} iconName={card.iconName} key={index} />)
          }
        </div>
      </div>
    </section>
  )
}
