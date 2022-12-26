
import './App.css';
import Header from './components/Header/Header'
import BookCard from './components/BookCard/BookCard'
import MoreAboutBook from './components/MoreAboutBook/MoreAboutBook'
import SearchBarArea from './components/SearchBarArea/SearchBarArea'
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBarArea/>
        <SearchResults/>
        <BookCard/>
        <MoreAboutBook/>
    {/*    book_cards and more about books must be in search_results jsx*/}


    </div>
  );
}

export default App;
