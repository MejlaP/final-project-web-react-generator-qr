// Moje uživatelské jméno na discordu je Miloš P.

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import QrGenerator from "./pages/QrGenerator"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qrgenerator" element={<QrGenerator />} />
    </Routes>
  </BrowserRouter>
}

export default App