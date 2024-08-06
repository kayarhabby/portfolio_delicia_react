import {createBrowserRouter} from "react-router-dom";
import App from "../components/App.jsx";
import ArticlePublie from "../components/ArticlePublie.jsx";

const router = createBrowserRouter([

    {
        path : '/',
        element : <App />
    },
    {
        path : '/ArticlePublie/:name',
        element : <ArticlePublie />
    }

])

export default router;