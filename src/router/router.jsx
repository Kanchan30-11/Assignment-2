import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Signup from "../pages/Signup.jsx";
import CreateProfile from "../pages/CreateProfile.jsx";
import Slide3 from "../pages/Slide3.jsx";
import Verification from "../pages/Verification.jsx";

  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Signup/>,
    },{
      path: "/createProfile",
      element: <CreateProfile/>,
    },
  {
    path: "/selectOptions",
    element: <Slide3/>,
  },
  {
    path: "/verification",
    element: <Verification/>,
  },
])
  export default router;