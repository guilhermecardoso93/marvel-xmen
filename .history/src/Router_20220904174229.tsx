import { BrowserRouter , Routes, Route} from 'react-router-dom'
import { Header } from './components/Header';
import { Home } from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

export function Router () { 
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}