import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Feed from "./components/Feed/Feed";
import Profile from "./components/Profile/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="parent_wrapper">
        <Router>
         
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/login" />;
              }}
            />
            <Route exact path="/login">
              <Auth />
            </Route>
            <Route exact path="/profile">
            <Navbar />
              <Profile />
            </Route>
          
            <Route exact path="/feed">
            <Navbar />
              <Feed />
              </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
