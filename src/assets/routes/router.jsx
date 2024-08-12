import {createBrowserRouter} from "react-router-dom";
import App from "../view/App.jsx";

const router = createBrowserRouter([
    {
        path : '/portfolio_delicia_react',
        element : <App />
    }
])

export default router;