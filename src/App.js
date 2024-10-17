import logo from './logo.svg';
import './App.css';
import Races from './Races/RacesPage';
import TopMenu from './Components/TopMenu';
import Home from './Home/HomePage';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className="main-grid">
          <div id="top-grid">
            <TopMenu/>
          </div>
          <div id="mid-grid">
            <div id="left-col">
            </div>
            <div id="mid-col">
                <Routes>
                  <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path="races" element={<Races/>}/>
                  </Route>
                </Routes>
            </div>
            <div id="right-col"></div>
          </div>
          <div id="bot-grid"></div>
      </div>       
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
