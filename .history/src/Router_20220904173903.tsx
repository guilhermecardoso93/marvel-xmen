import { BrowserRouter , Routes, Route} from 'react-router-dom'
import { Header } from './components/Header';
import { Home } from './pages/Home';

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