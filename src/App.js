import {React} from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';
import { Home } from './Pages/Home';
import { Navbar } from './Navbar/Navbar';
import {Contacto} from './Pages/Contacto';
import {Nosotros} from './Pages/Nosotros';
import './App.css';

const router = createBrowserRouter([
  {
    element: <Navbar/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Nosotros",
        element: <Nosotros/>
      },
      {
        path: "/Contacto",
        element: <Contacto/>
      },
    ]
  }
])



function App() {


  return (
    <Fragment>
    <div className="App">
        <RouterProvider router={router}/>
      </div>
    </Fragment>
  );
}

export default App;

