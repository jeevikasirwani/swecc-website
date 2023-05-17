import './App.css';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from './Home';
import Events from './Events';
import About from './About';
import JoinNow from './Join-Now';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route index path = "/Home" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Join-Now" element={<JoinNow/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};


export default App;
>>>>>>> 97946200b8cf9b697c4c42617b2f7e49ebda61b3
