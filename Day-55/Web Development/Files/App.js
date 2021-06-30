import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Courses from './Components/Courses';
import Heading from './Components/Heading';
import Footer from './Components/Footer';
import Team from './Components/Team';
import mockTestDetails from './Components/mock-test/mockTestDetails';
import mockTest from './Components/mock-test/mockTest';
import PageNotFound from './Components/PageNotFound';

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
      {/* <Route path="/about" render={()=><h3 style={{color:'green' , textAlign: "center"}}>Hey! Its me</h3>} /> */}

      <Route path="/courses" component={Courses} />

      <Route path="/mock-tests/:topic/:set/:date" component={mockTestDetails} />
      <Route path="/mock-tests" component={mockTest} />
      
      <Route path="/" component={Home} exact/>

      <Route component={PageNotFound} />
      </Switch>
      
      <Footer />
    </BrowserRouter>

  );
}

export default App;