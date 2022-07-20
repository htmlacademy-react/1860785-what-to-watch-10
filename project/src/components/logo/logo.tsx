import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';

type LogoProps = {
  promoFilm: Film;
  setCurrentFilm: (film: Film) => void;
};

function Logo({promoFilm, setCurrentFilm}: LogoProps): JSX.Element {
  return (
    <div onClick={() => setCurrentFilm(promoFilm)} className="logo">
      <Link to={AppRoute.Main} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
