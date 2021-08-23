import Irena from "./pages/Irena.js"
import About from "./pages/About.js"
import Navbar from "./components/Nav.js"
import Projects from "./pages/Project"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Irena}/>
        <Route path="/about" exact component={About}/>
        <Route path="/projects" exact component={Projects}/>
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;
