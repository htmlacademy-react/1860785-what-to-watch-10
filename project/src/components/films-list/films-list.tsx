import { useState } from 'react';
import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';


type FilmsListProps = {
  films: Film[];
  setCurrentFilm: (film: Film) => void;
};

function FilmsList({films, setCurrentFilm}: FilmsListProps): JSX.Element {
  const [/* activeFilm */, setActiveFilm] = useState(0);

  const mouseOverHandler = (filmId: number) => {
    setActiveFilm(filmId);
  };

  const filmCards = [];
  for (const film of films) {
    filmCards.push(
      <FilmCard
        key = {film.id}
        film = {film}
        mouseOverHandler = {mouseOverHandler}
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
