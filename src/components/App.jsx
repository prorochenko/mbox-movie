import { Route, Routes, Navigate } from 'react-router-dom';
// import Layout from './Layout/Layout';
import { lazy } from 'react';

const LayoutPage = lazy(() => import('../pages/Layout/LayoutPage'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Series = lazy(() => import('../pages/Series/Series'));
const TvShows = lazy(() => import('../pages/TVShows/TvShows'));
// const Layout = lazy(() => import('../components/Layout/Layout'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/tvshows" element={<TvShows />} />
      </Route>
    </Routes>
  );
};
