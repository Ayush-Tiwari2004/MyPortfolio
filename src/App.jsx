import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AppLayout from './Component/Layout/AppLayout';
import { ErrorPage } from './Pages/ErrorPage';
// import { Homeintro } from './Homecomponents/Homeintro';
// import Aboutsection from './AboutComponents/Aboutsection';
import Projects from './Pages/Projects';
// import { ProjectIntro } from './ProjectComp/ProjectIntro';
// import { ContactAllComp } from './ContactAllComp/ContactAllComp';
import { contactData } from './ContactAllComp/Secondsection';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",   
      element: <AppLayout />,
      errorElement : <ErrorPage/>, 
      children: [
        {
          path: "/",   
          element: <Home />
        },
        {
          path: "/about",   
          element: <About />
        },
        {
          path: "/projects",  
          element: <Projects />
        },
        {
          path: "/contact",  
          element: <Contact />,
          action: contactData,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
   
};

export default App;

