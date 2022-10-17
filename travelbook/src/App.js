import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageConnect from "./Components/Pages/PageConnection/PageConnect";
import PageErreur from "./Components/Elements/pageErreur";
import Profil from "./Components/Pages/PageMain/profil/Profil";
import './App.css';
import PageMain from "./Components/Pages/PageMain/PageMain";
import EditProfil from "./Components/Pages/PageMain/profil/EditProfil";
import PostsTest from "./Components/Elements/PostsTest";


const router = createBrowserRouter([


  {
    path: "/",
    element: <PageConnect/>,
    error: <PageErreur />
  },

  {
    path: "/pagemain",
    element: <PageMain/>,
    error: <PageErreur />
  },
  {
    path: "/profil",
    element: <Profil/>,
    error: <PageErreur />
  },

  {
    path: "/editprofil",
    element: <EditProfil/>,
    error: <PageErreur />
  },

]);


function App() {



  return (
    <div className="App">
 <RouterProvider router={router}/>
    
 

  
  
    
    
    
    </div>
  )
}