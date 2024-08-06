import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import router from "./assets/routes/router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
