import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Team from "./pages/TeamPage";
import Ethos from "./pages/EthosPage";
import Services from "./pages/ServicesPage";
import Comments from "./pages/CommentsPage";
import Vision_Mission from "./pages/Vision_MissionPage";
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/HomePage';
import ValuesPage from './pages/ValuesPage';
const App = () => {
  return (
    <BrowserRouter basename="/GS-Pro_Web_Site"> 
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/team" element={<Team />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/vision_mission" element={<Vision_Mission />} />
        <Route path="/ethos" element={<Ethos />} />
        <Route path="/services" element={<Services />} />
        <Route path="/values" element={<ValuesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
