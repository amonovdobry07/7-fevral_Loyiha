import React, { useState } from "react";
import "../../Styles/Aloqa.scss";

export default function Aloqa() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Miniatyura",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Keyin backend/telegram botga ulaymiz.
    // Hozircha oddiy tekshiruv:
    if (!form.name.trim() || !form.phone.trim()) {
      alert("Ism va telefon raqamni kiriting 🙂");
      return;
    }

    alert("So‘rovingiz qabul qilindi. Tez orada bog‘lanamiz!");
    setForm({ name: "", phone: "", service: "Miniatyura", message: "" });
  };

  return (
    <section className="contact" id="contact" aria-label="Aloqa">
      <div className="container contact__inner">
        {/* HEAD */}
        <header className="contact__head">
          <p className="contact__kicker">Aloqa • Manzil • So‘rov</p>
          <h2 className="contact__title">Bog‘lanish</h2>
          <p className="contact__desc">
            Buyurtma uchun qisqa ma’lumot qoldiring. Joyingizga mos eskiz va
            narxni tezda aytib beramiz.
          </p>
        </header>

        <div className="contact__grid">
          {/* LEFT: Form */}
          <div className="cForm">
            <div className="cForm__top">
              <div className="cForm__label">So‘rov yuborish</div>
              <div className="cForm__seal">24 soat ichida javob</div>
            </div>

            <form onSubmit={onSubmit} className="form" autoComplete="off">
              <div className="formRow">
                <label className="field">
                  <span className="field__k">Ism</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                    placeholder="Ismingiz"
                  />
                </label>

                <label className="field">
                  <span className="field__k">Telefon</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    type="tel"
                    placeholder="+998 __ ___ __ __"
                  />
                </label>
              </div>

              <div className="formRow">
                <label className="field">
                  <span className="field__k">Yo‘nalish</span>
                  <select name="service" value={form.service} onChange={onChange}>
                    <option value="Miniatyura">Miniatyura / Qal’a</option>
                    <option value="Landshaft">Landshaft / Sharshara</option>
                    <option value="Qoya">Sun’iy qoya</option>
                    <option value="Haykal">Haykal / Obraz</option>
                    <option value="Boshqa">Boshqa</option>
                  </select>
                </label>

                <label className="field">
                  <span className="field__k">Hudud</span>
                  <input
                    name="region"
                    value={form.region || ""}
                    onChange={onChange}
                    type="text"
                    placeholder="Masalan: Toshkent / Samarqand"
                  />
                </label>
              </div>

              <label className="field field--full">
                <span className="field__k">Izoh</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Joy o‘lchami, rasm/video borligi, taxminiy uslub..."
                  rows={5}
                />
              </label>

              <div className="formActions">
                <button className="cBtn cBtn--gold" type="submit">
                  So‘rov yuborish
                </button>

                <a className="cBtn cBtn--ghost" href="https://t.me/" target="_blank" rel="noreferrer">
                  Telegram orqali
                </a>

                <a className="cBtn cBtn--ghost" href="tel:+998000000000">
                  Qo‘ng‘iroq
                </a>
              </div>

              <div className="formNote">
                * So‘rov qoldirish uchun ism va telefon yetarli. Qolganini suhbatda aniqlaymiz.
              </div>
            </form>
          </div>

          {/* RIGHT: Map + Info */}
          <aside className="cInfo">
            <div className="cInfo__card">
              <div className="cInfo__top">
                <div className="cInfo__t">Manzil</div>
                <div className="cInfo__mark">KATALOG</div>
              </div>

              <div className="cInfo__lines">
                <div className="cLine">
                  <div className="cLine__k">Ustaxona</div>
                  <div className="cLine__v">Shahar / tuman nomi (o‘zgartirasan)</div>
                </div>
                <div className="cLine">
                  <div className="cLine__k">Ish vaqti</div>
                  <div className="cLine__v">Du-Sha: 09:00–19:00</div>
                </div>
                <div className="cLine">
                  <div className="cLine__k">Telefon</div>
                  <div className="cLine__v">+998 (__) ___ __ __</div>
                </div>
              </div>

              <div className="cInfo__line" />
            </div>

            <div className="cMap">
              {/* O'zingning lokatsiya embed linkini qo'yasan */}
              <iframe
                title="Google Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Tashkent&output=embed"
              />
              <div className="cMap__cap">Xaritada ko‘rish</div>
            </div>
          </aside>
        </div>

        {/* EXTRA: quick points */}
        <div className="contact__extras">
          <div className="extraCard">
            <div className="extraCard__k">Tez savol</div>
            <div className="extraCard__v">Rasm/video yuboring, 10 daqiqada yo‘nalish aytamiz.</div>
            <div className="extraCard__line" />
          </div>
          <div className="extraCard">
            <div className="extraCard__k">Yetkazish / o‘rnatish</div>
            <div className="extraCard__v">Joyga kelib o‘rnatib berish imkoniyati bor.</div>
            <div className="extraCard__line" />
          </div>
          <div className="extraCard">
            <div className="extraCard__k">Eskiz</div>
            <div className="extraCard__v">Kelishuvdan keyin eskiz va kompozitsiya tasdiqlanadi.</div>
            <div className="extraCard__line" />
          </div>
        </div>
      </div>
    </section>
  );
}
