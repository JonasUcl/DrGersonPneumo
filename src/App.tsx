import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
import pneumo from "./assets/pneumo.jpg";

export default function App() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (key: string) => {
    setActive(key);
    setMobileOpen(false);
  };

  const renderContent = () => {
    switch (active) {
      case "home":
        return (
          <>
            <section className="hero">
              <div className="hero-text">
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  Pneumologista em São Paulo
                </motion.h1>
                <p className="highlight">Cuidar da respiração é cuidar da vida.</p>
                <p className="text">
                  Avaliação completa, diagnóstico preciso e tratamento moderno das doenças respiratórias.
                </p>
                <a href="https://wa.me/5511937748269" className="cta">Agendar consulta</a>
              </div>

              <motion.div className="hero-image" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <img src={pneumo} alt="Dr. Gerson" />
              </motion.div>
            </section>

            <section className="section">
              <h2>Diferenciais</h2>
              <div className="grid">
                {["Atendimento individualizado","Diagnóstico preciso","Baseado em evidência","Foco em qualidade de vida"].map((item, i) => (
                  <motion.div key={item} className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    {item}
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="cta-banner">
              <h2>Agende sua consulta</h2>
              <a href="https://wa.me/5511937748269" className="cta large">Falar no WhatsApp</a>
            </section>
          </>
        );

      case "sobre":
        return (
          <div className="content-wrapper">
            <h1>Sobre o Médico</h1>
            <p className="text">Pneumologista com formação pelo HC-FMUSP, com atuação focada em diagnóstico preciso e cuidado individualizado.</p>
          </div>
        );

      case "consulta":
        return (
          <div className="content-wrapper">
            <h1>Consulta Pneumológica</h1>
            <p className="text">Avaliação detalhada da saúde respiratória.</p>
          </div>
        );

      case "quando":
        return (
          <div className="content-wrapper">
            <h1>Quando procurar</h1>
            <ul className="list">
              <li>Tosse persistente</li>
              <li>Falta de ar</li>
              <li>Chiado no peito</li>
            </ul>
          </div>
        );

      case "doencas":
        return (
          <div className="content-wrapper">
            <h1>Doenças</h1>
            <div className="grid">
              {["Asma","DPOC","Bronquite","Pneumonia"].map((d) => (
                <div className="card" key={d}>{d}</div>
              ))}
            </div>
          </div>
        );

      case "contato":
        return (
          <div className="content-wrapper">
            <h1>Contato</h1>
            <p>📍 Rua Frei Caneca, 1380</p>
            <p>📱 (11) 93774-8269</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <div className="logo">Dr. Gerson</div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("sobre")}>Sobre</button>
          <button onClick={() => go("consulta")}>Consulta</button>
          <button onClick={() => go("quando")}>Quando procurar</button>
          <button onClick={() => go("doencas")}>Doenças</button>
          <button onClick={() => go("contato")}>Contato</button>
        </nav>

        <a href="https://wa.me/5511937748269" className="cta small">Agendar</a>

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <button onClick={() => go("home")}>Home</button>
            <button onClick={() => go("sobre")}>Sobre</button>
            <button onClick={() => go("consulta")}>Consulta</button>
            <button onClick={() => go("quando")}>Quando procurar</button>
            <button onClick={() => go("doencas")}>Doenças</button>
            <button onClick={() => go("contato")}>Contato</button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="main">
        <AnimatePresence mode="wait">
          <div key={active}>{renderContent()}</div>
        </AnimatePresence>
      </main>

      <a href="https://wa.me/5511937748269" className="whatsapp">WhatsApp</a>
    </div>
  );
}



