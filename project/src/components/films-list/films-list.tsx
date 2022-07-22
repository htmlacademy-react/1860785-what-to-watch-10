import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Film[];
  setCurrentFilm: (film: Film) => void;
};

function FilmsList({films, setCurrentFilm}: FilmsListProps): JSX.Element {

  const filmCards = [];
  for (const film of films) {
    filmCards.push(
      <FilmCard
        key = {film.id}
        film = {film}
        setCurrentFilm = {setCurrentFilm}
      />
    );
  }

  return (
    <div className="catalog__films-list">
      {filmCards}
    </div>
  );
}

export default FilmsList;
