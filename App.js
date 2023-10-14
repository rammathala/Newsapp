
import './App.css';
import Agriculturepage from './Components/Agriculturepage';
import Businesspage from './Components/Businesspage';
import Cinemapage from './Components/Cinemapage';
import Culturepage from './Components/Culturepage';
import Educationpage from './Components/Educationpage';
import Localpage from './Components/Localpage';
import Politicalpage from './Components/Politicalpage';
import Sportspage from './Components/Sportspage';
import Agridesc from './Components/internalroute/Agricdesc';
import Businessdesc from './Components/internalroute/Businessdesc';
import Cinemadesc from './Components/internalroute/Cinemadesc';
import Culturedesc from './Components/internalroute/Culturedesc';
import Educationdesc from './Components/internalroute/Educationdesc';
import Localdesc from './Components/internalroute/Localdesc';
import Politicaldescription from './Components/internalroute/Politicaldescription';
import Sportsdesc from './Components/internalroute/Sportsdesc';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import News from './News';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
    <Routes>
            <Route  path="/" element={<News/>}/>
            <Route  path="/Political" element={<Politicalpage/>}/>
            <Route  path="/Sports" element={<Sportspage/>}/>
            <Route  path="/Education" element={<Educationpage/>}/>
            <Route  path="/Cinemas" element={<Cinemapage/>}/>
            <Route  path="/Cultural" element={<Culturepage/>}/>
            <Route  path="/Agriculture" element={<Agriculturepage/>}/>
            <Route  path="/Business" element={<Businesspage/>}/>
            <Route  path="/Local" element={<Localpage/>}/>
            <Route  path="/Political/:id" element={<Politicaldescription/>}  />
            <Route  path="/Sports/:id" element={<Sportsdesc/>}/>
            <Route  path="/Education/:id" element={<Educationdesc/>}/>
            <Route  path="/Cinemas/:id" element={<Cinemadesc/>} />
            <Route  path="/Cultural/:id" element={<Culturedesc/>}/>
            <Route  path="/Agriculture/:id" element={<Agridesc/>} />
            <Route  path="/Business/:id" element={<Businessdesc/>} />
            <Route  path="/Local/:id" element={<Localdesc/>} />
      </Routes>
      <Footer/>
   </BrowserRouter>
    
    </div>
  );
}

export default App;
