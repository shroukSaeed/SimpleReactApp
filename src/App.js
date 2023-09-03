import { Form, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import {Home , Movies  , AddMovie, NotFound, MovieDetails} from './pages'

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home>
          
        </Home>} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:id/edit' element={<AddMovie />} />
        <Route path='movies/:id' element={<MovieDetails />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
