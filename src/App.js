import Irena from "./pages/Irena.js"
import About from "./pages/About.js"
import Navbar from "./components/Nav.js"
import Projects from "./pages/Project"
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Irena}/>
        <Route path="/about" exact component={About}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;
