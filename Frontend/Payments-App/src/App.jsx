import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { Users } from "./components/Users";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>

      <Users />
    </>
  )
}

export default App