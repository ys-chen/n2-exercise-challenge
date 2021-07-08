import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Diary from './components/Diary';
import ErrorBoundary from './components/ErrorBoundary';
import Record from './components/Record';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <>
      <div className="oldMapBg" />
      <div className="rpgui-content">
        <Router>
          <Switch>
            <Route path="/register">
              <ErrorBoundary><Register /></ErrorBoundary>
            </Route>
            <Route path="/record"><Record /></Route>
            <Route path="/diary"><Diary /></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
