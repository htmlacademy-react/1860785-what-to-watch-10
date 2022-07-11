import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  filmCardsCount: number;
  filmTitle: string;
  filmGenre: string;
  filmYear: number;
}

function App({filmCardsCount, filmTitle, filmGenre, filmYear}: AppProps): JSX.Element {
  return (
    <MainScreen
      filmCardsCount = {filmCardsCount}
      filmTitle = {filmTitle}
      filmGenre = {filmGenre}
      filmYear = {filmYear}
    />
  );
}

export default App;
