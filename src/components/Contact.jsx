import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../css/contact.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS hatası:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-title-wrap">
        <span className="contact-title-bg">İLETİŞİM</span>
        <span className="contact-title-fg">İletişim</span>
      </div>

      <div className="contact-links">
        <a className="contact-link-item" href="mailto:ulasaylar@gmail.com">
          <MailOutlineIcon style={{ fontSize: "2.6rem" }} />
          <span>E-POSTA</span>
        </a>
        <a
          className="contact-link-item"
          href="https://www.linkedin.com/in/ulasaylar/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon style={{ fontSize: "2.6rem" }} />
          <span>LİNKEDİN</span>
        </a>
        <a
          className="contact-link-item"
          href="https://github.com/ulasaylar"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon style={{ fontSize: "2.6rem" }} />
          <span>GİTHUB</span>
        </a>
      </div>

      <div className="contact-divider" />

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-field">
          <label htmlFor="cf-name">ADINIZ</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            placeholder="Adınız Soyadınız"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-field">
          <label htmlFor="cf-email">E-POSTA</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            placeholder="ornek@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-field">
          <label htmlFor="cf-message">MESAJ</label>
          <textarea
            id="cf-message"
            name="message"
            placeholder="Merhaba Ulaş..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="contact-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "GÖNDERİLİYOR..." : "GÖNDER →"}
        </button>
        {status === "sent" && <p className="contact-toast contact-toast--ok">✓ Mesajınız başarıyla gönderildi!</p>}
        {status === "error" && <p className="contact-toast contact-toast--err">✗ Bir hata oluştu, tekrar deneyin.</p>}
      </form>
    </section>
  );
}

export default Contact;
