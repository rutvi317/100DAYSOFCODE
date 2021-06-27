import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Courses from './Components/Courses';
import Heading from './Components/Heading';
import Footer from './Components/Footer';
import Team from './Components/Team';

function App ()
{
  return(
    <BrowserRouter>
      <Heading />
      {/* <Route path="/" component={Home} exact/>
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} /> */}

      {/* Using switch */}
      
      <Switch>
      <Route path="/about/team" component={Team} />
      <Route path="/about" component={About} />

      <Route path="/courses" component={Courses} />

      <Route path="/" component={Home} exact/>
      </Switch>
      
      <Footer />
    </BrowserRouter>

  );
}

export default App;