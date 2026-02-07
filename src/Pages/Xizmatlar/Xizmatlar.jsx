import React, { useMemo, useState } from "react";
import "../../Styles/Xizmatlar.scss";

// Placeholder rasmlar (xohlagan rasmlaringni qo’yib yubor)
import shot1 from "../../assets/images/ishi-9.jpg";
import shot2 from "../../assets/images/ishi-10.jpg";
import shot3 from "../../assets/images/ishi-11.jpg";
import shot4 from "../../assets/images/orqaFon-1.jpg";

const STEPS = [
  {
    n: "01",
    title: "Joy va o‘lcham",
    desc: "Joyingiz rasmini/video va o‘lchamlarni yuborasiz. Biz joylashuv va kompozitsiyani aniqlaymiz.",
    img: shot4,
    caption: "Joy tahlili: o‘lcham, yo‘nalish, joylashuv",
    points: ["Rasm/video", "O‘lcham", "Joylashuv tahlili"],
  },
  {
    n: "02",
    title: "Eskiz va kelishuv",
    desc: "Kompozitsiya eskizi tayyorlanadi. Uslub, detal, narx va muddat kelishiladi.",
    img: shot1,
    caption: "Eskiz: kompozitsiya va detal rejasi",
    points: ["Eskiz", "Uslub tanlovi", "Narx/muddat"],
  },
  {
    n: "03",
    title: "Ishlab chiqish",
    desc: "Relief, tosh qatlam, mox aksent va bezaklar qo‘l mehnati bilan ishlanadi.",
    img: shot2,
    caption: "Ish jarayoni: faktura va qatlam ishlovi",
    points: ["Qo‘l mehnati", "Faktura", "Detal ishlovi"],
  },
  {
    n: "04",
    title: "O‘rnatish va topshirish",
    desc: "Tayyor ish joyiga o‘rnatiladi va yakuniy ko‘rinish topshiriladi.",
    img: shot3,
    caption: "O‘rnatish: yakuniy ko‘rinish va topshirish",
    points: ["O‘rnatish", "Yakuniy ko‘rinish", "Topshirish"],
  },
];

const SHOTS = [
  { img: shot1, t: "Eskizdan keyingi bosqich", d: "Kompozitsiya shakli aniq bo‘ladi." },
  { img: shot2, t: "Faktura ishlovi", d: "Tosh qatlamlar va detal chiziqlar." },
  { img: shot3, t: "Detal yakuni", d: "Tayyor elementlar joyiga moslanadi." },
  { img: shot4, t: "Joyga mos uslub", d: "Atrof muhit bilan uyg‘un kompozitsiya." },
];

export default function Xizmatlar() {
  const [active, setActive] = useState("01");

  const cur = useMemo(
    () => STEPS.find((s) => s.n === active) || STEPS[0],
    [active]
  );

  return (
    <main className="services">
      {/* HEAD */}
      <section className="svHero">
        <div className="container svHero__inner">
          <div className="svHero__left">
            <div className="svHero__kicker">
              <span className="svPill">Jarayon • Tartib • Sifat</span>
              <span className="svPill svPill--soft">Qadimiy ruh</span>
            </div>
            <h1 className="svHero__title">Xizmatlar</h1>
            <p className="svHero__lead">
              Buyurtma jarayoni aniq va tartibli: tahlil → eskiz → ishlab chiqish → o‘rnatish.
              Shunda natija ham chiroyli, ham mustahkam bo‘ladi.
            </p>
          </div>

          <div className="svHero__right">
            <div className="svStamp">
              <div className="svStamp__t">USTAXONA</div>
              <div className="svStamp__m">QO‘L MEHNATI</div>
              <div className="svStamp__b">MUSEY KATALOGI</div>
            </div>
          </div>
        </div>
        <div className="svHero__fade" />
      </section>

      {/* PROCESS (list + BIG IMAGE) */}
      <section className="svProcess" id="process">
        <div className="container">
          <div className="svHead">
            <h2 className="svHead__t">Jarayon</h2>
            <p className="svHead__d">
              Chapdan bosqich tanlang. O‘ng tomonda jarayon rasmi katta ko‘rinadi.
            </p>
          </div>

          <div className="svStage">
            {/* LEFT LIST */}
            <div className="svList" role="tablist" aria-label="Jarayon bosqichlari">
              {STEPS.map((s) => (
                <button
                  key={s.n}
                  type="button"
                  className={`svRow ${active === s.n ? "is-active" : ""}`}
                  onClick={() => setActive(s.n)}
                  role="tab"
                  aria-selected={active === s.n}
                >
                  <span className="svRow__n">{s.n}</span>
                  <span className="svRow__t">{s.title}</span>
                  <span className="svRow__arr">↗</span>
                </button>
              ))}

              <div className="svMiniNote">
                <div className="svMiniNote__k">Izoh</div>
                <div className="svMiniNote__v">
                  Har bir loyiha tayyor qolip asosida emas, balki joyning o‘ziga xos xususiyatlari asosida yaratiladi.
                  O‘lcham, yorug‘lik tushishi, fon va atrof-muhit bilan uyg‘unlik birinchi navbatda tahlil qilinadi.
                  <br /><br />
                  Buyurtma beruvchi tomonidan yuborilgan rasm yoki video asosida umumiy joylashuv aniqlanadi.
                  Shundan so‘ng kompozitsiyaning balandligi, kengligi va umumiy ritmi belgilanadi.
                  <br /><br />
                  Eskiz bosqichida shakl va detal nisbatlari muhokama qilinadi.
                  Bu bosqichda kelajakdagi ishning qanday ko‘rinishga ega bo‘lishi aniq tasavvur qilinadi.
                </div>
              </div>
            </div>

            {/* RIGHT BIG IMAGE */}
            <aside className="svView" aria-label="Jarayon rasmi">
              <div className="svView__frame">
                <img className="svView__img" src={cur.img} alt={cur.title} />
                <div className="svView__shade" />
                <div className="svView__badge">
                  <div className="svView__id">BOSQICH {cur.n}</div>
                  <div className="svView__title">{cur.title}</div>
                  <div className="svView__desc">{cur.desc}</div>

                  <div className="svView__points">
                    {cur.points.map((p, i) => (
                      <span key={i} className="svChip">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="svView__cap">{cur.caption}</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SHOTS GRID */}
      <section className="svShots" aria-label="Jarayondan lavhalar">
        <div className="container">
          <div className="svHead svHead--mini">
            <h2 className="svHead__t">Jarayondan lavhalar</h2>
            <p className="svHead__d">Ish jarayonidan kichik ko‘rinishlar.</p>
          </div>

          <div className="shotGrid">
            {SHOTS.map((s, idx) => (
              <article key={idx} className="shotCard">
                <div className="shotCard__imgWrap">
                  <img src={s.img} alt={s.t} />
                </div>
                <div className="shotCard__body">
                  <div className="shotCard__t">{s.t}</div>
                  <div className="shotCard__d">{s.d}</div>
                </div>
                <div className="shotCard__line" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
