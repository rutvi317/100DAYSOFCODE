import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Courses from './Components/Courses';
import Heading from './Components/Heading';
import Footer from './Components/Footer';

function App ()
{
  return(
    <BrowserRouter>
      <Heading />
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Footer />
    </BrowserRouter>

  );
}

export default App;