import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeComp from './component/home';
import ListData from './component/listData';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route path="/list" element={<ListData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
