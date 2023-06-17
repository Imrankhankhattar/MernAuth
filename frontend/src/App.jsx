import Header from "./components/header"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
function App() {
  return (
    <>
      <Header></Header>
      <Container className="my-2">
        <Outlet></Outlet>
      </Container>
    </>
  )
}

export default App
