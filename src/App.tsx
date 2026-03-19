import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
import pneumo from "./assets/pneumo.jpg";

export default function App() {
  const [active, setActive] = useState("home");

  const renderContent = () => {
    switch (active) {
      case "home":
        return (
          <>
            {/* HERO */}
            <section className="hero">
              <div className="hero-text">
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  Pneumologista em São Paulo
                </motion.h1>

                <p className="highlight">Cuidar da respiração é cuidar da vida.</p>

                <p className="text">
                  Avaliação completa, diagnóstico preciso e tratamento moderno das doenças respiratórias.
                </p>

                <a href="https://wa.me/5511937748269" className="cta">
                  Agendar consulta
                </a>
              </div>

              <motion.div className="hero-image" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <img src={pneumo} alt="Dr. Gerson" />
              </motion.div>
            </section>

            {/* DIFERENCIAIS */}
            <section className="section">
              <h2>Diferenciais</h2>
              <div className="grid">
                {[
                  "Atendimento individualizado",
                  "Diagnóstico preciso",
                  "Baseado em evidência",
                  "Foco em qualidade de vida",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="cta-banner">
              <h2>Agende sua consulta</h2>
              <a href="https://wa.me/5511937748269" className="cta large">
                Falar no WhatsApp
              </a>
            </section>
          </>
        );

      case "sobre":
        return (
          <div className="content-wrapper">
            <h1>Sobre o Médico</h1>
            <p className="text">
              Pneumologista com formação pelo HC-FMUSP, atuando com foco em diagnóstico preciso e cuidado individualizado.
            </p>
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
              {["Asma", "DPOC", "Bronquite", "Pneumonia"].map((d) => (
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
      {/* HEADER PREMIUM */}
      <header className="header">
        <div className="logo">Dr. Gerson</div>

        <nav>
          <button onClick={() => setActive("home")}>Home</button>
          <button onClick={() => setActive("sobre")}>Sobre</button>
          <button onClick={() => setActive("consulta")}>Consulta</button>
          <button onClick={() => setActive("quando")}>Quando procurar</button>
          <button onClick={() => setActive("doencas")}>Doenças</button>
          <button onClick={() => setActive("contato")}>Contato</button>
        </nav>

        <a href="https://wa.me/5511937748269" className="cta small">Agendar</a>
      </header>

      {/* CONTENT */}
      <main className="main">
        <AnimatePresence mode="wait">
          <div key={active}>{renderContent()}</div>
        </AnimatePresence>
      </main>

      {/* WHATSAPP */}
      <a href="https://wa.me/5511937748269" className="whatsapp">WhatsApp</a>
    </div>
  );
}

