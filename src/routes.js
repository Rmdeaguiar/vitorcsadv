import Home from './pages/Home';
import Articles from './pages/Articles';
import { Routes, Route } from 'react-router-dom'

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artigos" element={<Articles />} />
        </Routes>

    );
}

export default MainRoutes;