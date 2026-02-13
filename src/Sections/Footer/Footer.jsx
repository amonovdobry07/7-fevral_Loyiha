import React from "react";
import "../../Styles/Footer.scss";

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
              href="https://t.me/USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              title="Telegram"
            >
              <span className="ft2__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="ft2__svg">
                  <path d="M21.9 4.6c.2-.8-.6-1.5-1.4-1.2L2.9 10.4c-.9.4-.9 1.7.1 2l4.7 1.5 1.8 5.7c.3.9 1.5 1 2 .2l2.6-3.7 5 3.7c.7.5 1.7.1 1.9-.8l3-14.4zM9.2 13.5l9.4-7.1-7.8 8.2-.3 3.1-1.5-4.6z" />
                </svg>
              </span>
              Telegram
            </a>

            {/* Instagram */}
            <a
              className="ft2__pill ft2__pill--ig"
              href="https://instagram.com/USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <span className="ft2__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="ft2__svg">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.3A5.7 5.7 0 1 1 6.3 14 5.7 5.7 0 0 1 12 8.3zm0 2A3.7 3.7 0 1 0 15.7 14 3.7 3.7 0 0 0 12 10.3zM18 6.4a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 18 6.4z" />
                </svg>
              </span>
              Instagram
            </a>

            {/* YouTube */}
            <a
              className="ft2__pill ft2__pill--yt"
              href="https://youtube.com/@USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              title="YouTube"
            >
              <span className="ft2__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="ft2__svg">
                  <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10.2 15.3V8.7L16 12l-5.8 3.3z" />
                </svg>
              </span>
              YouTube
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
              <span className="ft2__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="ft2__svg">
                  <path d="M13.5 22v-8h2.7l.5-3h-3.2V9.1c0-.8.3-1.4 1.5-1.4h1.8V5.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h3v8h3.5z" />
                </svg>
              </span>
              Facebook
            </a>
          </div>

          <div className="ft2__fine">
            <span>Designed by Khalimov</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
