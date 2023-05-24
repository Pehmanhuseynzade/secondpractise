import Add from "../Pages/Add";
import Detailpage from "../Pages/Detail";
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
                    path:'robot/:id',
                    element:<Detailpage/>
               }
          ]
     }
]