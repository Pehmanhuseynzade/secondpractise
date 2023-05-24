import Add from "../Pages/Add";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import Mainroot from "../Pages/Mainroot";

export const ROUTES= [
     {
          path:'/',
          element:<Mainroot/>,
          children:[
               {
                    path:'',
                    element:<Home/>
               },
               {
                    path:'add',
                    element:<Add/>
               },
               {
                    path:'datadetail/:id',
                    element:<Detail/>
               }
          ]
     }
]