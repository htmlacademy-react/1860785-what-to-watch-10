import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Data = {
  FILMS_CARDS_COUNT: 20,
  FILM_TITLE: 'The Grand Budapest Hotel',
  FILM_GENRE: 'Drama',
  FILM_YEAR: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmCardsCount = {Data.FILMS_CARDS_COUNT}
      filmTitle = {Data.FILM_TITLE}
      filmGenre = {Data.FILM_GENRE}
      filmYear = {Data.FILM_YEAR}
    />
  </React.StrictMode>,
);
