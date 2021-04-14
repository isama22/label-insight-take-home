import './App.css';
import Photos from './Photos'
import PhotoDetail from './PhotoDetail'
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return(
    <div>
      <Photos />
      <Switch>
        <Route path="/detail" render={() => ( <PhotoDetail />)} />

      </Switch>
    </div>
  )
}

export default App;