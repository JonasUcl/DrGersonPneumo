import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
import pneumo from "./assets/pneumo.jpg";

const menuItems = [
  { id: 1, title: "Home" },
  { id: 2, title: "Sobre" },
  { id: 3, title: "Consulta" },
  { id: 4, title: "Quando procurar" },
  { id: 5, title: "Doenças" },
  { id: 6, title: "Avaliações" },
  { id: 7, title: "Blog" },
  { id: 8, title: "Contato" },
];

export default function App() {
  const [active, setActive] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const renderContent = () => {
    switch (active) {
      case 1:
        return (
          <section className="hero">
            <div>
              <h1>Pneumologista em São Paulo</h1>
              <p className="highlight">Cuidar da respiração é cuidar da vida.</p>
              <p className="text">Diagnóstico preciso e tratamento moderno.</p>
              <a href="https://wa.me/5511937748269" className="cta">Agendar consulta</a>
            </div>
            <div className="hero-image">
              <img src={pneumo} alt="Dr. Gerson" />
            </div>
          </section>
        );

      case 2:
        return <div className="content-wrapper"><h1>Sobre</h1></div>;
      case 3:
        return <div className="content-wrapper"><h1>Consulta</h1></div>;
      case 4:
        return <div className="content-wrapper"><h1>Quando procurar</h1></div>;
      case 5:
        return <div className="content-wrapper"><h1>Doenças</h1></div>;
      case 6:
        return <div className="content-wrapper"><h1>Avaliações</h1></div>;
      case 7:
        return <div className="content-wrapper"><h1>Blog</h1></div>;
      case 8:
        return <div className="content-wrapper"><h1>Contato</h1></div>;

      default:
        return null;
    }
  };

  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <h3>Dr. Gerson</h3>

        <nav className="nav-desktop">
          {menuItems.map(item => (
            <button key={item.id} onClick={() => setActive(item.id)}>
              {item.title}
            </button>
          ))}
        </nav>

        <a href="https://wa.me/5511937748269" className="cta small">Agendar</a>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  setMenuOpen(false);
                }}
              >
                {item.title}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="main">{renderContent()}</main>

      <a href="https://wa.me/5511937748269" className="whatsapp">WhatsApp</a>
    </div>
  );
}

