import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ManageProperties } from '@modules/ManageProperties';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' render={ props => <ManageProperties { ...props } /> } />
      </Switch>
    </Router>
  );
}

export default App;
