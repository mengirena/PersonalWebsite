import Irena from "./pages/Irena.js"
import About from "./pages/About.js"
import Navbar from "./components/Nav.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Irena}/>
        <Route path="/about" exact component={About}/>
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;
