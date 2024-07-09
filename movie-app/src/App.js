import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import Header from './components/Navbar';
import '../src/styles/globals.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/details/:movieId" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
