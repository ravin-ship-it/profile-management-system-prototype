import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import CreateProfilePage from "./pages/CreateProfilePage.jsx";
import AllProfilePages from "./pages/AllProfilePage.jsx";
import OneProfilePage from "./pages/OneProfilePage.jsx";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/create" element={<CreateProfilePage />} />
                <Route path="/profiles" element={<AllProfilePages />} />
                <Route path="/:id" element={<OneProfilePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
