import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute, AuthStatus } from '../../const';
import { Film } from '../../types/film';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../components/private-route/private-route';

type AppProps = {
  films: Film[];
  promoFilm: Film;
};

function App({films, promoFilm}: AppProps): JSX.Element {
  const myListFilms = films.filter((film) => film.isFavorite);
  const myListFilmsCount = myListFilms.length;

  const [currentFilm, setCurrentFilm] = useState(films[0]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              films={films}
              promoFilm={promoFilm}
              myListFilmsCount={myListFilmsCount}
              setCurrentFilm={setCurrentFilm}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <MyListScreen
                myListFilms={myListFilms}
                myListFilmsCount={myListFilmsCount}
                promoFilm={promoFilm}
                setCurrentFilm={setCurrentFilm}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <FilmScreen
              currentFilm={currentFilm}
              films={films}
              myListFilmsCount={myListFilmsCount}
              promoFilm={promoFilm}
              setCurrentFilm={setCurrentFilm}
            />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <AddReviewScreen
              film={currentFilm}
              promoFilm={promoFilm}
              setCurrentFilm={setCurrentFilm}
            />
          }
        />
        <Route
          path={AppRoute.Player}
          element={
            <PlayerScreen
              currentFilm={currentFilm}
            />
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
