import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //라우터를 사용하기 위해선 사용하려는 컴포넌트를 
  //BrowserRouter로 감싸주세요.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
