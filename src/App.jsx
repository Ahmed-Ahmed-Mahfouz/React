import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { SharedLayout } from './layout/SharedLayout.jsx';
import './App.css';
import {
  Home,
  ProductDetails,
  ProductForm,
  About,
  Myproduct,
  NotFound,
} from './pages';
import { getAllProducts } from './api/productAPI.js';

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route
            path='/products'
            loader={getAllProducts}
            element={<Myproduct />}
          />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/products/:id/edit' element={<ProductForm />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
