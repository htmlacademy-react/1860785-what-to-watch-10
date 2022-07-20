import { Film } from '../../types/film';
import Logo from '../../components/logo/logo';
import FilmsList from '../../components/films-list/films-list';
import Play from '../../components/play/play';
import MyList from '../../components/my-list/my-list';
import AddReview from '../../components/add-review/add-review';

const MORE_LIKE_THIS_FILMS_COUNT = 4;

type FilmScreenProps = {
  currentFilm: Film;
  films: Film[];
  myListFilmsCount: number;
  promoFilm: Film;
  setCurrentFilm: (film: Film) => void;
};

function FilmScreen(props: FilmScreenProps): JSX.Element {
  const {currentFilm, films, myListFilmsCount, promoFilm, setCurrentFilm} = props;
  const {name, genre, released, posterImage, rating, backgroundImage} = currentFilm;
  const {scoresCount, description, director, starring, id} = currentFilm;

  const moreLikeThisFilms = films.slice(0, MORE_LIKE_THIS_FILMS_COUNT);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo
              promoFilm={promoFilm}
              setCurrentFilm={setCurrentFilm}
            />

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

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <Play
                  id={id}
                />
                <MyList
                  myListFilmsCount={myListFilmsCount}
                />
                <AddReview
                  id={id}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{description}</p>

                <p>{description}</p>

                <p className="film-card__director"><strong>Director: {director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {starring.join(', ')} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList
            films={moreLikeThisFilms}
            setCurrentFilm={setCurrentFilm}
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
    </>
  );
}

export default FilmScreen;
