import Explore from "./Pages/Explore";
import Message from "./Pages/Message";
import Home from "./Pages/NewsFeed/home";
import People from "./Pages/People";
import Profile from "./Pages/Profile";


export const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/messages",
    element: <Message />,
  },
  {
    path: "/people",
    element: <People />,
  }
];

export const publicRoutes = [

];
