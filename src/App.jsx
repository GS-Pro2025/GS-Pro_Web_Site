import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Team from "./pages/TeamPage";
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/contactUsPage';
import VacanciesPage from './pages/VacanciesPage';
const App = () => {
  return (
    <BrowserRouter basename="/GS-Pro_Web_Site"> 
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/team" element={<Team />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
