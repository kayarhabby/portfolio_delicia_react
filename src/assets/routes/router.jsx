import {createBrowserRouter} from "react-router-dom";
import App from "../view/App.jsx";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />
    }
])

export default router;