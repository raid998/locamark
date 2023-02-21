import { createBrowserRouter } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Hello from '../components/Hello/Hello'
export default () => (
  <Routes>
    <Route path="/" element={<Hello />} />
    
  </Routes>
)

