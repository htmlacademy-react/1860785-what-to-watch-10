import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Film} from '../../types/film';
import CardVideoPlayer from '../card-video-player/card-video-player';

type FilmProps = {
  film: Film;
  setCurrentFilm: (film: Film) => void;
};

function FilmCard({film, setCurrentFilm}: FilmProps): JSX.Element {
  const {id, name, previewImage, previewVideoLink} = film;

  const filmTitleClickHandler = () => {
    setCurrentFilm(film);
  };

  return (
    <article
      onClick={filmTitleClickHandler}
      className="small-film-card catalog__films-card"
    >
      <CardVideoPlayer
        previewImage={previewImage}
        previewVideoLink={previewVideoLink}
      />
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Films}${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
