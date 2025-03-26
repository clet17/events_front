import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyRouter from './MyRouter.jsx'
import { ServicesController } from './context/servicesContext.jsx'
import { AuthController } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ServicesController>
      <AuthController>
        <MyRouter />
      </AuthController>
    </ServicesController>
  </BrowserRouter>,
)
