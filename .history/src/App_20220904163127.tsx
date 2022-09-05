import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';

export function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home/>}/>
      </Routes>
    </Router>
  );
}
