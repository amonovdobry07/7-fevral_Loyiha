import React, { useEffect, useState } from "react";
import "../../Styles/Home.scss";

import heroImg from "../../assets/images/orqaFon-1.jpg";

// WORKS rasmlarini o'zingnikiga moslab olasan:
import g1 from "../../assets/images/ishi-9.jpg";
import g2 from "../../assets/images/ishi-10.jpg";
import g3 from "../../assets/images/ishi-11.jpg";
import g4 from "../../assets/images/ishi-12.jpg";
import g5 from "../../assets/images/ishi-13.jpg";

const works = [
  { id: 1, title: "Miniatyura qal’a", cat: "Qal’a", subtitle: "Hovli dekor • Buyurtma asosida", img: g1, tag: "Katalog 01" },
  { id: 2, title: "Tosh kompozitsiya", cat: "Qoya", subtitle: "Relief faktura • Mustahkam", img: g2, tag: "Katalog 02" },
  { id: 3, title: "Sharshara landshaft", cat: "Sharshara", subtitle: "Bosqichli oqim • Landshaft", img: g3, tag: "Katalog 03" },
  { id: 4, title: "Haykal va obraz", cat: "Haykal", subtitle: "Detal • Sahna kompozitsiya", img: g4, tag: "Katalog 04" },
  { id: 5, title: "Sharqona obida", cat: "Obida", subtitle: "Peshtoq • Milliy ruh", img: g5, tag: "Katalog 05" },
];

const Home = () => {
  const [openItem, setOpenItem] = useState(null);

  // ESC bilan lightbox yopish
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenItem(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lightbox ochiq bo'lsa scrollni bloklash
  useEffect(() => {
    if (openItem) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [openItem]);

  return (
    <main className="home">
      {/* HERO */}
      <section className="hero" aria-label="Bosh sahifa">
        <div className="hero__bg" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="hero__overlay" />
        <div className="hero__grain" aria-hidden="true" />

        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__kicker">
              <span className="pill">Miniatyura • Landshaft • Haykal</span>
              <span className="pill pill--soft">Qo‘l mehnati</span>
            </div>

            <h1 className="hero__title">
              Qadimiy makonlarni <br />
              hovlingizga olib kiramiz
            </h1>

            <p className="hero__lead">
              Qal’a va mini-shaharlar, sharsharalar, sun’iy qoyalar, sharqona obidalar.
              Har bir asar buyurtma asosida, joyingizga mos kompozitsiyada yaratiladi.
            </p>

            <div className="hero__cta">
              <a className="btn btn--primary" href="#works">Asarlarni ko‘rish</a>
              <a className="btn btn--ghost" href="#contact">Bog‘lanish</a>
            </div>

            <div className="hero__meta">
              <div className="metaCard">
                <div className="metaCard__k">Yagona</div>
                <div className="metaCard__t">Har loyiha</div>
              </div>
              <div className="metaCard">
                <div className="metaCard__k">Mustahkam</div>
                <div className="metaCard__t">Tashqi makon uchun</div>
              </div>
              <div className="metaCard">
                <div className="metaCard__k">Detallar</div>
                <div className="metaCard__t">Premium yondashuv</div>
              </div>
            </div>
          </div>

          {/* PROCESS CARD */}
          <aside className="hero__aside" aria-label="Buyurtma jarayoni">
            <div className="processCard">
              <div className="processCard__top">
                <div className="processCard__title">Buyurtma qanday bo‘ladi?</div>
                <div className="processCard__seal">3 BOSQICH</div>
              </div>

              <div className="processSteps">
                <div className="step">
                  <span className="step__n">01</span>
                  <span className="step__t">O‘lcham va joy rasm/video</span>
                </div>
                <div className="step">
                  <span className="step__n">02</span>
                  <span className="step__t">Eskiz va kelishuv</span>
                </div>
                <div className="step">
                  <span className="step__n">03</span>
                  <span className="step__t">Ishlab chiqish + o‘rnatish</span>
                </div>
              </div>

              <a className="processCard__link" href="#process">
                Jarayonni ko‘rish <span className="arr">→</span>
              </a>
            </div>
          </aside>
        </div>

        <div className="hero__bottomFade" />
      </section>

      {/* WORKS - Editorial Grid + Lightbox */}
      <section id="works" className="sec sec--works">
        <div className="container">
          <header className="secHead">
            <div>
              <p className="eyebrow">Muzey katalogi</p>
              <h2 className="secTitle">Asarlar galereyasi</h2>
              <p className="secDesc">
                Har bir kompozitsiya katalog sahifasi kabi: rasm, caption, tartib.
              </p>
            </div>

            <a className="linkBtn" href="#contact">Buyurtma berish →</a>
          </header>

          <div className="gridEditorial">
            {works.map((w) => (
              <article className="edCard" key={w.id}>
                <button
                  type="button"
                  className="edCard__media edCard__mediaBtn"
                  onClick={() => setOpenItem(w)}
                  aria-label={`${w.title} rasmini kattalashtirish`}
                >
                  <img src={w.img} alt={w.title} loading="lazy" />
                  <span className="edCard__tag">{w.tag}</span>
                  <span className="edCard__zoom">Ko‘rish</span>
                </button>

                <div className="edCard__body">
                  <div className="edCard__row">
                    <h3 className="edCard__t">{w.title}</h3>
                    <span className="edCard__cat">{w.cat}</span>
                  </div>
                  <p className="edCard__d">{w.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec sec--about" id="about">
        <div className="container aboutGrid">
          <div className="aboutBox">
            <p className="eyebrow">Usta haqida</p>
            <h2 className="secTitle">Qadimni jonlantiruvchi qo‘llar</h2>
            <p className="secDesc">
              Bu ishlar bezak uchun emas, his uchun yaratiladi. Tosh, mox va detal orqali
              qadimiy shaharlar va obidalar qayta tug‘iladi.
            </p>

            <div className="aboutFacts">
              <div className="fact">
                <div className="fact__k">Qo‘l mehnati</div>
                <div className="fact__t">Har detal qo‘lda ishlanadi</div>
              </div>
              <div className="fact">
                <div className="fact__k">Kompozitsiya</div>
                <div className="fact__t">Joyingizga mos dizayn</div>
              </div>
              <div className="fact">
                <div className="fact__k">Material</div>
                <div className="fact__t">Tashqi makon uchun chidamli</div>
              </div>
            </div>
          </div>

          <div className="aboutPanel">
            <div className="aboutPanel__title">Yo‘nalishlar</div>
            <div className="aboutList">
              <div className="aboutLine"><span className="dot" /> Miniatyura qal’a va shaharlar</div>
              <div className="aboutLine"><span className="dot" /> Sharshara, sun’iy qoya, landshaft</div>
              <div className="aboutLine"><span className="dot" /> Haykal va tarixiy obrazlar</div>
              <div className="aboutLine"><span className="dot" /> Sharqona obidalar (peshtoq, minora)</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec sec--process" id="process">
        <div className="container">
          <header className="secHead">
            <div>
              <p className="eyebrow">Jarayon</p>
              <h2 className="secTitle">Eskizdan o‘rnatishgacha</h2>
              <p className="secDesc">
                Hammasi aniq bosqichlarda: shaffof, tartibli, professional.
              </p>
            </div>
          </header>

          <div className="timeline">
            <div className="tItem">
              <div className="tNum">01</div>
              <div className="tBody">
                <div className="tTitle">Joy va o‘lcham</div>
                <div className="tText">Joyingiz rasmini/video va o‘lchamlarni yuborasiz.</div>
              </div>
            </div>

            <div className="tItem">
              <div className="tNum">02</div>
              <div className="tBody">
                <div className="tTitle">Eskiz va kelishuv</div>
                <div className="tText">Kompozitsiya eskizi, narx va muddat kelishiladi.</div>
              </div>
            </div>

            <div className="tItem">
              <div className="tNum">03</div>
              <div className="tBody">
                <div className="tTitle">Ishlab chiqish</div>
                <div className="tText">Relief, tosh faktura, mox va detallar ishlanadi.</div>
              </div>
            </div>

            <div className="tItem">
              <div className="tNum">04</div>
              <div className="tBody">
                <div className="tTitle">O‘rnatish va topshirish</div>
                <div className="tText">Tayyor asar o‘rnatiladi va yakuniy ko‘rinish topshiriladi.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sec sec--contact">
        <div className="container contactCard">
          <div>
            <p className="eyebrow">Aloqa</p>
            <h2 className="secTitle">Buyurtma uchun bog‘laning</h2>
            <p className="secDesc">
              O‘lcham, joylashuv va g‘oyangizni yuboring. Sizga mos kompozitsiya taklif qilamiz.
            </p>
          </div>

          <div className="contactBtns">
            <a className="btn btn--primary" href="https://t.me/UstaMirjon_0718" target="_blank" rel="noreferrer">Telegram</a>
            <a className="btn btn--ghost" href="#">Qo‘ng‘iroq</a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {openItem && (
        <div className="lb" role="dialog" aria-modal="true" onClick={() => setOpenItem(null)}>
          <div className="lb__panel" onClick={(e) => e.stopPropagation()}>
            <button className="lb__close" onClick={() => setOpenItem(null)} aria-label="Yopish">
              ✕
            </button>

            <div className="lb__imgWrap">
              <img src={openItem.img} alt={openItem.title} />
            </div>

            <div className="lb__meta">
              <div className="lb__top">
                <div className="lb__title">{openItem.title}</div>
                <div className="lb__pill">{openItem.cat}</div>
              </div>

              <div className="lb__desc">{openItem.subtitle}</div>

              <div className="lb__foot">
                <span className="lb__stamp">{openItem.tag}</span>
                <a className="lb__link" href="#contact" onClick={() => setOpenItem(null)}>
                  Buyurtma berish →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
