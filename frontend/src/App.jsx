
import{BrowserRouter,Route, Routes} from "react-router-dom"
import Redirector from './pages/Redirector'
import Home_page from './pages/Home_page'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashbord from './pages/Dashboard'
import { RecoilRoot } from "recoil"
function App() {
 

  return (
    <RecoilRoot>
    <BrowserRouter>
  <Routes>
  
    <Route path="/"
          element={
            <Redirector />
          }/>
               <Route path="/home" 
          element={
          <Home_page />
          }>
        </Route>
        <Route path="/home/signup" 
          element={
          <Signup />
          }>
        </Route>
        <Route path="/home/signin" 
          element={
            <Signin />
          }>
        </Route>
        <Route path="/home/dashbord" 
          element={
            <Dashbord />
          }>
        </Route>

 
       

      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
