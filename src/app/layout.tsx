import { Route, Routes } from "react-router-dom";
import Events from "../pages/events/events";
import Home from "../pages/home/home";
import Landmarks from "../pages/landmarks/landmarks";
import MapPage from "../pages/map/map";
import RoutesPage from "../pages/routes/routes";
import Header from "../widgets/header/header";
import { ROUTES } from "./constants";

export default function Layout() {
  return (
    <>
      <Header />

      <Routes>
        <Route path={ ROUTES.home } element={<Home />} />
        <Route path={ ROUTES.landmarks } element={<Landmarks />} />
        <Route path={ ROUTES.routes } element={<RoutesPage />} />
        <Route path={ ROUTES.events } element={<Events />} />
        <Route path={ ROUTES.map } element={<MapPage />} />
      </Routes>
    </>
  )
}
