import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Landmarks from "../pages/landmarks/landmarks";
import Header from "../widgets/header/header";

export const ROUTES = {
  'home': '/',
  'landmarks': '/landmarks',
  'routes': '/routes',
  'events': '/events',
  'map': '/map',
}

export default function Layout() {
  return (
    <>
      <Header />

      <Routes>
        <Route path={ ROUTES.home } element={<Home />} />
        <Route path={ ROUTES.landmarks } element={<Landmarks />} />
      </Routes>
    </>
  )
}
