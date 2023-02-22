import {Routes, Route} from 'react-router-dom'
import Hello from '../components/Hello/Hello'
const Router =   () => (
  <Routes>
    <Route path="/" element={<Hello />} />
    
  </Routes>
)

export default Router