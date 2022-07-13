import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  filmsCount: number;
}

function FilmsList({filmsCount}: FilmsListProps) {
  const filmCards = [];
  for (let i = 0; i < filmsCount; i++) {
    filmCards.push(<FilmCard key={i.toString()} />);
  }

  return (
    <div className="catalog__films-list">
      {filmCards}
    </div>
  );
}

export default FilmsList;
