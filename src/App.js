//BrowserRouter connects to the actual browser
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../../react-router-6-tutorial/src/pages/Home';
import About from '../../react-router-6-tutorial/src/pages/About';
import Error from '../../react-router-6-tutorial/src/pages/Error';
import SingleProduct from '../../react-router-6-tutorial/src/pages/SingleProduct';
import Products from '../../react-router-6-tutorial/src/pages/Products';
import { SharedLayout } from '../../react-router-6-tutorial/src/pages/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout></SharedLayout>}>
          <Route index path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="/products/:productId"
            element={<SingleProduct></SingleProduct>}
          ></Route>
          <Route path="*" element={<Error></Error>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
