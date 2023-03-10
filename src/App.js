
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import SearchPage from './component/SearchPage';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="app">
      <Router>

        <Header />

        <Routes>
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;