import { Route } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Welcome from './components/Welcome';
import Products from './components/Products';

function App() {
  return (
    <div>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
