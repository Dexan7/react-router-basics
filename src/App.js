import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// React router < 6.4
// const routerDefinitions  = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routerDefinitions);

// React router => 6.4
const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: '', element: <HomePage />},
      { index: true, element: <HomePage />}, // path: ''
      { path: 'products', element: <ProductsPage />},
      { path: 'products/:productId', element: <ProductDetailPage />}
    ]},
]);


function App() {
  return <RouterProvider router={router} />
}

export default App;
