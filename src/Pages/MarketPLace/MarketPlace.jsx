import React from "react";
import "../../Styles/MarketPlace.scss";

import wb from "../../assets/logos/wildberries.png";
import ozon from "../../assets/logos/ozon.png";
import yandex from "../../assets/logos/yandex.png";
import uzum from "../../assets/logos/uzum.png";

const LINKS = [
  {
    name: "Wildberries",
    meta: "Rasmiy sahifa • Tez yetkazish",
    href: "#",
    logo: wb,
  },
  {
    name: "Ozon",
    meta: "To‘lov himoyasi • Qulay buyurtma",
    href: "#",
    logo: ozon,
  },
  {
    name: "Yandex Market",
    meta: "Ishonchli logistika • Tracking",
    href: "#",
    logo: yandex,
  },
  {
    name: "Uzum Market",
    meta: "Mahalliy servis • Tezkor",
    href: "#",
    logo: uzum,
  },
];

export default function MarketPlaceSeal() {
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
                  href={l.href}
                  role="listitem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="mpSeal__logoBox" aria-hidden="true">
                    <img className="mpSeal__logo" src={l.logo} alt="" />
                  </div>

                  <div className="mpSeal__text">
                    <span className="mpSeal__name">{l.name}</span>
                    <span className="mpSeal__meta">{l.meta}</span>
                  </div>

                  <span className="mpSeal__go">→</span>
                </a>
              ))}
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
