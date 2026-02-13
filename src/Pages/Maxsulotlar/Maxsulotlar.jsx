import React, { useMemo, useState } from "react";
import "../../Styles/Maxsulotlar.scss";

// o'zingdagi real rasmlarni import qil:
import img1 from "../../assets/images/ishi-9.jpg";
import img2 from "../../assets/images/ishi-10.jpg";
import img3 from "../../assets/images/ishi-11.jpg";

const CATS = [
  { id: "all", label: "Barchasi" },
  { id: "qala", label: "Qal’a" },
  { id: "land", label: "Landshaft" },
  { id: "qoya", label: "Qoya" },
  { id: "haykal", label: "Haykal" },
];

const PRODUCTS = [
  {
    sku: "QAL-01",
    cat: "qala",
    badge: "Premium",
    title: "Qal’a mini-kompozitsiya",
    price: 3500000,
    rating: 4.8,
    reviews: 46,
    img: img1,
  },
  {
    sku: "QAL-02",
    cat: "qala",
    badge: "Ko‘p detal",
    title: "Mini shahar + minoralar",
    price: 4200000,
    rating: 4.6,
    reviews: 31,
    img: img2,
  },
  {
    sku: "QAL-03",
    cat: "qala",
    badge: "Relief",
    title: "Qal’a darvoza rel’efi",
    price: 2900000,
    rating: 4.7,
    reviews: 18,
    img: img3,
  },
  {
    sku: "LAN-01",
    cat: "land",
    badge: "Top",
    title: "Sharshara 3 bosqich",
    price: 5500000,
    rating: 4.9,
    reviews: 54,
    img: img1,
  },
  {
    sku: "QOY-01",
    cat: "qoya",
    badge: "Outdoor",
    title: "Qoya devor panel",
    price: 6800000,
    rating: 4.8,
    reviews: 22,
    img: img2,
  },
  {
    sku: "HAY-01",
    cat: "haykal",
    badge: "San’at",
    title: "Obraz haykal (custom)",
    price: 3900000,
    rating: 4.6,
    reviews: 15,
    img: img3,
  },
];

function formatSum(n) {
  // 3 500 000 ko‘rinishida
  const s = String(n);
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function Stars({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const total = 5;

  const arr = Array.from({ length: total }, (_, i) => {
    if (i < full) return "full";
    if (i === full && half) return "half";
    return "empty";
  });

  return (
    <div className="pStars" aria-label={`Reyting ${value} / 5`}>
      {arr.map((t, i) => (
        <span key={i} className={`pStar pStar--${t}`} aria-hidden="true">
          ★
        </span>
      ))}
      <span className="pStars__val">{value.toFixed(1)}</span>
    </div>
  );
}

export default function Products() {
  const [cat, setCat] = useState("all");

  const list = useMemo(() => {
    if (cat === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.cat === cat);
  }, [cat]);

  const openProduct = (p) => {
    // keyin modal overlay qilamiz
    alert(`${p.title}\n${formatSum(p.price)} so‘m`);
  };

  return (
    <main className="prods">
      <section className="prods__top">
        <div className="container prods__topInner">
          <div>
            <h1 className="prods__title">Maxsulotlar</h1>
            <p className="prods__sub">
              Tavarlarda narx, reyting va detal ko‘rsatiladi. Har biri buyurtma
              asosida.
            </p>
          </div>

          <div
            className="prods__filters"
            role="tablist"
            aria-label="Kategoriya"
          >
            {CATS.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`chip ${cat === c.id ? "is-active" : ""}`}
                onClick={() => setCat(c.id)}
                role="tab"
                aria-selected={cat === c.id}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="prods__gridSec" aria-label="Tovarlar">
        <div className="container prods__grid">
          {list.map((p) => (
            <article key={p.sku} className="pCard">
              <button
                type="button"
                className="pCard__media"
                onClick={() => openProduct(p)}
                aria-label={`${p.title} rasmini ko‘rish`}
              >
                {p.img ? (
                  <img id="max__img" src={p.img} alt={p.title} />
                ) : (
                  <div className="pPh">RASM</div>
                )}
              </button>
              <div className="pCard__head">
              </div>

              <div className="pCard__body">
                <h3 className="pName">{p.title}</h3>

                <div className="pMeta">
                  <div className="pPrice">
                    <span>{formatSum(p.price)}</span>
                    <small>so‘m</small>
                  </div>
                </div>
              </div>

              <div className="pCard__line" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
