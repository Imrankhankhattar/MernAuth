import Header from "./components/header"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Container className="my-2">
        <Outlet></Outlet>
      </Container>
    </>
  )
}

export default App
