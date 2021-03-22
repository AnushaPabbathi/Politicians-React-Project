import './App.css';
import Card from './components/card/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from './components/details/Details';
import CustomLink from './components/customLink/CustomLink';
import List from './components/list/List';

function App() {
  return (
      <Router>
        <div className="App">
          {/* <CustomLink activeOnlyWhenExact={true} to="/" label="Home" />
          <CustomLink to="/details" label="Details" /> */}
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route path="/details" component={Details}>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
