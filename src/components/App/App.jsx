import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HeaderLayout from 'layouts/HeaderLayout';
import css from "./App.module.css"

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));

function App() {
  return (
    <div className={css.container}>
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
