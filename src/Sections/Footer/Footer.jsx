import React from "react";
import "../../Styles/Footer.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft2" aria-label="Footer">
      <div className="container ft2__wrap">
        {/* Bottom strip */}
        <div className="ft2__bottom">
          <div className="ft2__social" aria-label="Ijtimoiy tarmoqlar">
            {/* Telegram */}
            <a
              className="ft2__pill ft2__pill--tg"
              href="https://t.me/UstaMirjon_0718"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              title="Telegram"
            >
             <FaTelegramPlane />
            </a>

            {/* Instagram */}
            <a
              className="ft2__pill ft2__pill--ig"
              href="https://www.instagram.com/ustamirjon_01"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
             <FaInstagram />
            </a>

            {/* YouTube */}
            <a
              className="ft2__pill ft2__pill--yt"
              href="https://www.youtube.com/@mirzonhudojkulovxudoyqulov3177"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              title="YouTube"
            >
              <FaYoutube />
            </a>

            {/* Facebook */}
            <a
              className="ft2__pill ft2__pill--fb"
              href="https://facebook.com/USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
             <FaFacebook />
            </a>
          </div>

          <div className="ft2__fine">
            <span>Designed by <a   href="https://t.me/xusni_axi" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "black"}}> KHALIMOV </a></span>
            <br />
            <span>Biznesingizni Biz Bilan Barpo Eting </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
