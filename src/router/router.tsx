import {
    createBrowserRouter,
  } from "react-router-dom";
  import NotFound from '../pages/Not-found/notfound'
  import Homepage from '../pages/homepage/homepage'
  import Login from "../pages/login/login"
  
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
  
    },
  
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  
  export default routes
  