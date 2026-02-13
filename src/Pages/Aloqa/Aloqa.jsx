import React, { useState } from "react";
import "../../Styles/Aloqa.scss";

const TO_EMAIL = "minzormir8@gmail.com"; // ✅ qabul qiluvchi email

export default function Aloqa() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Miniatyura",
    region: "",
    message: "",
  });

  // ✅ Telefon mask: +998 90 123 45 67
  const formatUzPhone = (raw) => {
    let digits = String(raw || "").replace(/\D/g, "");
    if (digits.startsWith("998")) digits = digits.slice(3);
    digits = digits.slice(0, 9);

    const p1 = digits.slice(0, 2);
    const p2 = digits.slice(2, 5);
    const p3 = digits.slice(5, 7);
    const p4 = digits.slice(7, 9);

    let out = "+998";
    if (p1) out += ` ${p1}`;
    if (p2) out += ` ${p2}`;
    if (p3) out += ` ${p3}`;
    if (p4) out += ` ${p4}`;
    return out;
  };

  const isValidUzPhone = (formatted) => {
    const digits = String(formatted || "").replace(/\D/g, "");
    return digits.length === 12 && digits.startsWith("998");
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setForm((p) => ({ ...p, phone: formatUzPhone(value) }));
      return;
    }

    setForm((p) => ({ ...p, [name]: value }));
  };

  // ✅ Gmail compose URL (ma’lumotlar shu yerda “yuboriladigan” bo‘ladi)
  const buildGmailComposeUrl = (data) => {
    const subject = `[Sayt] ${data.service}${data.region ? " • " + data.region : ""}`;

    const body = [
      `Ism: ${data.name}`,
      `Telefon: ${data.phone}`,
      `Yo‘nalish: ${data.service}`,
      `Hudud: ${data.region || "-"}`,
      "",
      "Izoh:",
      data.message || "-",
    ].join("\n");

    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: TO_EMAIL,
      su: subject,
      body,
    });

    return `https://mail.google.com/mail/?${params.toString()}`;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      alert("Ism va telefon raqamni kiriting 🙂");
      return;
    }

    if (!isValidUzPhone(form.phone)) {
      alert("Telefon raqami to‘liq emas. Masalan: +998 90 123 45 67");
      return;
    }

    // ✅ Gmail’da tayyor xat ochiladi (TO_EMAIL ga)
    const gmailUrl = buildGmailComposeUrl(form);
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    // optional: form tozalanadi
    setForm({ name: "", phone: "", service: "Miniatyura", region: "", message: "" });
  };

  return (
    <section className="contact" id="contact" aria-label="Aloqa">
      <div className="container contact__inner">
        {/* HEAD */}
        <header className="contact__head">
          <p className="contact__kicker">Aloqa • Manzil • So‘rov</p>
          <h2 className="contact__title">Bog‘lanish</h2>
          <p className="contact__desc">
            Buyurtma uchun qisqa ma’lumot qoldiring. Joyingizga mos eskiz va narxni tezda aytib beramiz.
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
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="+998 90 123 45 67"
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
                    value={form.region}
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

                <a
                  className="cBtn cBtn--ghost"
                  href="https://t.me/UstaMirjon_0718"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram orqali
                </a>

                <a className="cBtn cBtn--ghost" href="tel:+998906140718">
                  Qo‘ng‘iroq
                </a>
              </div>
            </form>
          </div>

          {/* RIGHT: Map + Info */}
          <aside className="cInfo">
            <div className="cInfo__card">
              <div className="cInfo__top">
                <div className="cInfo__t">Manzil</div>
              </div>

              <div className="cInfo__lines">
                <div className="cLine">
                  <div className="cLine__k">Ustaxona</div>
                  <div className="cLine__v">
                    Buxoro v. G'ijdujon tumani, Degrezon maxalla, sharq ko'chasi, 94-uy
                  </div>
                </div>
                <div className="cLine">
                  <div className="cLine__k">Ish vaqti</div>
                  <div className="cLine__v">Du-Sha: 09:00–19:00</div>
                </div>
                <div className="cLine">
                  <div className="cLine__k">Telefon</div>
                  <div className="cLine__v">+998 90 614 07 18</div>
                </div>
                <div className="cLine">
                  <div className="cLine__k">Email</div>
                  <div className="cLine__v">{TO_EMAIL}</div>
                </div>
              </div>

              <div className="cInfo__line" />
            </div>

            <div className="cMap">
              <iframe
                title="Google Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5523.100971643039!2d64.696469!3d40.106349!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDA2JzIyLjkiTiA2NMKwNDEnNDcuMyJF!5e1!3m2!1sru!2s!4v1771007697450!5m2!1sru!2s"
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
