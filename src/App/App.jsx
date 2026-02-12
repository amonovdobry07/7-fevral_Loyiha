import "../Styles/App.scss";
import Navbar from "../Sections/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Maxsulotlar from "../Pages/Maxsulotlar/Maxsulotlar";
import Xizmatlar from "../Pages/Xizmatlar/Xizmatlar";
import MarketPlace from "../Pages/MarketPLace/MarketPlace";
import Aloqa from "../Pages/Aloqa/Aloqa";
import translationEn from "../Components/locales/translationEn";
import translationFr from "../Components/locales/translationFr";
import translationRu from "../Components/locales/translationRu";
import translationUz from "../Components/locales/translationUz";
import translationTr from "../Components/locales/translationTr";
import Footer from "../Sections/Footer/Footer";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import MarketPlaceSingl from "../Pages/MarketPLace/MarketPlaceSingl";


i18n.use(initReactI18next).init({
  resources: {
    uz: {translation: translationUz}, 
    ru: {translation: translationRu}, 
    en: {translation: translationEn}, 
    tr: {translation: translationTr}, 
    fr: {translation: translationFr}, 
  }, 
  lng: "uz", 
  fallbackLng: "uz" 
})



function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Maxsulotlar" element={<Maxsulotlar />} />
          <Route path="/Xizmatlar" element={<Xizmatlar />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/Aloqa" element={<Aloqa />} />
          <Route path="/marketplace/:key" element={<MarketPlaceSingl />} />
        </Routes>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
