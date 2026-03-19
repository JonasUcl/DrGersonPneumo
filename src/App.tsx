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
  const [menuOpen, setMenuOpen] = useState(true);

  const renderContent = () => {
    switch (active) {
      case 1:
        return (
          <div>
            {/* HERO */}
            <section className="hero">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
                <h1>Pneumologista em São Paulo</h1>
                <p className="highlight">Cuidar da respiração é cuidar da vida.</p>
                <p className="text">
                  Diagnóstico preciso e tratamento moderno das doenças respiratórias.
                </p>

                <div className="cta-group">
                  <a href="https://wa.me/5511937748269?text=Olá,%20gostaria%20de%20agendar%20consulta" className="cta">
                    Agendar consulta
                  </a>
                </div>
              </motion.div>

              <motion.div className="hero-image" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <img src={pneumo} alt="Dr. Gerson" />
              </motion.div>
            </section>

            {/* DIFERENCIAIS */}
            <section className="section">
              <h2>Diferenciais do atendimento</h2>
              <div className="grid">
                {["Atendimento individualizado", "Baseado em evidência", "Diagnóstico preciso", "Foco em qualidade de vida"].map((item, i) => (
                  <motion.div className="card" key={item} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    {item}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA FINAL */}
            <section className="cta-banner">
              <h2>Agende sua consulta</h2>
              <a href="https://wa.me/5511937748269" className="cta large">Falar no WhatsApp</a>
            </section>
          </div>
        );

      case 2:
        return (
          <div className="content-wrapper">
            <h1>Sobre o Médico</h1>
            <p className="text">
              Pneumologista com formação pelo HC-FMUSP, com atuação clínica focada em diagnóstico preciso e cuidado individualizado.
            </p>
          </div>
        );

      case 3:
        return (
          <div className="content-wrapper">
            <h1>Consulta Pneumológica</h1>
            <p className="text">
              Avaliação completa da saúde respiratória com investigação detalhada e definição de tratamento individualizado.
            </p>
          </div>
        );

      case 4:
        return (
          <div className="content-wrapper">
            <h1>Quando procurar um pneumologista</h1>
            <ul className="list">
              <li>Tosse persistente</li>
              <li>Falta de ar</li>
              <li>Chiado no peito</li>
              <li>Infecções respiratórias frequentes</li>
            </ul>
          </div>
        );

      case 5:
        return (
          <div className="content-wrapper">
            <h1>Doenças Respiratórias</h1>
            <div className="grid">
              {["Asma", "DPOC", "Bronquite", "Pneumonia", "Apneia do sono", "Fibrose pulmonar"].map((d) => (
                <div className="card" key={d}>{d}</div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="content-wrapper">
            <h1>Avaliações</h1>
            <p className="text">Em breve integração com Google e Doctoralia.</p>
          </div>
        );

      case 7:
        return (
          <div className="content-wrapper">
            <h1>Blog</h1>
            <p className="text">Conteúdos educativos sobre saúde respiratória em breve.</p>
          </div>
        );

      case 8:
        return (
          <div className="content-wrapper">
            <h1>Contato</h1>
            <p>📍 Rua Frei Caneca, 1380 - São Paulo</p>
            <p>📞 (11) 3289-3195</p>
            <p>📱 WhatsApp: (11) 93774-8269</p>

            <iframe
              src="https://www.google.com/maps?q=Rua+Frei+Caneca,+1380+São+Paulo&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "12px" }}
            />
          </div>
        );

      default:
        return (
          <div className="content-wrapper">
            <h1>{menuItems.find(m => m.id === active)?.title}</h1>
            <p className="text">Conteúdo em desenvolvimento.</p>
          </div>
        );
    }
  };

  return (
    <div className="container">
      {/* HEADER FIXO */}
      <header className="header">
        <h3>Dr. Gerson Almeida</h3>
        <a href="https://wa.me/5511937748269" className="cta small">Agendar</a>
      </header>

      {/* SIDEBAR */}
      <aside className={menuOpen ? "sidebar" : "sidebar collapsed"}>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        {menuOpen && menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`menu-item ${active === item.id ? "active" : ""}`}
          >
            {item.title}
          </button>
        ))}
      </aside>

      {/* MAIN */}
      <main className="main">
        <AnimatePresence mode="wait">
          <div key={active}>{renderContent()}</div>
        </AnimatePresence>
      </main>

      {/* WHATSAPP FIXO */}
      <a href="https://wa.me/5511937748269" className="whatsapp">WhatsApp</a>
    </div>
  );
}


