import Header from "./components/Header";
import HighlightedMovie from "./components/HighlightedMovie";
import KeepWatching from "./components/KeepWatching";
import PopularOnNetflix from "./components/PopularOnNetflix";

function App() {
  return (
    <div className="App">
      <Header />
      <HighlightedMovie />
      <PopularOnNetflix />
      <KeepWatching />
    </div>
  );
}

export default App;
