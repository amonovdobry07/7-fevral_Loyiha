import React from "react";
import "../../Styles/MarketPlace.scss";
import { useNavigate } from "react-router-dom";

import wb from "../../assets/logos/wildberries.png";
import ozon from "../../assets/logos/ozon.png";
import yandex from "../../assets/logos/yandex.png";
import uzum from "../../assets/logos/uzum.png";

const LINKS = [
  {
    key: "wb",
    name: "Wildberries",
    meta: "Rasmiy sahifa • Tez yetkazish",
    href: "https://www.wildberries.uz/catalog/168511523/detail.aspx?targetUrl=EX",
    logo: wb,
  },
  {
    key: "ozon",
    name: "Ozon",
    meta: "To‘lov himoyasi • Qulay buyurtma",
    href: "https://uz.ozon.com/category/knigi-16500/",
    logo: ozon,
  },
  {
    key: "yandex",
    name: "Yandex Market",
    meta: "Ishonchli logistika • Tracking",
    href: "https://market.yandex.uz/",
    logo: yandex,
  },
  {
    key: "uzum",
    name: "Uzum Market",
    meta: "Mahalliy servis • Tezkor",
    href: "https://uzum.uz/uz",
    logo: uzum,
  },
];

export default function MarketPlace() {
  const navigate = useNavigate();

  const goTo = (key) => {
    // 🔥 ichki sahifaga o‘tadi
    navigate(`/MarketPlace/${key}`);
  };

  return (
    <section className="mpSeal" id="marketplace" aria-label="MarketPlace">
      <div className="container mpSeal__inner">
        <header className="mpSeal__head">
          <p className="mpSeal__kicker">Hamkor MarketPlace’lar</p>
          <h2 className="mpSeal__title">MarketPlace</h2>

          <div className="mpSeal__panel">
            <div className="mpSeal__stamp">
              <div className="mpSeal__stampTop">MUHR</div>
              <div className="mpSeal__stampMid">Rasmiy sahifalar</div>
              <div className="mpSeal__stampBot">
                To‘lov himoyasi • Tracking • Yetkazib berish
              </div>
            </div>

            <p className="mpSeal__desc">
              Sizga qulay bo‘lgan platforma orqali buyurtma bering. Narxlar va
              mavjudlik platforma qoidalari bo‘yicha ko‘rsatiladi. Buyurtmani
              kuzatish va himoyalangan to‘lov imkoniyati mavjud.
            </p>

            <div className="mpSeal__links" role="list">
              {LINKS.map((l, idx) => (
                <a
                  key={idx}
                  className="mpSeal__link"
                  href="#"
                  rel="noreferrer"
                  role="listitem"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(l.key);
                  }}
                >
                  <div className="mpSeal__logoBox" aria-hidden="true">
                    <img className="mpSeal__logo" src={l.logo} alt="" />
                  </div>

                  <div className="mpSeal__text">
                    <span className="mpSeal__name">{l.name}</span>
                    <span className="mpSeal__meta">{l.meta}</span>
                  </div>

                  <span className="mpSeal__go" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
