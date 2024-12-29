import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AppLayout from './Component/Layout/AppLayout';
import { ErrorPage } from './Pages/ErrorPage';
import { Homeintro } from './Homecomponents/Homeintro';
import Aboutsection from './AboutComponents/Aboutsection';
import Projects from './Pages/Projects';
import { ProjectIntro } from './ProjectComp/ProjectIntro';
import { ContactAllComp } from './ContactAllComp/ContactAllComp';
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
          element: <Home />,
          loader: Homeintro,
        },
        {
          path: "/about",   
          element: <About />,
          loader: Aboutsection,
        },
        {
          path: "/projects",  
          element: <Projects />,
          loader: ProjectIntro,
        },
        {
          path: "/contact",  
          element: <Contact />,
          loader: ContactAllComp,
          action: contactData,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
   
};

export default App;

