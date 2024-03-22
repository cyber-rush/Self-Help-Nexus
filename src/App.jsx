import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/self-help-nexus" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
