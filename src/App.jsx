import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToiletDetailed from "./Pages/ToiletDetailed";
import MainPage from "./Pages/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} /> 
                <Route path="/:id" element={<ToiletDetailed />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;