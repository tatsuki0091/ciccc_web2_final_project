import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import List from './components/contents/List';
import LaLiga from './components/contents/LaLigaList';
import CL from './components/contents/CLList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/laliga" component={LaLiga} />
        <Route path="/cl" component={CL} />
      </Switch>
      {/* <Link to="/">Back To Top</Link> */}
    </BrowserRouter>
  );
}

export default App;
