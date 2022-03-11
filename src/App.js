import { Route, Switch } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Welcome from './components/Welcome';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
