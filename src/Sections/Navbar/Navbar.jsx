  import { useState } from "react";
  import "../../Styles/Navbar.scss";
  import { Link } from "react-router-dom";
  import { FaBars } from "react-icons/fa6";
  import { FaShoppingCart } from "react-icons/fa";
  import { useEffect } from "react";
  import { useTranslation } from "react-i18next";

  const Navbar = () => {
    const [open, setOpen] = useState(false); // --> false qilib qo'ydik
    const { t, i18n } = useTranslation();

    const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");
    
    useEffect(() => {
      localStorage.setItem("lang", lang);
      document.documentElement.setAttribute("lang", lang); // SEO + accessibility
      i18n.changeLanguage(lang);
    }, [lang, i18n]);



    return (
      <>
        <div className="nav_big_header">
          <div className="nav-container">
            <div className="nav-logo">
              <h1 className="h1">
                <Link to="/">Favvora Dekor</Link>
              </h1>
            </div>
            <div className="nav-links">
              <ul>
                <li>
                  <Link to="/">{t(`BoshSahifa`)}</Link>
                </li>
                <li>
                  <Link to="Maxsulotlar">{t(`Maxsulotlar`)}</Link>
                </li>
                <li>
                  <Link to="Xizmatlar">{t(`Xizmatlar`)}</Link>
                </li>
                <li>
                  <Link to="MarketPlace">{t(`MarketPlace`)}</Link>
                </li>
                <li>
                  <Link to="Aloqa">{t(`Aloqa`)}</Link>
                </li>
              </ul>
            </div>
            <div className="lang-switch">
              <select
                id="langSelect"
                className="lang-select"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
              >
                <option value="uz">🇺🇿 O‘zbek</option>
                <option value="ru">🇷🇺 Русский</option>
                <option value="en">🇬🇧 English</option>
                <option value="tr">🇹🇷 Türkçe</option>
                <option value="fr">🇫🇷 Français</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile  */}
        <div className="mobile-big-container">
          <div className="mobile-big-container-in">
            <div className="mobile-navbar">
              <div className="mobile-navbar-in">
                <div className="mobile-logo">
                  <h1>
                    <Link to="/">_Amonoff_</Link>
                  </h1>
                </div>

                <div className="mobile-actions">
                  <div className="lang-switch lang-switch--mobile">
                    <select
                      id="langSelectMobile"
                      className="lang-select"
                      value={lang}
                      onChange={(e) => setLang(e.target.value)}
                    >
                      <option value="uz">🇺🇿</option>
                      <option value="ru">🇷🇺</option>
                      <option value="en">🇬🇧</option>
                      <option value="tr">🇹🇷 Türkçe</option>
                      <option value="fr">🇫🇷 Français</option>
                    </select>
                  </div>
                  <FaBars
                    className="mobile-nav-icon"
                    onClick={() => setOpen((prev) => !prev)}
                  />
                </div>
              </div>
            </div>

            {/* NOTE: position fixed qilish uchun ham shu joyda qoldirish mumkin */}
            <div className={`mobile-ul ${open ? "open" : ""}`}>
              <ul className="mobile-menu">
                <li>
                  <Link to="/" onClick={() => setOpen(false)}>
                    {t(`BoshSahifa`)}
                  </Link>
                </li>
                <li>
                  <Link to="Maxsulotlar" onClick={() => setOpen(false)}>
                    {t(`Maxsulotlar`)}
                  </Link>
                </li>
                <li>
                  <Link to="Xizmatlar" onClick={() => setOpen(false)}>
                    {t(`Xizmatlar`)}
                  </Link>
                </li>
                <li>
                  <Link to="MarketPlace" onClick={() => setOpen(false)}>
                    {t(`MarketPlace`)}
                  </Link>
                </li>
                <li>
                  <Link to="Aloqa" onClick={() => setOpen(false)}>
                    {t(`Aloqa`)}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Navbar;
