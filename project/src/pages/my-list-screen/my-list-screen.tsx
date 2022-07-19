import { Film } from '../../types/film';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';

type MyListProps = {
  myListFilms: Film[];
  myListFilmsCount: number;
  promoFilm: Film;
  setCurrentFilm: (film: Film) => void;
};

function MyListScreen(props: MyListProps): JSX.Element {
  const {myListFilms, myListFilmsCount, promoFilm, setCurrentFilm} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo
          promoFilm={promoFilm}
          setCurrentFilm={setCurrentFilm}
        />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myListFilmsCount}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="/" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList
          films={myListFilms}
          setCurrentFilm = {setCurrentFilm}
        />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
