import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Feed from "./pages/Feed";

function App() {
  return (
    <>
      <header className="fixed left-0 right-0 top-0">
        <nav className="flex justify-center gap-4">
          <Link to="/login">Login</Link>
          <Link to="/feed">Feed</Link>
          <Link to="/">Ana Sayfa</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <h1 className="text-3xl font-bold underline text-red-400">
            Hello world!
          </h1>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/feed">
          <Feed />
        </Route>
      </Switch>
    </>
  );
}

export default App;
