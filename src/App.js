import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Diary from './components/Diary';
// import ErrorBoundary from './components/ErrorBoundary';
// import Record from './components/Record';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <>
      <div className="oldMapBg" />
      <div className="rpgui-content">
        <Router basename="/">
          <Switch>
            <Route exact path="/">
              <Link className="rpgui-button autoHeight" to="/register">
                <p>報名</p>
              </Link>
            </Route>
            <Route path="/register"><Register /></Route>
            {/* <Route path="/record"><Record /></Route>
            <Route path="/diary"><Diary /></Route> */}
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
