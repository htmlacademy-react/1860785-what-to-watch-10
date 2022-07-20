import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';

type FilmProps = {
  film: Film;
  mouseOverHandler: (filmId: number) => void;
  setCurrentFilm: (film: Film) => void;
};

function FilmCard({film, mouseOverHandler, setCurrentFilm}: FilmProps): JSX.Element {
  const {id, name, previewImage} = film;

  const filmTitleClickHandler = () => {
    setCurrentFilm(film);
  };

  return (
    <article
      onClick={filmTitleClickHandler}
      onMouseOver={() => mouseOverHandler(id)}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Films}${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
