import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/mainlayout/MainLayout";
import Homepage from "../Pages/homepage/Homepage";
import Books from "../Pages/Books/Books";
import NotFound from "../Pages/errorpage/ErrorPage";
import BookDetails from "../Components/BookDetail/BookDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                path:'/',
                Component: Homepage
            },
            {
                path:'/books',
                Component: Books
            },
            {
                path:'/bookDetails/:detailId',
                loader: ()=> fetch('/data.json'),
                Component: BookDetails
            }
        ],

        
    },
    {path:"*", 
    element:<NotFound />}
])