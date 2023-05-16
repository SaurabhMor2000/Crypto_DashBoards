import NewsFeed from "./components/NewsFeed";
import CurrencyConvertor from "./components/currencyConverter";


const App =() => {
  return (
    <div className="app">
      Crypto_Dashboard
      <div className="app-wrapper">
      <CurrencyConvertor/>
      <NewsFeed/>
      <aside><iframe width="560" height="315" src="https://www.youtube.com/embed/BS2hC2nogos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></aside>
      </div>
    </div>
  );
}

export default App;
