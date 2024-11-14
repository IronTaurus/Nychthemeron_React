import logo from './logo.svg';
import './App.css';
import Races from './Races/RacesPage';
import {BasicRules, CombatRules} from './Rules/index';
import {CardGenerator, CombatTracker} from './Tools/index';
import {Characters, Talents, GameClasses} from './Game/index';
import TopMenu from './Components/TopMenu';
import Home from './Home/HomePage';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  const routes = [
    {path: "races", element: <Races/>}, 
    {path: "basicrules", element: <BasicRules/>}, 
    {path: "combatrules", element: <CombatRules/>},
    {path: "cardgen", element: <CardGenerator/>},
    {path: "combattracker", element: <CombatTracker/>},
    {path: "characters", element: <Characters/>},
    {path: "talents", element: <Talents/>},
    {path: "gameclasses", element: <GameClasses/>},];

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
                    {routes.map((route, i) => <Route key={i} path={route.path} element={route.element}/>)};
                  </Route>
                </Routes>
            </div>
            <div id="right-col"></div>
          </div>
      </div>       
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
