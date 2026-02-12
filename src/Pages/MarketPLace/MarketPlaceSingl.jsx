import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import "../../Styles/MarketPlaceSingl.scss";

import p2 from "../../assets/images/ishi-1.jpg";
import p3 from  "../../assets/images/ishi-2.jpg";
import p4 from  "../../assets/images/ishi-3.jpg";

const MARKET_META = {
  wb: { title: "WILDBERRIES", accent: "#a24cff", platform: "https://www.wildberries.uz/" },
  ozon: { title: "OZON", accent: "#2b7cff", platform: "https://uz.ozon.com/" },
  yandex: { title: "YANDEX MARKET", accent: "#ff3b30", platform: "https://market.yandex.uz/" },
  uzum: { title: "UZUM MARKET", accent: "#7c3aed", platform: "https://uzum.uz/uz" },
};

const PRODUCTS_BY_MARKET = {
  ozon: [
    { id: "o2", title: "Devorga Naqshlar", img: p2, url: "https://uz.ozon.com/product/taburet-1-sht-3522427626/?oos_search=false" },
    { id: "o3", title: "Yasama Uylar", img: p3, url: "https://uz.ozon.com/product/mangal-3522464747/?oos_search=false" },
    { id: "o4", title: "Haykallar", img: p4, url: "https://uz.ozon.com/product/kuhonnyy-nozh-3522490666/?oos_search=false" },
  ],
  yandex: [
    { id: "y2", title: "Devorga Naqshlar", img: p2, url: "https://market.yandex.uz/card/sovremennyy-pristavnoy-stolik-v-stile-minimalizm-funktsionalnoye-i-stilnoye-resheniye-dlya-interyera-gostinoy-spalni/5129887823?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12" },
    { id: "y3", title: "Yasama Uylar", img: p3, url: "https://market.yandex.uz/card/mangal-metallicheskiy-5030-sm-praktichnoye-i-nadezhnoye-resheniye-dlya-prigotovleniya-shashlyka-myasa-ryby-i-ovoshchey-na-uglyakh/5130680248?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12" },
    { id: "y4", title: "Haykallar", img: p4, url: "https://market.yandex.uz/card/nabor-kukhonnykh-nozhey-iz-nerzhaveyushchey-stali-universalnoye-resheniye-dlya-domashney/5130721272?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12" },
  ],
  uzum: [
    { id: "u2", title: "Devorga Naqshlar", img: p2, url: "https://uzum.uz/uz/product/zamonaviy-minimalist-yon-stolcha-2393189" },
    { id: "u3", title: "Yasama Uylar", img: p3, url: "https://uzum.uz/uz/product/5030-sm-olchamdagi-metall-mangal-2393272" },
    { id: "u4", title: "Haykallar", img: p4, url: "https://uzum.uz/uz/product/zanglamaydigan-polatdan-tayyorlangan-2393410" },
  ],
  wb: [
    { id: "w2", title: "Devorga Naqshlar", img: p2, url: "https://www.wildberries.ru/catalog/817972141/detail.aspx?targetUrl=GP" },
    { id: "w3", title: "Yasama Uylar", img: p3, url: "https://www.wildberries.ru/catalog/818034306/detail.aspx?targetUrl=GP" },
    { id: "w4", title: "Haykallar", img: p4, url: "https://www.wildberries.ru/catalog/818068044/detail.aspx?targetUrl=GP" },
  ],
};

export default function MarketPlaceSingl() {
  const { key } = useParams(); // ✅ App.jsx: /MarketPlace/:key bo‘lsa shunday bo‘ladi

  const meta = MARKET_META[key] || MARKET_META.wb;

  const items = useMemo(() => {
    return PRODUCTS_BY_MARKET[key] || PRODUCTS_BY_MARKET.wb;
  }, [key]);

  return (
    <section className="mpSingle" style={{ ["--accent"]: meta.accent }}>
      <div className="container mpSingle__container">
        <header className="mpSingle__hero">
          <div className="mpSingle__titleRow">
            <h1 className="mpSingle__title">{meta.title}</h1>
          </div>

          <p className="mpSingle__sub">
            Siz hozir: <b>{meta.title}</b> bo‘limidasiz.
          </p>

          <div className="mpSingle__nav">
            <Link className="mpSingle__pill" to="/MarketPlace">← Orqaga</Link>
            <a className="mpSingle__pill" href={meta.platform} target="_blank" rel="noreferrer">
              Platforma ↗
            </a>
          </div>
        </header>

        <div className="mpSingle__grid">
          {items.map((p) => (
            <a
              key={p.id}
              className="mpSingleCard"
              href={p.url}
              target="_blank"
              rel="noreferrer"
              title={p.title}
            >
              <div className="mpSingleCard__img">
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>

              <div className="mpSingleCard__body">
                <div className="mpSingleCard__title">{p.title}</div>
                <div className="mpSingleCard__cta">
                  Mahsulotni ko‘rish <span aria-hidden="true">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
