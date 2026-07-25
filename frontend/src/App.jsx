import CreateProfile from './components/CreateProfile.jsx'
import LandingPage from './components/LandingPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/create' element={<CreateProfile />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
