import React from "react";
import "../../Styles/Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft" aria-label="Footer">
      {/* top separator like stone edge */}
     

      <div className="container ft__inner">
        {/* Brand / statement */}
        <div className="ft__col ft__brand">
          <div className="ft__logo">_Amonoff_</div>
          <p className="ft__text">
            Tosh, mox va detal uyg‘unligida qadimiy makonlarni zamonaviy hovlilarga
            moslab yaratamiz. Har bir asar buyurtma asosida, yagona kompozitsiyada.
          </p>

          <div className="ft__stamp">
            <span className="ft__stampLine">QO‘L MEHNATI</span>
            <span className="ft__dot" />
            <span className="ft__stampLine">QADIMIY RUH</span>
            <span className="ft__dot" />
            <span className="ft__stampLine">MUSTAHKAM</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="ft__col ft__nav" aria-label="Sahifa havolalari">
          <div className="ft__title">Sahifalar</div>
          <a className="ft__link" href="#works">Asarlar</a>
          <a className="ft__link" href="#about">Usta haqida</a>
          <a className="ft__link" href="#process">Jarayon</a>
          <a className="ft__link" href="#contact">Aloqa</a>
        </nav>

        {/* Details (no duplicated CTA) */}
        <div className="ft__col ft__info">
          <div className="ft__title">Ma’lumot</div>

          <div className="ft__rows">
            <div className="ft__row">
              <span className="ft__k">Ish vaqti</span>
              <span className="ft__v">09:00 – 20:00</span>
            </div>
            <div className="ft__row">
              <span className="ft__k">Hudud</span>
              <span className="ft__v">O‘zbekiston</span>
            </div>
            <div className="ft__row">
              <span className="ft__k">Buyurtma</span>
              <span className="ft__v">O‘lcham + joy rasm/video</span>
            </div>
          </div>

          <div className="ft__miniLinks" aria-label="Bog‘lanish linklari">
            {/* Bu yerga real linklarni qo'yasan */}
            <a className="ft__chip" href="https://t.me/UstaMirjon_0718" target="_blank" rel="noreferrer">Telegram</a>
            <a className="ft__chip" href="tel:+998000000000">Qo‘ng‘iroq</a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="ft__bottom">
        <div className="container ft__bottomInner">
          <span className="ft__fine">© {year} Khalimov</span>
          <span className="ft__fine">Miniatyura • Landshaft • Haykal</span>
        </div>
      </div>
    </footer>
  );
}
